import React from "react";
import { Link } from "react-router-dom";
import "./AnswerButton.scss";
import { useSelector, useDispatch } from "react-redux";
// import { changemodes } from "../actions";

export default function AnswerButton({ children,answerProps }) {
  const stateToProps = useSelector(state => 
    state.modesReducer)
  const dispatch = useDispatch();

  return (
    <div
      className="AnswerButton"
      style={{ color: `${stateToProps.themeColors.color}` }}
    >
      <span>
        <Link to="getpost" style={{ textDecoration: "none", color: "inherit" }}>
      
          <i className="far fa-comment-dots"></i>{`${answerProps==undefined && '0'} comments`} 
        </Link>
      </span>
    </div>
  );
}
