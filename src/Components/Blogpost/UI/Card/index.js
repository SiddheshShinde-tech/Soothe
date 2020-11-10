import React from "react";
import "./style.css";

const Card = (props) => {
  return (
    <div className="cards" style="width: 18rem;" {...props}>
      {props.children}
    </div>
  );
};

export default Card;
