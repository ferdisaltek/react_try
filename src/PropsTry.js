import React, { Component } from 'react'

export default class PropsTry extends Component {
    render() {
        return (
            <div>
                <lu>
                    <li>isim: {this.props.name}</li>
                    <li>soy isim :{this.props.lastname} </li>
                    <li>department :{this.props.department} </li>
                </lu>
            </div>
        )
    }
}
