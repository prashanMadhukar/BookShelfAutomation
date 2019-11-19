import { Component, OnInit } from '@angular/core';
import { Member } from '../Entity/member';
import { MemberService } from '../Services/member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  memberObj = new Member();
  option: string;
  message: string = "";

  constructor(private httpclient:MemberService) {
    
   }

  ngOnInit() {
  }

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

       this.message="Member added Successfully !";
      }
      ); 
  }

  
  // setProperty(){
  //   if(this.option=='True')
  //   this.memberObj.suspended = 1;
  //   else
  //   this.memberObj.suspended = 0;
  // }

}

