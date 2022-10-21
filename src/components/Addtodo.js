import React,{useState} from 'react';
import './addtodo.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Addtodo(props){
    let m = props.mode
    const [title,settitle] = useState("");
    const [desc,setdesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            toast.error('Please enter the title and description of the Todo!', {position: "top-center",autoClose: 1000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: m,});
        }
        else{
            props.addTodo(title,desc)
        }
        settitle("")
        setdesc("")
    }
    let mt = {
        backgroundColor: m==="dark"?"#363636":"white"
    }
    return(
        <div className="container py-2" style={mt}>
            <h3 className={`${m==="dark"?"text-white":""} text-center`}>Add todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className={`form-label ${m==="dark"?"text-white":""}`}>Title</label>
                    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className={`form-label ${m==="dark"?"text-white":""}`}>Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}