import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from "../context/notes/NoteContext"
import NoteItem from './NoteItem'
import UpdateNote from './UpdateNote'

const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, fetchNotes } = context
    const ref = useRef(null)


    const [unote, setuNote] = useState({ utitle: '', udescription: '', utag: '', uid:''})

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    const togelUpdateNote = (currNote) => {
        ref.current.click()
        setuNote(currNote)
    }

    return (
        <>
            <div className="modal fade" ref={ref} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <UpdateNote unote={unote} setuNote={setuNote} />
            </div>
            <div className='row'>
                {notes.length===0 && <h5>no notes available</h5>}
                {notes.map((note) => {
                    // console.log(note)
                    return (<NoteItem key={note._id} note={note} togelUpdateNote={togelUpdateNote} />)
                })}
            </div>
        </>
    )
}

export default Notes
