import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { AuthService } from './auth.service';


@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  declarations: [
    AuthenticationComponent, 
    LoginComponent, 
    LogoutComponent
  ],
  providers: [
    AuthService
  ]
})

export class AuthenticationModule { }
