import { Component } from "react";

export default class ClassCounter extends Component{
    constructor(){
        super()

        this.state={
            count:0
        }
    }
    handleIncreament=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecreament=()=>{
        this.setState({count:this.state.count-1})
    }

    componentDidMount(){
        console.log("component did mounted");
    }

    shouldComponentUpdate(){
        return true;
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    render(){
        console.log("component is mounting");
        return(
            <div>
                <h1>Counter:{this.state.count}</h1>

                <button onClick={this.handleIncreament}>Increament</button>
                <button onClick={this.handleDecreament}>Decreament</button>
            </div>
        )
    }
}