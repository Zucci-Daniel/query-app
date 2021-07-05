import React from "react";
import "./Container.scss";
import SideBar from "../SideBar/SideBar";
import { useSelector, useDispatch } from "react-redux";
import { changemodes } from "../actions";
import SideBarSkeletonLoader from "../SKELETONS/SideBarSkeletonLoader/SideBarSkeletonLoader";

export default function Container({ children }) {
  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();

  return (
    <div
      className="ContainerStyle"
      style={{ background: `${modes.themeColors.background}` }}
    >
      {/* {setTimeout(() => {
        <SideBarSkeletonLoader />;
      }, 3000)} */}
      <SideBar />

      {children}
    </div>
  );
}
