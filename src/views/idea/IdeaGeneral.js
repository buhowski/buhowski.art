import React from 'react';
import './Idea.scss';
import IdeaTabs from './IdeaTabs';
import SliderContainer from './Slider';
import Copyright from './Copyright';
import textData from './textData';

export default function Idea() {
	const contactBtnTitle = 'To Know More';

	const textItems = textData.map((text, i) => {
		return (
			<div className='idea-block' key={i}>
				<div className='idea-concept'>
					<h2 className='idea-block__title h2'>{text.mainTitle}</h2>
					<h3 className='h3'>{text.startupTitle}</h3>
					<p className='idea-block__text'>{text.whyInfo[1]}</p>
					<p className='idea-block__text'>{text.appSample}</p>
				</div>

				<div className='idea-concept'>
					<h3 className='h3'>{text.filmTitle}</h3>
					{text.filmInfo.map((filmInfo, f) => (
						<p key={f} className='idea-block__text'>
							{filmInfo}
						</p>
					))}
				</div>
			</div>
		);
	});

	return (
		<div className='wrapper wrapper--idea'>
			<h1 className='base-title'>I Have An Offer For You!</h1>
			<div className='idea-section'>
				{/* Copyright */}
				<Copyright />

				<IdeaTabs
					IdeaTabRu={textItems[0]}
					IdeaTabEn={textItems[1]}
					IdeaTabUa={textItems[2]}
				/>

				<SliderContainer contactBtnTitle={contactBtnTitle} />
			</div>
		</div>
	);
}
