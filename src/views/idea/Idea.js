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
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                possimus architecto voluptatum voluptatibus praesentium
                repellat. Voluptatumm enim consequuntur ducimus eos voluptatibus
                provident debitis quisquam delectus mollitia sapiente
                cessitatibus tenetur assumenda labore accusantium debitis
                impedit sapiente harum minus quisquam! Beatae, quisquam autem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                possimus architecto voluptatum voluptatibus praesentium
                repellat. Voluptatumm enim consequuntur ducimus eos voluptatibus
                provident debitis quisquam delectus mollitia sapiente
                cessitatibus tenetur assumenda labore accusantium debitis
                impedit sapiente harum minus quisquam! Beatae, quisquam autem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                possimus architecto voluptatum voluptatibus praesentium
                repellat. Voluptatumm enim consequuntur ducimus eos voluptatibus
                provident debitis quisquam delectus mollitia sapiente
                cessitatibus tenetur assumenda labore accusantium debitis
                impedit sapiente harum minus quisquam! Beatae, quisquam autem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                possimus architecto voluptatum voluptatibus praesentium
                repellat. Voluptatumm enim consequuntur ducimus eos voluptatibus
                provident debitis quisquam delectus mollitia sapiente
                cessitatibus tenetur assumenda labore accusantium debitis
                impedit sapiente harum minus quisquam! Beatae, quisquam autem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                possimus architecto voluptatum voluptatibus praesentium
                repellat. Voluptatumm enim consequuntur ducimus eos voluptatibus
                provident debitis quisquam delectus mollitia sapiente
                cessitatibus tenetur assumenda labore accusantium debitis
                impedit sapiente harum minus quisquam! Beatae, quisquam autem.
              </div>

              <div className="">btns here</div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Idea;
