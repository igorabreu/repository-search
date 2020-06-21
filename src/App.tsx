import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from 'pages/Search';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/:term">
        <Search />
      </Route>
    </Switch>
  </Router>
);

export default App;
