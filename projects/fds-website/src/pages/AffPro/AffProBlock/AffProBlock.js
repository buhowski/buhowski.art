import React, { useEffect, useRef, useState } from 'react';
import './AffProBlock.scss';
import { ReactSVG } from 'react-svg';
import rightArrow from '../../../assets/svg/link-right-arrow.svg';
import linkIcon from '../../../assets/svg/link-icon.svg';
import affPro from '../../../assets/svg/affpro-logo.svg';
import behanceIcon from '../../../assets/svg/behance.svg';
import devices from '../../../assets/images/affpro/affpro-devices.svg';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HeaderTabletComponent from './HeaderTabletComponent/HeaderTabletComponent';
import BottomTabletComponent from './BottomTabletComponent/BottomTabletComponent';
import firstBottomImg from '../../../assets/images/affpro/affpro-bottom-2.svg';
import secondBottomImg from '../../../assets/images/affpro/affpro-bottom-3.svg';
import Marquee from "react-fast-marquee";
import Lottie from 'lottie-light-react';
import { tickerElements } from './AffProBlock.constants';
import videoAfpro from '../../../assets/animations/affpro/affpro.mp4';
import affProLogoAnimation from '../../../assets/animations/affpro/affpro-logo.json';


export const services = [
	'Engineering',
	'Web development',
	'Web design',
	'UI',
	'UX',
	'Research',
	'Prototyping',
	'Construction',
	'Real estate',
]

export const stack = [
	{
		id: 1,
		title: 'Research',
		subtitles: [
			{
				id: 11,
				subtitle: 'Research and Analysis',
			},
			{
				id: 12,
				subtitle: 'User Persona Development',
			},
			{
				id: 13,
				subtitle: 'Content Strategy',
			},
			{
				id: 14,
				subtitle: 'Information Architecture',
			},
			{
				id: 15,
				subtitle: 'Usability Testing',
			},
		]
	},
	{
		id: 2,
		title: 'Design',
		subtitles: [
			{
				id: 21,
				subtitle: 'Style Exploration',
			},
			{
				id: 22,
				subtitle: 'Sketching and Ideation',
			},
			{
				id: 23,
				subtitle: 'Wireframing',
			},
			{
				id: 24,
				subtitle: 'Prototyping',
			},
			{
				id: 25,
				subtitle: 'Visual Design',
			},
		]
	},
]

export const affProLink = 'https://aff-pro.com/';

const AffProBlock = () => {
	const [currentStack, setCurrentStack] = useState(stack[0]);
	const aboutInfoBlockRef = useRef(null);
	const videoAfproRef = useRef(null);
	const videoAfproRefBlock = useRef(null);
	const colorsBlockRef = useRef(null);

	const isDesktop = useMediaQuery({
		query: `(min-width: 1280px)`,
	});

	const isMobile = useMediaQuery({
		query: `(max-width: 719px)`,
	});

	useEffect(() => {
		const handleScroll = () => {
			if (!isDesktop) {
				return;
			}
			const leftBlock = aboutInfoBlockRef.current;
			const leftBlockBottom = leftBlock.getBoundingClientRect().bottom;
			const rightBlock = videoAfproRefBlock.current;
			const rightBlockBottom = rightBlock.getBoundingClientRect().bottom;
			const colorsBlock = colorsBlockRef.current;
			const colorsBlockBottom = colorsBlock.getBoundingClientRect().bottom;
			const windowHeight = window.innerHeight;

			if (leftBlockBottom < windowHeight) {
				leftBlock.classList.add("affpro-animate-in");
			}

			if (rightBlockBottom < windowHeight) {
				rightBlock.classList.add("affpro-animate-in");
			}

			if (colorsBlockBottom < windowHeight) {
				colorsBlock.classList.add("affpro-animate-in");
			}
		};
	
		window.addEventListener("scroll", handleScroll);
	
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isDesktop]);

	useEffect(() => {
		if (videoAfproRef.current) {
			videoAfproRef.current.currentTime = 0;
			videoAfproRef.current.play();
		}
	}, []);
	

	return (
		<div className='affpro__wrapper'>
			<div className='affpro__navigation'>
				{!isMobile && (<div className='affpro__item'>
					<div className='affpro__item-main-svg'>
						<ReactSVG
							src={affPro}
							wrapper='span'
						/>
					</div>
				</div>)}
				<div className='affpro__item'>
					2023
				</div>
				<div className='affpro__item'>
					Spain, Barcelona
				</div>
				{!isMobile && (<NavLink to={affProLink} className='affpro__item' target='_blank'>
					<span className='affpro__item-title'>aff-pro.com</span>
					<div className='affpro__item-svg'>
						<ReactSVG
							src={rightArrow}
							className='affpro__item-svg'
							wrapper='span'
						/>
					</div>
				</NavLink>)}
			</div>
			{isDesktop ? (<header className='affpro__header'>
				<div className='affpro__header-img' />
				<div className='affpro__header-info'>
					<a href={affProLink} className='affpro__header-link' target='_blank' rel="noreferrer">
						<span className='affpro__header-title'>Affpro</span>
						<ReactSVG
							src={linkIcon}
							className='affpro__header-svg'
							wrapper='span'
						/>
					</a>
					<div className='affpro__header-description'>
					  Take advantage of the advanced multi-vertical affiliate network and boost your profits by implementing AFFPRO's phenomenal marketing expertise into your promotion strategy! The service is aimed to provide an all-inclusive service based on techniques and mechanisms showing proven results within a specific niche. Employ the effective traffic-generating model and watch your business grow at unprecedented rates!
					</div>
					<div className='affpro__header-list'>
						{services.map((service, index) => (
							<div className='affpro__header-list-item' key={service + index}>
								{service}
							</div>
						))}
					</div>
					<div className='affpro__header-behance'>
						<span>View the project on Behance</span>
						<NavLink to={affProLink} target='_blank'>
							<div className='affpro__header-behance-svg'>
								<ReactSVG
									src={behanceIcon}
									className='affpro__header-behance-svg'
									wrapper='span'
								/>
							</div>
						</NavLink>
					</div>
				</div>
			</header>) : (
				<HeaderTabletComponent />
			)}		
			<>
				{isDesktop && (
					<Marquee
						pauseOnHover
						style={{
							display: 'flex',
							padding: '15px 0'
						}}
					>
						{tickerElements.map(tickerElement => (
							<div className='affpro__animation' key={tickerElement.id}>
								<div className='affpro__animation-img'>
									<Lottie
										animationData={tickerElement.animation}
										autoplay={true}
										loop={true}
									/>
								</div>
								<div className='affpro__animation-text'>
									{tickerElement.title}
								</div>
							</div>
						))}
					</Marquee>	
				)}
			</>
			<div className='affpro__stack'>
				<div className='affpro__stack-titles'>
					{stack.map(stackItem => (
						<div
							key={stackItem.id}
							className={`affpro__stack-title ${stackItem.id === currentStack.id ? 'active-stack-title' : ''
								}`}
							onClick={() => setCurrentStack(stackItem)}
						>
							{stackItem.title}
						</div>
					))}
				</div>
				<div className='affpro__stack-subtitles'>
					{currentStack.subtitles.map(subtitleItem => (
						<div
							key={subtitleItem.id}
							className='affpro__stack-subtitle'
						>
							{subtitleItem.subtitle}
						</div>
					))}
				</div>
			</div>
			<div className='affpro__about'>
				<div className='affpro__about-info' ref={aboutInfoBlockRef}>
					<div className='affpro__about-title'>
						<span>About</span>
						<span>Affpro</span>
					</div>
					<p className='affpro__about-description'>
					  AFFPRO is an advanced performance marketing service involving numerous virtual instruments focused on targeted audience engagement and traffic optimization to increase businesses efficiency. What we offer is to take advantage of our ever-improving affiliate network to rank higher within your niche or maximize your profits and become a trustworthy affiliate partner. We do our best to straighten our influence in various business sectors. We're not limited to certain specifications, providing comprehensive services for different marketing verticals, including Gambling, Betting, Crypto, Finance, FX, Sweepstakes, Dating, Utilities, eCommerce, Nutra, etc. Finding your convenient and lucrative promotion method and webmaster is easier than ever with AFFPRO, delivering rich marketing toolsets, in-depth analysis, extensive guidance, and exceptional offers in a few clicks.
					</p>
				</div>
				{isDesktop && (
				<div className='affpro__about-video' ref={videoAfproRefBlock} >
					<video
						muted	
						loop
						ref={videoAfproRef}
					>
						<source src={videoAfpro} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>
				
				)}
			</div>
			{isDesktop ? (<div className='affpro__content'>
				<div className='affpro__content_top'>
					<div className='affpro__content_top-logo affpro-bottom-block'>
						<Lottie
							animationData={affProLogoAnimation}
							autoplay={true}
							loop={true}
							style={{
								width: '100%',
								height: '100%',
							}}
						/>
					</div>
					<div className='affpro__content_top-colors affpro-bottom-block'>
						<div className='affpro__content_top-colors-block' ref={colorsBlockRef}>
						  <div className='affpro__content_top-color-block'>
								<div className='affpro__content_top-color affpro-tang' />
								<div className='affpro__content_top-color-title '>
									#2757C1
								</div>
							</div>
							<div className='affpro__content_top-color-block'>
								<div className='affpro__content_top-color affpro-rich' />
								<div className='affpro__content_top-color-title'>
									#08071B
								</div>
							</div>
							<div className='affpro__content_top-color-block'>
								<div className='affpro__content_top-color affpro-penn' />
								<div className='affpro__content_top-color-title'>
									#121040
								</div>
							</div>
							<div className='affpro__content_top-color-block'>
								<div className='affpro__content_top-color affpro-delft' />
								<div className='affpro__content_top-color-title'>
									#232C67
								</div>
							</div>
							<div className='affpro__content_top-color-block'>
								<div className='affpro__content_top-color affpro-light-delft' />
								<div className='affpro__content_top-color-title'>
									#2E387A
								</div>
							</div>
							<div className='affpro__content_top-color-block'>
								<div className='affpro__content_top-color affpro-marian' />
								<div className='affpro__content_top-color-title'>
									#36418E
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='affpro__content_bottom'>
					<div className='affpro__content_bottom-info-block'>
						<div className='affpro__content_bottom-info affpro-bottom-block'>
							<span className='affpro__content_bottom-info-title'>
								Building the future together
							</span>
							<p className='affpro__content_bottom-info-description'>
								Building Your Dreams: Elevate your living experience with our comprehensive and innovative construction services that make your dream home a reality. Our unwavering commitment to safety and luxury is reflected in every aspect of our work, from using the latest technology to employing the finest craftsmanship, resulting in exceptional quality and precision. You can trust us to bring your unique vision to life, creating a space that perfectly encapsulates your personality, lifestyle, and aspirations. With our expert team at the helm, you can sit back, relax, and enjoy the journey toward your dream home.
							</p>
						</div>
						<div className='affpro__content_bottom-images'>
							<div className='affpro__content_bottom-image-block affpro-bottom-block'>
								<ReactSVG
									src={firstBottomImg}
									className='affpro__content_bottom-first-img'
									wrapper='span'
								/>
							</div>
							<div className='affpro__content_bottom-image-block affpro-bottom-block'>
								<ReactSVG
									src={secondBottomImg}
									className='affpro__content_bottom-second-img'
									wrapper='span'
								/>
							</div>
						</div>
					</div>
					<div className='affpro__content_bottom-devices-block affpro-bottom-block'>
						<ReactSVG
							src={devices}
							className='affpro__content_bottom-devices-img'
							wrapper='span'
						/>
					</div>
				</div>
			</div>) : (<BottomTabletComponent />)}

		</div>
	);
};

export default AffProBlock;
