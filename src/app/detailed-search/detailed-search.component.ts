import { Component, OnInit } from '@angular/core';
import { Book } from '../Entity/book';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'app-detailed-search',
  templateUrl: './detailed-search.component.html',
  styleUrls: ['./detailed-search.component.css']
})
export class DetailedSearchComponent implements OnInit {

  isSearch : boolean = false;
  bookObj = new Book();
  result : any ;
  usr:boolean;
  constructor(private httpclient:BookService) { 

    if(sessionStorage.getItem('email')!=null){
      this.usr=true;
    }
    else if(sessionStorage.getItem('username')!=null){
      this.usr=false;
    }

  }

  ngOnInit() {
  }

  searchBooks(){
     this.isSearch = !this.isSearch;
    return this.httpclient.searchBooks(this.bookObj).subscribe(
      response =>{ 
        this.result = response;
        console.log(response)
        this.bookObj.bookAuthor=null;
        this.bookObj.bookPublisher=null;
        this.bookObj.bookTitle=null;
      }
    );
  }

  clearSearch(){
    this.isSearch = !this.isSearch;
 }

}
