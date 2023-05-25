import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import './App.css';

function App() {
  return (  
    <>
      <Router>
          <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/login' exact element={<Login />}/>
            <Route path='/register' exact element={<Register />}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
