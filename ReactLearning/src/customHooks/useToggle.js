import { useState } from "react"

export function useToggle(innitial_Value) {
    const [Toggle, setToggle] = useState(innitial_Value || true)
    const handleToggle = () => {
        setToggle(prev => !prev)
    }
    return [Toggle, handleToggle]
}