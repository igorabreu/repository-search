import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Home, Repository } from 'pages';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/repository/:id?">
        <Repository />
      </Route>
    </Switch>
  </Router>
);

export default App;
