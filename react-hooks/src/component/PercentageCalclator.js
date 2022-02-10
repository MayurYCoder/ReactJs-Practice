import { useState } from "react"

export default function PercentageCalculator() {


    const [Data, setData] = useState({
        physics: "",
        chemistry: "",
        biology: "",
        maths: "",
        history: ""
    })

    const handleData = (e) => {
        setData({
            ...Data, [e.target.name]: e.target.value
        })
    }

    function handleInput(){

        
        let percentage=`Data.physics+ Data.chemistry+Data.biology+Data.maths+Data.history/5`

        console.log(percentage)
    }

    return (
        <div>
            <label>Physics</label>
            <input type="number" value={Data.physics} onChange={handleData} name="physics"></input>


            <label>Chemistry</label>
            <input type="number" value={Data.chemistry} onChange={handleData} name="chemistry"></input>

            <label>Biology</label>
            <input type="number" value={Data.biology} onChange={handleData} name="biology"></input>

            <label>Maths</label>
            <input type="number" value={Data.maths} onChange={handleData} name="maths"></input>

            <label>History</label>
            <input type="number" value={Data.history} onChange={handleData} name="history"></input>
            <br />
            <br />
            <button onClick={handleInput}>Submit</button>

            {/* <p>{percentage}</p> */}
        </div>
        
    )
}