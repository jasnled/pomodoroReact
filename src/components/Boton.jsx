import React, { useContext } from 'react';
import AppContext from '../context/AppContext';


const Boton = ({ option}) => {
    const { handleOption } = useContext(AppContext);

    return (
        <li className = "option" id = {option.id} onClick = {()=>{handleOption(option)}}>{option.content} </li>
    );
}

export default Boton;