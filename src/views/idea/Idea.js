import React, { Component } from "react";
import "./Idea.scss";

import sliderImg1 from "./images/bm-l.jpg";

let ideaLinkText = "some text";
let ideaLinkURL = "/";
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
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                doloribus ad sint voluptatem dolorum vero suscipit veritatis
                impedit, provident laborum reprehenderit assumenda excepturi
                repellendus quibusdam voluptas nulla quod minus quia obcaecati,
                doloremque molestiae dolor odit. Atque, delectus iste eveniet,
                laudantium, reprehenderit quo voluptatem dolor cumque
                consequuntur commodi sit at corrupti voluptatum quas iusto
                architecto laboriosam magni aspernatur accusantium animi ea
                omnis ducimus nemo! Cum eaque vero nobis aut quas illo quod
                aperiam qui? Est corporis eos eaque doloribus blanditiis
                delectus nemo facilis rem enim accusantium velit ex tempore
                placeat beatae aliquid id quo doloremque error quas sed magnam,
                labore, fuga saepe dolorum? Consequatur soluta earum distinctio
                sed in adipisci voluptatibus. Facilis facere voluptatem impedit
                necessitatibus nihil, at illo, recusandae, aliquid deleniti nisi
                ea perferendis ipsa in. Dolor, porro eligendi? Autem adipisci
                soluta esse facilis at qui, aut rerum? Sit consequuntur dolore
                officiis! Quidem laudantium harum architecto dolores totam error
                sequi vitae voluptates quisquam nulla. Atque non enim eius
                laboriosam voluptate maxime. Maxime esse expedita obcaecati!
                Exercitationem, veniam! Recusandae in culpa perspiciatis
                temporibus vitae fugiat id sit quos magnam illum, dolorem nobis
                at possimus eaque aspernatur corrupti animi, modi eveniet
                officiis consectetur veritatis exercitationem. Nisi eaque dicta,
                rerum nostrum autem necessitatibus officia maxime nihil iusto
                nam, ea aliquid dolore voluptatem quas eius cum quo aspernatur
                vitae earum? Autem odio sunt omnis id vero in quos, voluptate
                impedit perspiciatis tenetur, voluptatem natus, totam
                reprehenderit facilis. Tempore, voluptatum animi. Doloribus a
                nemo, deleniti perspiciatis vel dolorem consequuntur cum dolore
                eos unde consequatur voluptatum alias ad porro veniam
                perferendis, reprehenderit blanditiis voluptates maiores
                delectus numquam! Eos eum et minima culpa reiciendis iste
                consequuntur aliquid natus nam expedita repudiandae aperiam
                inventore dicta, eveniet tempora cum veritatis ratione animi
                delectus amet. Recusandae, reiciendis quisquam! Quae quia nobis
                ducimus doloribus voluptate, molestias delectus molestiae. Animi
                autem unde aperiam vero laboriosam dicta eaque esse in
                perspiciatis ullam! Doloremque animi voluptatum earum aspernatur
                asperiores repudiandae quaerat soluta, illum sit. Labore,
                voluptate dolor. Consectetur, ad consequatur molestiae earum
                nesciunt ipsa voluptatem natus aliquam.
              </div>
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
              href={ideaLinkURL}
              target="_blank"
              rel="noreferrer"
            >
              {ideaLinkText}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Idea;
