import LoginForm from "./Form/LoginForm";
import RegForm from "./Form/RegForm";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
//import "./App.css";

function App() {
  return (
    <div className="App">
      
      <Routes> 
        <Route path="/" element={<LoginForm />} />
        <Route path="/reg" element={<RegForm />} />
        {/* Lägg till fler routes sen */}
      </Routes>
     
    </div>
  );
  }

export default App;