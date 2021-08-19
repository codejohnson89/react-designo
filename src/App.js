import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Footer from './components/Footer';
import Header from './components/Header';
import AppDesign from './pages/AppDesign';
import GraphicDesign from './pages/GraphicDesign';

import Home from './pages/Home';
import WebDesign from './pages/WebDesign';

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
        </Switch>        
        <Footer />
      </Router>
    </>
  );
}

export default App;
