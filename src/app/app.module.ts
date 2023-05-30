import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';

import { MatDialogModule } from '@angular/material/dialog';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { ModalAddUserComponent } from './modal-add-user/modal-add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { CloseModalComponent } from './close-modal/close-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { AddUserComponent } from './add-user/add-user.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    UserListComponent,
    UserCardsComponent,
    ModalAddUserComponent,
    CloseModalComponent,
    EditModalComponent,
    AddUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
