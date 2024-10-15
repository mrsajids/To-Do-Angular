import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { LoginComponent } from './login.component';

// import { LoginComponent } from './login.component';
// import { HeaderComponent } from '../layout/component/header/header.component';
// import { FooterComponent } from '../layout/component/footer/footer.component';
// import { RouterModule } from '@angular/router';
// import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
