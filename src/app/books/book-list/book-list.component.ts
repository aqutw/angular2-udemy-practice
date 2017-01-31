import { Component } from '@angular/core';

@Component({
  selector: 'bs-book-list',
  templateUrl: 'book-list.component.html'
})

export class BookListComponent {
  isShowImage: boolean = true;

  toggleImage(): void {
    this.isShowImage = !this.isShowImage;
  }
}