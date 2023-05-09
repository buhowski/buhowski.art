import React from 'react';
import { uxParagraphs } from '../../UIUXBlock/UIUXBlock.constants';
import Square from '../../../SchemaBlocks/Square/Square';
import LineElement from '../../../SchemaBlocks/LineElement/LineElement';
import Rectangle from '../../../SchemaBlocks/Rectangle/Rectangle';
import ConnectingBlock from '../../../SchemaBlocks/ConnectingBlock/ConnectingBlock';
import connectingCircle from '../../../../../assets/svg/services/schemaSvg/connecting-circle.svg';
import rightArrow from '../../../../../assets/svg/services/schemaSvg/right-arrow.svg';
import leftArrow from '../../../../../assets/svg/services/schemaSvg/left-arrow.svg';
import bottomArrow from '../../../../../assets/svg/services/schemaSvg/bottom-arrow.svg';

const UXContent = () => {
	return (
			<div className='uiux__content'>
				<div className='uiux__content-paragraphs'>
					{uxParagraphs.map((uiParagraph) => (
						<div className='uiux__content-paragraph' key={uiParagraph.id}>
							<span className='uiux__content-paragraph-title'>
								{uiParagraph.title}
							</span>
							<p className='uiux__content-paragraph-description'>
								{uiParagraph.description}
							</p>		
						</div>
					))}
				</div>
				<div className='uiux__content-schema'>
					<Square
						title='Research and Analysis'
						width={160}
						height={160}
						borderColor='rgba(65, 181, 111, 0.6)'
						backgroundColor='#1B261F'
						titleRotate={-45}
						squareRotate={45}
						borderRadius='8px'
					/>
					<LineElement
						height={95}
						marginTop={30}
						bottomIcon={bottomArrow}
					/>
					<Rectangle
						title='User Persona Development'
						width={160}
						height={78}
						borderColor='rgba(255, 255, 255, 0.2)'
						backgroundColor='#161616'
						borderType='dashed'
					/>
					<LineElement
						height={95}
						bottomIcon={bottomArrow}
					/>
					<Rectangle
						title='Information Architecture'
						width={160}
						height={78}
						borderColor='rgba(255, 255, 255, 0.2)'
						backgroundColor='#161616'
						borderType='dashed'
						rightSvg={{
							icon: connectingCircle,
							type: 'circle',
						}}
						leftSvg={{
							icon: connectingCircle,
							type: 'circle',
						}}
					/>
					<ConnectingBlock
						width={480}
						height={340}
						marginTop={-39}
						leftChildren={
							<Rectangle
								title='Wireframing'
								width={160}
								height={78}
								borderColor='rgba(255, 255, 255, 0.6)'
								backgroundColor='#2D2D2D'
								borderType='solid'
								topSvg={{
									icon: bottomArrow,
									type: 'arrow',
								}}
								bottomSvg={{
									icon: connectingCircle,
									type: 'circle',
								}}
							/>
						}
						rightChildren={
							<Rectangle
								title='Prototyping'
								width={160}
								height={78}
								borderColor='rgba(255, 255, 255, 0.6)'
								backgroundColor='#2D2D2D'
								borderType='solid'
								topSvg={{
									icon: bottomArrow,
									type: 'arrow',
								}}
								bottomSvg={{
									icon: connectingCircle,
									type: 'circle',
								}}
							/>
						}
					/>
					<Square
						title='Usability Testing'
						width={160}
						height={160}
						borderColor='rgba(65, 181, 111, 0.6)'
						backgroundColor='#1B261F'
						borderRadius='50%'
						marginTop={-80}
						rightSvg={{
							icon: rightArrow,
							type: 'arrow',
						}}
						leftSvg={{
							icon: leftArrow,
							type: 'arrow',
						}}
					/>
				</div>
			</div>
	);
};

export default UXContent;
