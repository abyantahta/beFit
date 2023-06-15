import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import Food from './pages/Food';
import FoodDetails from './pages/FoodDetails';
import Article from './pages/Article';
import ArticleDetails from './pages/ArticleDetails';
import './App.scss';
import Header from './components/Header';
import { useState } from 'react';
import Workout from './pages/Workout';
import WorkoutDetails from './pages/WorkoutDetails';

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
            <Route path='/article' exact element={<Article/>}/>
            <Route path='/article/:id' exact element={<ArticleDetails/>}/>
            <Route path='/workout' exact element={<Workout/>}/>
            <Route path='/workout/:id' exact element={<WorkoutDetails/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
