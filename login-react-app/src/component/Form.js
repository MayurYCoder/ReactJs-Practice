import React, { useState } from "react"
export default function Form() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [myCar,setCarName]= useState("")

    const handleName = (e) => {
        setName(e.target.value)
        console.log(name);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        console.log(email);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        console.log(password);
    }

    const handleCar=(e)=>{
        setCarName(e.target.value)
        console.log(myCar);
    }


    return (
        <div>
            <label>Name</label>
            <input name="name" onChange={handleName} type="text"></input><br></br>

            <label>User Id</label>
            <input onChange={handleEmail} type="email"></input><br></br>

            <label>Password</label>
            <input name="password" onChange={handlePassword} type="password"></input><br></br>


            <button>Submit</button>
            <br></br>

            <div>
                <br></br>
                <label for="car">Car</label>
                <select onChange={handleCar} name="myCar" id="car">
                  
                    <option value="harrier">harrier</option>
                    <option value="Safari">Safari</option>
                    <option value="Nexon">Nexon</option>
                    <option value="Altroz">Altroz</option>
                </select>
            </div>

            <h2>{"Name:"+name}</h2>
            <h2>{"Email:"+email}</h2>
            <h2>{"Password:"+password}</h2>
            <h2>{"Car:"+myCar}</h2>

           
        </div>
    )
}