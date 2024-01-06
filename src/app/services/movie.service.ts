import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { CreateMovieDTO, Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient, private router: Router) {}
  // baseUrl: string = "https://reservation-api-0va0.onrender.com";
  baseUrl: string = 'http://localhost:3000';

  getAllMovies(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/movies');
  }
  uploadfile(file: any): Observable<any> {
    // const headers = new HttpHeaders({
    //   'Content-Type': ,
    // });
    return this.http
      .post<any>(this.baseUrl + '/movies/uploadfiletest', file)
      .pipe(catchError(this.handleError));
  }
  insertMovie(createMovieDto: CreateMovieDTO): Observable<any>{
    const postData = new FormData();
    postData.append("title", createMovieDto.title);
    postData.append("file", createMovieDto.imageFile, createMovieDto.imageFile.name);
    return this.http.post<any>(this.baseUrl + '/movies/createMovie', postData);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }

    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
