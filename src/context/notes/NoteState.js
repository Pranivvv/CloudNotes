import { getValue } from "@testing-library/user-event/dist/utils";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const state = {
        name:'praniv'
    }
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
