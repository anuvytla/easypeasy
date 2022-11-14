import React from "react";
import { Todo } from "../model";
import "./style.css";
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete, MdDone } from 'react-icons/md';
import TodoList from "../TodoList/TodoList";

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({todo,todos,setTodos}) => {
    const handleDone =(id:number) => {
        setTodos(todos.map((todo) => 
            todo.id===id?{...todo, isDone: !todo.isDone}: todo
            )
            );
    }
    return (
        <form  className="todos_single">
            {
                todo.isDone? (
                    <s className="todos_single--text"> {todo.todo} </s>

                ): (
                    <span className="todos_single--text"> {todo.todo} </span> 
                )
            }
            
            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon">
                    <MdDelete />
                </span>
                <span className="icon" onClick={() =>handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo;