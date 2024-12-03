import React, { useContext } from 'react'
import NoteContext from "../context/notes/NoteContext"
import NoteItem from './NoteItem'

const Notes = () => {
    const context = useContext(NoteContext)
    const { notes } = context
    return (
        <div className='row'>
            {notes.map((note) => {
                return (<NoteItem key={note._id} title={note.title} description={note.description} />)
            })}
        </div>
    )
}

export default Notes
