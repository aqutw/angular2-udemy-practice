import { Component, OnInit, OnChanges } from '@angular/core';
import { IBook } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'bs-book-list',
  templateUrl: 'book-list.component.html'
})

export class BookListComponent implements OnInit, OnChanges {
  books: IBook[];
  isShowImage: boolean = true;
  animals: string[] = ['zebra', 'moose'];
  showMessage: string = 'test...(before notify)';
  favoMessage: string = '';

  constructor(private bookService: BookService) {
    this.books = bookService.getBooks();
  }

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