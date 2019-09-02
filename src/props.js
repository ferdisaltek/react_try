import React from 'react'


export class FirstProps extends React.Component {
 
    render(){

const veriler=this.props.myList.map((element,index)=>{
    return (
        <li>
            {index+1}.eleman={element}
        </li>
    )
})

return (
    <div>
        <ul>
            {veriler}
        </ul>
    </div>
);
    }
}