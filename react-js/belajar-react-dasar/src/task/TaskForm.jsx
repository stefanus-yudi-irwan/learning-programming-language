import { useState } from "react";
import { useImmer } from "use-immer";

function TaskForm({onSubmit}){
    const [item, setItem] = useState("");

    function handleChange(e) {
        setItem(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        onSubmit(item);
        setItem("");
    }

    return (
        <div>
            <h1>Create Task</h1>
            <form>
                <input value={item} onChange={handleChange}/>
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    )
}

export default TaskForm;