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
    handleStart
    } = useContext(AppContext);
    



    return (
    <div id="timer-container">
        <div className="container-t">
            <div>
                <ul className = "options">
                    {options.map( option => (
                        <Boton option={option} key = {option.id} />
                    ))}
                    
                </ul>
            </div>
            <p className="title">{option}</p>
            <Time tim = {tim}/>
            <button id="start" onClick = {() => handleStart(tim)}>{btnStart}</button>
        </div>
    </div>
    );

    
}

export default Timer;