import React, { Component } from 'react'
import { connect } from 'react-redux'
export default class ChildB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    handleClick = (val) => {
        this.props.changeSelected(val);
    }
    changeSubmit = (e) => {
        // debugger
        this.setState({
            name: e.target.value
        });
    }
    render() {
        return (
            <div>
        
                    {console.log(this.state.name)}
                <input type="text" name='name' onChange={(e)=>this.changeSubmit(e)} />
                <button onClick={() => this.handleClick(this.state.name)}>click</button>
            </div>
        )
    }
}
