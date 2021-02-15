import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import todo from '../store/todo';
import { observer } from 'mobx-react-lite'


const AddTodo = () => {
  const [inputText, setInputText] = useState('');
  
  const inputHandler = ({ target }) => {
    setInputText(target.value);
  }

  const addHandler = () => {
    if (inputText !== '') {
      const newTodo = {
        id: uuidv4(),
        title: inputText,
        done: false
      }
      todo.addTodo(newTodo);
      setInputText('');
    }
  }

  return (
    <div className="addTodo">
      <input onChange={inputHandler} value={inputText} />
      <button onClick={addHandler}>Добавить дело</button>
    </div>
  )
}

export default observer (AddTodo);
