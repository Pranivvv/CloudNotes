import React, { useContext } from 'react'
import NoteContext from "../context/notes/NoteContext"


const UpdateNote = (props) => {
    const { title = '', description = '', tag = '' } = props.unote
    const onChange = (e) => {
        props.setuNote({ ...props.unote, [e.target.name]: e.target.value })
    }

    const context = useContext(NoteContext)
    const { updateNote } = context

    const handleUpdate = () => {
        // Call the context `updateNote` function to update the note
        updateNote(props.unote);
        props.myAlert('Updated note', 'Success')
    };

    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Note</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {/* <UpdateNote note={unote} setNote={setuNote} /> */}
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">New Title</label>
                            <input type="text" className="form-control" id="u-title" name='title' aria-describedby="emailHelp" onChange={onChange} value={title} minLength={3} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">New Tag</label>
                            <input type="text" className="form-control" id="u-tag" name="tag" onChange={onChange} value={tag} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">New Description</label>
                            <input type="text" className="form-control" id="u-description" name="description" onChange={onChange} value={description} minLength={8} required />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button disabled={title.length < 3 || description.length < 8} type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onClick={handleUpdate}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateNote
