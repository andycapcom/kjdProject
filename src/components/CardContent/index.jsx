import React from "react";
import "./CardContent.css";

function CardContent(props) {
  const { spanText1, spanText2, className } = props;

  return (
    <div className={`card-content-3 ${className || ""}`}>
      <div className="rectangle-1-3"></div>
      <div className="card-title inter-bold-white-32px">
        <span className="span-2 inter-bold-white-32px">{spanText1}</span>
      </div>
      <p className="lorem-ipsum-dolor-si inter-normal-white-16px">
        <span className="span-2 inter-normal-white-16px">{spanText2}</span>
      </p>
    </div>
  );
}

export default CardContent;
