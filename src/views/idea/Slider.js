import React, { Component } from 'react';
import sliderImg1 from './images/bm.jpg';
import sliderImg2 from './images/einstein.jpg';
import sliderImg3 from './images/mona-cat.png';
import sliderImg4 from './images/times.jpg';
import sliderImg5 from './images/hyperbolic.jpg';
import PopupContacts from './PopupContacts';

const dataImgs = [
	{
		imgSrc: sliderImg2,
		imgAlt: 'picture just for design',
	},
	{
		imgSrc: sliderImg3,
		imgAlt: 'picture just for design',
	},
	{
		imgSrc: sliderImg1,
		imgAlt: 'picture just for design',
	},
	{
		imgSrc: sliderImg4,
		imgAlt: 'picture just for design',
	},
	{
		imgSrc: sliderImg5,
		imgAlt: 'picture just for design',
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
		let sliderStyle = {
			transform: `translateX(${this.state.activeIndex * -100}%)`,
		};

		return (
			<div className='slider-with-btn'>
				<div className='slider-container'>
					<div className='idea-slider slider-js' style={sliderStyle}>
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
