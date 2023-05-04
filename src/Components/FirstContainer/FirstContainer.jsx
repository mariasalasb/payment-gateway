import React from 'react'
import './FirstContainer.css'

function FirstContainer({id,item,style}) {
    return (
        <div className="main_container" id={id} style={style}>
            <div className="grid">
                <h2 className="title"><i className={item.icon}></i>{item.title}</h2>
                <p className="description">{item.description}</p>
            </div>
        </div>
    )
}

export default FirstContainer
