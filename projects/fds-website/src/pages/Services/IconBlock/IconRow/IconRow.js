import React, { useEffect, useRef, useState } from 'react';
import './IconRow.scss';
import { ReactSVG } from 'react-svg';
// import { useMediaQuery } from 'react-responsive';
import { useTabletMedia } from '../../../../utils/useMediaQueries';
import Lottie from 'lottie-light-react';
import iconRowHand from '../../../../assets/animations/hand.json';

export const IconRow = ({ technologyIconsRow, notCentered }) => {
	// const [isAtBottom, setIsAtBottom] = useState(false);
	const iconRowRef = useRef(null);
	const technologyHandRef = useRef(null);

	const isTablet = useTabletMedia();

	// const isMobile = useMediaQuery({
	// 	query: `(max-width: 850px)`,
	// });

	// useEffect(() => {
	// 	function handleScroll() {
	// 		const { bottom } = iconRowRef.current.getBoundingClientRect();
	// 		const topPoint = isMobile ? bottom + 150 : bottom + 130;
	// 		const windowHeight = window.innerHeight;

	// 		setIsAtBottom(bottom <= windowHeight && topPoint > windowHeight);
	// 	}

	// 	window.addEventListener('scroll', handleScroll);

	// 	return () => window.removeEventListener('scroll', handleScroll);
	// }, [isMobile]);

	const hoverTechnology = () => {
		technologyHandRef.current.goToAndPlay(0);
	};

	return (
		<div
			ref={iconRowRef}
			className={`icon-block__row ${notCentered ? 'not-centered-row' : ''}`}
			// className={`icon-block__row ${isAtBottom ? 'colorful' : ''} ${notCentered ? 'not-centered-row' : ''}`}
			onMouseEnter={!isTablet ? hoverTechnology : null}
		>
			<div
				className={`icon-block__hand `}
				// className={`icon-block__hand ${isAtBottom  ? 'is-visible'  : '' }`}
			>
				<Lottie
					lottieRef={technologyHandRef}
					animationData={iconRowHand}
					autoplay={false}
					loop={false}
					style={{
						width: '100%',
						height: '100%',
					}}
				/>
			</div>
			<div className='icon-block__row-title'>{technologyIconsRow.rowTitle}</div>
			<div className={`icon-block__row-icons`}>
				{technologyIconsRow.icons.map((icon) => (
					<div className='icon-block__row-icon' key={icon.id}>
						<ReactSVG src={icon.icon} />
					</div>
				))}
			</div>
		</div>
	);
};

export default IconRow;
