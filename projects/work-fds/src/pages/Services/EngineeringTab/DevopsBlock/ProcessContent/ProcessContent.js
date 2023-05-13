import React from 'react';
import { processParagraphs } from '../DevopsBlock.constants';
import './ProcessContent.scss';
import Rectangle from '../../../SchemaBlocks/Rectangle/Rectangle';
import LineElement from '../../../SchemaBlocks/LineElement/LineElement';
import bottomArrow from '../../../../../assets/svg/services/schemaSvg/bottom-arrow.svg';

const ProcessContent = () => {
	return (
		<div className='devops__content'>
				<div className='devops__content-paragraphs'>
				{processParagraphs.map((processParagraph) => (
					<div className='devops__content-paragraph' key={processParagraph.id}>
						<span className='devops__content-paragraph-title'>
							{processParagraph.title}
						</span>
						<ul className='devops__content-paragraph-description'>
							{processParagraph.descriptions.map(description => (
								<li className='devops__content-item' key={description}>
									{description}
								</li>
							)) }
						</ul>		
					</div>
				))}
			</div>
				<div className='devops__content-schema'>
					<Rectangle
						title='Initial consultation'
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
						title='Discovery phase'
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
						title='Create a roadmap'
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
						title='Create a roadmap'
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
						title='Getting to know the team'
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
						title='PoC'
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
						title='Epics'
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
						title='Define processes'
						width={160}
						height={78}
						borderColor='rgba(65, 181, 111, 0.6)'
						backgroundColor='#21382A'
						borderType='solid'
					/>
				</div>
			</div>
	);
};

export default ProcessContent;
