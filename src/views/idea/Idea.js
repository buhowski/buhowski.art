import React from "react";
import "./Idea.scss";
import IdeaText from "./IdeaTabs";
import SliderContainer from "./Slider";

export default function Idea() {
  return (
    <div className="wrapper wrapper--idea">
      <h1 className="base-title">Idea title</h1>

      <div className="idea-section">
        {/* Copyright */}
        <div className="idea-copy">
          <p>
            {new Date().getFullYear()} <span>&copy;</span> A. Tsiomakh
          </p>
        </div>
        <IdeaText />

        <SliderContainer />
      </div>
    </div>
  );
}
