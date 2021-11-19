import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../store/auth-context";

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
