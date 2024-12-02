import React, { useContext } from 'react'
import NoteContext from "../context/notes/NoteContext"
import NoteItem from './NoteItem'

const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, setNotes } = context
    return (
        <div className='row'>
            {notes.map((note) => {
                return (<NoteItem title={note.title} description={note.description} />)
            })}
        </div>
    )
}

export default Notes
