import React, { Component } from "react";
import sliderImg1 from "./images/bm-l.jpg";

let ideaLinkText = "Contact Me To Know More";
const dataImgs = [
  {
    imgSrc: sliderImg1,
    imgAlt: "idea picture",
  },
  {
    imgSrc: sliderImg1,
    imgAlt: "idea picture",
  },
];

class SliderContainer extends Component {
  // Simple react slider
  state = {
    activeIndex: 0,
    setContacts: null,
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

  toggleShowContacts = (e) => {
    const clickMe = e.target.id;
    if (this.state.setContacts === clickMe) {
      this.setState({
        setContacts: null,
      });
    } else {
      this.setState({
        setContacts: clickMe,
      });
    }
  };

  render() {
    let sliderStyle = {
      transform: `translateX(${this.state.activeIndex * -100}%)`,
    };

    return (
      <div className="slider-container">
        <div className="idea-slider slider-js" style={sliderStyle}>
          {dataImgs.map(({ imgSrc, imgAlt }, i) => (
            <div
              className="slider-item-js"
              data-active={i === this.state.activeIndex}
              key={i}
            >
              <img src={imgSrc} alt={imgAlt} />
            </div>
          ))}
        </div>

        <span className="slides-number">
          {`${this.state.activeIndex + 1 < 10 ? "0" : ""}${
            this.state.activeIndex + 1
          } / ${dataImgs.length < 10 ? "0" : ""}${dataImgs.length}`}
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

        <div className="idea-contacts" data-active={this.state.setContacts}>
          <div className="idea-contacts__list">
            <div className="idea-contacts__list-items">
              <p>
                gmail: <a href="mailto:">a.tsiomakh@gmail.com</a>
              </p>
              <p>
                telegram: <a href="https://t.me/buhowski">write me</a>
              </p>
              <p>
                linkedIn:{" "}
                <a href="https://www.linkedin.com/in/buhowski">
                  Alexander Tsiomakh
                </a>
              </p>
            </div>
          </div>

          <button
            onClick={this.toggleShowContacts}
            type="button"
            className="a nav-link nav-link--underline"
          >
            {ideaLinkText}
          </button>
        </div>
      </div>
    );
  }
}

export default SliderContainer;
