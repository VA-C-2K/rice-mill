import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AddNewPage from './pages/AddNewPage';
import NavBar from './components/NavBar';
import { UserState } from './context/user-context';

function App() {
  const { user } = UserState();
  
  return (
    <div className="App">
      {user &&
        <div className="navbar">
          <NavBar/>
       </div>
       }
       <div className="main">
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/home" element={<HomePage />} exact/>
          <Route path="/add" element={<AddNewPage />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
