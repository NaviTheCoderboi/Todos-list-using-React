import React from 'react'
import './Todos.css'

export default function Todoitem(props){
    let ca
    if(props.mode==="dark"){
        ca = {width: "18rem",backgroundColor: "#363636",border: "1px solid white"}
    }
    else{
        ca = {width: "18rem",backgroundColor: "white"}
    }
    return(  
        <div className="card container my-3" style={ca}>
            <div className="card-body ">
                <h5 className={`card-title ${props.mode==="dark"?"text-white":""} text-center`}>{props.todo.title}</h5>
                <p className={`card-text ${props.mode==="dark"?"text-white":""}`}>{props.todo.desc}</p>
            </div>
            <button className="btn btn-sm btn-danger m-2 b" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
        </div>
    )
}