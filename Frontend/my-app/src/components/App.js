import LoginForm from "./Form/LoginForm";
import RegForm from "./Form/RegForm";
import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Fadebook from "./Fadebook";
import { getCookie } from "./Cookies";
import Post from "./Post";
import Message from "./Message";

function App() {
  const [IdState, setIdState] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usernameFade, setUsernameFade] = useState([])
  const [NameState, setNameState] = useState([])

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<LoginForm userFade={usernameFade} setUserFade={setUsernameFade} />} />
        <Route path="/reg" element={<RegForm userFade={usernameFade} setUserFade={setUsernameFade} />} />
        <Route path="/Fadebook" element={<Fadebook userFade={usernameFade} setUserFade={setUsernameFade} />} />
        <Route path="/Post" element={<Post userFade={usernameFade} setUserFade={setUsernameFade} />} />
        <Route path="/Message" element={<Message userFade={usernameFade} setUserFade={setUsernameFade} />} />
      </Routes>
    </div>
  );
}

export default App;
