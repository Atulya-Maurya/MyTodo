import React from 'react'
// import './TodoList.css'

const TodoItem = ({todoObj,onDelete}) => {
  
  return (
    <div className='alone-task'>
      <h4>{todoObj.title}</h4>
      <p>{todoObj.desc}</p>
      {/* <button>Done</button> */}
      <button onClick={()=>{onDelete(todoObj)}} >Delete</button>
    </div>
  )
}

export default TodoItem
