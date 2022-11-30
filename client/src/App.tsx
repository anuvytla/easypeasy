import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild/InputFeild';
import { Todo } from './components/model';
import TodoList from './components/TodoList/TodoList';
import SingleTodo from './components/SingleTodo/SingleTodo';

const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  
  const [todos, setTodos] = useState<Todo[]>([]);

  const [completedTodos, setcompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();

      if(todo){
        setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
        setTodo("");
      }
  }
  
  return (
    <div className="App">
      <span className="heading">easypeasy</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} 
      completedTodos = {completedTodos} 
      setcompletedTodos={setcompletedTodos}
      />
    </div>
  );
}

export default App;
