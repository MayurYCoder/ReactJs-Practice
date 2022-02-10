import { Component } from "react";

export default class StateMessage extends Component{
constructor(){
    super()
    this.state={
        message: 'Welcome to React'
    }
}

changeMessage(){
    console.log("welcome to handlechange");
    this.setState({
        message:'Thanks for Suscribe'
        
    })
}


    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>

                <button onClick={()=>this.changeMessage()}>Suscribe</button>
            </div>

        )
    }
}