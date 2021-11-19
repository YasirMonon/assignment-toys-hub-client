import React, { useContext } from "react";
import { AuthContext } from "../../../store/auth-context";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { MdCalendarToday, MdHiking } from "react-icons/md";
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

              {/* <FloatingLabel
                label="Summary"
                className={`${classes.label} mb-3`}
              >
                <Form.Control
                  placeholder="Summary"
                  className={classes.input}
                  {...register("summary", { required: true })}
                />
                {errors.summary && (
                  <small className="error">*Summary is required!</small>
                )}
              </FloatingLabel> */}
              {/* 
              <FloatingLabel
                label="Toy Difficulty"
                className={`${classes.label} mb-3`}
              >
                <Form.Select
                  aria-label="Toy Difficulty"
                  className={`${classes.select} mb-3`}
                  {...register("availability")}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="difficult">Difficult</option>
                </Form.Select>
              </FloatingLabel> */}


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
                label="Product Bought"
                className={`${classes.label} mb-3`}
              >
                <Form.Control
                  placeholder="Max Participants"
                  className={classes.input}
                  type="number"
                  min="0"
                  {...register("deliveryDuration", { required: true })}
                />
                {errors.deliveryDuration && (
                  <small className="error">
                    *Max Participants is required!
                  </small>
                )}
              </FloatingLabel>
              {/* <FloatingLabel
                label="Toy Image"
                className={`${classes.label} mb-3`}
              >
                <Form.Control
                  placeholder="Toy Image"
                  className={classes.input}
                  {...register("imageCover", { required: true })}
                />
                {errors.deliveryDuration && (
                  <small className="error">*Review Image Link is required!</small>
                )}
              </FloatingLabel> */}
              {/* <FloatingLabel label="Price" className={`${classes.label} mb-3`}>
                <Form.Control
                  type="number"
                  min="0"
                  placeholder="Price"
                  className={classes.input}
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <small className="error">*Review Price is required!</small>
                )}
              </FloatingLabel> */}
              {/* <FloatingLabel
                label="Duration"
                className={`${classes.label} mb-3`}
              >
                <Form.Control
                  type="number"
                  min="0"
                  placeholder="Duration"
                  className={classes.input}
                  {...register("duration", { required: true })}
                />
                {errors.duration && (
                  <small className="error">*Review Duration is required!</small>
                )}
              </FloatingLabel> */}

              {/* <FloatingLabel
                label="Start Date"
                className={`${classes.label} mb-3`}
              >
                <Form.Control
                  placeholder="Start Date"
                  className={classes.input}
                  type="date"
                  {...register("startDates", { required: true })}
                />
                {errors.startDates && (
                  <small className="error">*Review Start Date is required!</small>
                )}
              </FloatingLabel> */}
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
// {
//   "hosting": {
//     "public": "build",
//     "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
//     "rewrites": [
//       {
//         "source": "**",
//         "destination": "/index.html"
//       }
//     ]
//   }
// }
