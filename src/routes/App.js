import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Loyout } from '../components/Loyout';
import Home from '../pages/Home';
import { Login } from '../pages/Login';
import NotFound from '../pages/NotFound';
import { Register } from '../pages/Register';

const App = () => {
  return (
    <Router>
      <Loyout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Loyout>
    </Router>
  );
};

export default App;
