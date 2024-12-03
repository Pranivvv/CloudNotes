import React, { useContext } from 'react'
import NoteContext from "../context/notes/NoteContext"

const NoteItem = (props) => {
    const {title, description, _id, tag} = props.note

    const context = useContext(NoteContext)
    const { deleteNote } = context

    return (
        <div className="card m-2" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <i className="fa-regular fa-trash-can mx-2" onClick={()=>deleteNote(_id)}/>
                    <i className="fa-regular fa-pen-to-square mx-2"/>
                </div>
        </div>
    )
}

export default NoteItem
