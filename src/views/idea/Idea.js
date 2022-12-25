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
    return (
      <div className="wrapper wrapper--idea">
        <h1 className="base-title">Idea title</h1>

        <div className="idea-section">
          <div className="idea-section__left">
            <div className="idea-section__left-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              dolorum quis tempora, vel ex est delectus minus natus sint
              eligendi id commodi minima soluta. Autem officiis quas ea tempore
              ipsam, ducimus ratione voluptatem odit unde nisi suscipit est iste
              animi voluptas excepturi quidem. Maiores recusandae veniam amet
              delectus? Laudantium aperiam culpa accusantium veritatis aut! Ipsa
              voluptatibus obcaecati, architecto sapiente voluptatum nulla
              similique eius libero? Necessitatibus fuga quod quo atque ipsum
              similique omnis doloribus nesciunt. Quam quas, officia, fuga error
              obcaecati corporis saepe aliquam culpa facilis quidem qui fugit
              quia. Maxime quisquam esse blanditiis aspernatur deleniti rem
              aperiam. Ipsam, atque corrupti?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quas dolorum quis tempora, vel ex
              est delectus minus natus sint eligendi id commodi minima soluta.
              Autem officiis quas ea tempore ipsam, ducimus ratione voluptatem
              odit unde nisi suscipit est iste animi voluptas excepturi quidem.
              Maiores recusandae veniam amet delectus? Laudantium aperiam culpa
              accusantium veritatis aut! Ipsa voluptatibus obcaecati, architecto
              sapiente voluptatum nulla similique eius libero? Necessitatibus
              fuga quod quo atque ipsum similique omnis doloribus nesciunt. Quam
              quas, officia, fuga error obcaecati corporis saepe aliquam culpa
              facilis quidem qui fugit quia. Maxime quisquam esse blanditiis
              aspernatur deleniti rem aperiam. Ipsam, atque corrupti?Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quas dolorum quis
              tempora, vel ex est delectus minus natus sint eligendi id commodi
              minima soluta. Autem officiis quas ea tempore ipsam, ducimus
              ratione voluptatem odit unde nisi suscipit est iste animi voluptas
              excepturi quidem. Maiores recusandae veniam amet delectus?
              Laudantium aperiam culpa accusantium veritatis aut! Ipsa
              voluptatibus obcaecati, architecto sapiente voluptatum nulla
              similique eius libero? Necessitatibus fuga quod quo atque ipsum
              similique omnis doloribus nesciunt. Quam quas, officia, fuga error
              obcaecati corporis saepe aliquam culpa facilis quidem qui fugit
              quia. Maxime quisquam esse blanditiis aspernatur deleniti rem
              aperiam. Ipsam, atque corrupti?
            </div>

            <div className="">btns here</div>
          </div>

          <div className="slider-container">
            <div className="idea-slider slider-js">
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

            <div className="slider-actions">
              <button
                className="slider-btn-js slider-btn-js-prev"
                type="button"
                onClick={this.clickPrev}
              >
                prev
              </button>
              <button
                className="slider-btn-js slider-btn-js-next"
                type="button"
                onClick={this.clickNext}
              >
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Idea;
