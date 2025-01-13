import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import CodeArea from "./Components/CodeArea";
import Particle from "./Components/Particles";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Account from "./Components/Account";
import { Box, useMediaQuery } from "@chakra-ui/react";

function App() {
  const [isBelow480px] = useMediaQuery("(max-width: 480px)");
  const [isBelow768px] = useMediaQuery("(max-width: 768px)");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  return (
    <Router>
      <Box id="App">
        <Particle />
        <Navbar isBelow768px={isBelow768px} isBelow480px={isBelow480px} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Signup setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} setUserEmail={setUserEmail} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} setUserEmail={setUserEmail} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />} />
          <Route path="/codearea" element={<CodeArea isBelow480px={isBelow480px} isBelow768px={isBelow768px} />} />
          <Route path="/account" element={<Account email={userEmail} />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;