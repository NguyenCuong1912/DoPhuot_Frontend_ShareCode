import React from 'react'
import { createBrowserHistory } from 'history';
import { Switch, Router } from 'react-router';
import HomeTemplate from './template/HomeTemplate/HomeTemplate';
import { _home } from './utils/Utils/ConfigPath';
import Home from './pages/Client/Home/Home';



export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={_home} exact Component={Home} />
      </Switch>
    </Router>
  )
}

