import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const onLogout = ()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">CloudNotes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/about">About</NavLink>
                        </li>
                    </ul>
                    
                    {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                        <Link className="btn btn-outline-primary mx-2" to="/login" role="button">Login</Link>
                        <Link className="btn btn-outline-primary mx-2" to="/signup" role="button">Signup</Link>
                    </form> :
                        <form className="d-flex" role="search">
                            <Link className="btn btn-outline-primary mx-2" to="/login" role="button" onClick={() => onLogout()}>Logout</Link>
                        </form>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
