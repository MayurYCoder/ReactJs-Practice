import React, { createRef, useRef } from 'react';

export default function UseRefExample() {


    const InputRef = useRef();

    const getData = () => {
        
        console.log(InputRef.current.value)
    }

    const changeColor = () => {
        InputRef.current.style.backgroundColor = "yellow"
    }

    return <div>


        {/* <input ref={InputRef} type="text" />

        <button onClick={getData}>Get Data</button> */}

        


        <p ref={InputRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis nulla reprehenderit accusantium consequuntur rem illum iusto eos dicta fuga voluptatibus harum quis cupiditate ratione ut nihil blanditiis, aspernatur aperiam!</p> 

        <button onClick={changeColor}>Change Background Color</button>
    </div>;
}