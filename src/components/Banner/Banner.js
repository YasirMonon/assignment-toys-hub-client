import React from "react";
import ToyButton from "../ToyButton/ToyButton";
import classes from "./Banner.module.css";
import logo from "../../images/logo-white.png";
import { HashLink } from "react-router-hash-link";
import { Slide } from "react-awesome-reveal";

const Banner = () => {
  /* Banner Section */
  return (
    <Slide>
      <section className={classes.banner}>
        <div className={classes["banner-content"]}>
          <h4><span><img src={logo} alt="logo" to="/" width="50px" /></span></h4>
          <h1>Childhood is Awesome</h1>
          <h3>Make it Memorable With Us, For Babies</h3>
          <ToyButton color="white" size="lg">
            <HashLink smooth to="/explore">
              Explore our Toys
            </HashLink>
          </ToyButton>
        </div>
      </section>
    </Slide>
  );
};

export default Banner;
