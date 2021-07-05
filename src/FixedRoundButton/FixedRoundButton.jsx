import React, { useState } from "react";
import "./FixedRoundButton.scss";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changemodes } from "../actions/index";



export default function FixedRoundButton() {
  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState({
    toggle: false,
  });

  const togglePane = () => {
    const copiedState = isToggled.toggle;
    setIsToggled({
      toggle: !copiedState,
    });
  };

  const log = () => {
    console.log("yes");
  };

  let location = useLocation();

  return (
    <div className="fixedWrapper">
      <button
        onClick={togglePane}
        className="MobileNavbarToggleStyles"
        style={{
          background: `${
            location.pathname !== "/" ? modes.themeColors.questionBg : "#ffffff"
          }`,
          color: `${
            location.pathname !== "/" ? modes.themeColors.color : "#000000b7"
          }`,
          border: `1px solid ${modes.themeColors.borderColor}`,
        }}
      >
        {isToggled.toggle ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="far fa-bars"></i>
        )}
      </button>

      <div
        onClick={togglePane}
        className={`paneExtraStyle ${
          isToggled.toggle ? `toggleOpen` : `toggleClosed`
        }`}
      >
        <div
          className="ulWrapper"
          style={{
            background: `${
              location.pathname === "/" ? "" : modes.themeColors.questionBg
            }`,
            color: `${
              location.pathname === "/" ? "" : modes.themeColors.color
            }`,
            border: `1px solid ${modes.themeColors.borderColor}`,
          }}
        >
          <ul className="ulWrapperUl">
            <li>
              <Link to="/home">
                Home <i className="far fa-home"></i>
              </Link>
            </li>
            <li>
              <Link to="/home">
                About <i className="far fa-home"></i>
              </Link>
            </li>
            <li>
              <Link to="/home">
                Developers <i className="far fa-home"></i>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                Profile <i className="fas fa-sign-out-alt"></i>
              </Link>
            </li>
            {location.pathname === "/" ? null : (
              <li onClick={() => dispatch(changemodes())}>
                <Link to="#">
                  {modes.modeText}
                  <i className="fas fa-adjust"></i>
                </Link>
              </li>
            )}
            {location.pathname === "/" ? null : (
              <li>
                <Link to="">
                  Delete Account <i className="far fa-trash-alt"></i>
                </Link>
              </li>
            )}
            {location.pathname === "/" ? null : (
              <li>
                <Link to="">
                  Log Out <i className="fas fa-sign-out-alt"></i>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

///STATE MANAGEMENT MUST BE HERE, LOL
