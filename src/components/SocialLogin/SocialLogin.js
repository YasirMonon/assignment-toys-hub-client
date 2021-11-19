import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../store/auth-context";
import classes from "./SocialLogin.module.css";
const SocialLogin = ({ redirectPath }) => {
  const history = useHistory();
  const { signInUsingGoogle, signInUsingFacebook } = useContext(AuthContext);

  const handleGoogleLogin = async () => {
    try {
      await signInUsingGoogle();

      history.push(redirectPath.pathname);
    } catch (error) {}
  };

  const handleFacebookLogin = async () => {
    try {
      await signInUsingFacebook();
      history.push(redirectPath.pathname);
    } catch (error) {}
  };
  return (
    <>
      <div className={classes.separator}>
        <b>Or</b>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.button} onClick={handleGoogleLogin}>
          <div className={classes.icon}>
            <i className="fab fa-google"></i>
          </div>
          <span>Login With Google</span>
        </div>
        <div className={classes.button} onClick={handleFacebookLogin}>
          <div className={classes.icon}>
            <i className="fab fa-facebook-f"></i>
          </div>
          <span>Login With Facebook</span>
        </div>

        <div className={classes.button}>
          <div className={classes.icon}>
            <i className="fab fa-instagram"></i>
          </div>
          <span>Login With Instagram</span>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
