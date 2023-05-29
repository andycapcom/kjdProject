import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import CardContent from "../CardContent";

function CaseStudies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/studies").then((response) => {
      console.log("response ", response);
      setData(response.data);
    });
  }, []);

  return (
    <div className="case-studies">
      <div className="heading">
        <img className="rectangle-1-1" src={"../../../img/rectangle-1-1@2x.png"} alt="Rectangle 1" />
        <div className="what-we-do-1 inter-normal-black-24px">
          <span className="inter-normal-black-24px">{"Case studies"}</span>
        </div>
      </div>

      <div className="flex-row">
      {data.map((item, index) => (
        <div className="card-square" key={index}>
          <div className="card">
            <div className="card-image">
              <img className="x1280x960" src={item.imageUrl} alt={item.title} />
            </div>
            <CardContent
              spanText1={item.title}
              spanText2={item.description}
              className={"card-content-2"}
            />
          </div>
        </div>
      ))}

      </div>


    </div>
  );
}

export default CaseStudies;
