import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Father from './components/father/father';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/index' component={Father} />
        <Redirect from='/' to='/index' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
