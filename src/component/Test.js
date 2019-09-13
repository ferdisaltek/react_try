import React, { Component } from 'react'

export default class Test extends Component {

    constructor(props){
        super(props);
        this.state={
            a:10
        }
        console.log("constructor");
        
        
    }

    componentDidMount() {
        console.log("componentDidMount");
        //api istekleri
        this.setState({
            a:20
        })
    }
    

    render() {
        console.log("Render");
        return (
            <div>
                
            </div>
        )
    }
}
