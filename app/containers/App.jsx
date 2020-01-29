import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
