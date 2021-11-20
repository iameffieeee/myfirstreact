import React from "react";

//stateful component
class Button extends React.Component{

    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    addCounter = () => {
        this.setState(
            {
                count : this.state.count + 1
            }
        )
       // this.state.count = this.state.count + 1
    }



render(){
    return( 
    <div>
     <button onClick = {this.addCounter} >click me!!!</button>
    <p>counts = {this.state.count}</p>
    </div>
    )
}

//<button> onClick = {() => this.addCounter()} click me!!!</button>

}



export default Button