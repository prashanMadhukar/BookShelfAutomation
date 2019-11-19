import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterMemberComponent } from './register-member/register-member.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { ViewAllBookComponent } from './view-all-book/view-all-book.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { ViewMemberProfileComponent } from './view-member-profile/view-member-profile.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { IssuedBookComponent } from './issued-book/issued-book.component';
import { ViewBookByIdComponent } from './view-book-by-id/view-book-by-id.component';
import { ViewAllMemberComponent } from './view-all-member/view-all-member.component';
import { DetailedSearchComponent } from './detailed-search/detailed-search.component';
import { ViewMemberByIdComponent } from './view-member-by-id/view-member-by-id.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { RemoveMemberComponent } from './remove-member/remove-member.component';
import { ViewAdminProfileComponent } from './view-admin-profile/view-admin-profile.component';
import { SearchMemberComponent } from './search-member/search-member.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MemberNavbarComponent } from './member-navbar/member-navbar.component';
import { LoginNavComponent } from './login-nav/login-nav.component';
import { RemoveBookComponent } from './remove-book/remove-book.component';
import { BookService } from './Services/book.service';
import { MemberService } from './Services/member.service';
import { AdminService } from './Services/admin.service';
import { ViewAllBooksAdminComponent } from './view-all-books-admin/view-all-books-admin.component';
import { DatePipe } from '@angular/common';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    AdminLoginComponent,
    HomeComponent,
    IssueBookComponent,
    MemberLoginComponent,
    PageNotFoundComponent,
    RegisterMemberComponent,
    SearchBookComponent,
    ViewAllBookComponent,
    MemberProfileComponent,
    MemberDashboardComponent,
    ViewMemberProfileComponent,
    ReturnBookComponent,
    IssuedBookComponent,
    ViewBookByIdComponent,
    ViewAllMemberComponent,
    DetailedSearchComponent,
    ViewMemberByIdComponent,
    AddMemberComponent,
    RemoveMemberComponent,
    ViewAdminProfileComponent,
    SearchMemberComponent,
    AdminDashboardComponent,
    MemberNavbarComponent,
    LoginNavComponent,
    RemoveBookComponent,
    ViewAllBooksAdminComponent,
    AdminHomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    MemberLoginComponent
  ],
  providers: [BookService,MemberService,AdminService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
