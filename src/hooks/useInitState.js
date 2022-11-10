import { useState } from "react";
let pomodoro = 0;
let time;

const useInitState = () => {
 


    let options = [
        {
            id : 'pomo',
            content : 'Pomodoro',
            time: 25
        },
        {
            id : 'sBreak',
            content : 'Short Break',
            time: 5
        },
        {
            id : 'lBreak',
            content : 'Long Break',
            time: 15
        }
    ]
    
    
    const [tim, setTim] = useState(options[0].time*60);
    const [btnStart, setBtnStart] = useState('start');
    const [estado, setEstado] = useState(false);
    const [option, setOption] = useState(options[0].content);

    const resetValues = (opt) => {
        setOption(opt.content)
        setTim(opt.time*60);
        setBtnStart('start');
        setEstado(false);
        clearInterval(time);
    } 

    const timer = (count) => {
        const opt = count;
        console.log(`opt ${opt}`);
        time = setInterval(() => {
            if(count > 0){
                count--;
                setTim(count);
            }else{

                if(opt == options[0].time*60){
                    alert('time to break!');
                    pomodoro++;
                    console.log(`estaba en pomodoro`);
                    (pomodoro%4 == 0) ? resetValues(options[2]) : resetValues(options[1]);
                }else{
                    alert('time to focus!');
                    resetValues(options[0]); 
                    console.log(`rews ${opt}`);
                }
                  
            }
        }, 1000);
    }
    
        
    
    const handleStart = (opTime) => {
        console.log(pomodoro);
        if(!estado){
            setEstado(!estado);
            setBtnStart('stop');
            timer(opTime);
        
        }else{

            resetValues(options[0]);
            
        }           
    }
    



    const handleOption = (opt) => {
        console.log('click')
        resetValues(opt);

    }



    return{
    tim,
    btnStart,
    estado,
    option,
    options,
    handleStart,
    handleOption
    };

}

export default useInitState;

