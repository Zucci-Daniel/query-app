import React, { useState, useRef } from "react";
import "./Profile.scss";
import Modal from "../Modal/Modal";
import SquareButton from "../SquareButton/SquareButton";
import user4 from "../assets/user4.jpg";
import { useSelector, useDispatch } from "react-redux";
import { changemodes } from "../actions/index";

export default function Profile({ children }) {
  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();

  let bioRef = useRef();
  //Modal state management
  //onload, dont display the modal, add a style of display none

  const [modalState, SetModalState] = useState({
    isModalClose: true,
    useThisId: "ModalIsCloseId",
  });

  const [bio, setBio] = useState("click on the + icon to edit your bio");

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

    setBio("click on the + icon to edit your bio");
  };

  const sendBioHandler = () => {
    //POST REQUEST
    alert("posted");
    setBio(bioRef.current.value);
    closeModal();
  };

  const submitBio = (event, bioRef) => {
    event.preventDefault();
    setBio(bioRef.current.value);

    console.log(bio);
  };
  //------------

  return (
    <React.Fragment>
      <div className="ProfileStyle">
        <Modal specialId={modalState.useThisId}>
          <div className="bioContent">
            <h3>start editing your bio</h3>
            <form onSubmit={submitBio}>
              <textarea
                ref={bioRef}
                onChange={(event) => {
                  setBio(event.target.value);
                }}
                type="text"
                className="bioInput"
                placeholder="Type in a public bio"
              />
              <div className="deleteContentButtonWrapper">
                <SquareButton
                  type="submit"
                  //  functionHandler={sendBioHandler}
                >
                  Done
                </SquareButton>
                <SquareButton
                  specialStyle={{ background: "red" }}
                  functionHandler={closeModal}
                >
                  Discard Bio
                </SquareButton>
              </div>
            </form>
          </div>
        </Modal>
        <div
          className="profileWrapper"
          style={{
            background: `${modes.themeColors.questionBg}`,
            color: `${modes.themeColors.color}`,
          }}
        >
          <div className="ProfilePictureArea">
            <div
              className="profilePic"
              style={{ backgroundImage: `url(${user4})` }}
            >
              <div className="profileCircle2">
                <input type="file" name="file" id="file" accept="image/*" />
                <label htmlFor="file">
                  <i className="fas fa-image"></i>
                </label>
              </div>
            </div>
            <div className="profileCircle1"></div>
          </div>

          <div className="bioArea">
            <h1
              className="profileName"
              style={{
                background: `${modes.themeColors.questionBg}`,
                color: `${modes.themeColors.color}`,
              }}
            >
              THE USER NAMES
            </h1>
            <div className="bioDesc">
              <div
                className="bio"
                style={{
                  background: `${modes.themeColors.questionBg}`,
                  color: `${modes.themeColors.color}`,
                }}
              >
                bio
              </div>
              <p>{bio}</p>
            </div>
            <div className="bioEdit" onClick={openModal}>
              <i className="fas fa-plus"></i>
            </div>
          </div>
        </div>

        <h5
          className="yourRecentPost"
          style={{
            color: `${modes.themeColors.color}`,
          }}
        >
          Your recent Questions
        </h5>

        {children}
      </div>
    </React.Fragment>
  );
}
