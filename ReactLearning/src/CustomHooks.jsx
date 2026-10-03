import { useToggle } from './customHooks/useToggle.js'
import { useTimeout } from './customHooks/useTimeout.js'

function CustomHooks() {
    const [toggle, handleToggle] = useToggle(true)
    const [Timer, setNewTime] = useTimeout(10)
    return (
        <div>
            <h1>Custom Hooks</h1>
            <hr></hr>
            <div>
                <h2>1. useToggle</h2>
                <div>
                    {toggle && <p>Hello World</p>}
                    <button onClick={handleToggle}>on/off</button>
                </div>

                <hr></hr>

                <h2>2. useTimer</h2>
                <div>
                    <p>Timer: {Timer}</p>
                    <button onClick={() => setNewTime(100)}>Set Time from 100</button>
                </div>
            </div>
        </div>
    )
}

export default CustomHooks
