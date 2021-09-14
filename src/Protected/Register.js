import React, { Component } from 'react'
import Home from './Home'

export default class Register extends Component {
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
      let newData={
        "name": this.state.name,
        "number": this.state.number,
        "email": this.state.email,
        "password":this.state.password
       }
       this.state.data.push(newData);
       console.log(this.state.data);
       localStorage.setItem("signin",JSON.stringify(this.state.data));
    }
    render() {
        return (
            <div>
                  <Home/>
                <h1>Register</h1>
                <input type="text"  name="name"  onChange={this.changeHandler}></input>
                <input type="email"  name="email" onChange={this.changeHandler}></input>
                <input type="number"  name="number" onChange={this.changeHandler}></input>
                <input type="password"  name="password" onChange={this.changeHandler}></input>
                <button onClick={this.submitHandler}>Register</button>
            </div>
        )
    }
}
