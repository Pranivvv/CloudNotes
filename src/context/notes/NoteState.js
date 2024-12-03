import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "674e3650172a3efawsf967139fa430",
            "user": "67466f3470893afba99f92c6",
            "title": "my note1",
            "description": "testing description",
            "tag": "personal",
            "date": "2024-12-02T22:36:00.948Z",
            "__v": 0
        },
        {
            "_id": "674e3662172a3awfse967139fa432",
            "user": "67466f3470893afba99f92c6",
            "title": "my note2",
            "description": "testing description",
            "tag": "personal",
            "date": "2024-12-02T22:36:18.396Z",
            "__v": 0
        },
        {
            "_id": "674e3667172a3cae967139fa434",
            "user": "67466f3470893afba99f92c6",
            "title": "my note3",
            "description": "testing description",
            "tag": "personal",
            "date": "2024-12-02T22:36:23.489Z",
            "__v": 0
        },
        {
            "_id": "674e3650172a3case967139wsa430",
            "user": "67466f3470893afba99f92c6",
            "title": "my note1",
            "description": "testing description",
            "tag": "personal",
            "date": "2024-12-02T22:36:00.948Z",
            "__v": 0
        },
        {
            "_id": "674e3662172a3cace967139as432",
            "user": "67466f3470893afba99f92c6",
            "title": "my note2",
            "description": "testing description",
            "tag": "personal",
            "date": "2024-12-02T22:36:18.396Z",
            "__v": 0
        },
        {
            "_id": "674e3667172a3e96cac7h139a434",
            "user": "67466f3470893afba99f92c6",
            "title": "my note3",
            "description": "testing description",
            "tag": "personal",
            "date": "2024-12-02T22:36:23.489Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    //function to add notes 
    const addNote = (title, description, tag)=>{
        //todo: connect to api
        const note = {
            "_id": "674e3667172a3e967h13w9a434"+title,
            "user": "67466f3470893afba99f92c6",
            "title":  title,
            "description": description,
            "tag": tag,
            "date": "2024-12-02T22:36:23.489Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    //Function to Delete notes
    const deleteNote = (id)=>{
        //todo: add api call
        const updatedNotes = notes.filter((note) => note._id !== id);
        setNotes(updatedNotes); // Update the state
    }

    //Function to edit notes

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
