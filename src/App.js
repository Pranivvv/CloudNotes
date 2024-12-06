import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'


import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null)
  const myAlert = (mess, state) =>{
    // console.log(mess, state ,'print me')
    setAlert({
      mess: mess,
      state: state,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

    return (
        <NoteState>
            <Router>
                <Navbar />
                <Alert alert={alert}/>
                <Routes>
                    <Route exact path="/" element={<Home myAlert={myAlert}/>} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/login" element={<Login myAlert={myAlert}/>} />
                    <Route exact path="/signup" element={<Signup myAlert={myAlert}/>} />
                </Routes>
            </Router>
        </NoteState>
    );
}

export default App;
