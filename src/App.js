import React from "react";
import { createBrowserHistory } from "history";
import { Switch, Router } from "react-router";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
import {
  _account,
  _add,
  _admin,
  _bill,
  _cart,
  _cate,
  _detail,
  _edit,
  _home,
  _login,
  _order,
  _product,
  _register,
} from "./utils/Utils/ConfigPath";
import Home from "./pages/Client/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AdminTemplate from "./template/AdminTemplate/AdminTemplate";
import QuanLyAccount from "./pages/Admin/Account/QuanLyAccount";
import ThemAccount from "./pages/Admin/Account/ThemAccount";
import SuaAccount from "./pages/Admin/Account/SuaAccount";
import QuanLyCategory from "./pages/Admin/Category/QuanLyCategory";
import AddCategory from "./pages/Admin/Category/AddCategory";
import UpdateCategory from "./pages/Admin/Category/UpdateCategory";
import QuanLyProduct from "./pages/Admin/Product/QuanLyProduct";
import ThemProduct from "./pages/Admin/Product/ThemProduct";
import SuaProduct from "./pages/Admin/Product/SuaProduct";
import Cart from "./pages/Client/Cart/Cart";
import QuanLyBill from "./pages/Admin/Bill/QuanLyBill";
import DetailBill from "./pages/Admin/Bill/DetailBill";
import ProductDetail from "./pages/Client/Product/ProductDetail";
import UpdateAccount from "./pages/Client/Account/UpdateAccount";
import OrderHistory from "./pages/Client/Account/OrderHistory";
import ProductList from "./pages/Client/Product/ProductList";
import PaymentSuccess from "./component/Payment/PaymentSuccess";
import PaymentError from "./component/Payment/PaymentError";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Dashboard from "./pages/Admin/Dashboard";

export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/success" exact component={PaymentSuccess} />
        <Route path="/error" exact component={PaymentError} />
        <HomeTemplate path={_home} exact Component={Home} />
        <HomeTemplate path={_cart} exact Component={Cart} />
        <HomeTemplate path={`${_product}/:id`} exact Component={ProductList} />
        <HomeTemplate path={`${_detail}/:id`} exact Component={ProductDetail} />
        <HomeTemplate
          path={`${_account}${_edit}`}
          exact
          Component={UpdateAccount}
        />
        <HomeTemplate path={`${_order}/:id`} exact Component={OrderHistory} />

        <HomeTemplate path={_login} exact Component={Login} />
        <HomeTemplate path={_register} exact Component={Register} />

        <AdminTemplate
          path={`${_admin}${_account}`}
          exact
          Component={QuanLyAccount}
        />
        <AdminTemplate path={`${_admin}`} exact Component={Dashboard} />
        <AdminTemplate
          path={`${_admin}${_account}${_add}`}
          exact
          Component={ThemAccount}
        />
        <AdminTemplate
          path={`${_admin}${_account}${_edit}/:id`}
          exact
          Component={SuaAccount}
        />

        <AdminTemplate
          path={`${_admin}${_cate}`}
          exact
          Component={QuanLyCategory}
        />
        <AdminTemplate
          path={`${_admin}${_cate}${_add}`}
          exact
          Component={AddCategory}
        />
        <AdminTemplate
          path={`${_admin}${_cate}${_edit}/:id`}
          exact
          Component={UpdateCategory}
        />

        <AdminTemplate
          path={`${_admin}${_product}`}
          exact
          Component={QuanLyProduct}
        />
        <AdminTemplate
          path={`${_admin}${_product}${_add}`}
          exact
          Component={ThemProduct}
        />
        <AdminTemplate
          path={`${_admin}${_product}${_edit}/:id`}
          exact
          Component={SuaProduct}
        />

        <AdminTemplate
          path={`${_admin}${_bill}`}
          exact
          Component={QuanLyBill}
        />
        <AdminTemplate
          path={`${_admin}${_bill}${_detail}/:id`}
          exact
          Component={DetailBill}
        />
      </Switch>
    </Router>
  );
}
