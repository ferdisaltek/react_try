import React, { Component } from 'react'

const UserContext=React.createContext();
//provider , consumer 


export default class UserProvider extends Component {
    state ={
        users: [
            {
                id: "1",
                name :"ferdi",
                salarr :"1000"
            }
        ]
    }
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer=UserContext.Consumer;