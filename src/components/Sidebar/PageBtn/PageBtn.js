import React from "react";
import { pageLink } from "../../data/sidebar/data";
import { fas as soildIcons } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PageBtn.scss";

function PageBtn() {
  return (
    <nav>
      {pageLink.map((item) => {
        return (
          <div key={item.id}>
            <NavLink exact="true" activeclassname="active" to={item.toLink}>
              <FontAwesomeIcon
                icon={soildIcons[`${item.icon}`]}
                color="#4d4d4e"
              ></FontAwesomeIcon>
              <div className="after">{item.name}</div>
            </NavLink>
          </div>
        );
      })}
    </nav>
  );
}

export default PageBtn;
