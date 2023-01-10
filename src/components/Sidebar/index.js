import "./index.scss";
import React from "react";
import { Link } from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import PageBtn from "./PageBtn/PageBtn";
import WebLink from "./WebLink/WebLink";

function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>
      <Link className="logo" to="/">
        <img src={LogoSubtitle} alt="logo" className="sub-logo" />
      </Link>
      <PageBtn />
      <WebLink />
    </div>
  );
}

export default Sidebar;
