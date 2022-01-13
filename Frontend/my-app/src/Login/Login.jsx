
import React from 'react'
import "./Login.css"
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <div className='card'>
            
            <form method='POST'>
                <h2>Login</h2>
                <label htmlFor="UserId"> User Id</label><br />
                <input type="text"  id='UserId' required/> <br />
                <label htmlFor="Password"> Password </label><br />
                <input type="text"  id='Password' required/> <br />
                <button type='submit'>Submit</button>
                <h4>If not registred? <Link to="/Register"> Sign Up</Link></h4>
            </form>
        </div>
    )
}
