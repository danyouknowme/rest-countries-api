import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Country from './pages/Country';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/:country">
            <Country />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
