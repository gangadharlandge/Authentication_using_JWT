import React from 'react'
import './Register.css'

const Register = () => {
    return (
        <div className='card'>
            
            <form method='POST'>
                <h2>Register</h2>
                <label htmlFor="Name">Name</label><br />
                <input type="text"  id='Name' required/> <br />
                <label htmlFor="Email">Email</label><br />
                <input type="text"  id='Email' required/> <br />
                <label htmlFor="Password"> Password </label><br />
                <input type="text"  id='Password' required/> <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Register;
