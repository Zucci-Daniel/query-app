import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PROFILE_PAGE.scss";
import QuestionBox from "../../QuestionBox/QuestionBox";
import Profile from "../../Profile/Profile";
import CreateQuestionButton from "../../CreateQuestionButton/CreateQuestionButton";
import CurrentPageIdentifier from "../../CurrentPageIdentifier/CurrentPageIdentifier";
import Modal from "../../Modal/Modal";
import DetailsButtons from "../../DetailsButtons/DetailsButtons";
import Like from "../../Like/Like";
import Date from "../../Date/Date";
import AnswerButton from "../../AnswerButton/AnswerButton";
import SquareButton from "../../SquareButton/SquareButton";
import user4 from "../../assets/user4.jpg";
import { useSelector, useDispatch } from "react-redux";
import { changemodes } from "../../actions";
import QuestionSkeletonLoader from "../../SKELETONS/QuestionSkeletonLoader/QuestionSkeletonLoader";

export default function PROFILE_PAGE() {
  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();
  //Modal state management
  //onload, dont display the modal, add a style of display none

  const [modalState, SetModalState] = useState({
    isModalClose: true,
    useThisId: "ModalIsCloseId",
  });
  const [smallModalState, SetSmallModalState] = useState(false);

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
    console.log("HELLO");
  };

  ///
  const showSmallModal = () => {
    SetSmallModalState(!smallModalState);
  };
  const hideSmallModal = () => {
    if (smallModalState) {
      SetSmallModalState(false);
    }

    console.log("COOL");
  };
  //------------

  return (
    <div
      className="ProfilePage"
      onClick={hideSmallModal}
      style={{ background: `${modes.themeColors.background}` }}
    >
      <Modal specialId={modalState.useThisId} backdropFunction={closeModal}>
        <div className="deleteContent">
          <h3>
            Are you sure you want to <span>delete this question?</span>
          </h3>
          <div className="deleteContentButtonWrapper">
            <SquareButton
              specialStyle={{ background: "red" }}
              functionHandler={closeModal}
            >
              yes
            </SquareButton>
            <SquareButton>no</SquareButton>
          </div>
        </div>
      </Modal>

      {/* ////////////// */}
    <CreateQuestionButton>Ask A Question</CreateQuestionButton>
      <CurrentPageIdentifier>
        <i
          className="far fa-user-circle"
          style={{ color: `${modes.themeColors.color}` }}
        ></i>
        <span style={{ color: `${modes.themeColors.color}` }}>Profile</span>
      </CurrentPageIdentifier>

      <Profile>
        <div className="questionWrapper">
          <QuestionSkeletonLoader />
          <QuestionSkeletonLoader />
          <QuestionSkeletonLoader />

          {/* <QuestionBox
            userImage={user4}
            whoAskedThisQuestion="Tacha Emi"
            description="Software Developer"
            userQuestion="i dont feel like asking any question, just show me the way out of here !!"
          >
            <i
              class="fad fa-ellipsis-h deleteQuestion"
              onClick={showSmallModal}
              style={{
                color: `${modes.themeColors.color}`,
              }}
            ></i>
            <div
              className={smallModalState ? "smallModalOpen" : "smallModalClose"}
              style={{
                background: `${modes.themeColors.background}`,
                color: `${modes.themeColors.color}`,
              }}
            >
              <ul>
                <li onClick={openModal}>Delete</li>
              </ul>
            </div>
            <DetailsButtons>
              <Like />
              <AnswerButton />
              <Date />
            </DetailsButtons>
          </QuestionBox>
           */}
        </div>
      </Profile>
    </div>
  );
}
