import React, { Component } from 'react'

export default class User extends Component {
constructor (props){
    super(props);

    this.state={
        test :"TEST"
    }
}

    render() {
        return (
            <div>
                <form>
                    <input type="text"></input>
                    <button>gönder</button>
                    <p>{this.state.test}</p>
                </form>
            </div>
        )
    }
}
