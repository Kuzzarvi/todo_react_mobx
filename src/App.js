import Todos from './todos/Todos'
import AddTodo from './addTodo/AddTodo'

export default function App() {

  return (
    <div className="app">
      <AddTodo />
      <h1>Список дел MobX:</h1>
      <Todos />
    </div>
  )
};
