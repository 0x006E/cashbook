import React from "react";

const Card = (props) => {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        minHeight: props.minHeight,
        overflow: props.overflow,
      }}
      className="card"
    >
      <span className="title"> {props.title} </span> {props.children}
    </div>
  );
};

export default Card;
