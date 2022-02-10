import React, { Component } from 'react';

export class ClassCounter extends Component {
    constructor(){
        super()

        this.state={
            count:0
        }
    }

    Increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return <div>
        <button onClick={this.Increment}> Increment {this.state.count}</button>
    </div>;
  }
}

export default ClassCounter;

