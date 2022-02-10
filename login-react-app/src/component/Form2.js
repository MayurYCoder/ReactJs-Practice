import { useState } from "react"


export default function Form2() {

    const [Input, setInput] = useState({
        fname: "",
        email: "",
        password: "",
        gender:true,
        city:""
    })

    const handleInput = (event) => {
        setInput({
            ...Input, [event.target.name]: event.target.value
        })
        console.log(Input);

    }



    return (
        <div>
            <form>
                <br></br>
                <input onChange={handleInput} type="text" name="fname" value={Input.fname} placeholder="Name"></input>
                <br></br>

                <input onChange={handleInput} type="email" name="email" value={Input.email} placeholder="Email"></input>
                <br></br>

                <input onChange={handleInput} type="password" name="password" value={Input.password} placeholder="Password"></input>
                <br></br>
{/* 
                <label>Gender:</label>
                <input onChange={handleInput} type="radio" name="gender" value="Male"></input>
                <label>Male</label>

                <input onChange={handleInput} type="radio" name="gender" value="Female"></input>
                <label>Female</label> */}

                <br></br>
                <br></br>
                <select onChange={handleInput} name="city">
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Banglore">Banglore</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Chennai">Chennai</option>
                </select>
            </form>


            <div>
                <p>Name:{Input.fname}</p>
                <p>E-mail:{Input.email}</p>
                <p>Password:{Input.password}</p>
                {/* <p>Gender:{Input.gender}</p> */}
                <p>Gender:{Input.city}</p>
            </div>
        </div>
    )
}