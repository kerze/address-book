import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navigator from './Navigator';
import List from './list';
import Create from './create';
import Edit from './edit';

const Router = () => (
  <BrowserRouter>
    <div>
      <Navigator />
      <Switch>
        <Redirect exact from="/" to="/list" />
        <Route path="/list" component={List} />
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
