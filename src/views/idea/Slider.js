import React, { Component } from "react";
import sliderImg1 from "./images/bm-l.jpg";
import PopupContacts from "./PopupContacts";

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
    const { contactBtnTitle } = this.props;
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

        <PopupContacts contactBtnTitle={contactBtnTitle} />
      </div>
    );
  }
}

export default SliderContainer;
