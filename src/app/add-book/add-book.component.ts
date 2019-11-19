import { Component, OnInit } from '@angular/core';
import { Book } from '../Entity/book';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  
  bookObj = new Book();
  message : string = "";

  constructor(private httpclient:BookService) {
   }

  ngOnInit() {
  }

  sendData(){
    
    return this.httpclient.addBooks(this.bookObj).subscribe(err=>
      {console.log("successful");
      this.bookObj.bookId=null;
      this.bookObj.bookTitle=null;
      this.bookObj.bookAuthor=null;
      this.bookObj.bookPrice=null;
      this.bookObj.bookPublisher=null;
      this.bookObj.bookQuantity=null;

      this.message="Book added successfully!";
    });
    
  }

}
