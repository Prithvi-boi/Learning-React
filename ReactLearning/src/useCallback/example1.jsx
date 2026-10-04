
//----------------------------------------------------------
// CHECKOUT READme.md to Understand this Code Example Easily
//----------------------------------------------------------

// 1. 1. Skipping re-rendering of components

import React, { useState, useCallback } from 'react';
//Child Component
const ChildComponent = React.memo(({ handleClick }) => {
    console.log('Child Component rendered');
    return (
        <button onClick={handleClick}>Click me</button>
    );
});

//Parent Component
const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((c) => c + 1);
    }, []);
    console.log('Parent Component rendered');
    return (
        <div>
            <ChildComponent handleClick={increment} />
            <p>Count: {count}</p>
        </div>
    );
};

export default ParentComponent;