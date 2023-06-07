import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  {path : 'app-component', component : AppComponent},
  {path : 'dashboard', component : DashboardComponent, canActivate:[AuthGuard]},
  {path : 'login', component : LoginComponent},
  {path : 'userList', component : UserListComponent},
  {path : 'modal', component : ModalComponent},
  {path : 'addUser', component : AddUserComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
