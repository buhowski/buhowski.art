import React from 'react';
import './Rectangle.scss';
import { ReactSVG } from 'react-svg';

const Rectangle = ({
	title,
	width,
	height,
	borderColor,
	backgroundColor,
	marginTop,
	borderType,
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
				border: `1.5px ${borderType} ${borderColor}`,
				marginTop: `${marginTop}px`,
				backgroundColor: backgroundColor,
			}}
			className='schema__rectangle-block'
		>
			{topSvg?.icon && (
				<ReactSVG
					src={topSvg.icon}
					className='schema__rectangle-svg top'
					style={{
						top: `${topSvg?.type === 'arrow' ? '-8px' : '-4px'}`,
						width: '8px',
						height: '8px',
					}}
				/>)}
			{rightSvg?.icon && (
				<ReactSVG
					src={rightSvg.icon}
					className='schema__rectangle-svg right'
					style={{
						right: `${rightSvg?.type === 'arrow' ? '-9px' : '-4px'}`,
						width: '8px',
						height: '8px',
					}}
				/>
				)}

			{bottomSvg?.icon && (
				<ReactSVG
					src={ bottomSvg.icon}
					className='schema__rectangle-svg bottom'
					style={{
						bottom: `${bottomSvg?.type === 'arrow' ? '-8px' : '-4px'}`,
						width: '8px',
						height: '8px',
					}}
				/>
			)}
			
			{leftSvg?.icon && (
				<ReactSVG
					src={leftSvg.icon}
					className='schema__rectangle-svg left'
					style={{
						left: `${leftSvg?.type === 'arrow' ? '-9px' : '-4px'}`,
						width: '8px',
						height: '8px',
					}}
				/>
			)}
			<span
				className='schema__rectangle-title'
			>
				{title}
			</span>
		</div>
	);
};

export default Rectangle;
