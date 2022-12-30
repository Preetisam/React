import React from "react";

export default function Card({ title, description, imgsource }) {
  return (
    <div class="card">
      <img src={imgsource} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <button type="button" class="btn btn-danger">
          Read More
        </button>
      </div>
    </div>
  );
}
