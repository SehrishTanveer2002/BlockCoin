import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Bank from './pages/Bank'; 

const App = () => {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bank" element={<Bank />} />
      </Routes>
    </Router>
  );
};

export default App;




