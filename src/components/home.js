import React, { useContext } from 'react'
import Notes from './Notes'

const Home = () => {

    return (
        <div className='container' style={{ marginTop: '70px' }}>
            <div className="container my-3">
                <h2>Add New Notes</h2>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Note Title</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Description</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

            <div className="container">
                <h2>Your Notes</h2>
                <Notes />
            </div>
        </div>
    )
}

export default Home
