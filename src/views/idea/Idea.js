import React, { Component } from "react";
import "./Idea.scss";

import sliderImg1 from "./images/bm-l.jpg";

const dataImgs = [
  {
    imgSrc: sliderImg1,
    imgAlt: "idea picture",
  },
  {
    imgSrc: sliderImg1,
    imgAlt: "idea picture",
  },
  {
    imgSrc: sliderImg1,
    imgAlt: "idea picture",
  },
  {
    imgSrc: sliderImg1,
    imgAlt: "idea picture",
  },
  {
    imgSrc: sliderImg1,
    imgAlt: "idea picture",
  },
  {
    imgSrc: sliderImg1,
    imgAlt: "idea picture",
  },
  {
    imgSrc: sliderImg1,
    imgAlt: "idea picture",
  },
  {
    imgSrc: sliderImg1,
    imgAlt: "idea picture",
  },
  {
    imgSrc: sliderImg1,
    imgAlt: "idea picture",
  },
  {
    imgSrc: sliderImg1,
    imgAlt: "idea picture",
  },
  {
    imgSrc: sliderImg1,
    imgAlt: "idea picture",
  },
  {
    imgSrc: sliderImg1,
    imgAlt: "idea picture",
  },
];

class Idea extends Component {
  // Simple react slider
  state = {
    activeIndex: 0,
  };

  // for randoming picture when loads(just for fun)
  componentDidMount() {
    const min = 0;
    const max = dataImgs.length;
    const random = Math.floor(Math.random() * (max - min) + min);
    this.setState({ activeIndex: random });
  }
  // end

  clickNext = () => {
    if (this.state.activeIndex < dataImgs.length - 1) {
      this.setState({ activeIndex: this.state.activeIndex + 1 });
    } else {
      this.setState({ activeIndex: 0 });
    }
  };

  clickPrev = () => {
    if (this.state.activeIndex > 0) {
      this.setState({ activeIndex: this.state.activeIndex - 1 });
    } else {
      this.setState({ activeIndex: dataImgs.length - 1 });
    }
  };

  render() {
    let sliderStyle = {
      transform: `translateX(${this.state.activeIndex * -100}%)`,
    };

    return (
      <div className="wrapper wrapper--idea">
        <h1 className="base-title">Idea title</h1>

        <div className="idea-section">
          <div className="idea-info">
            <div className="idea-text">
              <div className=""></div>

              <div className=""></div>
            </div>
          </div>

          <div className="slider-container">
            <div className="idea-slider slider-js" style={sliderStyle}>
              {dataImgs.map(({ imgSrc, imgAlt }, i) => {
                return (
                  <div
                    className="slider-item-js"
                    data-active={i === this.state.activeIndex}
                    key={i}
                  >
                    <img src={imgSrc} alt={imgAlt} />
                  </div>
                );
              })}
            </div>

            <span className="slides-number">
              {`${this.state.activeIndex + 1 < 10 ? "0" : ""}${
                this.state.activeIndex + 1
              } / ${dataImgs.length}`}
            </span>

            <div className="slider-actions">
              <button
                className="slider-btn-js slider-btn-js-prev"
                type="button"
                onClick={this.clickPrev}
              ></button>

              <button
                className="slider-btn-js slider-btn-js-next"
                type="button"
                onClick={this.clickNext}
              ></button>
            </div>

            <a
              className="a nav-link nav-link--underline"
              href="/"
              target="_blank"
            >
              Text Me or...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Idea;
