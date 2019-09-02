import React from 'react'


export class FirstComponent extends React.Component{
    render(){
        return(
            <div>this is my first Component<br/>
            {this.props.firstprop}
            </div>
        );
    }
}