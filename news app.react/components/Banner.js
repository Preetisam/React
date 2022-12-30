import React from "react";

export default function Banner() {
  return (
    <div class="row">
      <div class="col-md-7">
        <img
          src="https://images.indianexpress.com/2022/12/Yearender-2022_Ent.jpeg"
          alt="image"
          class="img-fluid"
        />
      </div>
      <div class="col-md-5">
        <h1 class="mt-5">
          Box Office Report Card 2022: A year when one hit was followed by 10
          flops, and stars failed miserably
        </h1>
        <p class="mt-5">
          Box Office Report Card 2022: A year when one hit was followed by 10
          flops, and stars failed miserably
        </p>
        <button type="button" class="btn btn-primary mt-3">
          Click ME!
        </button>
      </div>
    </div>
  );
}
