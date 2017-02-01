import { Component, OnInit, OnChanges } from '@angular/core';
import { IBook } from '../book';

@Component({
  selector: 'bs-book-list',
  templateUrl: 'book-list.component.html'
})

export class BookListComponent implements OnInit, OnChanges {
  books: IBook[] = [{
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
  isShowImage: boolean = true;
  animals: string[] = ['zebra', 'moose'];
  showMessage: string = 'test...(before notify)';
  favoMessage: string = '';

  toggleImage(): void {
    this.isShowImage = !this.isShowImage;
  }

  changeMethod(): void {
    this.animals = ['dog', 'cat'];
    console.log('changeMethod fired!');
  }

  ngOnInit() {
    console.log('Init', this.isShowImage);
  }

  ngOnChanges() {
    console.log('new change detected');
  }

  onNotifyClicked(msg: string): void {
    this.showMessage = msg;
  }

  onFavoClicked(msg: string): void {
    console.log('book-list onFavoClicked');
    this.favoMessage = msg;
  }
}