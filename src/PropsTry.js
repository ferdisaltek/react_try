import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class PropsTry extends Component {
    render() {
        return (
            <div>
                <lu>
                    <li>name: {this.props.name}</li>
                    <li>lastname :{this.props.lastname} </li>
                    <li>department :{this.props.department} </li>
                </lu>
            </div>
        )
    }
}


PropsTry.propTypes = {
    name : PropTypes.string.isRequired,
    lastname : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired
}

PropsTry.defaultProp= {
    name : "bilgi yok"
}