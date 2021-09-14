import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'

export default function Routing() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    
                </Switch>
            </Router>
        </div>
    )
}
