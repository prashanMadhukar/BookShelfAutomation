import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../Entity/member';
import { Book } from '../Entity/book';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClient:HttpClient) { }

  authenticateMember(email: string, password:string){
    var user = new Member();
    user.memberEmail=email;
    user.memberPassword=password;
    console.log(email+"  "+password);
    return this.httpClient.post<Member>('http://192.168.105.212:8080/memberlogin',user);
  }

  getMembers(){    
    return this.httpClient.get<Member[]>('http://192.168.105.212:8080/members');
  }

  addMembers(memberObj:Member ){    
    return this.httpClient.post('http://192.168.105.212:8080/members',memberObj);
  }

  getMemberByEmail(memberEmail : string){
    return this.httpClient.get<Member>('http://192.168.105.212:8080/members/email/'+memberEmail);
  }
  
  getMemberById(memberId : number){
    return this.httpClient.get<Member>('http://192.168.105.212:8080/members/'+memberId);
  }

  removeMember(memberId : number){
    return this.httpClient.delete('http://192.168.105.212:8080/members/'+memberId);
  }
  
  showIssueableBook(memberId : number){
    return this.httpClient.get<Book[]>('http://192.168.105.212:8080/members/'+memberId+'/issue');
  }

  issueBook(memberId:number,bookId:number){
    return this.httpClient.get<number>('http://192.168.105.212:8080/members/'+memberId+'/issue/'+bookId);    
  }

  showReturnableBook(memberId : number){
    return this.httpClient.get<Book[]>('http://192.168.105.212:8080/members/'+memberId+'/return');
  }

  returnBook(memberId:number,bookId:number){
    return this.httpClient.get('http://192.168.105.212:8080/members/'+memberId+'/return/'+bookId);    
  }
}