import React,{useState,useEffect} from 'react';
import './App.css';
import { Route,Routes,Router } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import TerminZakazivanje from './components/terminZakazivanje/TerminZakazivanje';
import Header from './components/header/Header';
import MojiTermini from './components/mojiTermini/MojiTermini';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/zakazi' element={<TerminZakazivanje />} />
          <Route path='/login' element={<Login />} />
          <Route path='/mojiTermini' element={<MojiTermini />} />
        </Routes>
    </div>
  );
}

export default App;
