import React from "react";
import { Rating } from "react-simple-star-rating";

const CourseCard = ({
  name,
  authors,
  imageUrl,
  stars,
  totalUsers,
  currentPrice,
  actualPrice,
  imageHeight,
  Duration
}) => {
  return (
    <div className="card" style={{ border: "0px" }}>
      <img
        src={imageUrl}
        className="card-img-top"
        alt={`${name}-image"`}
        style={{ height: imageHeight }}
      />
      <div className="card-body" style={{ padding: "20px 0px" }}>
        <p className="card-title fs-5 fw-bold mb-1">{name}</p>
        <p className="card-text mb-1">{authors}</p>
        <p className="card-text mb-1">Duration : {Duration}</p>
        <div className="d-flex" style={{ alignItems: "flex-start" }}>
          <p className="fs-6 fw-bold me-2 mb-1">{stars}</p>
          <div className="stars me-2">
            <Rating
              style={{ marginTop: "-8px" }}
              initialValue={stars}
              readonly={true}
              size={18}
              allowFraction={true}
            />
          </div>
          <p className="fs-6me-2 mb-1">({totalUsers})</p>
        </div>
        <div className="d-flex">
          <p className="fs-6 fw-bold me-2">
            <i
              className="bi bi-currency-rupee"
              style={{ marginRight: "-3px" }}
            ></i>
            {currentPrice}
          </p>
          <p className="fs-6 text-decoration-line-through">
            <i
              className="bi bi-currency-rupee"
              style={{ marginRight: "-3px" }}
            ></i>
            {actualPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
