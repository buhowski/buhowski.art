import React from 'react';
import { processParagraphs } from '../OutstaffBlock.constants';
import './ProcessContent.scss';
import Rectangle from '../../../SchemaBlocks/Rectangle/Rectangle';
import LineElement from '../../../SchemaBlocks/LineElement/LineElement';
import bottomArrow from '../../../../../assets/svg/services/schemaSvg/bottom-arrow.svg';
import Square from '../../../SchemaBlocks/Square/Square';

const ProcessContent = () => {
	return (
		<div className='outstaff__content'>
				<div className='outstaff__content-paragraphs'>
				{processParagraphs.map((processParagraph) => (
					<div className='outstaff__content-paragraph' key={processParagraph.id}>
						<span className='outstaff__content-paragraph-title'>
							{processParagraph.title}
						</span>
						<ul className='outstaff__content-paragraph-description'>
							{processParagraph.descriptions.map(description => (
								<li className='outstaff__content-item' key={description}>
									{description}
								</li>
							)) }
						</ul>
					</div>
				))}
			</div>
				<div className='outstaff__content-schema'>
					<Rectangle
						title='Initial Contact'
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
					<Square
						title='Terms of Cooperation'
						width={160}
						height={160}
						borderColor='rgba(255, 255, 255, 0.2)'
						borderRadius='50%'
						borderType='dashed'
					/>
					<LineElement
						height={95}
						bottomIcon={bottomArrow}
					/>
					<Rectangle
						title='Initial Contact'
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
