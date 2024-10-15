import { Component } from '@angular/core';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.css'
})
export class TodoformComponent {
  todo = {
    title: '',
    description: ''
  }

  onSubmit() {
    console.log('form submitted');
    sessionStorage.setItem('todos', JSON.stringify(this.todo));
    this.todo = {
      title: '',
      description: ''
    }
  }
}
