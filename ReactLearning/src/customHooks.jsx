import { useState, useEffect } from "react";

export function useConsoleLogger(value) {
    useEffect(()=>{
        console.log(value)
    }, [value])
}

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((prev) => !prev);
//   console.log(value);
  

  // Return an array for flexible destructuring names
  return [value, toggle];
}
