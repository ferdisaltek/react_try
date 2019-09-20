import React, { Component } from 'react'
import axios from 'axios';

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

    componentDidMount= async() => {

      const response= await axios.get("http://localhost:3001/posts")
      console.log(response);
      this.setState(
          {
              users:response.data
          }
      )
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