import React from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import "../style/containerTaskDone.scss";

const ContainerTaskDone = () => {

    const {
        arrayTask,
        deleteTaskDone
    } = useContext(AppContext);

    return (
        <div className="box box-tasks-done">
            <div className='task-done-title'>
                <span >Tasks Done</span>
                <button onClick={deleteTaskDone} >clear</button>
            </div>
            <div className = "container-tasks-done">
            {arrayTask.map(task => {
                    if(task.done){
                        const id=`task-done-${task.id}`;
                        return(

                        <div className='task-element-done' key = {id}>
                            <span key = {id}>
                                {task.taskName}
                            </span>
                        </div>)}
            })}

            </div>
        </div>
    );
}

export default ContainerTaskDone;