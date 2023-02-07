import { SyntheticEvent, useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { auth } from './config/firebaseSetup';
import { AuthContext } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import Home from './scenes/Home';
import Login from './scenes/Login';
import Profile from './scenes/Profile';

//TODO
//Add navigation bar for signin and signout

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
