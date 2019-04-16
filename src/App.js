import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import People from './components/People';
import Test from './components/Test';
import Clubs from './components/Clubs';
import Time from './components/Time';

function App() {
  return(
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/people" component={People}/>
          <Route path="/clubs" component={Clubs}/>
          <Route path="/test" component={Test}/>
          <Route path="/time" component={Time}/>

        </div>
      </Router>
  );
}

export default App;
