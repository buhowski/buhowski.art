import React from 'react';
import './ConnectingBlock.scss';
import LineElement from '../LineElement/LineElement';

const ConnectingBlock = ({
	width,
	height,
	marginTop,
	leftChildren,
	rightChildren,
	leftChildrenMargin,
	rightChildrenMargin,
	borderStyle,
	borderWidth,
	lineElement,
	lineHeight,
	lineTop,
	positionAbsolute
}) => {
	return (
		<div className='schema__connecting-wrapper'>
			{lineElement && (
				<LineElement
					height={lineHeight}
					lineRotate={90}
					top={lineTop}
					positionAbsolute={positionAbsolute}
				/>
			)}
			<div
				style={{
					width: `${width}px`,
					height: `${height}px`,
					marginTop: `${marginTop}px`,
					borderStyle: borderStyle,
					borderWidth: borderWidth,
				}}
				className='schema__connecting-block'
			>
				<div
					style={{
						margin: leftChildrenMargin,
					}}
					className='schema__conecting-block--left'
				>
					{leftChildren}
				</div>
				<div
					style={{
						margin: rightChildrenMargin,
					}}
					className='schema__conecting-block--right'
				>
					{rightChildren}
				</div>	
			</div>
		</div>
	);
};

export default ConnectingBlock;
