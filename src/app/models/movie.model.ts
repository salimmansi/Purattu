export class Movie {
  public id: number = 0;
  public title: string = '';
  public story: string = '';
  public director: string = '';
  public mainCast: string [] = [];
  public language: string = '';
  public awards: string [] = [];
  public status: string = '';
  // public category: string = ''; // to ask
}
export class CreateMovieDTO extends Movie {
  public imageFile!: File
  ;
  // public category: string = ''; // to ask
}
