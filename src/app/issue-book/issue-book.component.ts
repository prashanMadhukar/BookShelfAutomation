import { Component, OnInit } from '@angular/core';
import { MemberService } from '../Services/member.service';
import { Member } from '../Entity/member';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {

  books: any[];
  member = new Member();
  

  constructor(private svc: MemberService,private router:Router ) { 
    
    var userEmail =  sessionStorage.getItem('email');
    console.log(userEmail);
    this.svc.getMemberByEmail(userEmail).subscribe(
      
      response => {
        console.log(response);
        this.member=response
          }
      
    );
    console.log(this.member);

    this.svc.showIssueableBook(this.member.memberId).subscribe(
      response => this.books=response
    );
    console.log(this.books);
  }

    ngOnInit() {
    }

    getIssuableBooks(){
    this.svc.showIssueableBook(this.member.memberId).subscribe(
      response => {
        this.books=response
        this.router.navigate["issue-book"];
      }
    );
    }
    issueBook(bkId:number){
      this.svc.issueBook(this.member.memberId,bkId).subscribe(res=>{
        console.log("sucessfully issued");
        alert("sucessfully issued");
        this.getIssuableBooks();
      });
      
    }

}
