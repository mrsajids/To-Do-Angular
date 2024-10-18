import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { CoreModule } from './core/core.module';
// import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { AppComponent } from '../app/app.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent  // Main app component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Main routing module for app-level routes
    LayoutModule,
    LoginModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstraps the main app component
})
export class AppModule { }
