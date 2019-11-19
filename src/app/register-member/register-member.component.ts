import { Component, OnInit } from '@angular/core';
import { Member } from '../Entity/member';
import { MemberService } from '../Services/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent implements OnInit {

 
  member = new Member();
  option: string;
  message: string = "";

  constructor(private httpclient:MemberService, private router:Router) {
    
   }

  ngOnInit() {}

  sendData(){
    return this.httpclient.addMembers(this.member).subscribe(
      response =>{ 
      console.log(this.member);
       this.member.memberId=null;
       this.member.memberPassword=null;
       this.member.memberDob=null;
       this.member.memberAddress=null;
       this.member.memberEmail=null;
       this.member.suspended=null;
       alert("You have been registered successfully!!! \n Please LogIn to enter  ");
       this.router.navigate(['member']);
       
      }
      ); 
  }

}
