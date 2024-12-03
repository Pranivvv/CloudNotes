import React, { useContext, useEffect } from 'react'
import NoteContext from "../context/notes/NoteContext"
import NoteItem from './NoteItem'

const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, fetchNotes } = context
    useEffect(()=>{
        fetchNotes()
    },[])

    return (
        <div className='row'>
            {notes.map((note) => {
                // console.log(note)
                return (<NoteItem key={note._id} note={note} />)
            })}
        </div>
    )
}

export default Notes
