import React from "react";
import UXUI from "../UXUI";
import CardSquare from "../CardSquare";
import CardContent from "../CardContent";
import Group5 from "../Group5";
import Banner from "../Banner";
import CaseStudies from "../CaseStudies";
import "./Home.css";

function HomePage(props) {
  const {
    logoKjd,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    btnPrimary,
    //overlapGroup5,
    spanText5,
    spanText6,
    spanText7,
    rectangle1,
    spanText8,
    spanText9,
    webDevIcon,
    spanText10,
    spanText11,
    spanText12,
    blockchainIcon,
    spanText13,
    spanText14,
    spanText15,
    x1280X960,
    spanText16,
    spanText17,
    group7,
    spanText18,
    spanText19,
    spanText20,
    spanText21,
    spanText22,
    spanText23,
    spanText24,
    spanText25,
    spanText26,
    uXUI1Props,
    uXUI2Props,
    cardSquare1Props,
    cardSquare2Props,
    cardContentProps,
    cardSquare3Props,
    group51Props,
    group52Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-1440x900 screen">
        <div className="menu">
          <div className="navbar">
            <img className="logo-kjd" src={logoKjd} alt="logo KJD" />
            <div className="navbar-menu">
              <div className="button-1">
                <div className="button inter-bold-white-14px">
                  <span className="inter-bold-white-14px">{spanText1}</span>
                </div>
              </div>
              <div className="button-2">
                <div className="button inter-bold-white-14px">
                  <span className="inter-bold-white-14px">{spanText2}</span>
                </div>
              </div>
              <div className="button-3">
                <div className="button inter-bold-white-14px">
                  <span className="inter-bold-white-14px">{spanText3}</span>
                </div>
              </div>
              <div className="button-4">
                <div className="button inter-bold-white-14px">
                  <span className="inter-bold-white-14px">{spanText4}</span>
                </div>
              </div>
            </div>
            <img className="btn-primary" src={btnPrimary} alt="btn-primary" />
          </div>
        </div>
        <Banner />
        <div className="what-we-do">
          <div className="heading">
            <img className="rectangle-1-1" src={rectangle1} alt="Rectangle 1" />
            <div className="what-we-do-1 inter-normal-black-24px">
              <span className="inter-normal-black-24px">{spanText8}</span>
            </div>
          </div>
          <p className="we-offer-a-complete valign-text-middle inter-bold-shark-48px">
            <span>
              <span className="inter-bold-shark-48px">{spanText9}</span>
            </span>
          </p>
          <div className="flex-row">
            <div className="blockchain">
              <img className="x-icon" src={webDevIcon} alt="Blockchain /icon" />
              <div className="blockchain-solutions inter-bold-black-24px">
                <span className="inter-bold-black-24px">{spanText10}</span>
              </div>
              <p className="we-conduct-market-re inter-normal-black-20px">
                <span className="inter-normal-black-20px">{spanText12}</span>
              </p>
            </div>
            <UXUI uxIcon={uXUI1Props.uxIcon} spanText1={uXUI1Props.spanText1} spanText2={uXUI1Props.spanText2} />
            <UXUI
              uxIcon={uXUI2Props.uxIcon}
              spanText1={uXUI2Props.spanText1}
              spanText2={uXUI2Props.spanText2}
              className={uXUI2Props.className}
            />
            <div className="blockchain">
              <img className="x-icon" src={blockchainIcon} alt="Blockchain /icon" />
              <div className="blockchain-solutions inter-bold-black-24px">
                <span className="inter-bold-black-24px">{spanText13}</span>
              </div>
              <p className="we-conduct-market-re inter-normal-black-20px">
                <span className="inter-normal-black-20px">{spanText14}</span>
              </p>
            </div>
          </div>
        </div>
        <CaseStudies />
        <div className="brands">
          <div className="heading-2">
            <div className="rectangle-1"></div>
            <p className="youll-be-in-good-company inter-normal-black-20px">
              <span className="inter-normal-black-20px">{spanText16}</span>
            </p>
          </div>
          <div className="trusted-by-leading-brands valign-text-middle inter-bold-shark-48px">
            <span>
              <span className="inter-bold-shark-48px">{spanText17}</span>
            </span>
          </div>
          <Group5
            brand={group51Props.brand}
            frame1={group51Props.frame1}
            frame2={group51Props.frame2}
            frame15={group51Props.frame15}
            frame3={group51Props.frame3}
          />
          <Group5
            brand={group52Props.brand}
            frame1={group52Props.frame1}
            frame2={group52Props.frame2}
            frame15={group52Props.frame15}
            frame3={group52Props.frame3}
            className={group52Props.className}
          />
          <img className="group-7" src={group7} alt="Group 7" />
        </div>
        <footer className="footer">
          <div className="flex-row-1">
            <div className="flex-col-1">
              <div className="heading-3">
                <div className="rectangle-1-2"></div>
                <div className="contact-us inter-normal-white-20px">
                  <span className="inter-normal-white-20px">{spanText18}</span>
                </div>
              </div>
              <p className="have-a-project-in-mi inter-bold-cultured-pearl-40px">
                <span className="inter-bold-cultured-pearl-40px">{spanText19}</span>
              </p>
              <div className="flex-row-2 inter-normal-white-20px">
                <div className="terms-of-service-pri">
                  <span className="inter-normal-white-20px">{spanText20}</span>
                </div>
                <div className="facebook-instagram-twitter">
                  <span className="inter-normal-white-20px">{spanText21}</span>
                </div>
                <div className="github-linkedin-teams">
                  <span className="inter-normal-white-20px">{spanText22}</span>
                </div>
              </div>
            </div>
            <div className="flex-row-3 inter-normal-white-20px">
              <div className="youtube-behance-dribbble">
                <span className="inter-normal-white-20px">{spanText23}</span>
              </div>
              <div className="flex-col-2">
                <p className="address">
                  <span className="inter-normal-white-20px">{spanText24}</span>
                  <span className="inter-normal-white-20px">{spanText25}</span>
                </p>
                <p className="explore-open-jobs-2">
                  <span className="inter-normal-white-20px">{spanText26}</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
