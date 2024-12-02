import { getValue } from "@testing-library/user-event/dist/utils";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "674e3650172a3e967139a430",
          "user": "67466f3470893afba99f92c6",
          "title": "my note1",
          "description": "testing description",
          "tag": "personal",
          "date": "2024-12-02T22:36:00.948Z",
          "__v": 0
        },
        {
          "_id": "674e3662172a3e967139a432",
          "user": "67466f3470893afba99f92c6",
          "title": "my note2",
          "description": "testing description",
          "tag": "personal",
          "date": "2024-12-02T22:36:18.396Z",
          "__v": 0
        },
        {
          "_id": "674e3667172a3e967139a434",
          "user": "67466f3470893afba99f92c6",
          "title": "my note3",
          "description": "testing description",
          "tag": "personal",
          "date": "2024-12-02T22:36:23.489Z",
          "__v": 0
        },
        {
          "_id": "674e3650172a3e967139a430",
          "user": "67466f3470893afba99f92c6",
          "title": "my note1",
          "description": "testing description",
          "tag": "personal",
          "date": "2024-12-02T22:36:00.948Z",
          "__v": 0
        },
        {
          "_id": "674e3662172a3e967139a432",
          "user": "67466f3470893afba99f92c6",
          "title": "my note2",
          "description": "testing description",
          "tag": "personal",
          "date": "2024-12-02T22:36:18.396Z",
          "__v": 0
        },
        {
          "_id": "674e3667172a3e967139a434",
          "user": "67466f3470893afba99f92c6",
          "title": "my note3",
          "description": "testing description",
          "tag": "personal",
          "date": "2024-12-02T22:36:23.489Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
