import React from 'react';
import textData from '../textData';

export default function IdeaEn() {
	return (
		<div className="idea-text">
			{textData.map((text, i) => (
				<div className="idea-block" key={i}>
					<div className="idea-concept">
						<h2 className="idea-block__title h2">{text.mainTitleEn}</h2>
						<h3 className="h3">{text.startupTitleEn}</h3>
						<p className="idea-block__text">{text.appSampleEn}</p>
						<p className="idea-block__text">{text.whyInfoEn[1]}</p>
					</div>

					<div className="idea-concept">
						<h3 className="h3">{text.gameTitleEn}</h3>
						<p className="idea-block__text">{text.gameTextEn}</p>
					</div>

					<div className="idea-concept">
						<h3 className="h3">{text.scenarioTitleEn}</h3>
						<p className="idea-block__text">{text.scenarioTextEn}</p>
					</div>
				</div>
			))}
		</div>
	);
}
