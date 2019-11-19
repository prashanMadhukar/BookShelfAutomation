import { Component, OnInit } from '@angular/core';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'app-view-all-books-admin',
  templateUrl: './view-all-books-admin.component.html',
  styleUrls: ['./view-all-books-admin.component.css']
})
export class ViewAllBooksAdminComponent implements OnInit {

  books: any[];
  private usr:boolean;

  constructor(private svc: BookService) { 
    this.svc.getBooks().subscribe(
      response => this.books=response
    );
    
    if(sessionStorage.getItem('email')!=null){
      this.usr=true;
    }
    else if(sessionStorage.getItem('username')!=null){
      this.usr=false;
    }
    
  }
  

  ngOnInit() {
    
  }
  

}
