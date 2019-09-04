import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <div>
            <h3>msisdn</h3><input type="text"></input><button>ok</button>
            <h3>user <i class="fas fa-database"></i></h3>
            <h3>{props.title}</h3>
        </div>
    )
}


Navbar.prototype = {
    title : PropTypes.string.isRequired
}