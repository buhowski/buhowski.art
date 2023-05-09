import React from 'react';
import './Square.scss';
import { ReactSVG } from 'react-svg';

const Square = ({
	title,
	width,
	height,
	borderColor,
	backgroundColor,
	titleRotate,
	squareRotate,
	borderRadius,
	marginTop,
	topSvg,
	rightSvg,
	bottomSvg,
	leftSvg,
	borderType,
}) => {
	return (
		<div
			style={{
				width: `${width}px`,
				height: `${height}px`,
				backgroundColor: backgroundColor,
				transform: `rotate(${squareRotate}deg)`,
				borderRadius: borderRadius,
				marginTop: `${marginTop}px`,
				borderStyle: borderType,
			}}
			className='schema__square-block'
		>
			<ReactSVG
				src={topSvg ? topSvg?.icon : ''}
				className='schema__square-svg top'
				style={{
					top: `${topSvg?.type === 'arrow' ? '-8px' : '-4px'}`,
					width: '8px',
					height: '8px',
				}}
			/>
			<ReactSVG
				src={rightSvg ? rightSvg?.icon : ''}
				className='schema__square-svg right'
				style={{
					right: `${rightSvg?.type === 'arrow' ? '-8px' : '-4px'}`,
					width: '8px',
					height: '8px',
				}}
			/>
			<ReactSVG
				src={bottomSvg ? bottomSvg?.icon : ''}
				className='schema__square-svg bottom'
				style={{
					bottom: `${bottomSvg?.type === 'arrow' ? '-8px' : '-4px'}`,
					width: '8px',
					height: '8px',
				}}
			/>
			<ReactSVG
				src={leftSvg ? leftSvg?.icon : ''}
				className='schema__square-svg left'
				style={{
					left: `${leftSvg?.type === 'arrow' ? '-8px' : '-4px'}`,
					width: '8px',
					height: '8px',
				}}
			/>
			<span
				style={{
					transform: `rotate(${titleRotate}deg)`
				}}
				className='schema__square-title'
			>
				{title}
			</span>
		</div>
	);
};

export default Square;
