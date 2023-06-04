import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import Food from './pages/Food';
import FoodDetails from './pages/FoodDetails';
import './App.scss';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  return (  
    <>
      <Router>
          <Header/>
          <Routes>
            <Route path='/' exact element={<Landing />}/>
            <Route path='/login' exact element={<Login />}/>
            <Route path='/register' exact element={<Register />}/>
            <Route path='/food' exact element={<Food/>}/>
            <Route path='/food/:id' exact element={<FoodDetails/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
