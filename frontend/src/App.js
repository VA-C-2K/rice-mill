import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import CustomerPage from './pages/CustomerPage';

function App() {
  return (
    <div className="App">
      {JSON.parse(localStorage.getItem("userInfo")) &&
        <div className="navbar">
          <Navbar/>
       </div>
       }
       <div className="main">
        <Routes>
          <Route path="/" element={<AuthPage />} exact/>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/customer" element={<CustomerPage />}/>
        </Routes>
    </div>
    </div>
  );
}

export default App;
