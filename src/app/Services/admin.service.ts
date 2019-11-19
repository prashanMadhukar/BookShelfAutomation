import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../Entity/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  authenticateAdmin(email: string, password:string){
    var user = new Admin();
    user.adminEmail=email;
    user.adminPassword=password;
    console.log(email+"  "+password);
    return this.httpClient.post<Admin>('http://localhost:8080/adminlogin',user);
  }
  
}
