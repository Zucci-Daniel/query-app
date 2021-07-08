import React from "react";
import "./AnswerBox.scss";
import { useSelector, useDispatch } from "react-redux";
import { changemodes } from "../actions";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

export default function AnswerBox({
  children,
  userImage,
  specialAnswerStyle,
  whoAnsweredThisQuestion,
  description,
  userAnswer,
}) {
  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();
  let location = useLocation();

  console.log(location.pathname, "from");

  return (
    <div
      className={`AnswerBoxStyle `}
      style={{
        background: `${
          location.pathname !== "/" ? modes.themeColors.background : "#ffffff"
        }`,
        color: `${
          location.pathname !== "/" ? modes.themeColors.color : "#000000b7"
        }`,
      }}
    >
      <div
        className="AnswerInitials"
        style={{
          background: `${
            location.pathname !== "/" ? modes.themeColors.background : "#ffffff"
          }`,
          color: `${
            location.pathname !== "/" ? modes.themeColors.color : "#000000b7"
          }`,
        }}
      >
        <div className="userImage">
          <img src={userImage} alt="" />
        </div>
        <div
          className="initials"
          style={{
            background: `${
              location.pathname !== "/"
                ? modes.themeColors.background
                : "#ffffff"
            }`,
            color: `${
              location.pathname !== "/" ? modes.themeColors.color : "#000000b7"
            }`,
          }}
        >
          <h3>{whoAnsweredThisQuestion}</h3>
          <p className="UserCareer">{description}</p>
        </div>
      </div>
      <div
        className={`UserAnswer `}
        style={{
          background: `${
            location.pathname !== "/" ? modes.themeColors.background : "#ffffff"
          }`,
          color: `${
            location.pathname !== "/" ? modes.themeColors.color : "#000000b7"
          }`,
        }}
      >
        <p className={`Answer ${specialAnswerStyle}`}>{userAnswer}</p>
      </div>

      {children}
    </div>
  );
}
