import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar.jsx';
import About from './components/about/About.jsx';
import Education from './components/Education/Education.jsx';
import Interest from './components/skills/Interest.jsx';
import Pricing from './components/pricing/pricing.jsx';
import Projects from './components/Projects/Projects.jsx';
import CarouselImages from './components/Carousel/Carousel.jsx';
import What from './components/what/what.jsx';
import Contact from './components/contact/contact.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <div className='side'>
            <nav className='navbar side navbar-expand-lg navbar-light p-0'>
              <div className='navbar-collapse' id='navbarSupportedContent'>
                <Sidebar />
              </div>
            </nav>
          </div>
          <div className='main'>
            <div className='carous'>
              <CarouselImages />
            </div>
            <About />
            <Education />
            <Interest />
            <What />
            <Pricing />
            <Contact />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
