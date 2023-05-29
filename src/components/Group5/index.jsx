import React from "react";
import "./Group5.css";

function Group5(props) {
  const { brand, frame1, frame2, frame15, frame3, className } = props;

  return (
    <div className={`group-5 ${className || ""}`}>
      <img className="brand" src={brand} alt="Brand" />
      <img className="frame-1" src={frame1} alt="Frame 1" />
      <img className="frame-2" src={frame2} alt="Frame 2" />
      <img className="frame-15" src={frame15} alt="Frame 15" />
      <img className="frame-3" src={frame3} alt="Frame 3" />
    </div>
  );
}

export default Group5;
