import {useState} from "react";
import {useImmer} from "use-immer";
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";

function Task(){
    const [items, setItems] = useImmer([]);

    return (
        <div>
            <TaskForm setItems={setItems}/>
            <TaskList items={items}/>  
        </div>
    )
}

export default Task;