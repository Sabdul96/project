import React from "react";


const Card = ({ title, content, image }) => {
  return (
    <div className="card">
      {/* <img src={image} alt="Card image" /> */}
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
