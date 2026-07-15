import { useState, useContext } from "react";
import { NotesDispatchContext } from "./NoteContext.jsx";

export default function Note({note}) {
    const dispatch = useContext(NotesDispatchContext);
    const [isEditing, setIsEditing] = useState(false);

    function handleChangeText(e) {
        dispatch({
            ...note,
            type: 'CHANGE_NOTE',
            text: e.target.value
        })
    }

    function handleChangeDone(e) {
        dispatch({
            ...note,
            type: 'CHANGE_NOTE',
            done: e.target.checked
        })
    }

    function handleDelete() {
        dispatch({
            type: 'DELETE_NOTE',
            id: note.id
        })
    }

    let component;
    if (isEditing) {
        component = (
            <>
                <input value={note.text} onChange={handleChangeText}/>
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    } else {
        component = (
            <>
                {note.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }

    function handleChange(e) {
        const newNote = {...note, done: e.target.checked};
        onChange(newNote);
    }

    return (
        <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone}/>
            {component}
            <button onClick = {handleDelete}>Delete</button>
        </label>
    )
}