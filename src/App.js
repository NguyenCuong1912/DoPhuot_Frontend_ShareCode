import React from 'react'
import { createBrowserHistory } from 'history';
import { Switch, Router } from 'react-router';
import HomeTemplate from './template/HomeTemplate/HomeTemplate';
import { _account, _add, _admin, _edit, _home, _login, _register } from './utils/Utils/ConfigPath';
import Home from './pages/Client/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AdminTemplate from './template/AdminTemplate/AdminTemplate';
import QuanLyAccount from './pages/Admin/Account/QuanLyAccount';
import ThemAccount from './pages/Admin/Account/ThemAccount';
import SuaAccount from './pages/Admin/Account/SuaAccount';



export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={_home} exact Component={Home} />
        <HomeTemplate path={_login} exact Component={Login} />
        <HomeTemplate path={_register} exact Component={Register} />


        <AdminTemplate path={`${_admin}${_account}`} exact Component={QuanLyAccount} />
        <AdminTemplate path={`${_admin}${_account}${_add}`} exact Component={ThemAccount} />
        <AdminTemplate path={`${_admin}${_account}${_edit}/:id`} exact Component={SuaAccount} />


      </Switch>
    </Router>
  )
}

