import { Component, OnInit } from '@angular/core';
import { Member } from '../Entity/member';
import { MemberService } from '../Services/member.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-member-profile',
  templateUrl: './view-member-profile.component.html',
  styleUrls: ['./view-member-profile.component.css']
})
export class ViewMemberProfileComponent implements OnInit {

  member = new Member();
  dob: string;
  constructor(private http: MemberService, private datePipe:DatePipe ) { }

  ngOnInit() {
    var userEmail =  sessionStorage.getItem('email');
    this.http.getMemberByEmail(userEmail).subscribe(
      response => {
        this.member = response;
        this.dob=this.datePipe.transform(this.member.memberDob,"yyyy/MM/dd");
        console.log(this.member.memberDob);
      }
    );
    
    console.log(this.member);
  }
}
