import React, { useState } from "react";
import "./Like.scss";
import { useSelector, useDispatch } from "react-redux";
// import { changemodes } from "../actions";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

export default function Like({ children, specialStyle,likeProps }) {
  const stateToProps = useSelector(state => 
    state.modesReducer)
    
  let location = useLocation();


  const dispatch = useDispatch();


  return (
    <div className="like"  style={{ color: `${stateToProps.themeColors.color}` }}>
      <span>

        <i
          className="far fa-thumbs-up" 
        ></i>
        {`${likeProps==undefined && '0'} likes`}
        <span>
        </span>
      </span>
    </div>
  );
}

///!!!!! ============================================/////
//you can pass the props you like in this function, i have already created a props.likeProps for you, 