import React, { useState } from 'react'

const Login = () => {

    const [user,setUser] = useState({ username:'', password:''})

    const onChange = (e)=>{
        setUser({...user, [e.target.name]:e.target.value})
    }

    const handleSubmit = ()=> {
        
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className='container shadow-lg border rounded-3' style={{ width: '450px', padding:'20px' }}>
                <form>
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
