import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Offers from './pages/Offers';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Offers' element={<Offers/>}/>
          <Route path='/Sign-in' element={<Signin/>}/>
          <Route path='/Sign-up' element={<Signup/>}/>
          <Route path='/Forgot-password' element={<ForgotPassword/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
