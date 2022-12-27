import React from "react";
import "./Idea.scss";
import IdeaTabs from "./access-to-idea/IdeaTabs";
import SliderContainer from "./Slider";

export default function Idea() {
  return (
    <div className="wrapper wrapper--idea">
      <h1 className="base-title">???</h1>

      <div className="idea-section">
        {/* Copyright */}
        <div className="idea-copy">
          <p>
            {new Date().getFullYear()} <span>&copy;</span> A. Tsiomakh
          </p>
        </div>
        <IdeaTabs />

        <SliderContainer />
      </div>
    </div>
  );
}
