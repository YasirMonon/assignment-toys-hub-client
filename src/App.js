import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect, } from "react-router-dom";
import { AuthContext } from "./store/auth-context";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
//Pages
import Header from "./components/Header/Header";
import AddNewToy from "./pages/Dashboard/AddNewToy/AddNewToy";
import Home from "./pages/Home/Home";
import ToyExplore from "./components/ToyExplore/ToyExplore";
import ManageAllOrders from "./pages/Dashboard/ManageAllOrders/ManageAllOrders";

import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ToyDetails from "./pages/ToyDetails/ToyDetails";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound/NotFound";
import AddNewReview from "./pages/Dashboard/AddNewReview/AddNewReview";

import MyOrders from "./pages/Dashboard/MyOrders/MyOrders";
import DashboardAdmin from "./pages/Dashboard/Dashboard/Dashboard/DashboardAdmin";
import DashboardUser from "./pages/Dashboard/Dashboard/Dashboard/DashboardUser";
const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/toys/:toyId">
            <ToyDetails />
          </PrivateRoute>
          <Route path="/explore">
            <ToyExplore />
          </Route>
          {/*           
          <PrivateRoute path="/reviews/:reviewId">
            <ToyDetails />
          </PrivateRoute>
          
          <PrivateRoute path="/myOrders">
            <MyOrders />
          </PrivateRoute>
          <PrivateRoute path="/manageOrders">
            <ManageAllOrders />
          </PrivateRoute>
          <PrivateRoute path="/add">
            <AddNewToy />
          </PrivateRoute>
          <PrivateRoute path="/reviews">
            <AddNewReview />
          </PrivateRoute>
           */}
          <PrivateRoute path="/dashboardAd">
            <DashboardAdmin />
          </PrivateRoute>
          <PrivateRoute path="/dashboardUser">
            <DashboardUser />
          </PrivateRoute>
          {/* Redirect user if user already login */}
          <Route path="/login">
            {user.email ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/register">
            {user.email ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
