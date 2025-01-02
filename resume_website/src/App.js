import './App.css';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Skills from './pages/Skills.js';
import Experience from './pages/Experience.js'
import Empty from './pages/Empty.js';

import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div class="App">
      <div id="body_main">
        <div id="main_left">
          <Link to="/home" id={isActive("/home") ? "active-link" : ""}><p>Home</p></Link>
          <Link to="/about" id={isActive("/about") ? "active-link" : ""}><p>About</p></Link>
          <Link to="/skills"id={isActive("/skills") ? "active-link" : ""}><p>Skills</p></Link>
          <Link to="/experience"id={isActive("/experience") ? "active-link" : ""}><p>Experience</p></Link>
        </div>
        <div id="main_right">
          <Routes>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/skills" element={<Skills />}></Route>   
            <Route exact path="/experience" element={<Experience />}></Route>             
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/*"element={<Empty />}/>
          </Routes>
        </div>
      </div>
      <div id="body_footer">
        <div id="footer_left">
          <p>123-456-7890</p>
          <p>email_name@email.com</p>
          <p><a href="https://github.com/rhonvyramos" title="This leads to my GitHub page!" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
        <div id="footer_right"></div>
      </div>
    </div>
  );
}

export default App;
