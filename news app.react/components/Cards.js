import React from "react";
import Card from "./Card";

export default function Cards() {
  return (
    <div class="row my-5">
      <div class="col">
        <div class="card-group">
          <Card
            title="Political-Pulse"
            description="Angry Mamata fumes again over Jai Shri Ram sloganeering, TMC and BJP trade barbsparagraph one"
            imgsource={"https://images.indianexpress.com/2022/12/mamata-4.jpg"}
          />
          <Card
            title="Technology"
            description="ChatGPT to Dall-E: Unique AI tools you need to try out in 2023"
            imgsource={
              "https://images.indianexpress.com/2022/12/AI-Pixabay.jpg"
            }
          />
          <Card
            title="Sports"
            description="paragraph three Ali was like a child When Pele kissed Muhammad Ali"
            imgsource={"https://images.indianexpress.com/2022/12/Ali-Pele.jpg"}
          />
        </div>
      </div>
    </div>
  );
}
