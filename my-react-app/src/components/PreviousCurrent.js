import { Component } from "react";

export default class PreviousCurrent extends Component{
    constructor(){
        super()

        this.state={
            count:0
        }
    }
    Increment=()=>{
        // this.setState({
        //     count:this.state.count+1
        // })

        this.setState(prevState=>({
            count:prevState.count+1
        }))
    }
    IncrementFive(){
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }

    render(){
        return(
            <div>
                <h1>Counter:{this.state.count}</h1>
                <button onClick={()=>this.IncrementFive()}>Increment</button>
            </div>
        )
    }
}