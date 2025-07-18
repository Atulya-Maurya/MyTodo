import React,{useState} from 'react'
import  './AddingTodo.css'

const AddingTodo = ({addTodo}) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(!title||!desc){
            alert("Title or Description can not be blank")
        }
        else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
        // enable vibration support
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

        if (navigator.vibrate) {
	        // vibration API supported
            navigator.vibrate(100);
        }
    }




    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = new Date();
  return (
    <div className=' sec-Container'>
        <div className="addTodo">
            <div className="greeting">
                <h3>Hello, Atulya</h3>
                <div>Have a nice day</div>
                {months[d.getMonth()]},{days[d.getDay()]}
            </div>
            {/* <h2>Plan Your Day here</h2> */}
            <div className="add">
                <form onSubmit={handleSubmit} id="myForm" >
                    <div className="title">
                         {/* <span className='title'> Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;</span> */}
                        <input size="10" className='title' placeholder="Title" type="text"  value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div className="desc">
                        {/* <span className="desc"> Description</span> */}
                        {/* <input className="desc" placeholder="Start Typing.." type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}/> */}
                        <textarea id="myForm" className="desc"  cols="25" rows ="3" value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Start Typing.."  ></textarea>
                    </div>
                    <button className='btn' type="submit">✔</button>
                </form>
                {/* Blur */}
                <div className="blur t-blur1" style={{ background: "#95a2ff8c" }}></div>
                <div className="blur t-blur2" style={{ background: "#50ffba9e" }}></div>
            </div>
        </div>

      
      
    </div>
  )
}

export default AddingTodo
