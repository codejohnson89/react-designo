import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Footer from './components/Footer';
import Header from './components/Header';
import AppDesign from './pages/AppDesign';

import Home from './pages/Home';
import WebDesign from './pages/WebDesign';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/webdesign" exact component={WebDesign} />
          <Route path="/appdesign" exact component={AppDesign} />
          {/* <Route path="/graphicdesign" exact component={WebDesign} /> */}
        </Switch>        
        <Footer />
      </Router>
    </>
  );
}

export default App;
