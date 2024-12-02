import React, { useContext } from 'react'
import NoteContext from "../context/notes/NoteContext"

const About = () => {
    const a = useContext(NoteContext)
    return (
        <div>
            about {}
        </div>
    )
}

export default About
