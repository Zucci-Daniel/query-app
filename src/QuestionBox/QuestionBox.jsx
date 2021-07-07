import { Link } from "react-router-dom";
import React from "react";
import "./QuestionBox.scss";
import { useSelector, useDispatch } from "react-redux";
import { changemodes } from "../actions/index";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

export default function QuestionBox({
  children,
  userImage,
  specialQuestionStyle,
  whoAskedThisQuestion,
  description,
  onClick,
  userQuestion,
  onClickFunc,
  linkToWhere,
  id,
}) {
  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();
  let location = useLocation();

  console.log(location.pathname, "from");
  return (
    <div
      id={id}
      className="QuestionBoxStyle"
      onClick={onClick}
      style={{
        background: `${
          location.pathname !== "/" ? modes.themeColors.questionBg : "#ffffff"
        }`,
        color: `${
          location.pathname !== "/" ? modes.themeColors.color : "#000000b7"
        }`,
      }}
    >
      <div className="questionBorder" onClick={onClickFunc}>
        <div className="UserInitials">
          <div className="userImage">
            <img src={userImage} alt="" />
          </div>
          <div
            className="initials"
            style={{
              background: `${
                location.pathname !== "/"
                  ? modes.themeColors.questionBg
                  : "#ffffff"
              }`,
              color: `${
                location.pathname !== "/"
                  ? modes.themeColors.color
                  : "#000000b7"
              }`,
            }}
          >
            <h3>{whoAskedThisQuestion}</h3>
            <p>{description}</p>
          </div>
        </div>

        <Link
          to={linkToWhere}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {" "}
          <div
            className="UserQuestion"
            //  style={specialQuestionStyle}
            style={{
              background: `${
                location.pathname !== "/"
                  ? modes.themeColors.questionBg
                  : "#ffffff"
              }`,
              color: `${
                location.pathname !== "/"
                  ? modes.themeColors.color
                  : "#000000b7"
              }`,
              border: `1px solid ${modes.themeColors.borderColor}`,
            }}
          >
            <p className="question">{userQuestion}</p>
          </div>
        </Link>
        {children}
      </div>
    </div>
  );
}
