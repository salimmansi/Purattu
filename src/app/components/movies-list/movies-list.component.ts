import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
declare var Flickity: any;

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent implements OnInit{
  activeButton: string ='';
activeTab:string='Released';

  constructor() {}
  images = [
    {path: 'https://source.unsplash.com/800x600/?nature'},
    {path: 'https://source.unsplash.com/800x600/?car'},
    {path: 'https://source.unsplash.com/800x600/?moto'},
    {path: 'https://source.unsplash.com/800x600/?fantasy'},
  ]
   _movieService= inject(MovieService)
  //#region Variables
  fetchedMovies: Movie [] = [];
  fetchedMoviesIsfetched: boolean = false;
  fileName: string= "";
  //#endregion Variables
   


  ngOnInit(): void {
    this.getAllMovies();
    this.initializeFlickity();

  }
  clicked(activeButton: string): void {
    if (this.activeTab === activeButton) {
      // If the same button is clicked again, deactivate it
      this.activeTab = '';
    } else {
      this.activeTab = activeButton;
    }
  
    console.log(this.activeTab);
  }
  initializeFlickity(): void {
    const elem = document.querySelector('.carousel');
    const flkty = new Flickity(elem, {
      cellalign: 'right',
      pageDots: false,
      groupCells: '20%',
      selectedAttraction: 0.03,
      friction: 0.15
    });
  }
  getAllMovies() {
    this._movieService.getAllMovies().subscribe(
      (res) => {
        console.log("res",res)
      this.fetchedMovies = res.movies;
      // this.fetchedMovies = [];
      this.fetchedMoviesIsfetched = true;
      // this.fetchedMoviesIsfetched = false;
    },
    (error)=>{
      console.log("error", error)
    });
  }
  uploadfile(file: any){

  }
  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("file", file, file.name);

        // const upload$ = this.http.post("/api/thumbnail-upload", formData);
        const upload$ = this._movieService.uploadfile(formData).subscribe(
          (res)=>{
          console.log("res",res)
        },(error)=>{
          console.log("error",error)
        })
    }
}
}
