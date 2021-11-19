import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../store/auth-context";

import classes from "./Header.module.css";
import ToyButton from "../ToyButton/ToyButton";
import logo from "../../images/logo-white.png";
import NavbarMenu from "./Navbar";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const history = useHistory();
  /* Navbar  */
  return (
    <header className="fixed-top">
    </header>
  );
};

export default Header;
