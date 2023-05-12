import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ProfilePage from './pages/ProfilePage';
import Register from './pages/Register';
import Home from './pages/Home';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation()
  return (
    <>
      {
        location.pathname !== '/' && location.pathname !== '/register' && location.pathname !== '/forgot' ? (<Navbar />) : null
      }
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
     {
      location.pathname !== '/' ? ( <Footer />) : null
     }
    </>
  );
}

export default App;
