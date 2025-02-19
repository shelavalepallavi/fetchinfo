import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProvider from "./context/usercontext";
import UserDetails from "./components/userDetails";

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
