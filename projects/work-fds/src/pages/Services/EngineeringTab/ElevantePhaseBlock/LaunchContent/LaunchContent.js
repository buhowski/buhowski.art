import React from 'react';
import { launchParagraphs } from '../ElevantePhase.constants';
import LineElement from '../../../SchemaBlocks/LineElement/LineElement';
import Rectangle from '../../../SchemaBlocks/Rectangle/Rectangle';
import bottomArrow from '../../../../../assets/svg/services/schemaSvg/bottom-arrow.svg';
import './LaunchContent.scss';

const LaunchContent = () => {
	return (
			<div className='phase__content'>
				<div className='phase__content-paragraphs'>
					{launchParagraphs.map((devProcessParagraph) => (
						<div className='phase__content-paragraph' key={devProcessParagraph.id}>
							<span className='phase__content-paragraph-title'>
								{devProcessParagraph.title}
							</span>
							<p className='phase__content-paragraph-description'>
								{devProcessParagraph.description}
							</p>		
						</div>
					))}
				</div>
				<div className='phase__content-schema'>
					<Rectangle
						title='Study of needs(scope)'
						width={160}
						height={78}
						borderColor='rgba(65, 181, 111, 0.6)'
						backgroundColor='#21382A'
						borderType='solid'
					/>
					<LineElement
						height={95}
						bottomIcon={bottomArrow}
					/>
					<Rectangle
						title='Development of the concept'
						width={160}
						height={78}
						borderColor='rgba(65, 181, 111, 0.6)'
						backgroundColor='#21382A'
						borderType='solid'
					/>
					<LineElement
						height={95}
						bottomIcon={bottomArrow}
					/>
					<Rectangle
						title='Final UX Concept'
						width={160}
						height={78}
						borderColor='rgba(65, 181, 111, 0.6)'
						backgroundColor='#21382A'
						borderType='solid'
					/>
					<LineElement
						height={95}
						bottomIcon={bottomArrow}
					/>
					<Rectangle
						title='Our efficiency'
						width={160}
						height={78}
						borderColor='rgba(255, 255, 255, 0.2)'
						backgroundColor='#161616'
						borderType='dashed'
					/>
				</div>
			</div>
	);
};

export default LaunchContent;
