import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Footer from './components/Footer';
import Header from './components/Header';


import Home from './pages/Home';
import Location from './pages/Location';
import WebDesign from './pages/WebDesign';
import AboutUs from './pages/AboutUs';
import AppDesign from './pages/AppDesign';
import Contact from './pages/Contact';
import GraphicDesign from './pages/GraphicDesign';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/webdesign" component={WebDesign} />
          <Route path="/appdesign" component={AppDesign} />
          <Route path="/graphicdesign" component={GraphicDesign} />
          <Route path="/about" component={AboutUs} />
          <Route path="/location" component={Location}/>
          <Route path="/contact" component={Contact}/>
        </Switch>        
        <Footer />
      </Router>
    </>
  );
}

export default App;
