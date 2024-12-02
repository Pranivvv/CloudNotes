import React, { useContext } from 'react'
import NoteContext from "../context/notes/NoteContext"

const About = () => {
    const a = useContext(NoteContext)
    return (
        <div className='container' style={{marginTop:'70px'}}>
            about {}
        </div>
    )
}

export default About
