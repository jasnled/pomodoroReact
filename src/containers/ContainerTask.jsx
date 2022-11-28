import React from 'react';
import "../style/containerTask.scss";
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import BotonDeleteT from '../components/BotonDeleteT';
import ButtonStartT from '../components/ButtonStartT';


const ContainerTask = () => {
    const {
        arrayTask,
    } = useContext(AppContext);
    return (
        <div className="box box-tasks">
            <span>Tasks</span>
            <div className="container-tasks">
                {arrayTask.map( task => {
                    if(!task.done){
                    const idStart = `start-${task.id}`
                    const idDelete = `delete-${task.id}`;
                    return(
                    <div className='task-element' key= {task.id}>
                        <span>
                            {task.taskName}
                        </span>
                        <BotonDeleteT element={task} key={idDelete}/>
                        <ButtonStartT element={task} key={idStart}/>
                    </div>)}
            })}
            </div>
        </div>
    );
}

export default ContainerTask;