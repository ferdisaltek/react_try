import React, { Component } from 'react'
import posed from  'react-pose';


const Animation=posed.div({
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  });

export default class AddUsers extends Component {
    state ={
        visible :true
    }

    changeVisibility =(e)=>{
        this.setState({
            visible : !this.state.visible
        })
    }
    render() {
        const visible=this.state;
        return (
            <div className="col-md-4 mb-0">

                <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show form"}</button>
                <div className="card">
                    <div className="card-header">
                        <h4>Add User from</h4>
                    </div>
                    <div className="card_bady">
                        <form>
                            <div className="from-group"></div>
                            <label htmlFor="name">name</label>
                            <input type="text"
                            name="name"
                            id="id"
                            placeholder="Enter Name"
                            class ="from-control">

                            </input>
                        </form>
                    </div>
                    <div className="card_bady">
                        <form>
                            <div className="from-group"></div>
                            <label htmlFor="department">department</label>
                            <input type="text"
                            name="department"
                            id="department"
                            placeholder="Enter department"
                            class ="from-control">

                            </input>
                        </form>
                    </div>
                    <div className="card_bady">
                        <form>
                            <div className="from-group"></div>
                            <label htmlFor="salary">salary</label>
                            <input type="text"
                            name="salary"
                            id="salary"
                            placeholder="Enter salary"
                            class ="from-control">

                            </input>
                        </form>
                    </div>
                    <button class ="btn btn-danger btn-block" type="submit">ADD</button>

                </div>
                
            </div>
        )
    }
}
