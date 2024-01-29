import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrl: './section-two.component.scss'
})
export class SectionTwoComponent implements OnInit{
  @ViewChild('carousel') carousel: ElementRef<HTMLDivElement> | undefined;

  itemHeight: number;
  currentItem: number;

  constructor() {
    this.itemHeight = 0;
    this.currentItem = 0;
  }

  ngOnInit(): void {
    // Calculate item height, including margin-bottom
    if (this.carousel) {
      this.itemHeight = this.carousel.nativeElement.offsetHeight + 15;
    }

    setInterval(() => this.moveNext(), 3000);
  }

  moveNext() {
    if (this.carousel) {
      const items = this.carousel.nativeElement.querySelectorAll('.carousel-item');
      const clone = items[this.currentItem % items.length].cloneNode(true) as HTMLDivElement;
      this.carousel.nativeElement.appendChild(clone);
      this.currentItem++;
      this.carousel.nativeElement.style.transform = `translateY(-${this.itemHeight * this.currentItem}px)`;

      // Remove the first element after animation completes
      setTimeout(() => {
        if (this.carousel && this.carousel.nativeElement.firstElementChild) {
          this.carousel.nativeElement.removeChild(this.carousel.nativeElement.firstElementChild);
        }
      }, 500);
    }
  }
}
