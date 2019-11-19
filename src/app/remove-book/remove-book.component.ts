import { Component, OnInit } from '@angular/core';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'app-remove-book',
  templateUrl: './remove-book.component.html',
  styleUrls: ['./remove-book.component.css']
})
export class RemoveBookComponent implements OnInit {

  bookId: number;
  message: string="";
  constructor(private http : BookService) { }

  ngOnInit() {
  }

  deleteBook(){
    
    return this.http.removeBook(this.bookId).subscribe(err=>
      {console.log("successful");
      this.bookId=null;
      this.message="Book successfully deleted";
    });

  }
}
