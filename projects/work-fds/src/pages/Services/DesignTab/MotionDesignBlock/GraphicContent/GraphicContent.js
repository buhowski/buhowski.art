import React from 'react';
import { graphicDesignParagraps } from '../MotionDesignBlock.constants';
import './GraphicContent.scss';
import Rectangle from '../../../SchemaBlocks/Rectangle/Rectangle';
import LineElement from '../../../SchemaBlocks/LineElement/LineElement';
import Square from '../../../SchemaBlocks/Square/Square';
import ConnectingBlock from '../../../SchemaBlocks/ConnectingBlock/ConnectingBlock';
import connectingCircle from '../../../../../assets/svg/services/schemaSvg/connecting-circle.svg';
import rightArrow from '../../../../../assets/svg/services/schemaSvg/right-arrow.svg';
import leftArrow from '../../../../../assets/svg/services/schemaSvg/left-arrow.svg';
import bottomArrow from '../../../../../assets/svg/services/schemaSvg/bottom-arrow.svg';
import Rhombus from '../../../SchemaBlocks/Rhombus/Rhombus';
import BigRhombus from '../../../SchemaBlocks/BigRhombus/BigRhombus';

const GraphicContent = () => {
	return (
		<div className='motion__content'>
				<div className='motion__content-paragraphs'>
				{graphicDesignParagraps.map((paragraph) => (
					<div className='motion__content-paragraph' key={paragraph.id}>
						<span className='motion__content-paragraph-title'>
							{paragraph.title}
						</span>
						<ul className='motion__content-paragraph-description'>
							{paragraph.descriptions.map(description => (
								<li className='motion__content-item' key={description}>
									{description}
								</li>
							)) }
						</ul>		
					</div>
				))}
			</div>
			<div className='motion__content-schema graphic'>
					<Rhombus
						title='Discovery'
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
						lineElement={true}
						positionAbsolute={true}
						lineTop={-28}
						lineHeight={375}
						leftChildren={
							<Rectangle
								title='Graphic process'
								width={160}
								height={78}
								borderColor='rgba(255, 255, 255, 0.6)'
								backgroundColor='#2D2D2D'
								borderType='solid'
								topSvg={{
									icon: bottomArrow,
									type: 'arrow',
								}}
								rightSvg={{
									icon: rightArrow,
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
								title='Motion process'
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
								leftSvg={{
									icon: leftArrow,
									type: 'arrow',
								}}
							/>
						}
					/>
					<BigRhombus
						title='Ready Visiual Iteration'
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
						title='Finalization and Delivery'
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

export default GraphicContent;
