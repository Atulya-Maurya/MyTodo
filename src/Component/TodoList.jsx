import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';

const TodoList = (props) => {
  return (
    <div className='list'>
        <h1>Today Tasks</h1>
        <div className="task">
        {
          (props.todos.length) === 0 ? " No task to display" : 
          <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}  
          spaceBetween={10}
          slidesPerView={1}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          >
          {(props.todos.map((todoObj,index) => {
            return(
             
              <SwiperSlide key = {index} >
                <div className="single-task">
                  <TodoItem todoObj = {todoObj} key = {todoObj.sno} onDelete ={props.onDelete} />
                </div>
              </SwiperSlide>
              )
            })
          )}
             </Swiper>
        }
        </div>
    </div>
  )
}

export default TodoList
