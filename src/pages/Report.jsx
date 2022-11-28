import React, { useContext } from 'react';
import BotonAddTask from '../components/BotonAddTask';
import ContainerTask from '../containers/ContainerTask'
import ContainerTaskDone from '../containers/ContainerTaskDone';
import AppContext from '../context/AppContext';
import "../style/report.scss"

const Report = () => {
    
    const { handleToggle } = useContext(AppContext);
    return (
        <div className="container-section inactive">
            <div className = "container">
            <BotonAddTask/>
            <ContainerTask/>
            <p id = "icon-close" onClick={handleToggle}>x</p>
            <ContainerTaskDone/>
            </div>
        </div>
        
    );
}

export default Report;