import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IBook } from './book';

@Injectable()
export class BookService {
  getBooks(): IBook[] {
    return [{
      bookAuthor: "string",
      bookTitle: "Book 1",
      bookPrice: 33,
      bookDesc: "string",
      publishedOn: new Date('02/11/1921'),
      isStock: "string",
      bookReviews: 5,
      hardcover: false,
      bookImageUrl: "string",
      isBookFavoed: true
    },{
      bookAuthor: "string",
      bookTitle: "Book 2",
      bookPrice: 33,
      bookDesc: "string",
      publishedOn: new Date('02/11/1921'),
      isStock: "string",
      bookReviews: 11,
      hardcover: false,
      bookImageUrl: "string",
      isBookFavoed: false
    }];
  }
}