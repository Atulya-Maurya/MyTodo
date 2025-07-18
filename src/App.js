import React, { useEffect, useState} from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import AddingTodo from './Component/AddingTodo';
import TodoList from './Component/TodoList';
// import Todos from '../../../../👁React👁/todos-list/src/MyComponent/Todos';

function App() {
  // In the browser, it is present in form of string
  let todoInBrowser;
  if(localStorage.getItem("todos")===null){
    console.log("localStorage is null")
    todoInBrowser = [];
  }
  else{
    //Converting it back to Array from String
    todoInBrowser = JSON.parse(localStorage.getItem("todos"));
    console.log("localStorage is not === null",JSON.parse(localStorage.getItem("todos")))
  }

  //todos is array containg object 
  const [todos,setTodos] = useState(todoInBrowser);

  //Writting  function for adding Todo title and describtion to array 'todos' in form of object
  const addTodo = (title,desc) => {
    console.log("i am adding ", title,desc)
    let ssno;
    console.log(todos[0])
    console.log("todos lengtth", todos.length)
    if(todos.length === 0){
      ssno = 0;
    }
    else{
      ssno = todos[todos.length - 1].sno + 1;
      // console.log("sno",sno)
    }
    const todoObj = {
      sno : ssno,
      title : title, 
      desc : desc
    };
    setTodos([...todos,todoObj])
  }
  const onDelete = (todoObj) => {
    setTodos(todos.filter((e)=>{
      return e!==todoObj;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  return (
    <div>
      <Navbar/>
      <div className="container">
        <AddingTodo addTodo = {addTodo} />
        <TodoList todos = {todos} onDelete = {onDelete} />
      </div>
    </div>
  );
}

export default App;
