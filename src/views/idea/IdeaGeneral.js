import React from "react";
import "./Idea.scss";
import IdeaTabsGeneral from "./idea-general/IdeaTabsGeneral";
import SliderContainer from "./Slider";

export default function Idea() {
  return (
    <div className="wrapper wrapper--idea">
      <div className="title-height">
        <h1 className="base-title">I have an offer for You!</h1>
      </div>

      <div className="idea-section">
        {/* Copyright */}
        <div className="idea-copy">
          <p>
            {new Date().getFullYear()} <span>&copy;</span> A. Tsiomakh
          </p>
        </div>
        <IdeaTabsGeneral />

        <SliderContainer />
      </div>
    </div>
  );
}
