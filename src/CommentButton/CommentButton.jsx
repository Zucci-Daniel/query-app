import React from "react";
import "./CommentButton.scss";
import { useSelector, useDispatch } from "react-redux";
import { changemodes } from "../actions";

export default function CommentButton({ children, specialStyle, commentFunc }) {
  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();

  return (
    <div
      className="CommentButton"
      style={{ color: `${modes.themeColors.color}` }}
    >
      <span onClick={commentFunc}>
        <i className="fas fa-comments"></i>46 comments
      </span>
    </div>
  );
}
