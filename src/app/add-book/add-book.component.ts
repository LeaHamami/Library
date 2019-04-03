import { Book } from './../Book';
import { Component, OnInit } from '@angular/core';
import { AddBookService } from '../add-book.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  title: string;
  author: string;
  date: Date;
  constructor(private bookService: AddBookService) { }

  ngOnInit() {
  }

  saveBook() {
    const b: Book = {title : this.title, author : this.author, date : this.date, id : null};
    this.bookService.addBook(b);
    debugger;
}
}
