import { Injectable, signal } from '@angular/core';
import { Todo } from './todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private readonly todoItems = signal<Todo[]>([]);
  private nextId = 1;

  readonly todos = this.todoItems.asReadonly();

  addTodo(title: string): void {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      return;
    }

    this.todoItems.update((todos) => [
      ...todos,
      { id: this.nextId++, title: trimmedTitle, completed: false },
    ]);
  }

  toggleTodo(id: number): void {
    this.todoItems.update((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  deleteTodo(id: number): void {
    this.todoItems.update((todos) => todos.filter((todo) => todo.id !== id));
  }
}