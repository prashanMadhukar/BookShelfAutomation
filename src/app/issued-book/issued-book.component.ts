// import { Component, OnInit } from '@angular/core';
// import {FormControl, Validators} from '@angular/forms';
// import { Member } from '../Entity/member';
// import { MemberService } from '../Services/member.service';
// @Component({
//   selector: 'app-issued-book',
//   templateUrl: './issued-book.component.html',
//   styleUrls: ['./issued-book.component.css']
// })
// export class IssuedBookComponent implements OnInit {


// email = new FormControl('', [Validators.required, Validators.email]);
// userObj = new Member();
//   constructor(private httpclient:MemberService) { }

//   ngOnInit() {
//   }

//   getErrorMessage() {
//     return this.email.hasError('required') ? 'You must enter a value' :
//       this.email.hasError('email') ? 'Not a valid email' : '';
//   }

//   saveNewUserDetails(){
//     if(this.userObj.memberAddress.trim() != ''){

//       //   const formData = new FormData();
//       //   formData.append('username',this.userObj.memberAddress);
//       //   formData.append('emailid',this.userObj.memberEmail);
//         this.httpclient.addMembers(this.userObj).subscribe(
//          (data) => {
//            console.log("user is saved successfully");
//          }           
//        )
//      }
//     } 

// }
