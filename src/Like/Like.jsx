import React, { useState } from "react";
import "./Like.scss";
import { useSelector, useDispatch } from "react-redux";
import { changemodes } from "../actions";

export default function Like({ children, specialStyle }) {
  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();

  const [isLiked, SetIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const toggleLikeState = () => {
    SetIsLiked(!isLiked);
    setLikeCount(likeCount + 1);

    if (likeCount > 0) {
      setLikeCount(0);
    }
  };

  return (
    <div className="like"  style={{ color: `${modes.themeColors.color}` }}>
      <span>
        <i
          onClick={toggleLikeState}
          className={`far fa-thumbs-up ${isLiked ? "liked" : ""}`}
        ></i>
        <span>
          {likeCount} like{}
        </span>
      </span>
    </div>
  );
}
