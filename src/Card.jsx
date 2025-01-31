import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.p}</p>

            <p><a href={props.link} className="linkbuton"  target="_blank" rel="noopener noreferrer">Go to Link</a></p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
