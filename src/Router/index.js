import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ChampionDetail from '../screens/ChampionDetail';
import Home from '../screens/Home';

const routes = [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: ChampionDetail,
    path: '/detail/:championName'
  }
];

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((d, i) => (
          <Route key={i} {...d} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
