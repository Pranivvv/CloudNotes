import React, { useContext } from 'react'
import NoteContext from "../context/notes/NoteContext"

const NoteItem = (props) => {
    const {title, description, _id, tag} = props.note
    const context = useContext(NoteContext)
    const { deleteNote } = context
    
    const handelDelete = (id)=>{
        deleteNote(id)
        props.myAlert('Deleted note', 'Success')
    }

    return (
        <div className="card m-2" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{tag}</h6>
                    <p className="card-text">{description}</p>
                    <i className="fa-regular fa-trash-can mx-2" onClick={()=>handelDelete(_id)}/>
                    <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>props.togelUpdateNote(props.note)} data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
                </div>
        </div>
    )
}

export default NoteItem
