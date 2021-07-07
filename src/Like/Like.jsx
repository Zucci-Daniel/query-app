import React, { useState } from "react";
import "./Like.scss";
import { useSelector, useDispatch } from "react-redux";
import { changemodes } from "../actions";

export default function Like({ children, specialStyle }) {
  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();

  return (
    <div className="like" style={{ color: `${modes.themeColors.color}` }}>
      <span>
        <i className="far fa-thumbs-up"></i>
        <span> likes</span>
      </span>
    </div>
  );
}
