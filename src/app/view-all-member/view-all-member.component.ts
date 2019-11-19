import { Component, OnInit } from '@angular/core';
import { MemberService } from '../Services/member.service';

@Component({
  selector: 'app-view-all-member',
  templateUrl: './view-all-member.component.html',
  styleUrls: ['./view-all-member.component.css']
})
export class ViewAllMemberComponent implements OnInit {

  private email: string = "";
  members: any;

  constructor(private svc: MemberService) { 
    this.svc.getMembers().subscribe(
      response => this.members=response
    );
    }

  ngOnInit() {
  }

}
