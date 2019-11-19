import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { RegisterMemberComponent } from './register-member/register-member.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewAllBookComponent } from './view-all-book/view-all-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { ViewMemberProfileComponent } from './view-member-profile/view-member-profile.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { ViewBookByIdComponent } from './view-book-by-id/view-book-by-id.component';
import { DetailedSearchComponent } from './detailed-search/detailed-search.component';
import { ViewAdminProfileComponent } from './view-admin-profile/view-admin-profile.component';
import { SearchMemberComponent } from './search-member/search-member.component';
import { ViewAllMemberComponent } from './view-all-member/view-all-member.component';
import { ViewMemberByIdComponent } from './view-member-by-id/view-member-by-id.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { RemoveMemberComponent } from './remove-member/remove-member.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthgaurdService } from './authgaurd/authgaurd.service';
import { AdminAuthgaurdService } from './authgaurd/admin-authgaurd.service';
import { RemoveBookComponent } from './remove-book/remove-book.component';
import { ViewAllBooksAdminComponent } from './view-all-books-admin/view-all-books-admin.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';




const routes: Route[] = [

  {path:'register',component:RegisterMemberComponent},

  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'admin',component:AdminLoginComponent},
  {path:'view-all-member', component:ViewAllMemberComponent,canActivate:[AdminAuthgaurdService]},
  {path:'view-member-by-id', component:ViewMemberByIdComponent,canActivate:[AdminAuthgaurdService]},
  {path:'add-member',component:AddMemberComponent,canActivate:[AdminAuthgaurdService]},
  {path:'remove-member',component:RemoveMemberComponent,canActivate:[AdminAuthgaurdService]},
  {path:'remove-book',component:RemoveBookComponent,canActivate:[AdminAuthgaurdService]},
  {path:'search-member',component:SearchMemberComponent,canActivate:[AdminAuthgaurdService]},
  
  {path:'add-book', component:AddBookComponent,canActivate:[AdminAuthgaurdService]},
  {path:'view-admin-profile',component:ViewAdminProfileComponent},
  {path:'admin-homepage',component:AdminHomepageComponent,canActivate:[AdminAuthgaurdService]},


  {path:'view-all-books', component:ViewAllBooksAdminComponent,canActivate:[AdminAuthgaurdService]},



  {path:'home',component:HomeComponent},


  {path:'member',component:MemberLoginComponent},

  {path:'dashboard',component:MemberDashboardComponent, pathMatch:'full',canActivate:[AuthgaurdService]},
  {path:'view-member-profile',component:ViewMemberProfileComponent,canActivate:[AuthgaurdService]},
  {path:'search-book',component:SearchBookComponent,canActivate:[AuthgaurdService]},
  {path:'view-all-book', component:ViewAllBookComponent,canActivate:[AuthgaurdService]},
  {path:'view-book-by-id', component:ViewBookByIdComponent,canActivate:[AuthgaurdService]},
  {path:'detailed-search', component:DetailedSearchComponent,canActivate:[AuthgaurdService]},
  {path:'issue-book',component:IssueBookComponent,canActivate:[AuthgaurdService]},
  {path:'return-book',component:ReturnBookComponent,canActivate:[AuthgaurdService]},
  
  {path:'**',component:PageNotFoundComponent},
];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
