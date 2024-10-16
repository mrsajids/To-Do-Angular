import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoginRoutingModule,
    LayoutModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
