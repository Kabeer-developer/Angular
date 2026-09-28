import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly todoService = inject(TodoService);
  protected newTodoTitle = '';

  protected addTodo(): void {
    if (!this.newTodoTitle.trim()) {
      return;
    }

    this.todoService.addTodo(this.newTodoTitle);
    this.newTodoTitle = '';
  }
}
