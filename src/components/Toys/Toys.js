import React, { useEffect, useState } from "react";
import ToyButton from "../ToyButton/ToyButton";
import classes from "./Toys.module.css";
import { MdOutlineDeliveryDining, MdHiking } from "react-icons/md";
import { FaBoxes, FaUserFriends } from "react-icons/fa";
import Spinner from "../Spinner/Spinner";
import { useHistory } from "react-router";
import Rating from "react-rating";
import NavbarMenu from "../Header/Navbar";
import { Fade } from "react-awesome-reveal";

const Toys = () => {

  const [toys, setToys] = useState([]);
  const history = useHistory();
  useEffect(() => {
    //Load all toys from server
    const loadToys = async () => {
      const response = await fetch(
        "https://toys-hub.herokuapp.com/toys/"
      );
      const responseData = await response.json();
      setToys(responseData);
    };
    loadToys();
  }, []);

  return (
    <>
      <section className={classes.toys} id="toys">
        <div className="container">
          <h2 className="section-heading" style={{ paddingTop: "45px" }}>OUR POPULAR TOYS </h2>
          {/* If toy is not loaded then show spinner */}
          {!toys.length && <Spinner />}

          <div className="row gy-5">
            {toys.slice(0, 6).map((toy) => {
              const image = toy.imageCover?.startsWith("toy-")
                ? `toys/${toy.imageCover}`
                : toy.imageCover;
              return (
                <div className="col-lg-4 col-md-6" key={toy._id}>
                  <Fade>
                    <div className={classes["card"]}>
                      <div className={classes["card__header"]}>
                        <div className={classes["card__picture"]}>
                          <div className={classes["card__picture-overlay"]}>
                            &nbsp;
                          </div>
                          <img
                            src={image}
                            alt={toy.name}
                            className={classes["card__picture-img"]}
                          />
                        </div>

                        <h3>
                          <span disabled style={{
                            backgroundColor: "#679cc1",
                            color: "white",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            fontWeight: "500px",
                            display: "inline-block",
                            padding: "0.5rem 1.5rem",
                            borderRadius: "0,0,0,10rem",
                            transition: "all 0.2s",
                            position: "relative",
                            fontSize: "18px",
                            border: "none",
                            width: "auto",
                            cursor: "default",
                            boxShadow: "0 15px 40px #4e4e4e80"
                          }}
                          >{toy.name}</span>
                        </h3>
                      </div>

                      <div className={classes["card__details"]}>
                        <p className={classes["card__text"]}>{toy.summary}</p>
                        <div className={classes["card__data"]}>
                          <FaBoxes className={classes["card__icon"]} />

                          <span>{toy.availability}</span>
                        </div>
                        <div className={classes["card__data"]}>
                          <MdOutlineDeliveryDining className={classes["card__icon"]} />
                          <span>{toy.deliveryDuration} Days</span>
                        </div>
                      </div>

                      <div className={classes["card__footer"]}>
                        <p>
                          <span className={classes["card__footer-value"]}>
                            ${toy.price}
                          </span>
                          <span className={classes["card__footer-text"]}>
                            Per Item
                          </span>
                        </p>
                        <p className={classes["card__ratings"]}>
                          <span className={classes["card__footer-value"]}>
                            {toy.ratingsAverage} / 5
                          </span>
                          <span className={classes["card__footer-text"]}>
                            <span className={classes.rating}>
                              <Rating
                                emptySymbol="far fa-star icon"
                                fullSymbol="fas fa-star icon"
                                initialRating={toy.ratingsAverage}
                                readonly
                              />
                            </span>
                          </span>
                        </p>
                        <ToyButton
                          color="green"
                          size="lg"
                          onClick={() => history.push(`/toys/${toy._id}`)}
                        >
                          Book Now
                        </ToyButton>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>

  );
};

export default Toys;
