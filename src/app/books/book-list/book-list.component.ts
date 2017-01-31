import { Component } from '@angular/core';

interface IBook {
  bookAuthor: string;
  bookTitle: string;
  bookPrice: number;
  bookDesc: string;
  publishedOn: Date;
  isStock: string;
  bookReviews: number;
  hardcover?: boolean;
  bookImageUrl: string;
}

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