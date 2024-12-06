import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate()
    const [user,setUser] = useState({ username:'', password:''})

    const onChange = (e)=>{
        setUser({...user, [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e)=> {
        e.preventDefault()
        const url = 'http://localhost:5000/api/auth/login'

        const myRequest = new Request(url, {
            method: "POST",
            body: JSON.stringify({ 
                username:user.username, 
                password:user.password
            }),
            headers:{
                "Content-Type": "application/json",
            }
        });
        const response = await fetch(myRequest);
        const responseJson= await response.json()
        if(responseJson.success===true){
            localStorage.setItem('token', responseJson.token)
            navigate('/')
            props.myAlert('Login Successful', 'Success')
        }
        else{
            props.myAlert(responseJson.error, 'Error')
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className='container shadow-lg border rounded-3' style={{ width: '450px', padding:'20px' }}>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label> 
                        <input type="username" className="form-control" id="username" name="username" aria-describedby="emailHelp" onChange={onChange} value={user.username}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={onChange} value={user.password}/>
                    </div>
                    <button disabled={!((user.username.length>=5) && (user.password.length>=8))} type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login
