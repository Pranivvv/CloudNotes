import React, { useContext, useState } from 'react'
import NoteContext from "../context/notes/NoteContext"

const AddNotes = () => {
    const context = useContext(NoteContext)
    const { addNote } = context
    
    const [note, setNote] = useState({title:'', description:'', tag:''})
    const onChange = (e)=>{
        setNote({...note, [e.target.name]:e.target.value})
    }

    const handalClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
        // Reset form fields after adding note
        setNote({ title: '', description: '', tag: '' });
    }

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Note Title</label>
                    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={3} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={8} required/>
                </div>
                <button disabled={note.title.length<3 || note.description.length<8} type="submit" className="btn btn-primary" onClick={handalClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNotes
