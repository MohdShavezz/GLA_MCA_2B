import { Component } from "react";


class Counter extends Component{

    constructor(props){
        super(props)
        this.state={
            count:1
        }
    }

    handleInc=()=>{
        this.setState({count:this.state.count+1})
    }

    componentDidMount(){
        console.log('componentDidMount')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate ')        
    }
    componentWillUnmount(){
        console.log('componentWillUnmount ')
    }

    render(){
        return(
            <>
            <div style={{backgroundColor:'yellow'}}>

                <h2>Count : {this.state.count}</h2>
                <button onClick={this.handleInc}>INC</button>
            </div>
            </>
        )
    }

}

export default Counter