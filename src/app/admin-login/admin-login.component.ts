import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email = 'z@a.com'
  password = 'xyzabc'
  invalidLogin = false
  message: boolean=false
  

  constructor(private router: Router,
      private adminService: AdminService) { }

  ngOnInit() {
    if(sessionStorage.getItem('username')!=null){
      this.router.navigate(['admin-homepage']);
    }
  }

  checkLog() {
    this.adminService.authenticateAdmin(this.email,this.password).subscribe(response => {
        console.log(response);
        if(response){
        var user = response;
        sessionStorage.setItem('username',user.adminEmail);
        this.router.navigate(['/admin-homepage']);
        console.log("routed");
        }
        else
        {
        alert("Invalid Credentials!!!!! ");
        this.email = ''
        this.password = ''
        }
        
    });

}

}
