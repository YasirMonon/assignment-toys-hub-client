import React, { useState, useContext } from 'react'
import "./Register.css"
import logo from "../../images/logo-white.png";
import { Link } from 'react-router-dom'
// import useAuth from '../../hooks/useAuth'
import { AuthContext } from '../../store/auth-context'
import Swal from 'sweetalert2'
import classes from "../Form.module.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(name, email, password)
    if (name) {
      // window.location = "/";
      // window.location.reload(true);
      Swal.fire({
        title: 'Welcome to Toys Hub',
        text: "Your Baby's First Love",
        imageUrl: 'https://i.ibb.co/cc6V3Jx/toy.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      }).then(function () {
        window.location = "/";
        window.location.reload(true);
      });
    } else {
      Swal.fire("Welcome!", "You've logged in Successfully !", "success")

    }


  }
  return (
    <div>
      <div className="registration">
        <div className="registration__logo">
          <h4><span>Toys <img src={logo} alt="logo" as={Link} to="/" width="50px" /> Hub - Registration</span></h4>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="" id="" placeholder="Enter Your Name" className="input__field" onBlur={(e) => setName(e.target.value)} />
          <input type="email" name="" id="" placeholder="Enter Your Email" className="input__field" onBlur={(e) => setEmail(e.target.value)} />
          <input type="password" name="" id="" placeholder="Enter Your Password" className="input__field" onBlur={(e) => setPassword(e.target.value)} />
          <button type="submit" className={`btn ${classes.formSubmitBtn}`}>Register</button>
        </form>

        <Link to="/login" className="registration__account">All Ready have an Account?? </Link>
        <span className="separator wrapper"><b>OR</b></span>
        <Link to="/" className="registration__account">Go Back To Home</Link>
      </div>


    </div>
  )
}

export default Register;