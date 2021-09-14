import React from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <nav>
                <div class="nav-wrapper">
                <Link to="/">Home</Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                  
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
