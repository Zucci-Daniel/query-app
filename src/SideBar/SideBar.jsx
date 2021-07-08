import React from "react";
import "./SideBar.scss";
import { Link } from "react-router-dom";
import user4 from "../assets/user4.jpg";
import { useSelector, useDispatch } from "react-redux";
import { changemodes } from "../actions/index";

export default function SideBar() {
  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();

  return (
    <div
      className="SideBar"
      style={{ background: `${modes.themeColors.background}` }}
    >
      <div
        className="linksWrapper"
        style={{ background: `${modes.themeColors.sideBarUlWrapperBg}` }}
      >
        <ul>
          <Link style={{ textDecoration: "none" }} to="/profile">
            <li className="links proLink">
              <div className="profilePanel">
                <div
                  className="profileArea"
                  style={{
                    background: `${modes.themeColors.background}`,
                    color: `${modes.themeColors.color}`,
                  }}
                >
                  <div className="profilePicture">
                    <img src={user4} alt="" />
                  </div>
                  <div className="profileName">
                    <h5>Gosling Mark</h5>
                  </div>
                  <div className="profileAvater"></div>
                </div>
              </div>
            </li>
          </Link>

          <Link to="/home" className="routerLinks">
            <li
              className="links"
              style={{ background: `${modes.themeColors.background}` }}
            >
              <div>
                <Link to="/home">
                  <i className="far fa-home"></i>Home
                </Link>
              </div>
            </li>
          </Link>

          <Link to="/profile" className="routerLinks">
            <li
              className="links"
              style={{ background: `${modes.themeColors.background}` }}
            >
              <div>
                <Link to="/profile">
                  <i className="far fa-user-circle"></i>Profile
                </Link>
              </div>
            </li>
          </Link>
          <li
            className="links"
            onClick={() => dispatch(changemodes())}
            style={{ background: `${modes.themeColors.background}` }}
          >
            <div>
              <Link to="#">
                <i className="fas fa-adjust"></i>
                {modes.modeText}
              </Link>
            </div>
          </li>
          <Link to="/" className="routerLinks">
            <li
              className="links"
              style={{ background: `${modes.themeColors.background}` }}
            >
              <div>
                <Link to="/">
                  <i className="fas fa-sign-out-alt"></i>Log out
                </Link>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
