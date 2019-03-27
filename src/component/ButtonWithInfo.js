import React from "react";
import InfoIcon from "../assets/info.png";

export default (props) => {
  return (
    <div>      
      <button onClick={props.clicked}>{props.title}</button>
      <img src={InfoIcon} />
    </div>
  );
};
