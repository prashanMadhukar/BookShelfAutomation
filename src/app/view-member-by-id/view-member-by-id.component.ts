import { Component, OnInit } from '@angular/core';
import { MemberService } from '../Services/member.service';
import { Member } from '../Entity/member';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-member-by-id',
  templateUrl: './view-member-by-id.component.html',
  styleUrls: ['./view-member-by-id.component.css']
})
export class ViewMemberByIdComponent implements OnInit {

  private isSearch : boolean = false;
  member: Member;
  date: string;
  constructor(private svc: MemberService , private datepipe: DatePipe) { }

  ngOnInit() {
  }

  showMemberById(id:number){
    this.isSearch = true;
    this.svc.getMemberById(id).subscribe(
      response => {
        this.member = response;
        this.date = this.datepipe.transform(this.member.memberDob,'yyyy-mm-dd');
      }
    );
  }
  
}
