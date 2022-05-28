// Import dependencs
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Import de pages e components
import Home from './pages/Home';
import Projects from './pages/Projects';
import Me from './pages/Me';

// Import do CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/projetos" render={(props) => <Projects {...props} />} />
        <Route path="/historia" render={(props) => <Me {...props} />} />
      </BrowserRouter>
    );
  }
}

export default App;
