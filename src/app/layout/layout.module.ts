import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from "./component/header/header.component";
import { FooterComponent } from "./component/footer/footer.component";
import { TodolistComponent } from './component/todolist/todolist.component';
import { TodoformComponent } from './component/todoform/todoform.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    TodolistComponent,
    TodoformComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutRoutingModule,
    FormsModule
  ]
})
export class LayoutModule { }
