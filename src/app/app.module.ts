import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BookService } from './books/book.service';

import { FavoComponent } from './favo/favo.component';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { HighlightDirective } from './shared/highlight.directive';
import { BookListComponent } from './books/book-list/book-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, BookListComponent, HighlightDirective, TruncatePipe,
    WelcomeComponent,
    FavoComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'books', component: BookListComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
      ]),
    BrowserModule,
    FormsModule,
    HttpModule //<----
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
