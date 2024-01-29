import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routes: Routes = [
  // {path: '', component: LayoutComponent},
  {path: '', component: LandingpageComponent},
  {path: 'projects', component: MoviesListComponent},
  {path: 'blog', component: BlogsComponent},
  {path: 'createMovie', component: CreateMovieComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'services', component: SectionTwoComponent},
  {path: 'detail', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
