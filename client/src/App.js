import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing/Landing';
import Login from './pages/Authentication/Login/Login';
import { Routes, Route } from "react-router-dom";
import Register from './pages/Authentication/Register/Register';
// import Header from './components/Header';
import Explore from './pages/User/Explore';
import Roadmap from './pages/User/Roadmap';
// import Profile from './pages/User/Profile';
import Questionnaire from './pages/User/Questionnaire'

function App() {
  return (
    <div className="App font-main h-full overflow-x-hidden">
      <Routes>
        <Route path="/" element = {<Landing />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
        <Route path="/explore" element = {<Explore />} />
        <Route path="/roadmap" element = {<Roadmap />} />
        <Route path="/questionnaire" element = {<Questionnaire />} />


      </Routes>
    </div>

  );
}

export default App;
