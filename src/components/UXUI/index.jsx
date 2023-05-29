import React from "react";
import "./UXUI.css";

function UXUI(props) {
  const { uxIcon, spanText1, spanText2, className } = props;

  return (
    <div className={`uxui ${className || ""}`}>
      <img className="x-icon-1" src={uxIcon} alt="UX Icon" />
      <div className="user-experience-design inter-bold-black-24px">
        <span className="span-1 inter-bold-black-24px">{spanText1}</span>
      </div>
      <p className="our-complete-web-des inter-normal-black-20px">
        <span className="span-1 inter-normal-black-20px">{spanText2}</span>
      </p>
    </div>
  );
}

export default UXUI;
