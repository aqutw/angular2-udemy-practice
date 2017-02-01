import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BookService } from './books/book.service';

import { FavoComponent } from './favo/favo.component';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { HighlightDirective } from './shared/highlight.directive';
import { BookListComponent } from './books/book-list/book-list.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, BookListComponent, HighlightDirective, TruncatePipe,
    FavoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule //<----
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
