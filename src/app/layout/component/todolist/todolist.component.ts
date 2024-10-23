import { Component } from '@angular/core';
import { TodoService } from '../../../shared/service/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  constructor(private todoObj: TodoService) {
    this.todo = JSON.parse(sessionStorage.getItem('todos') || '[]');
  }
  todo: any = []
  ngOnInit() {
    // this.todo = JSON.parse(sessionStorage.getItem('todos') || '[]');
    this.getTodos();
    console.log(this.todo);
  }
  getTodos() {
    this.todoObj.fetchTodos().subscribe(result => this.todo = result);
  }

}
