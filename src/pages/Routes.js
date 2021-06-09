import React from "react";
import "./Routes.css";
import ScrolltoTop from "../components/ScrolltoTop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./homepage";
import SearchPage from "./searchpage";
import ItemPage from "./itempage";
import Payment from './payment';
import Login from "./login";
import Signup from "./signup";
function PaymentPage(){
    return(
        <Router>
        <ScrolltoTop />
        <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/search" exact component={SearchPage} />
        <Route path="/item" exact component={ItemPage} />
        <Route path="/payment" exact component={Payment} />
        <Route path="/signin" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        </Switch>
      </Router>
    )

}

export default PaymentPage;