import './App.css';
import Navbar from './components/Navbar.js'
import Todos from './components/Todos.js'
import Footer from './components/footer.js'
import Addtodo from './components/Addtodo.js'
import About from './components/About.js'
import {useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function App() {
    let initTodo;
    let mode;
    if(localStorage.getItem("todos")===null){
        initTodo = []
    }
    else{
        initTodo = JSON.parse(localStorage.getItem("todos"))
    }
    if(localStorage.getItem("mode")===null){
        localStorage.setItem("mode","light")
        mode = "light"
    }
    else{
        mode = localStorage.getItem("mode")
    }
    document.body.style.backgroundColor = mode==="dark"?"#363636":"white"
    const [m,setm] = useState(mode)
    const onDelete = (t)=>{
        settodos(todos.filter((e)=>{
            return e!==t;
        }))
        localStorage.setItem("todos",JSON.stringify(todos))
        toast.success('Todo successfully deleted!', {position: "top-center",autoClose: 1000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: m,});
    }
    const addTodo = (title,desc)=>{
        let sno;
        toast.success('Todo successfully created!', {position: "top-center",autoClose: 1000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: m,});
        if (todos.length===0){
            sno = 0
        }
        else{
            sno = todos[todos.length-1].sno+1;
        }
        let mytodo = {
            sno: sno,
            title: title,
            desc: desc
        }
        settodos([...todos,mytodo])
        localStorage.setItem("todos",JSON.stringify(todos))
    }
    const [todos,settodos] = useState(initTodo)
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
    return (
        <>
            <Router>
            <Navbar mode={m} smode={setm}/>
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme={m} />
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme={m} />
            <Routes>
                <Route exact path="/" element={<><Addtodo mode={m} addTodo={addTodo}/><Todos mode={m} todos={todos} onDelete={onDelete}/></>}/>
                <Route exact path="/about" element={<About mode={m}/>}/>
            </Routes>
            <Footer mode={m}/>
            </Router>
        </>
    );
}

export default App;