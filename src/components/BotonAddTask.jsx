import React from 'react';
let arrayTask = [];
const BotonAddTask = () => {
    const input = document.querySelector('.input');
    bAdd.addEventListener('click', ()=>{
        console.log(input.value);
        let iden = false;
        
    
        if(input.value != ''){
            while(!iden){
                console.log(iden);
                iden = genId(); 
                console.log(iden);
            };
            
            arrayTask.push(
                {taskName:input.value, done:false, id:iden}
            );
        }
        console.log(arrayTask);
    
        renderTask();
    });

    return (
    <div class = "container-input">
        <input className ="input" type="text" placeholder="enter task"/>
        <button className = "bAdd" type="submit">add task</button>
    </div>
    );
}

export default BotonAddTask;