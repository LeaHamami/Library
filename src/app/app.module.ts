import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookHomeComponent } from './book-home/book-home.component';
import { AddBookComponent } from './add-book/add-book.component';
import { LibraryComponent } from './library/library.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: BookHomeComponent},
{path: 'Home', component: BookHomeComponent},
{path: 'Library', component: LibraryComponent},
{path: 'AddBook', component: AddBookComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    BookEditComponent,
    BookDetailsComponent,
    BookHomeComponent,
    AddBookComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
