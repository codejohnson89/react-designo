import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Switch>
        </Switch>
        <Header />
        <Footer />
      </Router>
    </>
  );
}

export default App;
