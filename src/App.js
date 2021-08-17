import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Footer from './components/Footer';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';

import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>        
        <Footer />
      </Router>
    </>
  );
}

export default App;
