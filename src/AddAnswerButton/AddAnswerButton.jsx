import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddAnswerButton.scss";
import Modal from "../Modal/Modal";
import SquareButton from "../SquareButton/SquareButton";
import * as handlers from "./../ModalState";

import Question from "../QuestionBox/QuestionBox";
import AnswerBox from "../AnswerBox/AnswerBox";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";
import { useSelector, useDispatch } from "react-redux";


export default function AddAnswerButton({ children }) {
  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();

  //Modal state management
  //onload, dont display the modal, add a style of display none

  const [modalState, SetModalState] = useState({
    isModalClose: true,
    useThisId: "ModalIsCloseId",
  });

  const [userAnswer, SetUserAnswer] = useState(
    "Your answers is previewed here"
  );

  const openModal = () => {
    SetModalState({
      isModalClose: false,
      useThisId: "ModalIsOpenId",
    });
  };

  const closeModal = () => {
    SetModalState({
      isModalClose: true,
      useThisId: "ModalIsCloseId",
    });
  };
  // ------------

  return (
    <div>
      <Modal specialId={modalState.useThisId}>
        <div
          className="content"
          style={{
            background: `${modes.themeColors.background}`,
            color: `${modes.themeColors.color}`,
          }}
        >
          <div className="viewQuestion">
            <Question
              userImage={user5}
              whoAskedThisQuestion="Danny Goere"
              description="Designer"
              userQuestion="Question i dont feel like asking any question, just show me the way out of here !!"
            >
              <AnswerBox
                specialAnswerStyle="answerBoxSpecialPreviewStyle"
                userImage={user4}
                whoAnsweredThisQuestion="Your userName"
                description="Your bio"
                userAnswer={userAnswer}
              ></AnswerBox>
            </Question>
          </div>
          <div
            className="AnswerProper"
            style={{
              background: `${modes.themeColors.background}`,
              color: `${modes.themeColors.color}`,
            }}
          >
            <form>
              <i className="fas fa-times" onClick={closeModal}></i>

              <textarea
                onChange={(event) => {
                  SetUserAnswer(event.target.value);
                }}
                placeholder="Start typing your Answer here"
                name=""
                id=""
              ></textarea>
              <button className="sendThis" type="submit">
                <img
                  src="https://img.icons8.com/color/50/000000/filled-sent.png"
                  className="sendThis"
                />
              </button>
            </form>
          </div>
        </div>
      </Modal>
      <button onClick={openModal} className="AddAnswerButtonStyles">
        {children}
      </button>
    </div>
  );
}
