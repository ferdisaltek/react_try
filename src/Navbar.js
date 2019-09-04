import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <h3>msisdn</h3><input type="text"></input><button>ok</button>
            <h3>user</h3>
            <h3>{props.title}</h3>
        </div>
    )
}
