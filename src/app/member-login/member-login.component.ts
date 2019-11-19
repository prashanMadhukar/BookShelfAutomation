import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';
import { MemberService } from '../Services/member.service';

@Component({
  selector: 'app-member-login',
  templateUrl: './member-login.component.html',
  styleUrls: ['./member-login.component.css']
})
export class MemberLoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false


  constructor(private router: Router,
    private loginservice: AuthenticationService,private memberService: MemberService) { }

  ngOnInit() {
    if(sessionStorage.getItem('email')!=null){
      this.router.navigate(['dashboard']);
    }
  }

  checkLogin() {
    this.memberService.authenticateMember(this.username,this.password).subscribe(response => {
        console.log(response);

        if(response){
        var user = response;
        sessionStorage.setItem('email',user.memberEmail);
        this.router.navigate(['dashboard']);
        }
        else
        {
          alert("Invalid Credentials!!!!! ");
          this.username = ''
        this.password = ''
        }
      });
  }
}



