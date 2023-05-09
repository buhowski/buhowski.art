import React from 'react';
import { devProcessParagraphs } from '../DevopmentBlock.constants';
import Square from '../../../SchemaBlocks/Square/Square';
import LineElement from '../../../SchemaBlocks/LineElement/LineElement';
import Rectangle from '../../../SchemaBlocks/Rectangle/Rectangle';
import ConnectingBlock from '../../../SchemaBlocks/ConnectingBlock/ConnectingBlock';
import connectingCircle from '../../../../../assets/svg/services/schemaSvg/connecting-circle.svg';
import rightArrow from '../../../../../assets/svg/services/schemaSvg/right-arrow.svg';
import leftArrow from '../../../../../assets/svg/services/schemaSvg/left-arrow.svg';
import bottomArrow from '../../../../../assets/svg/services/schemaSvg/bottom-arrow.svg';
import greenCheckmark from '../../../../../assets/svg/services/schemaSvg/green-checkmark.svg';
import Rhombus from '../../../SchemaBlocks/Rhombus/Rhombus';
import { ReactSVG } from 'react-svg';
import Monitor from '../../../SchemaBlocks/Monitor/Monitor';
import './DevelopmentProcessContent.scss';

const DevelopmentProcessContent = () => {
	return (
			<div className='development__content'>
				<div className='development__content-paragraphs'>
					{devProcessParagraphs.map((devProcessParagraph) => (
						<div className='development__content-paragraph' key={devProcessParagraph.id}>
							<span className='development__content-paragraph-title'>
								{devProcessParagraph.title}
							</span>
							<p className='development__content-paragraph-description'>
								{devProcessParagraph.description}
							</p>		
						</div>
					))}
				</div>
				<div className='development__content-schema'>
				<div className='content-schema__connetcion-wrapper'>
					<ConnectingBlock
						width={200}
						height={247}
						borderStyle='dashed'
						borderWidth='1px 1px 1px 0'
					/>
				</div>
					<Rhombus
						title='Initial consultation'
						width={160}
						height={160}
						borderColor='rgba(65, 181, 111, 0.6)'
						backgroundColor='#1B261F'
						borderRadius='8px'
						rightSvg={{
							icon: rightArrow,
							type: 'arrow',
						}}
					/>
					<LineElement
						height={90}
						marginTop={30}
						bottomIcon={bottomArrow}
					/>
					<Rectangle
						title='Discovery Phase'
						width={160}
						height={78}
						borderColor='rgba(255, 255, 255, 0.2)'
						backgroundColor='#161616'
						borderType='dashed'
						rightSvg={{
							icon: connectingCircle,
							type: 'circle',
						}}
					/>
					<LineElement
						height={95}
						bottomIcon={bottomArrow}
					/>
					<Rectangle
						title={
							<ReactSVG
								src={greenCheckmark}
								style={{
									width: '25px',
									height: '25px'
								}}
							/>}
						width={160}
						height={78}
						borderColor='rgba(65, 181, 111, 0.6)'
						backgroundColor='#1B261F'
						borderType='solid'
						// marginTop={142}
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
						// leftChildrenMargin={0}
						// rightChildrenMargin={0}
						leftChildren={
							<Square
								title='Development'
								width={160}
								height={150}
								borderColor='rgba(255, 255, 255, 0.6)'
								backgroundColor='#2D2D2D'
								borderRadius='8px'
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
							<Rhombus
								title='Design'
								width={160}
								height={160}
								borderColor='rgba(242, 96, 255, 0.6)'
								backgroundColor='#2D1E2E'
								borderRadius='8px'
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
					<Monitor
						width={160}
						height={112}
						marginTop={-58}
						rightSvg={{
							icon: rightArrow,
							type: 'arrow',
						}}
						leftSvg={{
							icon: leftArrow,
							type: 'arrow',
						}}
					/>
					<LineElement
						height={95}
						
						bottomIcon={bottomArrow}
					/>
					<Square
						title='Launch'
						width={160}
						height={160}
						borderColor='rgba(65, 181, 111, 0.6)'
						backgroundColor='#1B261F'
						borderRadius='50%'
					/>
				</div>
			</div>
	);
};

export default DevelopmentProcessContent;
