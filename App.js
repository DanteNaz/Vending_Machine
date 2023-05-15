import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';

import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Ramen from './Ramen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<div> <VendingMachine/> <NavBar/> </div>} />

          <Route exact path="/chips" element={<Chips />} />

          <Route exact path="/soda" element={<Soda />} />

          <Route exact path="/ramen" element={<Ramen />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;