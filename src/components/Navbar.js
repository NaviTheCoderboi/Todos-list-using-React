import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { HiOutlineMoon } from 'react-icons/hi'
import { FiSun } from 'react-icons/fi'

export default function Navbar(props){
    let swap;
    if(props.mode === "light"){
        swap = "dark"
    }
    else{
        swap = "light"
    }
    const toggle = ()=>{
        if(props.mode === "light"){
            props.smode("dark")
            localStorage.setItem("mode","dark")
            document.body.style.backgroundColor = "#363636"
        }
        else if(props.mode === "dark"){
            props.smode("light")
            localStorage.setItem("mode","light")
            document.body.style.backgroundColor = "white"
        }
    }
    return(
        <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
            <div className="container-fluid">
                <h1 className={`nav-brand h ${props.mode==="dark"?"text-white":""}`}>Todos List</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                        <div><p className={`${props.mode==="dark"?"text-white":""} fs-3 d-inline-block`}>{props.mode==="light"?<HiOutlineMoon onClick={toggle}/>: <FiSun onClick={toggle}/>}</p><b className={`${props.mode==="dark"?"text-white":""} d-inline-block mx-1`}>Enable {swap} mode</b></div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}