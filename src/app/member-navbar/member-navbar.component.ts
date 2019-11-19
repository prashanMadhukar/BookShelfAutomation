import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-navbar',
  templateUrl: './member-navbar.component.html',
  styleUrls: ['./member-navbar.component.css']
})
export class MemberNavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  logout(){
    if(confirm("You will be logged out!!")){
    console.log('enetering...')
    sessionStorage.removeItem('email');
    }
    this.router.navigate(['home']);
  }
}
