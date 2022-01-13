import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./Login/Login.jsx"
import Register from './Register/Register.jsx';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
    
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
