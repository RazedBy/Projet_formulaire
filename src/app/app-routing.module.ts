import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path : 'app-component', component : AppComponent},
  {path : 'dashboard/:id', component : DashboardComponent},
  {path : 'login', component : LoginComponent},
  {path : 'userList', component : UserListComponent},
  {path : 'modal', component : ModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
