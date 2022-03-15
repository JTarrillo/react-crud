import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar'
import Users from './components/Users'
import UserCreate from './components/UserCreate'
import UserUpdate from './components/UserUpdate'
export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/'element={<Users/>} />
          <Route path='/create' element={<UserCreate/>} />
          <Route path='/update/:id' element={<UserUpdate/>} />
        </Routes>
      </div>
    </Router>
  );
}