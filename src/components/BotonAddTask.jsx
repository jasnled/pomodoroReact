import React, { useContext,useState } from 'react';
import AppContext from '../context/AppContext';

import "../style/botonAddTask.scss"


const BotonAddTask = () => {

    const { 
        handleAddTask,
        arrayTask,
        taskProcess
    } = useContext(AppContext);
    const [taskN,setTaskN] = useState("");

    const handleInputChange = ({target}) => {
        setTaskN(target.value);
        
    };

    const handleSubmit = () => {
        console.log(taskProcess);
        console.log(`taskprocess`);
        if(taskProcess == ''){

            handleAddTask(taskN);
            setTaskN('');
            console.log(taskN);
            console.log(arrayTask);
        };
    };

    return (
    <div className = "container-input">
        <input className ="input" value={taskN} onChange = {handleInputChange} type="text" placeholder="enter task"/>
        <button className = "bAdd" onClick={handleSubmit} type="submit">add task</button>
    </div>
    );
}

export default BotonAddTask;