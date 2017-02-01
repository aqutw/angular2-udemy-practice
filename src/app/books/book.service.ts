import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IBook } from './book';

@Injectable()
export class BookService {
  constructor(private http: Http) {

  }
  getBooks(): Observable<IBook[]> {
    return this.http.get('api/books/books.json')
      .map((res: Response) => {
        return <IBook[]> res.josn();
      });
  }
}