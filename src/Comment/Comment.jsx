import React from "react";
import "./Comment.scss";
import DetailsButtons from "../DetailsButtons/DetailsButtons";
import { useSelector, useDispatch } from "react-redux";
import { changemodes } from "../actions/index";

export default function Comment({
  children,
  userImage,
  specialCommentStyle,
  whoCommentedOnThisQuestion,
  description,
  userComment,
}) {
  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();

  return (
    <div
      className="CommentBoxStyle"
      style={{
        background: `${modes.themeColors.background}`,
        color: `${modes.themeColors.color}`,
      }}
    >
      <div className="commentBorder">
        <div
          className="CommentInitials"
          style={{
            background: `${modes.themeColors.background}`,
            color: `${modes.themeColors.color}`,
          }}
        >
          <div className="CommentImage">
            <img src={userImage} alt="" />
          </div>
          <div
            className="initials"
            style={{
              background: `${modes.themeColors.background}`,
              color: `${modes.themeColors.color}`,
            }}
          >
            <h3>{whoCommentedOnThisQuestion}</h3>
            <p className="CommentCareer">{description} </p>
          </div>
        </div>
        <div
          className="CommentAnswer"
          style={{
            background: `${modes.themeColors.background}`,
            color: `${modes.themeColors.color}`,
          }}
        >
          <p
            className="Comment"
            style={{
              background: `${modes.themeColors.background}`,
              color: `${modes.themeColors.color}`,
            }}
          >
            {userComment}
          </p>
        </div>
        {/* <DetailsButtons /> */}
        {children}
      </div>
    </div>
  );
}
