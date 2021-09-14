import React, { Component } from 'react'
import Home from './Home'
export default class Login extends Component {
    state={
        name:'',
        email:'',
        number:'',
        password:'',
        data:[]
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=()=>{
        let list=localStorage.getItem("signin")
        // list(list)
        console.log(list.name)
    }
    render() {
        return (
            <div>
                <Home/>
            <h1>Login</h1>
                <input type="text" value={this.state.name} name="name"  onChange={this.changeHandler}></input>
                <input type="password" value={this.state.password} name="password" onChange={this.changeHandler}></input>
                <button onClick={this.submitHandler}>login</button>
            </div>
        )
    }
}
