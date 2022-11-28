import React from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import useSave from '../hooks/useSave';


const ButtonStartT = ({element}) => {
    const {
        estado,
        options, 
        handleStart,
        resetValues,
        arrayTask,
        taskProcess,
        setArrayTask,
        setTaskProcess,
        resetRunValues

    } = useContext(AppContext);

    const idStart = `start-${element.id}`;

    const handleStartTaskB = (op,elem) => {
        if(!estado){
            resetValues(op);
            handleStart(op,elem);
            handleRunT(elem);
        }
        else if(elem.id == taskProcess){
            resetValues(op);
            resetRunValues();
        };

    };


    const handleRunT = (elem) => {
        if(taskProcess == ''){
            let newArray=arrayTask.filter(task => elem.id != task.id);
            const newTask = {

                taskName:elem.taskName, 
                run:true,
                done:false,
                id:elem.id
            };
            setTaskProcess(elem.id);

            newArray = [newTask,...newArray] ;
            console.log(`en el hanleRunT `);
            console.log(newArray);
            //useSave(JSON.stringify(newArray));
            setArrayTask(newArray);
        }
    }

    return (
        <button className="Start" id = {idStart} onClick={()=>handleStartTaskB(options[0],element)}>{element.run?`In process..`:`start`}</button>
    );
}

export default ButtonStartT;