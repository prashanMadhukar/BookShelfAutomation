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

 
  memberObj = new Member();
  option: string;
  message: string = "";

  constructor(private httpclient:MemberService, private router:Router) {
    
   }

  ngOnInit() {}

  sendData(){
    return this.httpclient.addMembers(this.memberObj).subscribe(
      response =>{ 
      console.log(this.memberObj);
       this.memberObj.memberId=null;
       this.memberObj.memberPassword=null;
       this.memberObj.memberDob=null;
       this.memberObj.memberAddress=null;
       this.memberObj.memberEmail=null;
       this.memberObj.suspended=null;
       alert("You have been registered successfully!!! \n Please LogIn to enter  ");
       this.router.navigate(['member']);
       
      }
      ); 
  }

}
