import React, { Component } from 'react';
import sliderImg1 from './images/ai.jpg';
import sliderImg2 from './images/einstein.jpg';
import sliderImg3 from './images/architect.jpg';
import sliderImg4 from './images/evolution.jpg';
import sliderImg5 from './images/mona-cat.png';
import sliderImg6 from './images/ow.jpg';
import sliderImg7 from './images/paint.jpg';
import sliderImg8 from './images/paper.jpg';
import sliderImg9 from './images/startup.jpg';
import sliderImg10 from './images/times.jpg';
import sliderImg11 from './images/write.jpg';
import sliderImg12 from './images/chinking.jpg';
import PopupContacts from './PopupContacts';

const dataImgs = [
	{
		imgSrc: sliderImg1,
		imgAlt: 'ai picture',
	},
	{
		imgSrc: sliderImg2,
		imgAlt: 'einstein picture',
	},
	{
		imgSrc: sliderImg3,
		imgAlt: 'architect picture',
	},
	{
		imgSrc: sliderImg4,
		imgAlt: 'evolution picture',
	},
	{
		imgSrc: sliderImg5,
		imgAlt: 'mona-cat picture',
	},
	{
		imgSrc: sliderImg6,
		imgAlt: 'ow picture',
	},
	{
		imgSrc: sliderImg7,
		imgAlt: 'paint picture',
	},
	{
		imgSrc: sliderImg8,
		imgAlt: 'paper picture',
	},
	{
		imgSrc: sliderImg9,
		imgAlt: 'startup picture',
	},
	{
		imgSrc: sliderImg10,
		imgAlt: 'times picture',
	},
	{
		imgSrc: sliderImg11,
		imgAlt: 'write picture',
	},
	{
		imgSrc: sliderImg12,
		imgAlt: 'chinking picture',
	},
];

class SliderContainer extends Component {
	// Simple react slider
	state = {
		activeIndex: Math.floor(Math.random() * (dataImgs.length - 0) + 0),
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
		const { contactBtnTitle } = this.props;

		return (
			<div className='slider-with-btn'>
				<div className='slider-container'>
					<div className='idea-slider slider-js'>
						{dataImgs.map(({ imgSrc, imgAlt }, i) => (
							<div
								className='slider-item-js'
								data-active={i === this.state.activeIndex}
								key={i}
							>
								<img src={imgSrc} alt={imgAlt} />
							</div>
						))}
					</div>

					<span className='slides-number'>
						{`${this.state.activeIndex + 1 < 10 ? '0' : ''}${
							this.state.activeIndex + 1
						} / ${dataImgs.length < 10 ? '0' : ''}${dataImgs.length}`}
					</span>

					<div className='slider-actions'>
						<button
							className='slider-btn-js slider-btn-js-prev'
							type='button'
							onClick={this.clickPrev}
						></button>

						<button
							className='slider-btn-js slider-btn-js-next'
							type='button'
							onClick={this.clickNext}
						></button>
					</div>

					<PopupContacts contactBtnTitle={contactBtnTitle} />
				</div>

				<PopupContacts contactBtnTitle={contactBtnTitle} />
			</div>
		);
	}
}

export default SliderContainer;
