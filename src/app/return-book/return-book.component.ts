import { Component, OnInit } from '@angular/core';
import { MemberService } from '../Services/member.service';
import { Member } from '../Entity/member';
import { Subscription, interval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {

  
  books: any[];
  member :number;
  

  constructor(private svc: MemberService,private router:Router ) { 
    
    var userEmail =  sessionStorage.getItem('email');
    console.log(userEmail);
    this.svc.getMemberByEmail(userEmail).subscribe(
      
      res => {
        console.log("fsdfyhjty")
        console.log(res.memberId);

        this.member=res.memberId
        this.svc.showReturnableBook(this.member).subscribe(
          response => this.books=response
        );
          }
      
    );
    console.log(this.member);

    
    console.log(this.books);
  }

  ngOnInit(){}
// private updateSubscription :Subscription;

//   ngOnInit() {
//     this.updateSubscription = interval(1000).subscribe(
//       (val) => { this.updateStats()
//     });
//   }

// ngOnDestroy() {
//     this.updateSubscription.unsubscribe();
// }

// private updateStats() {
//     // console.log('I am doing something every second');
// }
  getReturnableBooks(){
    this.svc.showReturnableBook(this.member).subscribe(
      response => {
        this.books=response
        this.router.navigate["return-book"];
      }
    );
  }
    returnBook(bkId:number){
      this.svc.returnBook(this.member,bkId).subscribe(res=> {
        console.log("sucessfully returned");
        alert("sucessfully returned");
        this.getReturnableBooks();
      });
    }

}
