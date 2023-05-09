import React from 'react';
import './BigRhombus.scss';
import { ReactSVG } from 'react-svg';

const BigRhombus = ({
	title,
	width,
	height,
	borderColor,
	backgroundColor,
	borderRadius,
	marginTop,
	topSvg,
	rightSvg,
	bottomSvg,
	leftSvg,
}) => {
	return (
		<div
			style={{
				width: `${width}px`,
				height: `${height}px`,
				border: `1.5px solid ${borderColor}`,
				backgroundColor: backgroundColor,
				borderRadius: borderRadius,
				marginTop: `${marginTop}px`,
			}}
			className='schema__rhombus-block'
		>
			
			<ReactSVG
				src={topSvg ? topSvg?.icon : ''}
				className='schema__rhombus-svg top'
				style={{
					left: `${topSvg?.type === 'arrow' ? '-8px' : '-2px'}`,
					top: `${topSvg?.type === 'arrow' ? '-4px' : '-2px'}`,
					width: '8px',
					height: '8px',
				}}
			/>
			<ReactSVG
				src={rightSvg ? rightSvg?.icon : ''}
				className='schema__rhombus-svg right'
				style={{
					right: `${rightSvg?.type === 'arrow' ? '-4px' : '-4px'}`,
					top: `${rightSvg?.type === 'arrow' ? '-5px' : '-2px'}`,
					width: '8px',
					height: '8px',
				}}
			/>
			<ReactSVG
				src={bottomSvg ? bottomSvg?.icon : ''}
				className='schema__rhombus-svg bottom'
				style={{
					bottom: `${bottomSvg?.type === 'arrow' ? '-8px' : '-4px'}`,
					width: '8px',
					height: '8px',
				}}
			/>
			<ReactSVG
				src={leftSvg ? leftSvg?.icon : ''}
				className='schema__rhombus-svg left'
				style={{
					left: `${leftSvg?.type === 'arrow' ? '-4px' : '-3px'}`,
					top: `${leftSvg?.type === 'arrow' ? '244px' : '152px'}`,
					width: '8px',
					height: '8px',
				}}
			/>
			<span
				className='schema__rhombus-title'
			>
				{title}
			</span>
		</div>
	);
};

export default BigRhombus;
