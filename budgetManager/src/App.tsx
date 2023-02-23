import { SyntheticEvent, useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './scenes/Home';
import Navbar from './scenes/Navbar';
import Profile from './scenes/Profile';

//TODO
//Add navigation bar for signin and signout

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
