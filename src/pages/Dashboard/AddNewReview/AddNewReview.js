import React, { useContext } from "react";
import { AuthContext } from "../../../store/auth-context";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import classes from "./AddNewReview.module.css";

const AddNewReview = () => {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Form submit handler
  const onSubmit = async (data) => {
    const response = await fetch(
      "https://toys-hub.herokuapp.com/reviews",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    await response.json();

    history.push("/");
  };
  //Add new review page
  return (
    <section className={classes.addNewReview}>
      <Container>
        <h2 className="section-heading">Add a new review</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="column-style">
            <Col md={6}>
              <FloatingLabel
                label="Your Name"
                className={`${classes.label} mb-3`}
              >
                <Form.Control
                  placeholder="Review Name"
                  className={classes.input}
                  {...register("name")}
                  defaultValue={user.displayName}
                />
                {errors.name && (
                  <small className="error">*Name is required!</small>
                )}
              </FloatingLabel>

              <FloatingLabel label="Your Rating (Out of 5)" className={`${classes.label} mb-3`}>
                <Form.Control
                  type="number"
                  min="0"
                  max="5"
                  placeholder="Rating"
                  className={classes.input}
                  {...register("ratingsAverage", { required: true })}
                />
                {errors.ratingsAverage && (
                  <small className="error">*Review Rating is required!</small>
                )}
              </FloatingLabel>




            </Col>
            <Col md={6}>

              <FloatingLabel
                label="Your Review"
                className={`${classes.label} mb-3`}
              >
                <Form.Control
                  placeholder="Review Description"
                  className={classes.textArea}
                  as="textarea"
                  maxLength="180"
                  rows={3}
                  {...register("description", { required: true })}
                />
                {errors.description && (
                  <small className="error">
                    *Review Description is required!
                  </small>
                )}
              </FloatingLabel>

              <FloatingLabel
                label="Product (Toy) Bought"
                className={`${classes.label} mb-3`}
              >
                <Form.Control
                  placeholder="Product Bought"
                  className={classes.input}
                  type="number"
                  min="0"
                  {...register("deliveryDuration", { required: true })}
                />
                {errors.deliveryDuration && (
                  <small className="error">
                    *Bought Toy Qty is required!
                  </small>
                )}
              </FloatingLabel>

            </Col>
          </Row>
          <Row>
            <Col lg={6} md={8} sm={10} className="mx-auto mt-3">
              <button type="submit" className={`btn ${classes.formSubmitBtn}`}>
                Add Review
              </button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section >
  );
};

export default AddNewReview;