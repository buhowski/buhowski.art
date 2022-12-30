import React from 'react';
import textData from '../textData';

export default function IdeaRu() {
	return (
		<div className="idea-text">
			{textData.map((text, i) => (
				<div className="idea-block" key={i}>
					<div className="idea-concept">
						<h2 className="idea-block__title h2">{text.mainTitleRu}</h2>
						<h3 className="h3">{text.startupTitleRu}</h3>
						<p className="idea-block__text">{text.appSampleRu}</p>
					</div>

					<div className="idea-concept">
						<h3 className="h3">{text.gameTitleRu}</h3>
						<p className="idea-block__text">{text.gameTextRu}</p>
					</div>

					<div className="idea-concept">
						<h3 className="h3">{text.scenarioTitleRu}</h3>
						<p className="idea-block__text">{text.scenarioTextRu}</p>
					</div>
				</div>
			))}
		</div>
	);
}
