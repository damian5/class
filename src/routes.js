import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Wrapper from './components/wrapper/wrapper';

const App = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/index' component={Wrapper} />
          <Redirect from='/' to='/index' />
        </Switch>
      </BrowserRouter>
    );
}

export default App;
