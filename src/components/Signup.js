import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({ name: '', email: '', username: '', password: '', confirmPassword: '' })

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = 'http://localhost:5000/api/auth/createuser'

        const myRequest = new Request(url, {
            method: "POST",
            body: JSON.stringify({
                name: user.name,
                username: user.username,
                email: user.email,
                password: user.password
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const response = await fetch(myRequest);
        const responseJson = await response.json()
        if (responseJson.success === true) {
            navigate('/login')
            props.myAlert('Login Successful', 'Success')
        }
        else {
            props.myAlert(responseJson.error, 'Error')
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className='container shadow-lg border rounded-3' style={{ width: '450px', padding: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="name" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" value={user.name} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" value={user.email} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="username" className="form-control" id="username" name="username" onChange={onChange} aria-describedby="emailHelp" value={user.username} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" value={user.password}>Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={onChange} value={user.password} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" onChange={onChange} value={user.confirmPassword} />
                    </div>
                    <button disabled={!((user.name.length >= 5) && (user.email.length >= 5) && (user.username.length >= 5) && (user.password.length >= 8) && (user.password === user.confirmPassword))} type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        </div>

    )
}

export default Signup
