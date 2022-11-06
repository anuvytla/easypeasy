import React from "react";
import "./styles.css";

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.FormEvent) => void
}

const InputFeild = ({todo, setTodo, handleAdd}: Props) => {
    return (
        <form className="input" onSubmit={handleAdd}>
            <input type="input" 
                value={todo}
                onChange={
                    (e) => {setTodo(e.target.value)}
                }
                placeholder="Enter a Task" className="input_box" />
            <button className="input_submit" type="submit">
                Go
            </button>
        </form>
    )
}

export default InputFeild;