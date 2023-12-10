import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import './App.css'
import LoginPage from './Pages/LoginPage';
import BookingPage from './Pages/BookingPage';


function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register/" element={<LoginPage />} />
        <Route path="profile/" element={<ProfilePage />} />
        <Route path="booking/" element={<BookingPage />} />
      </Routes>
  );
}

export default App