import React from 'react'
import Notes from './Notes'
import AddNotes from './AddNotes'

const Home = (props) => {

    return (
        <div className='container' >
            <div className="container my-3">
                <h2>Add New Notes</h2>
                <AddNotes myAlert={props.myAlert}/>
            </div>

            <div className="container">
                <h2>Your Notes</h2>
                <Notes myAlert={props.myAlert}/>
            </div>
        </div>
    )
}

export default Home
