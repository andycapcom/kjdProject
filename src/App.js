import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from "./components/Home";
import logo from './logo.svg';
import './App.css';
const uXUI1Data = {
    uxIcon: "/img/ux-icon-1@2x.png",
    spanText1: "User experience & design",
    spanText2: "Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.",
};

const uXUI2Data = {
    uxIcon: "/img/app-dev-icon-1@2x.png",
    spanText1: "Mobile app development",
    spanText2: "Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.",
    className: "app",
};

const cardContent1Data = {
    spanText1: "The Olympian",
    spanText2: "The only athlete in the world to do her Olympic routine in 2020.",
    className: "",
};

const cardSquare1Data = {
    overlapGroup: "/img/1280x960-1@2x.png",
    cardContentProps: cardContent1Data,
};

const cardContent2Data = {
    spanText1: "The Olympian",
    spanText2: "The only athlete in the world to do her Olympic routine in 2020.",
    className: "card-content-1",
};

const cardSquare2Data = {
    overlapGroup: "/img/1280x960-2@2x.png",
    className: "card-square-1",
    cardContentProps: cardContent2Data,
};

const cardContent3Data = {
    spanText1: "The Savings Jar",
    spanText2: "Grow your savings treasure and grow your dragon.",
    className: "card-content-2",
};

const cardContent4Data = {
    spanText1: "Skhokho seMali",
    spanText2: "Helping South Africans become #CashCleva with Skhokho and TymeBank.",
    className: "card-content",
};

const cardSquare3Data = {
    overlapGroup: "/img/1280x960-4@2x.png",
    className: "card-square-2",
    cardContentProps: cardContent4Data,
};

const group51Data = {
    brand: "/img/brand-1@2x.png",
    frame1: "/img/frame-1-1@2x.png",
    frame2: "/img/frame-2-1@2x.png",
    frame15: "/img/frame-15-1@2x.png",
    frame3: "/img/frame-3-1@2x.png",
};

const group52Data = {
    brand: "/img/frame-4-1@2x.png",
    frame1: "/img/frame-5-1@2x.png",
    frame2: "/img/frame-6-1@2x.png",
    frame15: "/img/frame-7-1@2x.png",
    frame3: "/img/frame-8-1@2x.png",
    className: "group-6",
};
const home = {
    logoKjd: "/img/logo-kjd-1@2x.png",
    spanText1: "Services",
    spanText2: "Industries",
    spanText3: "Cases",
    spanText4: "Contact",
    btnPrimary: "/img/btn-primary-1@2x.png",
    //overlapGroup5: "/img/hero-image-1@2x.png",
    //spanText5: "Live with Confidence",
    //spanText6: "José Mourinho brings confidence to pan-African Sanlam campaign.",
    //spanText7: "View project",
    rectangle1: "/img/rectangle-1-1@2x.png",
    spanText8: "What we do",
    spanText9: "We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces",
    webDevIcon: "/img/web-dev-icon-1@2x.png",
    spanText10: "Web development",
    spanText11: "Web development",
    spanText12: "We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.",
    blockchainIcon: "/img/blockchain--icon-1@2x.png",
    spanText13: "Blockchain solutions",
    spanText14: "We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.",
    spanText15: "Case studies",
    x1280X960: "/img/1280x960-3@2x.png",
    spanText16: "You’ll be in good company",
    spanText17: "Trusted by leading brands",
    group7: "/img/group-7-1@2x.png",
    spanText18: "Contact us",
    spanText19: <React.Fragment>Have a project in mind?<br />Let&#x27;s make it happen</React.Fragment>,
    spanText20: <React.Fragment>Terms of service<br />Privacy policy<br />Impressum</React.Fragment>,
    spanText21: <React.Fragment>Facebook<br />Instagram<br />Twitter</React.Fragment>,
    spanText22: <React.Fragment>Github<br />Linkedin<br />Teams</React.Fragment>,
    spanText23: <React.Fragment>Youtube<br />Behance<br />Dribbble</React.Fragment>,
    spanText24: <React.Fragment>22 Lawley Road, Woodstock, 7925,<br />Cape Town, South Africa<br />+27 21 469 1500<br /></React.Fragment>,
    spanText25: "enquirie@kingjames.co.za",
    spanText26: <React.Fragment>Explore open jobs<br /><br />©2000—2022 King James Digital</React.Fragment>,
    uXUI1Props: uXUI1Data,
    uXUI2Props: uXUI2Data,
    cardSquare1Props: cardSquare1Data,
    cardSquare2Props: cardSquare2Data,
    cardContentProps: cardContent3Data,
    cardSquare3Props: cardSquare3Data,
    group51Props: group51Data,
    group52Props: group52Data,
};
const router = createBrowserRouter([
  { path: '/', element: <HomePage {...home}  /> },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
