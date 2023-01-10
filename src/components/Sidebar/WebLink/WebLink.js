import "./WebLink.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab as brandIcons } from "@fortawesome/free-brands-svg-icons";
import { webLink } from "../../data/sidebar/data";

function WebLink() {
  return (
    <ul>
      {webLink.map((item) => {
        return (
          <li key={item.id}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={brandIcons[`${item.icon}`]}
                color="#4d4d4e"
              ></FontAwesomeIcon>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default WebLink;
