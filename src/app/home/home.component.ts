import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isClicked: boolean = false;
  user:string;
  constructor(private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('email')!=null){
      this.router.navigate(['dashboard']);
    }
    else if(sessionStorage.getItem('username')!=null){
      this.router.navigate(['admin-homepage'])
    }
    
  }

  changeClickMode(){
    this.isClicked = !this.isClicked;
  }
}
