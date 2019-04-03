import { Book } from './../Book';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  @Input() book: Book;
  @Output() saveBook: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

 saveButton(book) {
  this.saveBook.emit(book);
 }
}
