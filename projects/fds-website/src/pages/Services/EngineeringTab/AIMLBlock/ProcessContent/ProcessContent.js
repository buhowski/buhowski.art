import React from 'react';
import { aimlParagraphs } from '../AIMLBlock.constants';
import './ProcessContent.scss';
import Rectangle from '../../../SchemaBlocks/Rectangle/Rectangle';
import LineElement from '../../../SchemaBlocks/LineElement/LineElement';
import bottomArrow from '../../../../../assets/svg/services/schemaSvg/bottom-arrow.svg';

const ProcessContent = () => {
	return (
		<div className='aiml__content'>
				<div className='aiml__content-paragraphs'>
					{aimlParagraphs.map((aimlParagraph) => (
						<div className='aiml__content-paragraph' key={aimlParagraph.id}>
							<span className='aiml__content-paragraph-title'>
								{aimlParagraph.title}
							</span>
							<p className='aiml__content-paragraph-description'>
								{aimlParagraph.description}
							</p>		
						</div>
					))}
				</div>
				<div className='aiml__content-schema'>
					<Rectangle
						title='The purpose of the project'
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
						title='Data collection'
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
						title='Prepare the data'
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
						title='Visualize the data'
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
						title='Select a model'
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
						title='Train the model'
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
						title='Evaluating the model'
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
						title='Deploy the model'
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
						title='Update the model'
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
						title='Extend functionality'
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
