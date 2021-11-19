import React from "react";
import classes from "./ToyDetailsBanner.module.css";
import Spinner from "../Spinner/Spinner";
const ToyDetailsBanner = ({ toy }) => {
  //Split toy name
  const nameArray = toy.name;
  const image = toy.imageCover?.startsWith("toy-")
    ? `url('../toys/${toy.imageCover}')`
    : `url('${toy.imageCover}')`;

  //Show spinner when toy is not loaded
  if (!toy.name) {
    return <Spinner />;
  }
  return (
    <section className={classes.toyBanner} style={{ backgroundImage: image }}>
      <div className="heading-box">
        <h1 className={classes["heading-tertirary"]}>
          <span>
            {nameArray}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default ToyDetailsBanner;
