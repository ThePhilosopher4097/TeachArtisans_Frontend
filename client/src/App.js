import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing/Landing';
import Login from './pages/Authentication/Login/Login';
import { Routes, Route } from "react-router-dom";
import Register from './pages/Authentication/Register/Register';

function App() {
  return (
    <div className="App font-main h-full overflow-x-hidden">
      <Routes>
        <Route path="/" element = {<Landing />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
      </Routes>
    </div>

  );
}

export default App;
