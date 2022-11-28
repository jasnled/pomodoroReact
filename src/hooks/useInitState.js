import { useState } from "react";
import useGenId from "./useGenId";
import useLoad from "./useLoad";
import useSave from "./useSave";




let pomodoro = 0;
let time;




const useInitState = () => {

    let arrayTaskI = [];


    const json = useLoad();

    let arr;

    try {
        arr = JSON.parse(json);
    } catch (error) {
        arr = [];
    };

    arrayTaskI = arr ? [...arr] : [];

  

    let options = [
        {
            id : 'pomo',
            content : 'Pomodoro',
            time: 25*60
        },
        {
            id : 'sBreak',
            content : 'Short Break',
            time: 5*60
        },
        {
            id : 'lBreak',
            content : 'Long Break',
            time: 15*60
        }
    ]

    const [tim, setTim] = useState(options[0].time);
    const [btnStart, setBtnStart] = useState('start');
    const [estado, setEstado] = useState(false);
    const [option, setOption] = useState(options[0]);
   
   
    

    const resetValues = (opt) => {
        setOption(opt);
        setTim(opt.time);
        setBtnStart('start');
        setEstado(false);
        clearInterval(time);
        
    } 


    const timer = (op,id) => {
        
        let opt = op.time;
        
        time = setInterval(() => {
            if(opt > 0){
                opt--;
                setTim(opt);
            }else{
                console.log(`task in process ${id}`);
                if(op.id === 'pomo'){
                    
                    pomodoro++;
                    console.log(`estaba en pomodoro`);
                    (pomodoro%4 == 0) ? resetValues(options[2]) : resetValues(options[1]);
                    alert('time to break!');
                    
                    console.log(`task in process ${id}`)
                    handleCompletedT(id);
                    

                }else{
                    console.log(`en break`);
                    pomodoro++;
                    resetValues(options[0]);
                    resetRunValues(); 
                    alert('time to focus!');
                
                }
                  
            }
        }, 1000);
    }

        
    
    const handleStart = (op,elem) => {
        console.log(pomodoro);
        if(!estado){
            setEstado(!estado);
            setBtnStart('stop');
            timer(op,elem.id);
        
        }else{

            op.time = tim;
            resetValues(op);
            
            
            
            
        }           
    }
    
    const handleCompletedT = (id) => {
        console.log(`el id`);
        console.log(id);
        if(id != '' ){
            console.log('hi este es arraytasks');
            console.log(arrayTask);
            const CopyArrayTask=arrayTask;
            let newArray=arrayTask.filter(task =>  task.id != id);
            let taskDone=arrayTask.filter(taskElem => taskElem.id == id);
            console.log(taskDone);
            const TaskD = {

                taskName:taskDone[0].taskName, 
                run:false,
                done:true,
                id:taskDone[0].id, 
            };
            newArray = [TaskD,...newArray];
            console.log('hi este es array que se va a guardar y render');
            console.log(newArray);
            useSave(JSON.stringify(newArray));
            setArrayTask(newArray);
            setTaskProcess('');

        }

    }
    const deleteTaskDone = () => {
        if(taskProcess == ''){
            let newArray=arrayTask.filter(task => task.done != true);
            useSave(JSON.stringify(newArray));
            setArrayTask(newArray);
        }
    }
    const handleOption = (opt) => {
        console.log('click')
        resetValues(opt);
        resetRunValues();

    }
    const handleDeleteB = (element) => {
        if(taskProcess == ''){
            const newArray=arrayTask.filter(task => element.id != task.id);
            useSave(JSON.stringify(newArray));
            setArrayTask(newArray);
        }
       


    }

    //part of report//

    function resetRunValues(){

        const CopyArrayTask=arrayTask;
        let newArray=arrayTask.filter(task =>  task.run != true);
        let taskRun=arrayTask.filter(taskElem => taskElem.run == true);
        console.log(`este es taskrun ${taskRun}`);
        console.log(taskRun);
        console.log(taskRun.length);
        if(taskRun.length != 0){
            console.log(taskRun != []);
            const TaskR = {
                taskName:taskRun[0].taskName, 
                run:false,
                done:false,
                id:taskRun[0].id, 
            }
            newArray = [TaskR,...newArray];
        };
        
        useSave(JSON.stringify(newArray));
        setArrayTask(newArray);
        setTaskProcess('');
        

    }
        
    const [arrayTask,setArrayTask] = useState(arrayTaskI); 
    const [taskProcess,setTaskProcess] = useState('');
    const [toggle,setToggle] = useState(false);

    const handleToggle = () =>{
        setToggle(!toggle);
    }

    const addTask = (newTask) => {

        const iden = useGenId();

        const task = {

            taskName:newTask, 
            run:false,
            done:false,
            id:iden

        }
    
        console.log('no hay proceso activo');
        setArrayTask([...arrayTask, task]);
        useSave(JSON.stringify([...arrayTask, task]));
        
      
  
    };
    

    const handleAddTask = (newTask) => {
        if(newTask != ''){
            addTask(newTask);
        }            
    };

    
    
    

    
    return{
    tim,
    pomodoro,
    btnStart,
    estado,
    option,
    options,
    arrayTask,
    toggle,
    taskProcess,
    deleteTaskDone,
    setTaskProcess,
    setTim,
    setArrayTask,
    handleDeleteB,
    handleStart,
    handleOption,
    handleAddTask,
    handleToggle,
    resetValues,
    resetRunValues

    
    };

}

export default useInitState;

