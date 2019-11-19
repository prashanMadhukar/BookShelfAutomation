import { Component, OnInit } from '@angular/core';
import { MemberService } from '../Services/member.service';

@Component({
  selector: 'app-remove-member',
  templateUrl: './remove-member.component.html',
  styleUrls: ['./remove-member.component.css']
})
export class RemoveMemberComponent implements OnInit {

  memberId: number;
  message: string="";
  constructor(private http: MemberService) { }

  ngOnInit() {
  }

  deleteMember(){
    return this.http.removeMember(this.memberId).subscribe(err=>{
      console.log("deleted");
      this.memberId=null;
      this.message="memeber deleted succesfully";
    });
  }
  
}
