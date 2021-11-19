import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import classes from "./AddNewToy.module.css";
const AddNewToy = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Form submit handler
  const onSubmit = async (data) => {
    const response = await fetch(
      "https://toys-hub.herokuapp.com/toys",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    await response.json();

    history.push("/explore");
  };
  //Add new toy page
  return (
    <section className={classes.addNewService}>
      <Container>
        <h2 className="section-heading">Add a new toy</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="column-style">
            <Col md={6}>
              <FloatingLabel
                label="Toy Name"
                className={`${classes.label} mb-3`}
              >
                <Form.Control
                  placeholder="Toy Name"
                  className={classes.input}
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <small className="error">*Toy Name is required!</small>
                )}
              </FloatingLabel>
              <FloatingLabel
                label="Toy Description"
                className={`${classes.label} mb-3`}
              >
                <Form.Control
                  placeholder="Toy Description"
                  className={classes.textArea}
                  as="textarea"
                  rows={3}
                  {...register("description", { required: true })}
                />
                {errors.description && (
                  <small className="error">
                    *Toy Description is required!
                  </small>
                )}
              </FloatingLabel>
              <FloatingLabel
                label="Summary"
                className={`${classes.label} mb-3`}
              >
                <Form.Control
                  placeholder="Summary"
                  className={classes.input}
                  {...register("summary", { required: true })}
                />
                {errors.summary && (
                  <small className="error">*Toy Summary is required!</small>
                )}
              </FloatingLabel>

              <FloatingLabel
                label="Toy Availability"
                className={`${classes.label} mb-3`}
              >
                <Form.Select
                  aria-label="Toy Availability"
                  className={`${classes.select} mb-3`}
                  {...register("availability", { required: true })}
                >
                  <option value="available">Available</option>
                  <option value="out of stock">Out of Stock</option>
                </Form.Select>
              </FloatingLabel>


            </Col>
            <Col md={6}>
              <FloatingLabel
                label="Toy Image (Image Link Only)"
                className={`${classes.label} mb-3`}
              >
                <Form.Control
                  placeholder="Toy Image (Image Link Only)"
                  className={classes.input}
                  {...register("imageCover", { required: true })}
                />
                {errors.deliveryDuration && (
                  <small className="error">*Toy Image Link is required!</small>
                )}
              </FloatingLabel>
              <FloatingLabel label="Price" className={`${classes.label} mb-3`}>
                <Form.Control
                  type="number"
                  min="0"
                  placeholder="Price"
                  className={classes.input}
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <small className="error">*Toy Price is required!</small>
                )}
              </FloatingLabel>

              <FloatingLabel label="Rating" className={`${classes.label} mb-3`}>
                <Form.Control
                  type="number"
                  min="0"
                  max="5"
                  placeholder="Rating"
                  className={classes.input}
                  {...register("ratingsAverage", { required: true })}
                />
                {errors.ratingsAverage && (
                  <small className="error">*Toy Rating is required!</small>
                )}
              </FloatingLabel>

              <FloatingLabel
                label="Delivery Within"
                className={`${classes.label} mb-3`}
              >
                <Form.Control
                  placeholder="Delivery Within"
                  className={classes.input}
                  type="number"
                  min="0"
                  max="7"
                  {...register("deliveryDuration", { required: true })}
                />
                {errors.deliveryDuration && (
                  <small className="error">
                    *Delivery Duration is required!
                  </small>
                )}
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={8} sm={10} className="mx-auto mt-3">
              <button type="submit" className={`btn ${classes.formSubmitBtn}`}>
                Add Toy
              </button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
};

export default AddNewToy;