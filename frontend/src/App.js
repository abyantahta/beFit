import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Food from './pages/Food';
import './App.scss';
import Header from './components/Header';

function App() {
  return (  
    <>
      <Router>
          {/* <Header /> */}
          <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/login' exact element={<Login />}/>
            <Route path='/register' exact element={<Register />}/>
            <Route path='/food' exact element={<Food />}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
