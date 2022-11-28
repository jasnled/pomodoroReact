import React, {useContext} from 'react';
import AppContext from "../context/AppContext";

const BotonDeleteT = ({element}) => {
    const {handleDeleteB} = useContext(AppContext);
    
    const id = `delete ${element.id}`

    return (

        <button className="delete" onClick={()=>handleDeleteB(element)} id = {id}>delete</button>
    );
}

export default BotonDeleteT;