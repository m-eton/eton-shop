import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopPage from "../components/ShopPage";
import CartPage from "../components/CartPage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <div className="layout">
      <Switch>
        <Route path="/" component={ShopPage} exact={true} />
        <Route path="/cart" component={CartPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
