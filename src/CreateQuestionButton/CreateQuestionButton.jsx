import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreateQuestionButton.scss";
import Modal from "../Modal/Modal";
import SquareButton from "../SquareButton/SquareButton";
import * as handlers from "./../ModalState";
import { useSelector, useDispatch } from "react-redux";
import * as MODES from "../actions";

export default function CreateQuestionButton({ children }) {
  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();

  //Modal state management
  //onload, dont display the modal, add a style of display none

  const [modalState, SetModalState] = useState({
    isModalClose: true,
    useThisId: "ModalIsCloseId",
  });

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

          <form>
            <div
              className="questionProper"
              style={{
                background: `${modes.themeColors.background}`,
                color: `${modes.themeColors.color}`,
              }}
            >
              <h3 className="header">professionals are waiting to recieve your question</h3>

              <textarea
                style={{
                  background: `${modes.themeColors.background}`,
                  color: `${modes.themeColors.color}`,
                }}
                placeholder="Start Your question with 'how','where','can','please' etc"
                name=""
                id=""
                cols="30"
                rows="5"
              ></textarea>
              <button className="sendThis" type="submit">
                <img
                  src="https://img.icons8.com/color/50/000000/filled-sent.png"
                  className="sendThis"
                />
              </button>

              <i className="fas fa-times" onClick={closeModal}></i>
            </div>
          </form>

          <div className="more"></div>
        </div>
      </Modal>
      <button onClick={openModal} className="CreateQuestionButtonStyles">
        {children}
      </button>
    </div>
  );
}
