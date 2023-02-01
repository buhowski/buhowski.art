import React from 'react';
import './Idea.scss';
import IdeaTabs from './IdeaTabs';
import textData from './textData';

export default function Idea() {
	const contactBtnTitle = 'Read Full Presentation';
	const baseTitle = 'I Have An Offer For You!';

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

				<div className='idea-block idea-block--ps'>
					<p className='idea-block__text'>
						<span className='idea-block-colored'>P.S. </span>
						{text.ps1}
						<br />
						{text.ps2}
					</p>
				</div>
			</div>
		);
	});

	return (
		<IdeaTabs
			IdeaTabRu={textItems[0]}
			IdeaTabEn={textItems[1]}
			IdeaTabUa={textItems[2]}
			baseTitle={baseTitle}
			contactBtnTitle={contactBtnTitle}
		/>
	);
}
