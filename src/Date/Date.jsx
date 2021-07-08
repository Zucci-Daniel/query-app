import React from "react";
import "./Date.scss";
import { useSelector, useDispatch } from "react-redux";
import { changemodes } from "../actions";

export default function Date({ children, specialStyle }) {
  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();

  return (
    <div
      className="Date"
      style={{ color: `${modes.themeColors.color}` }}
    >
      <span>
        <i className="far fa-clock"></i>12/06/2020
      </span>
    </div>
  );
}
