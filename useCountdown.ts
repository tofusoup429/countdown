import {useState, useEffect} from 'react'
export  const useCountdown = (startFrom:number, startCountDown:boolean=false, timeoutFunction:any, stopCountingDown:boolean) =>{
   const [counter, handleCounter] = useState(startFrom);   
   useEffect(()=>{
    if(startCountDown){
        const countdown = setInterval(()=>handleCounter(old=>old-1), 1000);
        if(stopCountingDown){
            clearInterval(countdown);
            handleCounter(startFrom);
        }
        if(counter<0) {
            clearInterval(countdown);
            handleCounter(startFrom)
        }
        return ()=>clearInterval(countdown)
    }
   }, [startCountDown, stopCountingDown])

   useEffect(()=>{
    if(counter===0){
        timeoutFunction();
        handleCounter(startFrom)
    }
   }, [counter])
   
   
   return {counter}
} 
