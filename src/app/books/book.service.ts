import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IBook } from './book';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do'; // debug
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import 'rxjs/Rx';

@Injectable()
export class BookService {
  constructor(private http: Http) {
  }

  private handleError(error: Response) {
    console.error('handleError..........', error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }

  getBooks(): Observable<IBook[]> {
    console.log('BookService getBooks called');
    return this.http.get('api/books/books.json')
      .map((res: Response) => {
        console.log('BookService res', res);
        return <IBook[]> res.json();
      })
      .do(data => console.log('server data', data))
      .catch(this.handleError);
  }

}