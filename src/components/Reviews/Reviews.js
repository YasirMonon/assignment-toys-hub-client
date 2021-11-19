import React, { useEffect, useState } from "react";
import classes from "./Reviews.module.css";
import { MdCalendarToday, MdHiking } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import Spinner from "../Spinner/Spinner";
import { useHistory } from "react-router";
import Rating from "react-rating";
import { Fade, Slide } from "react-awesome-reveal";



const Reviews = () => {
  const [Reviews, setReviews] = useState([]);
  const history = useHistory();
  useEffect(() => {
    //Load all Reviews from server
    const loadReviews = async () => {
      const response = await fetch(
        "https://toys-hub.herokuapp.com/reviews"
      );
      const responseData = await response.json();
      setReviews(responseData);
    };
    loadReviews();
  }, []);

  return (

    <>


      <section className={classes.Reviews} id="Reviews">
        <div className="container">
          <h2 className="section-heading" style={{ paddingTop: "45px" }}>Customer Review</h2>

          {/* If review is not loaded then show spinner */}

          {!Reviews.length && <Spinner />}

          <div className="row gy-5" style={{ marginBottom: "40px" }}>
            {Reviews.map((reviews) => {


              return (
                <div className="col-lg-4 col-md-6" key={reviews._id}>
                  <Slide>
                    <div className={classes["card"]}>
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
                      >
                        {reviews.name}
                      </span>
                      <div className={classes["card__details"]}>
                        <p className={classes["card__text"]}>{reviews.description}</p>
                        <div className={classes["card__data"]}>
                          <TiShoppingCart className={classes["card__icon"]} /><span><strong>Bought : {reviews.deliveryDuration} Items </strong></span>
                        </div>
                      </div>


                      <div className={classes["card__footer"]}>
                        <p>

                        </p>
                        <p className={classes["card__ratings"]}>
                          <span className={classes["card__footer-value"]}>
                            {reviews.ratingsAverage} / 5
                          </span>
                          <span className={classes["card__footer-text"]}>
                            <span className={classes.rating}>
                              <Rating
                                emptySymbol="far fa-star icon"
                                fullSymbol="fas fa-star icon"
                                initialRating={reviews.ratingsAverage}
                                readonly
                              />
                            </span>
                          </span>
                        </p>

                      </div>
                    </div>
                  </Slide>
                </div>
              );
            })}
          </div>
        </div>
      </section >

    </>
  );
};

export default Reviews;
