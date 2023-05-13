import React from 'react';
import { efficiencyParagraphs } from '../ElevantePhase.constants';
import LineElement from '../../../SchemaBlocks/LineElement/LineElement';
import Rectangle from '../../../SchemaBlocks/Rectangle/Rectangle';
import bottomArrow from '../../../../../assets/svg/services/schemaSvg/bottom-arrow.svg';
import './EfficiencyContent.scss';

const EfficiencyContent = () => {
	return (
			<div className='phase__content'>
				<div className='phase__content-paragraphs'>
					{efficiencyParagraphs.map((paragraph) => (
						<div className='phase__content-paragraph' key={paragraph.id}>
							<span className='phase__content-paragraph-title'>
								{paragraph.title}
							</span>
							<p className='phase__content-paragraph-description'>
								{paragraph.description}
							</p>		
						</div>
					))}
				</div>
				<div className='phase__content-schema'>
					<Rectangle
						title='Architectural solution'
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
						title='Development of prototype'
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
						title='2D/3D media production'
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
						title='Interactive UI prototype'
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
						title='First ui design touch'
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
						title='Design architecture vision'
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
						title='Concept validation'
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
						title='Roadmap creation'
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

export default EfficiencyContent;
