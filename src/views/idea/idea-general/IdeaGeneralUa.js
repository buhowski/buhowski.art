import React from 'react';
import textData from '../textData';

export default function IdeaUa() {
	return (
		<div className='idea-text'>
			{textData.map((text, i) => (
				<div className='idea-block' key={i}>
					<div className='idea-concept'>
						<h2 className='idea-block__title h2'>{text.mainTitleUa}</h2>
						<h3 className='h3'>{text.startupTitleUa}</h3>
						<p className='idea-block__text'>{text.appSampleUa}</p>
						<p className='idea-block__text'>{text.whyInfoUa[1]}</p>
					</div>

					<div className='idea-concept'>
						<h3 className='h3'>{text.gameTitleUa}</h3>
						<p className='idea-block__text'>{text.filmInfoUa[2]}</p>
					</div>

					<div className='idea-concept'>
						<h3 className='h3'>{text.scenarioTitleUa}</h3>
						<p className='idea-block__text'>{text.scenarioTextUa}</p>
					</div>
				</div>
			))}
		</div>
	);
}
