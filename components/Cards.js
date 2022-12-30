import React from "react";
import Card from "./Card";

export default function Cards() {
  return (
    <div class="row my-5">
      <div class="col">
        <div class="card-group">
          <Card title="Card Title one" description="paragraph one" />
          <Card title="Card Title two" description="paragraph two" />
          <Card title="Card Title three" description="paragraph three" />
        </div>
      </div>
    </div>
  );
}
