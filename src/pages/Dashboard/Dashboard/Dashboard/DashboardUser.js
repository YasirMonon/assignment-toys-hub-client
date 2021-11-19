import React, { useContext, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

    useRouteMatch
} from "react-router-dom";

import { NavLink, useHistory } from "react-router-dom";
import ManageAllOrders from "../../ManageAllOrders/ManageAllOrders";
import MakeAdmin from "../../MakeAdmin/MakeAdmin";
import Pay from "../../Pay/Pay";

import AddNewToy from "../../AddNewToy/AddNewToy";
import MyOrders from "../../MyOrders/MyOrders";
import AddNewReview from "../../AddNewReview/AddNewReview";
import './Dashboard.css';
import { AuthContext } from "../../../../store/auth-context";
import useFirebase from "../../../../hooks/useFirebase";
import { FaBox } from "react-icons/fa";
import PrivateRoute from "../../../../components/PrivateRoute";
import DashboardHome from "../../DashboardHome/DashboardHome";

const DashboardUser = () => {


    const { user, logout } = useContext(AuthContext);

    let { path, url } = useRouteMatch();
    const { admin } = useFirebase();

    return (
        <div>
            <div className="container-fluid fixed-top bg-dark pt-3">
                <div className="row">
                    <div className="col-xl-2 col-sm-3 col-0 collapse show sidebar">
                        <div>
                            <h3 style={{ color: "white" }}>Dash Board</h3>
                        </div>
                    </div>
                    <div className="col px-5 ms-5" style={{ textAlign: "right" }}>
                        <div>
                            <button
                                className="text-white p-2"
                                style={{
                                    backgroundColor: "#679cc1",
                                    border: 0,
                                    borderRadius: 50,
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                }}
                                onClick={logout}
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-5">
                <div className="row vh-100 flex-nowrap">
                    <div className="col-xl-2 col-sm-3 col-auto collapse show sidebar bg-dark text-white px-0" style={{
                        display: "table-cell",
                        height: "fit-content"
                    }}>
                        <ul
                            className=" nav flex-column flex-nowrap text-truncate navbar-dark bg-dark mx-auto position-fixed pt-2 vh-100"
                            id="sidebar"
                        >
                            <NavLink to="/" style={{ marginTop: 80 }}>
                                <li className="nav-item">
                                    <a className="nav-link " href="/">
                                        {" "}
                                        <i className="fa fa-home "> </i>
                                        <span className="ml-1 d-none d-sm-inline">&nbsp; Home</span>
                                    </a>
                                </li>
                            </NavLink>
                            <NavLink to={`${url}`}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-cog"></i>
                                        <span className="ml-1 d-none d-sm-inline">&nbsp; Dashboard</span>
                                    </a>
                                </li>
                            </NavLink>



                            <NavLink to={`${url}/reviews`}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i class="fas fa-plus"></i>
                                        <span className="ml-1 d-none d-sm-inline">&nbsp; Add A Review</span>
                                    </a>
                                </li>
                            </NavLink>


                            <NavLink to={`${url}/pay`}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i class="fas fa-plus"></i>{" "}
                                        <span className="ml-1 d-none d-sm-inline">&nbsp; Pay</span>
                                    </a>
                                </li>
                            </NavLink>


                            <NavLink to={`${url}/myOrders`}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i class="fas fa-plus"></i>{" "}
                                        <span className="ml-1 d-none d-sm-inline">&nbsp; My Orders</span>
                                    </a>
                                </li>
                            </NavLink>

                        </ul>
                    </div>
                    <div className="col py-3">
                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <PrivateRoute path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </PrivateRoute>

                            <PrivateRoute path={`${path}/reviews`}>
                                <AddNewReview></AddNewReview>
                            </PrivateRoute>
                            <PrivateRoute path={`${path}/pay`}>
                                <Pay></Pay>
                            </PrivateRoute>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardUser;