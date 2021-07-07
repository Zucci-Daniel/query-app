import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../store/actions/index';
import React, { useState } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

import "./Form.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
// i added this for some reasons
export default function Form({ children }) {
  let location = useLocation();

  const [usernameBorderColor, setUsernameBorderColor] = useState("");
  const [emailBorderColor, setEmailBorderColor] = useState("");
  const [passwordBorderColor, setPasswordBorderColor] = useState("");
  const [errorMessage, SetErrorMessage] = useState("nothing");
  //set a state, to check if login button is clicked
  const [isLoginClicked, setIsLoginClicked] = useState({
    clicked: false,
  });

  //a function that toggles the login clicked or not.

  const showLogin = () => {
    //copy the original state
    const copiedLoginState = isLoginClicked.clicked;

    //set it to what the initial state is not
    setIsLoginClicked({
      clicked: true,
    });
  };

  const showSignup = () => {
    //copy the original state
    const copiedLoginState = isLoginClicked.clicked;

    //set it to what the initial state is not
    setIsLoginClicked({
      clicked: false,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors, message },
    reset,
  } = useForm();

  const onRegister = (userData, e) => {
    // e.preventDefault();
    console.log("you registered");
    console.log(userData);
    console.log(location.pathname, "zucci");

    axios
      .post(
        "https://querybackendapi.herokuapp.com/api/account/register/",
        userData
      )
      .then((response) => {
        console.log(response.data);
        const results = response.data;
        window.location = "/home";
        localStorage.setItem("userDetails", JSON.stringify(results));
        // const username=JSON.parse(localStorage.getItem('username')
      })
      .catch((error) => console.log(error));
    reset();
  };

  const onLogin = (userData, e) => {
    e.preventDefault();
    console.log("you logged in");
    console.log(userData);

    axios
      .post("https://querybackendapi.herokuapp.com/api/account/", userData)
      .then((response) => {
        console.log(response);
        // window.location = "/home";
      })
      .catch((error) => {
        alert("we could'nt find any account with those credentials");
        console.log(error);
      });
    reset();
  };


  const checkUsername = (username) => {
    console.log(username.target.value);

    if (username.target.value === "" || username.target.value.length < 5) {
      setUsernameBorderColor("red");
    } else setUsernameBorderColor("green");
  };

  const checkEmail = (email) => {
    //define checks for emails
    console.log(email.target.value);
    if (
      email.target.value === "" ||
      email.target.value.length <= 4 ||
      !email.target.value.includes("@")
    ) {
      setEmailBorderColor("red");
    } else setEmailBorderColor("green");
  };

  const checkPassword = (password) => {
    //define checks for Passwords
    console.log(password.target.value);
    if (password.target.value === "" || password.target.value.length < 5) {
      setPasswordBorderColor("red");
    } else setPasswordBorderColor("green");
  };


  const stateToProps = useSelector((state) => {
    return {
      loading:state.auth.loading,
      error:state.auth.error,
      isAuthenticated:state.auth.token !== null,
      authRedirectPath: state.auth.authRedirectPath
    }
  })

  const dispatch = useDispatch()

  const dispatchToProps = useCallback(dispatch => {
    return {
        onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup )),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
  },[dispatch])


  return (
    <div className="FormStyle">
      <ul className="nav nav-tabs">
        <li className="active">
          <a onClick={showLogin} href="#">
            lOGIN
          </a>
        </li>
        <li>
          <a onClick={showSignup} href="#" className="signUpHeader">
            SIGN UP
          </a>
        </li>
      </ul>
      <form
        className="Form"
        autoComplete={false}
        onSubmit={handleSubmit(isLoginClicked.clicked ? onLogin : onRegister)}
      >
        <h1> {isLoginClicked.clicked ? "login" : "Sign up"}</h1>
        <input
          autoFocus={true}
          autoComplete="off"
          style={{ borderColor: `${usernameBorderColor}` }}
          {...register("username", {
            required: {
              value: true,
              message: "username is required ",
            },
            minLength: {
              value: 4,
              message: "username must be more than 4 characters",
            },
            maxLength: {
              value: 20,
              message: "username must not be more than 20 characters",
            },
          })}
          type="text"
          placeholder="Username"
          onChange={(username, errors) => checkUsername(username, errors)}
        />
        {errors.username && <label>{errors.username.message}</label>}
        {!isLoginClicked.clicked ? (
          <React.Fragment>
            <input
              autoComplete="off"
              style={{ borderColor: `${emailBorderColor}` }}
              type="email"
              placeholder="Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "email is required ",
                },
              })}
              onChange={(email, errors) => checkEmail(email, errors)}
            />
            {errors.email && <label>{errors.email.message}</label>}
          </React.Fragment>
        ) : null}

        <input
          autoComplete="off"
          style={{ borderColor: `${passwordBorderColor}` }}
          type="password"
          placeholder="Password"
          {...register("password", {
            required: {
              value: true,
              message: "password is required ",
            },
            minLength: {
              value: 5,
              message: "password must be more than 5 characters",
            },
            maxLength: {
              value: 20,
              message: "password must not be more than 20 characters",
            },
          })}
          onChange={(password, errors) => {
            checkPassword(password, errors);
          }}
        />
        {errors.password && <label>{errors.password.message}</label>}

        <Button
          type="submit"
          disabled={errors.username === false ? false : true}
        >
          <span>{isLoginClicked.clicked ? "login" : "Sign up"}</span>
          <i className="fas fa-arrow-circle-right"></i>
        </Button>
      </form>
    </div>
  );
}

