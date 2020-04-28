import React from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Work from './pages/Work/Work'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
