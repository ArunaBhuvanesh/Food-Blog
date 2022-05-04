import React from 'react';
import Home from './pages/Home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/single/single';
import Write from './pages/Write/write';
import Settings from './pages/settings/settings';
import Login from './pages/Login/login';
import Register from './pages/Register/Register';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
function App() {
  const user= true;
  return (
    <Router>
     <TopBar/>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route path="/register" 
       element={user? <Register/>:<Home/>}/>
       <Route path="/login" element={user? <Login/>:<Home/>}/>
       <Route path="/Write" element={user? <Write/>:<Register/>}/>
       <Route path="/post/:postId" element={user? <Single/>:<Register/>}/>
       <Route path="/Settings" element={user? <Settings/>:<Register/>}/>
     </Routes>
    </Router>
  );
}

export default App;
