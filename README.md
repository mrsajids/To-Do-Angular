# To-Do-Angular

#ng new appname
#cd folder

# create app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { CoreModule } from './core/core.module';
// import { SharedModule } from './shared/shared.module';
import { AppComponent } from '../app/app.component';

@NgModule({
  declarations: [
    AppComponent  // Main app component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Main routing module for app-level routes
    // CoreModule,        // Core module for singleton services
    // SharedModule       // Shared module for reusable components
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstraps the main app component
})
export class AppModule {}


# remove standalone form app.component

# ng generate module core
# ng generate module shared
# ng generate module layout --routing

# ng g c component/header
# add component in layout-routing.module.ts
# add layout-routing.module in layout.module.ts


# add layout-module in app.routing.module.ts
const routes: Routes = [
  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
....]

# add layout-module in app.module.ts
imports: [
  LayoutModule
]


# BOOSTRAP INSTALLATION
https://medium.com/@chandantechie/how-to-install-angular-latest-version-and-configure-bootstrap-701a1ad9e4c2

# Routing 
https://v17.angular.io/guide/router


# Reative Forms
https://angular.dev/guide/forms


# Reactive form 
https://angular.dev/guide/forms/reactive-forms#import-the-reactiveformsmodule


# form validation
https://www.scaler.com/topics/angular/reactive-form-validations-in-angular/

# api call
Create a service
import clientmodule and add inn contructor
create api call function
add httpClientModule in app.moudle 
call function()