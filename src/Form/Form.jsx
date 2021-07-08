<<<<<<< HEAD
import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../store/actions/index';
=======
import React, { useState } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
>>>>>>> 3b8a904f6b3f8b4418d888849f2f108c0f675259

import "./Form.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Form({ children }) {
  let location = useLocation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const onRegister = (userData) => {
   
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
        window.location = "/home";
      })
      .catch((error) => console.log(error));
    reset();
  };

  const onLogin = (userData) => {
   
    console.log("you logged in");
    console.log(userData);
   
    axios
      .post("https://querybackendapi.herokuapp.com/api/account/", userData)
      .then((response) => {
        console.log(response);
        window.location = "/home";
      })
      .catch((error) => console.log(error));
    reset();
  };

<<<<<<< HEAD
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

=======
>>>>>>> 3b8a904f6b3f8b4418d888849f2f108c0f675259
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
        autoComplete="off"
        // onSubmit={handleSubmit(onSubmit)}
        onSubmit={handleSubmit(isLoginClicked.clicked ? onLogin : onRegister)}
      >
        <h1> {isLoginClicked.clicked ? "login" : "Sign up"}</h1>
        <input
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
        />
        {errors.username && (
          <i style={{ color: "red" }}>{errors.username.message}</i>
        )}
        {!isLoginClicked.clicked ? (
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "email is required ",
              },
            })}
          />
        ) : null}
        {errors.email && <i style={{ color: "red" }}>{errors.email.message}</i>}
        <input
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
        />
        {errors.password && (
          <i style={{ color: "red", display: "block" }}>
            {errors.password.message}
          </i>
        )}

        <Button type="submit">
          <span>{isLoginClicked.clicked ? "login" : "Sign up"}</span>
          <i className="fas fa-arrow-circle-right"></i>
        </Button>
      </form>
    </div>
  );
}
<<<<<<< HEAD






=======
>>>>>>> 3b8a904f6b3f8b4418d888849f2f108c0f675259
