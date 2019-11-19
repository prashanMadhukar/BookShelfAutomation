import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Book } from '../Entity/book';
import { SubBookService } from './sub-book.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  constructor(private httpClient:HttpClient, private bookCopyService:SubBookService) { }

  getBooks(){    
    return this.httpClient.get<Book[]>('http://localhost:8080/books');
  }

  addBooks(bookObj:Book ){    
    return this.httpClient.post('http://localhost:8080/books',bookObj);
  }

  getBooksById(bookId : number){
    return this.httpClient.get<Book>('http://localhost:8080/books/'+bookId);
  }

  searchBooks(bookObj: Book){
    return this.httpClient.post('http://localhost:8080/books/search/', bookObj);
  }

  removeBook(bookId : number){
    // return this.bookCopyService.removeBookCopy(bookId);
    return this.httpClient.delete('http://localhost:8080/books/'+bookId);
  }

  
  
}