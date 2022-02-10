import React, { useEffect, useRef } from 'react';

function RefDemo() {
    const inputRef1 = useRef(null)

    useEffect(() => {
        inputRef1.current.focus()
    }, [])
    return (<div>
        <input type="text" ref={inputRef1}></input>
    </div>)
}

export default RefDemo;
