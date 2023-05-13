import React from 'react';
import './Monitor.scss';
import { ReactSVG } from 'react-svg';
import monitorBackground from '../../../../assets/svg/services/schemaSvg/schema-monitor.svg'

const Monitor = ({
	width,
	height,
	topSvg,
	rightSvg,
	bottomSvg,
	leftSvg,
	marginTop,
}) => {
	return (
		<div
			className='schema__monitor-block'
			style={{
				marginTop: `${marginTop}px`,
			}}
		>
			{topSvg?.icon && (
				<ReactSVG
					src={topSvg.icon}
					className='schema__monitor-svg top'
					style={{
						top: `${topSvg?.type === 'arrow' ? '-8px' : '-4px'}`,
						width: '8px',
						height: '8px',
					}}
				/>)}
			{rightSvg?.icon && (
				<ReactSVG
					src={rightSvg.icon}
					className='schema__monitor-svg right'
					style={{
						right: `${rightSvg?.type === 'arrow' ? '-6px' : '-4px'}`,
						width: '8px',
						height: '8px',
					}}
				/>
				)}

			{bottomSvg?.icon && (
				<ReactSVG
					src={ bottomSvg.icon}
					className='schema__monitor-svg bottom'
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
					className='schema__monitor-svg left'
					style={{
						left: `${leftSvg?.type === 'arrow' ? '-6px' : '-4px'}`,
						width: '8px',
						height: '8px',
					}}
				/>
			)}
			<ReactSVG
				src={monitorBackground} className='schema__monitor-background'
				width={width}
				height={height}
				style={{
					width: '160px',
					height: '112px',
				}}
			/>
		</div>
	);
};

export default Monitor;
