import { Component, OnInit } from '@angular/core';
import { BookService } from '../Services/book.service';


@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  constructor(private http : BookService) { }

  ngOnInit() {
  }

  showAllBooks(){
    this.http.getBooks();
  }

  showAllBooksById(id: number){
    this.http.getBooksById(id);
  }
  
}
