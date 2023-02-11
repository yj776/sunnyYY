import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import GetQuote from './component/GetQuote';
import Testimonal from './component/Testimonal';
import ContactUs from './component/ContactUs';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import SYY_logo from './SYY_logo.png';

function App() {
  return (
    <div className="App">
        <div className='logo_h1'>
            <h1><img src={SYY_logo} alt = "Sigh" width = '80' /> Sunny Y&Y Moving</h1>
          </div>
          
          <Router>
          <hr></hr>
          <nav>
            <ul className='App'>
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/About_Us">About Us</Link></li>
              <li><Link to="/Get_Quote">Get Quote</Link></li>
              <li><Link to="/Testimonal">Testimonal</Link></li>
              <li><Link to="/Contact_Us">Contact Us</Link></li>
            </ul>
          </nav>
          <hr></hr>
          <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/About_Us" element={<AboutUs />} />
              <Route path="/Get_Quote" element={<GetQuote />} />
              <Route path="/Testimonal" element={<Testimonal />} />
              <Route path="/Contact_Us" element={<ContactUs />} />
            </Routes>       
          </Router>

          
          {/* <Router>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/About_Us" element={<AboutUs />} />
              <Route path="/Get_Quote" element={<GetQuote />} />
              <Route path="/Testimonal" element={<Testimonal />} />
              <Route path="/Contact_Us" element={<ContactUs />} />
            </Routes>
          </Router> */}     
         
      </div>
)}

export default App;
