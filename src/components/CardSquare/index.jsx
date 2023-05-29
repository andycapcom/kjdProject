import React from "react";
import CardContent from "../CardContent";
import "./CardSquare.css";

function CardSquare(props) {
  const { overlapGroup, className, cardContentProps } = props;

  return (
    <div className={`card-square-1-1 ${className || ""}`}>
      <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <CardContent
          spanText1={cardContentProps.spanText1}
          spanText2={cardContentProps.spanText2}
          className={cardContentProps.className}
        />
      </div>
    </div>
  );
}

export default CardSquare;
