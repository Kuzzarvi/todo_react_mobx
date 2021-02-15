import { makeAutoObservable } from 'mobx';

class Todo {
  todos = [{
    id: 1,
    title: '1111111',
    done: false,
    },
    {
    id: 2,
    title: '22222222',
    done: false,
    },
    {
    id: 3,
    title: '33333333',
    done: false,
    }];
  
  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (todo) => {
    this.todos.push(todo);
  }

  delTodo = (id) => {
    this.todos = this.todos.filter(el => el.id !== id);
  }

  completeTodo = (todo) => {
    todo.done = !todo.done;
  }

  editTodo = ({el, title}) => {
    el.title = title;
  }
}

export default new Todo();
