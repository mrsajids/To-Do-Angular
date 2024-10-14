import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LayoutComponent } from './layout.component';
import { TodoformComponent } from './component/todoform/todoform.component';
import { TodolistComponent } from './component/todolist/todolist.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{
      path: 'add', component: TodoformComponent,
    }, {
      path: 'list', component: TodolistComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
