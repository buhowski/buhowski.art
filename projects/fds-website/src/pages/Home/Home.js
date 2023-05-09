import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ReactSVG } from 'react-svg';

import gif from './img/focus.gif';
import gif2 from './img/cosmos.gif';
import gif3 from './img/cat.gif';
import triangle from './img/triangle.svg';

import {
	useLargeMedia,
	useHeightMedia,
	useTabletMedia,
	useMobileMedia,
} from '../../utils/useMediaQueries';

import './Home.scss';

const titleInfo = [
	{
		title: 'focus',
		descriptionAfter: 'on engineering & design',
		id: 'focus',
		titleImgClass: 'titleImg--focus',
		img: gif,
	},
	{
		title: 'digital',
		descriptionBefore: 'change with',
		descriptionAfter: 'power',
		id: 'digital',
		titleImgClass: 'titleImg--digital',
		img: gif2,
	},
	{
		title: 'syndicate',
		descriptionAfter: 'of talented people',
		id: 'syndicate',
		titleImgClass: 'titleImg--syndicate',
		img: gif3,
	},
];

const Home = () => {
	const isLargeMedia = useLargeMedia();
	const isHeightMedia = useHeightMedia();
	const isTabletMedia = useTabletMedia();
	const isMobileMedia = useMobileMedia();
	const [hovered, setHovered] = useState('');

	const handleHover = (id) => {
		setHovered(id);
	};

	const handleLeave = () => {
		setHovered('');
	};

	// for mobile title clicking
	const handleClick = (id) => {
		setHovered(id === hovered ? '' : id);
	};

	// responsive position of title animation
	let titleHeight = 468;
	let imgHeight = 337;
	let focusImgTop = 164;
	let digitalImgTop = 275;
	let syndicateImgTop = 385;
	// let widthImg = window.innerWidth;
	let widthImg = '100%';
	let titleHeightInitial = 'auto';

	if (isMobileMedia) {
		titleHeight = 342;
		imgHeight = 260;
		focusImgTop = 120;
		digitalImgTop = 168;
		syndicateImgTop = 216;
		titleHeightInitial = 48;
	} else if (isTabletMedia) {
		titleHeight = 496;
		imgHeight = 420;
		focusImgTop = 180;
		digitalImgTop = 260;
		syndicateImgTop = 338;
	} else if (isHeightMedia) {
		titleHeight = 302;
		imgHeight = 228;
		focusImgTop = 114;
		digitalImgTop = 188;
		syndicateImgTop = 263;
	} else if (isLargeMedia) {
		titleHeight = 420;
		imgHeight = 300;
		focusImgTop = 158;
		digitalImgTop = 270;
		syndicateImgTop = 380;
	}

	const variants = {
		cursor: {
			opacity: [1, 0],
			height: 'auto',
			transition: { duration: 0.2, repeat: 4, repeatType: 'reverse' },
		},

		cursorBack: {
			opacity: [1, 0],
			transition: { duration: 0.2, delay: 0.4 },
		},

		titleState: {
			height: titleHeight,
		},

		titleStateBack: {
			height: titleHeightInitial,
		},

		focusImg: {
			width: widthImg,
			height: imgHeight,
			top: focusImgTop,
			right: 0,
			rotate: 0,
		},

		digitalImg: {
			width: widthImg,
			height: imgHeight,
			top: digitalImgTop,
			right: 0,
			rotate: 0,
		},

		syndicateImg: {
			width: widthImg,
			height: imgHeight,
			top: syndicateImgTop,
			right: 0,
			rotate: 0,
		},

		focusImgInitial: {
			rotate: -30,
			// top: 'calc(100% - 206px)',
			// right: 40
		},

		digitalImgInitial: {
			rotate: 4,
			// top: 'calc(100% - 226px)',
			// right: 146
		},

		syndicateImgInitial: {
			rotate: 11,
			// top: 'calc(100% - 316px)',
			// right: 78
		},
	};

	return (
		<section id='homeSection' className='pageSection'>
			<div className='wrapper'>
				<div className='aboutTitle'>
					<p className='aboutTitle__text'>Who we are</p>
				</div>

				<div className='mainPage'>
					<div className={`mainTitle ${hovered && 'active'}`}>
						{titleInfo.map((item, index) => (
							<motion.div
								className={`titleItem ${item.id} ${
									hovered === item.id ? 'hovered' : ''
								}`}
								key={item.title}
								onMouseLeave={handleLeave}
								variants={variants}
								animate={hovered === item.id ? `titleState` : 'titleStateBack'}
								transition={
									isTabletMedia
										? { ease: 'easeOut', duration: 0.6 }
										: {
												height: {
													ease: [0.2, 0.5, 0.5, 1.15],
													duration: 0.6,
												},
										  }
								}
							>
								<div className='titleText'>
									<motion.div
										className='titleText__before'
										onClick={isTabletMedia ? () => handleClick(item.id) : null}
										// onMouseEnter={!isTabletMedia ? () => handleHover(item.id) : null}
										onMouseEnter={() => handleHover(item.id)}
									>
										{item.descriptionBefore ? (
											<div className='titleText__desc h3 titleText__desc--before'>
												<motion.h3
													className=' titleText__desc-h3'
													animate={
														hovered === item.id
															? {
																	width: 'auto',
																	paddingRight: '4px',
																	transition: { duration: 0.6 },
															  }
															: { width: 0, transition: { duration: 0.4 } }
													}
												>
													{item.descriptionBefore}
												</motion.h3>

												<motion.span
													variants={variants}
													animate={hovered === item.id ? 'cursor' : 'cursorBack'}
												>
													|
												</motion.span>
											</div>
										) : (
											false
										)}
										<div
											className='titleText__main h1'
											// style={{ fontSize: fontSizeTitle }}
										>
											{item.title}

											{isTabletMedia && (
												<ReactSVG src={triangle} className='titleText__mainSvg' />
											)}
										</div>
									</motion.div>

									<div className='titleText__desc h3'>
										<motion.h3
											className='titleText__desc-h3'
											animate={
												hovered === item.id
													? {
															width: 'auto',
															paddingRight: '4px',
															transition: { duration: 0.6 },
													  }
													: { width: 0, transition: { duration: 0.4 } }
											}
										>
											{item.descriptionAfter}
										</motion.h3>

										<motion.span
											variants={variants}
											animate={hovered === item.id ? 'cursor' : 'cursorBack'}
										>
											|
										</motion.span>
									</div>

									<motion.div
										className={`titleImg ${item.titleImgClass}`}
										variants={variants}
										animate={
											hovered === item.id ? `${item.id}Img` : `${item.id}ImgInitial`
										}
										transition={
											isTabletMedia
												? { ease: 'easeOut', duration: 0.6 }
												: {
														ease: [0.2, 0.5, 0.5, 1.15],
														duration: 0.6,
												  }
										}
									>
										<img src={item.img} alt='' />
									</motion.div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
