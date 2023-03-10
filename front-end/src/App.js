import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login/Login'; // alterado pro evaluator
import Register from './pages/Register/Register'; // alterado pro evaluator
import AdminManage from './pages/Roles/Admin/AdminManage';
import Checkout from './pages/Roles/Customer/Checkout/checkout'; // alterado pro evaluator
import MyOrders from './pages/Roles/Customer/Orders/MyOrders';
import OrdersId from './pages/Roles/Customer/Orders/OrderId';
import Products from './pages/Roles/Customer/Products';
import SellerId from './pages/Roles/Seller/SellerId';
import SellerOrders from './pages/Roles/Seller/SellerOrders';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ Products } />
      <Route path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/orders" component={ MyOrders } />
      <Route path="/customer/orders/:id" component={ OrdersId } />
      <Route exact path="/seller/orders" component={ SellerOrders } />
      <Route path="/seller/orders/:id" component={ SellerId } />
      <Route path="/admin/manage" component={ AdminManage } />
    </Switch>
  );
}

export default App;
