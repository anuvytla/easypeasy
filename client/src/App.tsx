import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild/InputFeild';
import { Todo } from './components/model';

const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = () => {
    
  }
  
  return (
    <div className="App">
      <span className="heading">easypeasy</span>
      <InputFeild todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
