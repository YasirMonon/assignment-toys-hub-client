import React, { useContext, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

    useRouteMatch
} from "react-router-dom";

import { NavLink, history, useHistory } from "react-router-dom";
import ManageAllOrders from "../../ManageAllOrders/ManageAllOrders";
import MakeAdmin from "../../MakeAdmin/MakeAdmin";


import AddNewToy from "../../AddNewToy/AddNewToy";

import './Dashboard.css';
import { AuthContext } from "../../../../store/auth-context";
import useFirebase from "../../../../hooks/useFirebase";

import DashboardHome from "../../DashboardHome/DashboardHome";
import ManageToys from "../../ManageToys/ManageToys";
import ToyButton from "../../../../components/ToyButton/ToyButton";

const DashboardAdmin = () => {


    const { user, logout } = useContext(AuthContext);

    let { path, url } = useRouteMatch();
    const { admin } = useFirebase();

    return (
        <div>
            <div className="container-fluid fixed-top bg-light pt-3">
                <div className="row">
                    <div className="col-xl-2 col-sm-3 col-0 collapse show sidebar">
                        <div>
                            <h3 style={{ color: "#679cc1" }}>Dash Board</h3>
                        </div>
                    </div>
                    <div className="col px-5 ms-5" style={{ textAlign: "right" }}>
                        <div>
                            <ToyButton
                                onClick={logout}
                                color="green"
                            >
                                Log Out
                            </ToyButton>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-5 link-try">
                <div className="row vh-100 flex-nowrap">
                    <div className="col-xl-2 col-sm-3 col-auto collapse show sidebar bg-dark px-0" style={{
                        textDecoration: "none",
                        color: "#679cc1",
                        lineHeight: "2.5",
                        display: "table-cell",
                        height: "fit-content"
                    }}>

                        <ul
                            className=" nav flex-column flex-nowrap text-truncate navbar-dark bg-light mx-auto position-fixed pt-2 vh-100"
                            id="sidebar"
                        >
                            <NavLink className="nav-link" to="/" style={{
                                marginTop: "80"
                            }}>
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
                                        <span className="ml-1 d-none d-sm-inline" style={{
                                            color: "#679cc1",

                                        }}>&nbsp; Dashboard</span>
                                    </a>
                                </li>
                            </NavLink>

                            <NavLink to={`${url}/makeAdmin`}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-star"></i>
                                        <span className="ml-1 d-none d-sm-inline" style={{
                                            color: "#679cc1"
                                        }}>
                                            &nbsp; Make An Admin
                                        </span>
                                    </a>
                                </li>
                            </NavLink>

                            <NavLink to={`${url}/add`}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i class="fas fa-plus"></i>{" "}
                                        <span className="ml-1 d-none d-sm-inline" style={{
                                            textDecoration: "none",
                                            color: "#679cc1"
                                        }}>
                                            &nbsp; Add A New Toy
                                        </span>
                                    </a>
                                </li>
                            </NavLink>

                            <NavLink to={`${url}/manageOrders`}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i class="fas fa-plus"></i>{" "}
                                        <span className="ml-1 d-none d-sm-inline" style={{
                                            textDecoration: "none",
                                            color: "#679cc1"
                                        }}>
                                            &nbsp; Manage All Orders
                                        </span>
                                    </a>
                                </li>
                            </NavLink>
                            <NavLink to={`${url}/manageToys`}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i class="fas fa-plus"></i>{" "}
                                        <span className="ml-1 d-none d-sm-inline" style={{
                                            textDecoration: "none",
                                            color: "#679cc1"
                                        }}>
                                            &nbsp; Manage All Toys
                                        </span>
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
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>

                            <Route path={`${path}/add`}>
                                <AddNewToy></AddNewToy>
                            </Route>
                            <Route path={`${path}/manageOrders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </Route>
                            <Route path={`${path}/manageToys`}>
                                <ManageToys></ManageToys>
                            </Route>

                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardAdmin;