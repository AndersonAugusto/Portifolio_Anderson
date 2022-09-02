import React from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes />
    </BrowserRouter>
  );
}

export default App;
