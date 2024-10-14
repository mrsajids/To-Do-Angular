import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  // todo = JSON.parse(sessionStorage.getItem('todo'));
  todo: any = []
  ngOnInit() {
    this.todo = JSON.parse(sessionStorage.getItem('todos') || '[]');
    console.log(this.todo);
  }
  constructor() {
    this.todo = JSON.parse(sessionStorage.getItem('todos') || '[]');
  }

}
