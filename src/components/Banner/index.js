import React from "react";
function Banner() {

  return (
    <div className="hero">
      <div className="overlap-group5" style={{ backgroundImage: `url(../../../img/hero-image-1@2x.png)` }}>
        <h1 className="title-is-1 inter-bold-hint-of-red-48px">
          <span className="inter-bold-hint-of-red-48px">{"Live with Confidence"}</span>
        </h1>
        <p className="jos-mourinho-brings inter-normal-cultured-pearl-20px">
          <span className="inter-normal-cultured-pearl-20px">{"José Mourinho brings confidence to pan-African Sanlam campaign."}</span>
        </p>
        <div className="button-5">
          <div className="button inter-bold-white-14px">
            <span className="inter-bold-white-14px">{"View project"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
