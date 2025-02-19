import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";
import UserProvider from "./context/usercontext";

const App = () => {
  return (
    <>
     <UserProvider>
     <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </Router>
     </UserProvider>
    </>
  );
};

export default App;
