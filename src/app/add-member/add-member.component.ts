import { Component, OnInit } from '@angular/core';
import { Member } from '../Entity/member';
import { MemberService } from '../Services/member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  member = new Member();
  option: string;
  message: string = "";

  constructor(private httpclient:MemberService) {
    
   }

  ngOnInit() {
  }

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

       this.message="Member added Successfully !";
      }
      ); 
  }
  
}

