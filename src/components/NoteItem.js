import React from 'react'

const NoteItem = (props) => {
    return (
        <div className="card m-2" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}

export default NoteItem
