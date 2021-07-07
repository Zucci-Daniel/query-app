import React from "react";
import "./Button.scss";

export default function Button({ children, handler, type,disabled }) {
  return (
    <React.Fragment>
      <button disabled={disabled} className="buttonStyles" onClick={handler} type={type}>
        {children}
      </button>
    </React.Fragment>
  );
}
