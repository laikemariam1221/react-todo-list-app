import React,{useState} from 'react'
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo.js';
uuidv4();
export const Rapper = () => {
const [todos,setTodo]=useState([]);
    const addtodo=todo=>{
      setTodo([...todos,{id: uuidv4(), task: todo, completed: false, isEditing: false}])
   console.log(todos);
    }
    const toggleComplete = (id) => {
      setTodo(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    }
    const toDelete= id=>{
      setTodo(todos.filter(todo=>todo.id !==id))
    }
    const toEdit=id=>{
       setTodo(todos.map((todo)=>
       todo.id===id?{...todo, isEditing:!todo.isEditing}:todo
       ));
    }
  return (
    <div className='TodoWrapper'>
    <h1>Get Things Done!</h1>
      <TodoForm addtodo={addtodo}/>
      {todos.map((todo,index)=>
        
        (<Todo tas={todo} key={index}  toggleComplete={toggleComplete} toDelete={toDelete} toEdit={toEdit}/>)
    )} 
    </div>
  )
}

export default Rapper;
