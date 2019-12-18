import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LeftMenu from '../components/LeftMenu';

import Champions from '../screens/Champions';
import ChampionDetail from '../screens/ChampionDetail';
import Home from '../screens/Home';
import LiveGame from '../screens/LiveGame';
import SearchSummoner from '../screens/SearchSummoner';
import SummonerDetail from '../screens/SummonerDetail';

const routes = [
  {
    component: LiveGame,
    path: '/live-game/:summonerName'
  },
  {
    component: SummonerDetail,
    path: '/summoner-detail/:summonerName'
  },
  {
    component: SearchSummoner,
    path: '/search-summoner'
  },
  {
    component: ChampionDetail,
    path: '/champions/details/:championName'
  },
  {
    component: Champions,
    path: '/champions'
  },
  {
    component: Home,
    path: '/'
  }
];

function Router() {
  return (
    <BrowserRouter>
      <Fragment>
        <LeftMenu />
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default Router;
