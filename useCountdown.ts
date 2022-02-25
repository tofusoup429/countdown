import {useState, useEffect} from 'react'
export  const useCountdown = (startFrom:number, startCountDown:boolean=false, timeoutFunction:any, stopCountingDown:boolean) =>{
    /*
        startFrom: number that the countdown starts from. 
        startCountDown: turnning this from false to true triggers countdown. 
        timeoutFunction: a function that will be triggered when countdown reaches 0
        stopCountingDown: if it turns true, countdown stops
    */
   const [counter, handleCounter] = useState(startFrom);   
   useEffect(()=>{
    if(startCountDown){
        const countdown = setInterval(()=>handleCounter(old=>old-1), 1000);
        //there are two ways to stop countdown. One is letting it hits 0 and the other is you pass stopCountingDown true.  
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
        //when counter reaches 0, timeoutFunction is executed.
        timeoutFunction();
        handleCounter(startFrom)
    }
   }, [counter])
   return {counter}
} 
