import React, { useContext } from 'react'
import Notes from './Notes'
import AddNotes from './AddNotes'

const Home = () => {

    return (
        <div className='container' style={{ marginTop: '70px' }}>
            <div className="container my-3">
                <h2>Add New Notes</h2>
                <AddNotes />
            </div>

            <div className="container">
                <h2>Your Notes</h2>
                <Notes />
            </div>
        </div>
    )
}

export default Home
