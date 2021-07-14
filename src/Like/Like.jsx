import React, { useState } from "react";
import "./Like.scss";
import { useSelector, useDispatch } from "react-redux";
// import { changemodes } from "../actions";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

export default function Like({ children, specialStyle }) {
  const stateToProps = useSelector(state => 
    state.modesReducer)
    
  let location = useLocation();


  const dispatch = useDispatch();


  return (
    <div className="like"  style={{ color: `${stateToProps.themeColors.color}` }}>
      <span>
        <i
          // onClick={}"
          className="far fa-thumbs-up" 
        ></i>
        <span>
        </span>
      </span>
    </div>
  );
}
