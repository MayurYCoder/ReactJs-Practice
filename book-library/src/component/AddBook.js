import React, { useState } from 'react';

export default function AddBook() {
    const [Input, setInput] = useState({
        bookname: "",
        authorname: "",
        price: ''
    })
    const [data, setData] = useState({}

    )

    const handleInput = (e) => {
        setInput({ ...Input, [e.target.name]: e.target.value })
        console.log(Input);
    }

    const handleSubmit = (entity) => {
        setData(Input)
    }
    // data.map((items) => {
    //     console.log(items);
    //     return true;
    // })

    return <div>
        <input type="text" onChange={handleInput} value={Input.bookname} name='bookname'></input>
        <br></br>
        <input type="text" onChange={handleInput} value={Input.authorname} name='authorname'></input>
        <br></br>

        <input type="number" onChange={handleInput} value={Input.price} name='price'></input>
        <br></br>
        <button onClick={handleSubmit}>ADD</button>
    </div>;
}
