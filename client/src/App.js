import logo from './logo.svg';
import './App.css';
import Landings from './pages/Landing/Landingspam';
import Login from './pages/Authentication/Login/Login';
import { Routes, Route } from "react-router-dom";
import Register from './pages/Authentication/Register/Register';
// import Header from './components/Header';
import Explore from './pages/User/Explore';
import Roadmap from './pages/User/Roadmap';
// import Profile from './pages/User/Profile';
import Questionnaire from './pages/User/Questionnaire'
import CoursesPage from './pages/User/CoursesPage';
import {useState, useEffect} from "react";

function App() {

  const [data,setData] = useState({

  });
  useEffect(() => {
    fetch("/").then((res) =>
        res.json().then((data) => {
            setData({
            });
        })
    );
}, []);

  return (
    <div className="App font-main h-full overflow-x-hidden">
      <Routes>
        <Route path="/" element = {<Landings />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
        <Route path="/explore" element = {<Explore />} />
        <Route path="/roadmap" element = {<Roadmap />} />
        <Route path="/questionnaire" element = {<Questionnaire />} />
        <Route path="/courses" element = {<CoursesPage />} />


      </Routes>
    </div>

  );
}

export default App;
