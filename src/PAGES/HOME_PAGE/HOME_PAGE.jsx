import React, { useEffect, useState } from "react";
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
import { useHistory } from "react-router-dom";
import DetailsButtons from "../../DetailsButtons/DetailsButtons";
import Like from "../../Like/Like";
import CommentButton from "../../CommentButton/CommentButton";
import { useSelector, useDispatch } from "react-redux";
// import { changemodes } from "../../actions";
import QuestionSkeletonLoader from "../../SKELETONS/QuestionSkeletonLoader/QuestionSkeletonLoader";
import * as actions from '../../store/actions/index';
import axios from "axios";
axios.defaults.headers.common['Authorization'] =  localStorage.getItem('token');

export default function HOME_PAGE() {
  useEffect(() => {}, []);

  const [refreshPage, setRefreshPage] = useState(true)

  const stateToProps = useSelector(state => 
    state.modesReducer)

  const questionDataState = useSelector(state => state.questionReducer.recentlyAskedQuestions)
  const dispatch = useDispatch();

  console.log(questionDataState, 'question data')

  const specialQuestionStyle = {
    border: "1px solid  rgba(128, 128, 128, 0.267)",
  };
  const redirectHandler = () => {
    Redirect("/post");
  };




  

  useEffect(() => {
    dispatch(actions.requestQuestionDetails())
    axios.defaults.headers.common['Authorization'] =  localStorage.getItem('token');
    
  }, []);

  const skeleton = null

  

  return (
    <div
      className="homePage"
      style={{ background: `${stateToProps.themeColors.background}` }}
    >
      <CreateQuestionButton>Ask A Question</CreateQuestionButton>

      <CurrentPageIdentifier to="/">
        <i
          className="far fa-home"
          style={{ color: `${stateToProps.themeColors.color}` }}
        ></i>
        <span style={{ color: `${stateToProps.themeColors.color}` }}>Home</span>
      </CurrentPageIdentifier>
      <div className="questionHolder">
        {/* question */}
        {/* <QuestionBox
          linkToWhere="/getpost"
          specialQuestionStyle={specialQuestionStyle}
          userImage={user7}
          whoAskedThisQuestion="Danny Goere"
          description="Designer"
          userQuestion="Question i dont feel like asking any question, just show
          me the way out of here !!"
        >
          <DetailsButtons>
            <Like />
            <AnswerButton />
            <Date />
          </DetailsButtons>
        </QuestionBox> */}
        {
          questionDataState.length >= 1 ?
          <React.Fragment><QuestionSkeletonLoader/> <QuestionSkeletonLoader/><QuestionSkeletonLoader/><QuestionSkeletonLoader/><QuestionSkeletonLoader/><QuestionSkeletonLoader/></React.Fragment> :
          questionDataState.map((result) => 
              <QuestionBox
              key={result.id}
              linkToWhere="/getpost"
              specialQuestionStyle={specialQuestionStyle}
              userImage={result.userImage}
              whoAskedThisQuestion={result.userQuestion}
              description={result.description}
              userQuestion={result.question}
            >
            <DetailsButtons>
              <Like />
              <AnswerButton />
              <Date />
            </DetailsButtons>
          </QuestionBox>
              
            )}




        {/* <QuestionBox
          linkToWhere="/getpost"
          specialQuestionStyle={specialQuestionStyle}
          userImage={user8}
          whoAskedThisQuestion="Thomas mark"
          description="Plumber"
          userQuestion="What is the meaning of aristotle"
        >
          <DetailsButtons>
            <Like />
            <AnswerButton />
            <Date />
          </DetailsButtons>
        </QuestionBox>

        <QuestionBox
          linkToWhere="/getpost"
          specialQuestionStyle={specialQuestionStyle}
          userImage={user5}
          whoAskedThisQuestion="Rhieo Sisy"
          description="Plumber"
          userQuestion="What is the term 'EDUCATION' all about? "
        >
          <DetailsButtons>
            <Like />
            <AnswerButton />
            <Date />
          </DetailsButtons>
        </QuestionBox> */}
      </div>
    </div>
  );
}
