import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logoutAdmin(){
    if(confirm("You will be logged out!!")){
    console.log('enetering...')
    sessionStorage.removeItem('username');
    }
    this.router.navigate(['home']);
  }

}
