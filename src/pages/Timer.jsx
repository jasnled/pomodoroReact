import React, { useContext } from 'react';
import '../style/timer.scss';
import Boton from '../components/Boton';
import Time from '../components/Time'
import AppContext from '../context/AppContext';


const Timer = () => {   
    
    const 
    {
    tim,
    btnStart,
    option,
    options, 
    handleStart,
    taskProcess
    } = useContext(AppContext);
    


    let elem = {id:taskProcess}
    return (
    <div id="timer-container">
        <div className="container-t">
            <div>
                <ul className = "options">
                    {options.map( opt => (
                        <Boton option={opt} key = {opt.id} />
                    ))}
                    
                </ul>
            </div>
            <p className="title">{option.content}</p>
            <Time tim = {tim}/>
            <button id="start" onClick = {() => handleStart(option,elem)}>{btnStart}</button>
        </div>
    </div>
    );

    
}

export default Timer;