import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HighlightDirective } from './shared/highlight.directive';
import { BookListComponent } from './books/book-list/book-list.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, BookListComponent, HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
