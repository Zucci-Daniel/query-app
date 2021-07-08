import React, { useState } from "react";
import "./GET_QUESTION_PAGE.scss";
import QuestionBox from "../../QuestionBox/QuestionBox";
import AnswerBox from "../../AnswerBox/AnswerBox";
import Comment from "../../Comment/Comment";

import DetailsButtons from "../../DetailsButtons/DetailsButtons";
import Like from "../../Like/Like";
import CommentButton from "../../CommentButton/CommentButton";

import Date from "../../Date/Date";
import AnswerButton from "../../AnswerButton/AnswerButton";
import user4 from "../../assets/user4.jpg";
import user5 from "../../assets/user5.jpg";
import user7 from "../../assets/user7.jpg";
import user2 from "../../assets/user2.jpg";
import { useSelector, useDispatch } from "react-redux";
import { changemodes } from "../../actions/index";
import AddAnswerButton from "../../AddAnswerButton/AddAnswerButton";
import QuestionSkeletonLoader from "../../SKELETONS/QuestionSkeletonLoader/QuestionSkeletonLoader";

import AnswerSkeletonLoader from "../../SKELETONS/AnswerSkeletonLoader/AnswerSkeletonLoader";

export default function GET_QUESTION_PAGE() {
  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();
  const [hideState, setHideState] = useState(true);

  const toggleDiv = () => {
    setHideState(!hideState);
  };

  return (
    <div
      className="GET_QUESTION_PAGE"
      style={{ background: `${modes.themeColors.background}` }}
    >
      <AddAnswerButton>Add Answer</AddAnswerButton>
      <div className="questionWrapper">
        <QuestionBox
          userImage={user4}
          whoAskedThisQuestion="Danny Goere"
          description="Designer"
          userQuestion="Question i dont feel like asking any question, just show me the way out of here !!"
        >
          <DetailsButtons>
            <Like />
            <AnswerButton />
            <Date />
          </DetailsButtons>
          <div className="answerWrapper">
            <AnswerBox
              userImage={user5}
              whoAnsweredThisQuestion="Lucy Canna"
              description="Fisher"
              userAnswer="ANSWER Take your left and right and then kill yourself"
            >
              <DetailsButtons>
                <Like />
                <CommentButton commentFunc={toggleDiv} />
                <Date />
              </DetailsButtons>
              <div
                className="enterYourCommentBlock"
                style={{ background: `${modes.themeColors.background}` }}
              >
                <div className="currentUserImage">
                  <img src={user4} alt="" />
                </div>
                <div className="inputWrapper">
                  {/* <form action=""> */}
                  <input
                    type="text"
                    placeholder="Comment on this answer"
                  ></input>
                  <button type="submit">
                    <img src="https://img.icons8.com/color/50/000000/filled-sent.png" />
                  </button>
                  {/* </form> */}
                </div>
              </div>
              <h5 onClick={toggleDiv}>Load Previous comments to this answer</h5>
              <div className={`hide hide-${hideState ? true : false}`}>
                <Comment
                  userImage={user7}
                  whoCommentedOnThisQuestion="Big shima"
                  description="Engr"
                  userComment="Comment this is sooo funny"
                >
                  <DetailsButtons>
                    <Like />
                    <Date />
                  </DetailsButtons>
                </Comment>

                <Comment
                  userImage={user2}
                  whoCommentedOnThisQuestion="Hommad dan"
                  description="Bsc"
                  userComment="Comment i laughed 344times"
                >
                  <DetailsButtons>
                    <Like />
                    <Date />
                  </DetailsButtons>
                </Comment>
                <Comment
                  userImage={user7}
                  whoCommentedOnThisQuestion="Big shima"
                  description="Engr"
                  userComment="Comment this is sooo funny"
                >
                  <DetailsButtons>
                    <Like />
                    <Date />
                  </DetailsButtons>
                </Comment>

                <Comment
                  userImage={user2}
                  whoCommentedOnThisQuestion="Hommad dan"
                  description="Bsc"
                  userComment="Comment i laughed 344times"
                >
                  <DetailsButtons>
                    <Like />
                    <Date />
                  </DetailsButtons>
                </Comment>
                <Comment
                  userImage={user7}
                  whoCommentedOnThisQuestion="Big shima"
                  description="Engr"
                  userComment="Comment this is sooo funny"
                >
                  <DetailsButtons>
                    <Like />
                    <Date />
                  </DetailsButtons>
                </Comment>

                <Comment
                  userImage={user2}
                  whoCommentedOnThisQuestion="Hommad dan"
                  description="Bsc"
                  userComment="Comment i laughed 344times"
                >
                  <DetailsButtons>
                    <Like />
                    <Date />
                  </DetailsButtons>
                </Comment>
              </div>
            </AnswerBox> 
{/* //// */}
<AnswerBox
              userImage={user5}
              whoAnsweredThisQuestion="Lucy Canna"
              description="Fisher"
              userAnswer="ANSWER Take your left and right and then kill yourself"
            >
              <DetailsButtons>
                <Like />
                <CommentButton commentFunc={toggleDiv} />
                <Date />
              </DetailsButtons>
              <div
                className="enterYourCommentBlock"
                style={{ background: `${modes.themeColors.background}` }}
              >
                <div className="currentUserImage">
                  <img src={user4} alt="" />
                </div>
                <div className="inputWrapper">
                  {/* <form action=""> */}
                  <input
                    type="text"
                    placeholder="Comment on this answer"
                  ></input>
                  <button type="submit">
                    <img src="https://img.icons8.com/color/50/000000/filled-sent.png" />
                  </button>
                  {/* </form> */}
                </div>
              </div>
              <h5 onClick={toggleDiv}>Load Previous comments to this answer</h5>
              <div className={`hide hide-${hideState ? true : false}`}>
                <Comment
                  userImage={user7}
                  whoCommentedOnThisQuestion="Big shima"
                  description="Engr"
                  userComment="Comment this is sooo funny"
                >
                  <DetailsButtons>
                    <Like />
                    <Date />
                  </DetailsButtons>
                </Comment>

                <Comment
                  userImage={user2}
                  whoCommentedOnThisQuestion="Hommad dan"
                  description="Bsc"
                  userComment="Comment i laughed 344times"
                >
                  <DetailsButtons>
                    <Like />
                    <Date />
                  </DetailsButtons>
                </Comment>
                <Comment
                  userImage={user7}
                  whoCommentedOnThisQuestion="Big shima"
                  description="Engr"
                  userComment="Comment this is sooo funny"
                >
                  <DetailsButtons>
                    <Like />
                    <Date />
                  </DetailsButtons>
                </Comment>

                <Comment
                  userImage={user2}
                  whoCommentedOnThisQuestion="Hommad dan"
                  description="Bsc"
                  userComment="Comment i laughed 344times"
                >
                  <DetailsButtons>
                    <Like />
                    <Date />
                  </DetailsButtons>
                </Comment>
                <Comment
                  userImage={user7}
                  whoCommentedOnThisQuestion="Big shima"
                  description="Engr"
                  userComment="Comment this is sooo funny"
                >
                  <DetailsButtons>
                    <Like />
                    <Date />
                  </DetailsButtons>
                </Comment>

                <Comment
                  userImage={user2}
                  whoCommentedOnThisQuestion="Hommad dan"
                  description="Bsc"
                  userComment="Comment i laughed 344times"
                >
                  <DetailsButtons>
                    <Like />
                    <Date />
                  </DetailsButtons>
                </Comment>
              </div>
            </AnswerBox> 
        
            
          </div>
        </QuestionBox>
      </div>
    </div>
  );
}
