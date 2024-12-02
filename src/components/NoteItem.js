import React from 'react'

const NoteItem = (props) => {
    return (
        <div class="card m-2" style={{width: "18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}

export default NoteItem
