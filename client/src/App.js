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
import { Toaster } from 'react-hot-toast';
import { ContextProvider } from './context/userContext';


function App() {
  const location = useLocation()
  return (
    <ContextProvider>
      {
        location.pathname !== '/login' && location.pathname !== '/register' && location.pathname !== '/forgot' ? (<Navbar />) : null
      }
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
        // Define default options
        className: '',
        duration: 5000,
        style: {
          background: '#363636',
          color: '#fff',
        },

        // Default options for specific types
        success: {
          duration: 3000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
      }}
    />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
     {
      location.pathname !== '/' ? ( <Footer />) : null
     }
    </ContextProvider>
  );
}

export default App;
