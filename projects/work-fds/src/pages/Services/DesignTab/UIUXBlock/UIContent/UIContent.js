import React from 'react';
import Square from '../../../SchemaBlocks/Square/Square';
import LineElement from '../../../SchemaBlocks/LineElement/LineElement';
import Rectangle from '../../../SchemaBlocks/Rectangle/Rectangle';
import ConnectingBlock from '../../../SchemaBlocks/ConnectingBlock/ConnectingBlock';
import connectingCircle from '../../../../../assets/svg/services/schemaSvg/connecting-circle.svg';
import rightArrow from '../../../../../assets/svg/services/schemaSvg/right-arrow.svg';
import leftArrow from '../../../../../assets/svg/services/schemaSvg/left-arrow.svg';
import bottomArrow from '../../../../../assets/svg/services/schemaSvg/bottom-arrow.svg';
import './UIContent.scss';
import Rhombus from '../../../SchemaBlocks/Rhombus/Rhombus';
import BigRhombus from '../../../SchemaBlocks/BigRhombus/BigRhombus';
import { uiParagraphs } from '../UIUXBlock.constants';

const UIContent = () => {
	return (
			<div className='uiux__content'>
				<div className='uiux__content-paragraphs ui'>
					{uiParagraphs.map((uxParagraph) => (
						<div className='uiux__content-paragraph' key={uxParagraph.id}>
							<span className='uiux__content-paragraph-title'>
								{uxParagraph.title}
							</span>
							<p className='uiux__content-paragraph-description'>
								{uxParagraph.description}
							</p>		
						</div>
					))}
				</div>
				<div className='uiux__content-schema ui'>
					<Rhombus
						title='Research and Analysis'
						width={160}
						height={160}
						borderColor='rgba(65, 181, 111, 0.6)'
						backgroundColor='#1B261F'
						borderRadius='8px'
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
						width={545}
						height={480}
						marginTop={-80}
						leftChildren={
							<Rectangle
								title='Style Exploration'
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
								title='Sketching and Ideation'
								width={160}
								height={78}
								borderColor='rgba(255, 255, 255, 0.2)'
								backgroundColor='#161616'
								borderType='dashed'
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
					<BigRhombus
						title='Visual Design'
						width={250}
						height={250}
						borderColor='rgba(242, 96, 255, 0.6)'
						backgroundColor='#2D1E2E'
						borderRadius='8px'
						rightSvg={{
							icon: rightArrow,
							type: 'arrow',
						}}
						leftSvg={{
							icon: leftArrow,
							type: 'arrow',
						}}
						marginTop={-125}
					/>
					<LineElement
						height={95}
						marginTop={45}
						bottomIcon={bottomArrow}
					/>
				
					<Square
						title='Development'
						width={160}
						height={160}
						borderColor='rgba(65, 181, 111, 0.6)'
						backgroundColor='#2d2d2d'
						borderRadius='8px'
					/>
				</div>
			</div>
	);
};

export default UIContent;
