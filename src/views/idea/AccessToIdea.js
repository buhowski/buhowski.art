import React from 'react';
import './Idea.scss';
import IdeaTabs from './IdeaTabs';
import IdeaRu from './access-to-idea/IdeaRu';
import IdeaEn from './access-to-idea/IdeaEn';
import IdeaUa from './access-to-idea/IdeaUa';
import SliderContainer from './Slider';
import Copyright from './Copyright';

export default function Idea() {
	const contactBtnTitle = 'Get In Touch';
	const IdeaTabRu = IdeaRu;
	const IdeaTabEn = IdeaEn;
	const IdeaTabUa = IdeaUa;

	return (
		<div className="wrapper wrapper--idea">
			{/* <h1 className="base-title">Make It Real</h1> */}
			<h1 className="base-title">Pure Details</h1>

			<div className="idea-section">
				{/* Copyright */}
				<Copyright />

				<IdeaTabs
					IdeaTabRu={IdeaTabRu}
					IdeaTabEn={IdeaTabEn}
					IdeaTabUa={IdeaTabUa}
				/>

				<SliderContainer contactBtnTitle={contactBtnTitle} />
			</div>
		</div>
	);
}
