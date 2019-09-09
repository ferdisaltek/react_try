import React, { Component } from 'react'
import App from './App';
import UserConsumer from './Context';

export default class context_api extends Component {
    render() {
       return(
           <UserConsumer>
                {
                    value => {
                        const {users} =value;
                        return (
                            <div>
                                {
                                    users.map(user => {
                                        return (
                                            <users
                                            key={user.id}
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                }
           </UserConsumer>
       )
    }
}
