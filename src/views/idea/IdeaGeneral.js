import React from 'react';
import './Idea.scss';
import IdeaTabs from './IdeaTabs';
import IdeaRu from './idea-general/IdeaGeneralRu';
import IdeaEn from './idea-general/IdeaGeneralEn';
import IdeaUa from './idea-general/IdeaGeneralUa';
import SliderContainer from './Slider';
import Copyright from './Copyright';

export default function Idea() {
	const contactBtnTitle = 'To Know More';
	const IdeaTabRu = IdeaRu;
	const IdeaTabEn = IdeaEn;
	const IdeaTabUa = IdeaUa;

	return (
		<div className='wrapper wrapper--idea'>
			<h1 className='base-title'>I Have An Offer For You!</h1>

			<div className='idea-section'>
				{/* Copyright */}
				<Copyright />

				<IdeaTabs IdeaTabRu={IdeaTabRu} IdeaTabEn={IdeaTabEn} IdeaTabUa={IdeaTabUa} />

				<SliderContainer contactBtnTitle={contactBtnTitle} />
			</div>
		</div>
	);
}
