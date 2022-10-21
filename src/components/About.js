import React from 'react'

export default function About(props) {
    let l = {
        backgroundColor: props.mode==="dark"?"#363636":"white",
        minHeight: "85vh",
    }
    return(
        <div className={`container p-2 ${props.mode==="dark"?"text-white":""}`} style={l}>
            <h3 className="text-center">About Us</h3>
            <p>todoslist.com is a web service that provides you to create and delete todos on your browser. You can access pur website from any browser and enjoy its features.</p>
        </div>
    )
}