import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = 'http://localhost:5000/api/'
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    //function to fetch notes
    const fetchNotes = async()=>{
        const url = host+'notes/fetchnotes'

        const myRequest = new Request(url, {
            method: "GET",
            // body: JSON.stringify({ username: "example" }),
            headers:{
                "Content-Type": "application/json",
                "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0NjZmMzQ3MDg5M2FmYmE5OWY5MmM2In0sImlhdCI6MTczMjY3NTQ2MH0.eDUz9eIFndHUvRCP42rnyiWIOMlufoOMK7T9tbM9ZCk"}
        });

        const response = await fetch(myRequest);
        const fetchedNotes= await response.json()
        // console.log(fetchedNotes)
        setNotes(fetchedNotes)
    }

    //function to add notes 
    const addNote = async (title, description, tag)=>{
        //todo: connect to api
        const url = host+'notes/addnotes'

        const myRequest = new Request(url, {
            method: "POST",
            body: JSON.stringify({ 
                title: title, 
                description: description, 
                tag: tag 
            }),
            headers:{
                "Content-Type": "application/json",
                "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0NjZmMzQ3MDg5M2FmYmE5OWY5MmM2In0sImlhdCI6MTczMjY3NTQ2MH0.eDUz9eIFndHUvRCP42rnyiWIOMlufoOMK7T9tbM9ZCk"
            }
        });
        
        const response = await fetch(myRequest);
        const fetchedNotes= await response.json()
        // console.log(fetchedNotes)
        setNotes(notes.concat(fetchedNotes))
    }

    //Function to Delete notes
    const deleteNote = async (id)=>{
        //todo: add api call
        const url = host+'notes/deletenote/'+id

        const myRequest = new Request(url, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
                "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0NjZmMzQ3MDg5M2FmYmE5OWY5MmM2In0sImlhdCI6MTczMjY3NTQ2MH0.eDUz9eIFndHUvRCP42rnyiWIOMlufoOMK7T9tbM9ZCk"
            }
        });
        
        const response = await fetch(myRequest);
        const fetchedNotes= await response.json()
        // console.log(fetchedNotes)
        const newNotes = notes.filter((note) => note._id !== id);
        setNotes(newNotes);
    }

    //Function to edit notes
    const updateNote = (id, title, description, tag) => {
        //todo: add api call

        const newNotes = notes.map((note) =>
            note._id === id ? { ...note, title, description, tag } : note
        )

        setNotes(newNotes)
    }

    return (
        <NoteContext.Provider value={{ notes, fetchNotes, addNote, deleteNote, updateNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
