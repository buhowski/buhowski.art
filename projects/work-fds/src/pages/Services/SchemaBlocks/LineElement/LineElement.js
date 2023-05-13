import React from 'react';
import './LineElement.scss';
import { ReactSVG } from 'react-svg';

const LineElement = ({
	height,
	lineRotate,
	marginTop,
	bottomIcon,
	positionAbsolute,
	top,
}) => {
	return (
		<div className='schema__wrapper' style={{
			marginTop: `${marginTop}px`,
		}}>
			<div
				style={{
					height: `${height}px`,
					transform: `rotate(${lineRotate}deg)`,
					position: `${positionAbsolute ? 'absolute' : 'relative'}`,
					top: `${top}px`
				}}
				className='schema__line'
			>
			</div>
			{bottomIcon && (
				<ReactSVG
					src={bottomIcon}
					className='schema__line-svg bottom'
					style={{
						width: '8px',
						height: '8px',
					}}
				/>
			)}
		</div>
		
	);
};

export default LineElement;
