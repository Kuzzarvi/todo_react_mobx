import {useState} from 'react'
import { observer } from 'mobx-react-lite';
import todo from '../store/todo';

const Todos = () => {
  
  const [redactId, setRedactId] = useState(null);
  const [textTodo, setTextTodo] = useState('');

  const redactHandle = ({id, title}) => {
    setRedactId(id);
    setTextTodo(title);
  }
  
  const textHandle = ({target}) => {
    setTextTodo(target.value)
  }

  const saveHandler = (el) => {
    if (textTodo !== '') {
      todo.editTodo({el, title: textTodo})
      setRedactId(null);
      setTextTodo('');
    }
  }

    return (
      <div>
        {todo.todos?.map((el) => (
          <div className="todo" key={el.id}>
            {redactId && redactId === el.id ?
              <div>
                <input onChange={textHandle} value={textTodo} />
                <button onClick={()=> saveHandler(el)}>Сохранить</button>
              </div>
              :
             <div>
            <input type="checkbox" checked={el.done} onChange={() => todo.completeTodo(el)}/>
                {el.title}
            <button onClick={()=> redactHandle(el)}>Редактировать</button>    
            <button onClick={()=> todo.delTodo(el.id)}>Удалить</button>
            </div>
          }
            </div>
        ))}
      </div>
    )
}

export default observer(Todos);
