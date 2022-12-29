import React from "react";
import "./Idea.scss";
import IdeaTabs from "./IdeaTabs";
import IdeaRu from "./idea-general/IdeaGeneralRu";
import IdeaEn from "./idea-general/IdeaGeneralEn";
import IdeaUa from "./idea-general/IdeaGeneralUa";
import SliderContainer from "./Slider";

export default function Idea() {
  const contactBtnTitle = "Contact Me For Details";
  const IdeaTabRu = IdeaRu;
  const IdeaTabEn = IdeaEn;
  const IdeaTabUa = IdeaUa;

  return (
    <div className="wrapper wrapper--idea">
      <div className="title-height">
        <h1 className="base-title">I Have An Offer For You!</h1>
      </div>

      <div className="idea-section">
        {/* Copyright */}
        <div className="idea-copy">
          <p>
            {new Date().getFullYear()} <span>&copy;</span> A. Tsiomakh
          </p>
        </div>
        <IdeaTabs
          IdeaTabRu={IdeaTabRu}
          IdeaTabEn={IdeaTabEn}
          IdeaTabUa={IdeaTabUa}
        />

        <SliderContainer contactBtnTitle={contactBtnTitle} />
      </div>
    </div>
  );
}
