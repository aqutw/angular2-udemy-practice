import { Component } from '@angular/core';
import { IBook } from '../book';

@Component({
  selector: 'bs-book-list',
  templateUrl: 'book-list.component.html'
})

export class BookListComponent {
  books: IBook[] = [{
    bookAuthor: "string",
    bookTitle: "string",
    bookPrice: 33,
    bookDesc: "string",
    publishedOn: new Date('02/11/1921'),
    isStock: "string",
    bookReviews: 11,
    hardcover: false,
    bookImageUrl: "string",
  }];
  isShowImage: boolean = true;

  toggleImage(): void {
    this.isShowImage = !this.isShowImage;
  }
}