import React from 'react'
import './footer.css'

export default function footer(props){
    return(
        <div className={`foot bg-${props.mode} ${props.mode=="dark"?"text-white":""} py-2`}>
            <p className="fs-4 text-center">
                Copyright ©️ todoslist.com
            </p>
        </div>
    )
}