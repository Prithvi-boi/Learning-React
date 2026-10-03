
import { useState, useEffect } from "react"

export function useTimeout(innitial_time) {
    const [Time, setTime] = useState(innitial_time)
    const setNewTime = (NewTime) => {
        setTime(NewTime)
    }
    useEffect(()=>{
        if (Time <= 0) return
        const Timer = setInterval(()=>setTime(T => T - 1), 1000)
        return () => clearInterval(Timer)
    },[Time])
    return [Time, setNewTime]
}
