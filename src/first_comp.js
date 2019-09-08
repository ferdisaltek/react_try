import React from 'react'


export class FirstComponent extends React.Component{

    onClickEvent(e){
        console.log(e.target);
        console.log("test");
    }

    render(){
        return(
            <div>this is my first Component<br/>
            <h4 onClick={this.onClickEvent}>name</h4>
            {this.props.firstprop}
            </div>
        );
    }
}