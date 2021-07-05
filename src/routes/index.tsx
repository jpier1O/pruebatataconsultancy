import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import Home from '../pages/home/Home';

// import {
//   AddRelatives,
//   Plans,
//   Thanks,
// } from './pages/';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/agregar-parientes' component={AddRelatives} />
        <Route exact path='/planes' component={Plans} />
        <Route exact path='/gracias' component={Thanks} /> */}
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
