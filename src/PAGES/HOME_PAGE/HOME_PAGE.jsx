import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HOME_PAGE.scss";
import QuestionBox from "../../QuestionBox/QuestionBox";
import CurrentPageIdentifier from "../../CurrentPageIdentifier/CurrentPageIdentifier";
import { Redirect } from "react-router-dom";
import user7 from "../../assets/user7.jpg";
import user5 from "../../assets/user5.jpg";
import user8 from "../../assets/user8.jpg";
import user2 from "../../assets/user2.jpg";
import CreateQuestionButton from "../../CreateQuestionButton/CreateQuestionButton";
import Comment from "../../Comment/Comment";
import Date from "../../Date/Date";
import AnswerButton from "../../AnswerButton/AnswerButton";

import DetailsButtons from "../../DetailsButtons/DetailsButtons";
import Like from "../../Like/Like";
import CommentButton from "../../CommentButton/CommentButton";
import { useSelector, useDispatch } from "react-redux";
import { changemodes } from "../../actions";
import QuestionSkeletonLoader from "../../SKELETONS/QuestionSkeletonLoader/QuestionSkeletonLoader";
import axios from "axios";

export default function HOME_PAGE() {
  const [recentlyAskedQuestions, setRecentlyAskedQuestions] = useState([]);

  useEffect(() => {}, []);

  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();

  const specialQuestionStyle = {
    border: "1px solid  rgba(128, 128, 128, 0.267)",
  };
  const redirectHandler = () => {
    Redirect("/post");
  };

  useEffect(() => {
    axios
      .get("https://querybackendapi.herokuapp.com/api/question/")
      .then((response) => {
        console.log(response.data.count, "the logged in user details");
        setRecentlyAskedQuestions([response.data.results]);
      })
      .catch((error) => {
        console.log("wrong syntax");
      });
  }, []);

  console.log(recentlyAskedQuestions, "this is the state now");

  return (
    <div
      className="homePage"
      style={{ background: `${modes.themeColors.background}` }}
    >
      <CreateQuestionButton>Ask A Question</CreateQuestionButton>

      <CurrentPageIdentifier to="/">
        <i
          className="far fa-home"
          style={{ color: `${modes.themeColors.color}` }}
        ></i>
        <span style={{ color: `${modes.themeColors.color}` }}>Home</span>
      </CurrentPageIdentifier>
      <div className="questionHolder">
        {recentlyAskedQuestions.length === 0 ? (
          <React.Fragment>
            <QuestionSkeletonLoader />
            <QuestionSkeletonLoader />
          </React.Fragment>
        ) : (
          recentlyAskedQuestions.map((recentlyAskedQuestion) => {
            return recentlyAskedQuestions.map((diffUserQuestions, index) => {
              return diffUserQuestions.map((userQuestion) => {
                console.log(
                  userQuestion.profile.map((pro) => {
                    console.log(pro.image, "fish");
                  })
                );
                return (
                  <QuestionBox
                    id={userQuestion.id}
                    linkToWhere="/getpost"
                    specialQuestionStyle={specialQuestionStyle}
                    userImage={userQuestion.profile.map((pro) => {
                      return pro.image;
                    })}
                    whoAskedThisQuestion={userQuestion.profile.map((pro) => {
                      return pro.user.username;
                    })}
                    description="Plumber"
                    userQuestion={userQuestion.question}
                  >
                    <DetailsButtons>
                      <Like />
                      <AnswerButton />
                      <Date />
                    </DetailsButtons>
                  </QuestionBox>
                );
              });
            });
          })
        )}
      </div>
    </div>
  );
}

/*
{recentlyAskedQuestions.length === 0
          ? "pls wait"
          : console.log(
              recentlyAskedQuestions.map((question,index) => question.results.map((result,index)=>result.question)),
              "lol"
            )}
 */

{
  /* <QuestionBox
linkToWhere="/getpost"
specialQuestionStyle={specialQuestionStyle}
userImage={user5}
whoAskedThisQuestion='me'
description="Plumber"
userQuestion="What is the term 'EDUCATION' all about? "
>
<DetailsButtons>
  <Like />
  <AnswerButton />
  <Date />
</DetailsButtons>
</QuestionBox> */
}
