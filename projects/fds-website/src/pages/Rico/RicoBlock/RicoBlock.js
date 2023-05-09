import React, { useEffect, useRef, useState } from 'react';
import './RicoBlock.scss';
import { ReactSVG } from 'react-svg';
import ricoLogo from '../../../assets/svg/rico.svg';
import behanceIcon from '../../../assets/svg/behance.svg';
import devices from '../../../assets/images/rico/rico-devices.svg';
import { useMediaQuery } from 'react-responsive';
import HeaderTabletComponent from './HeaderTabletComponent/HeaderTabletComponent';
import BottomTabletComponent from './BottomTabletComponent/BottomTabletComponent';
import { tickerElements } from './Rico.constants';
import Marquee from "react-fast-marquee";
import Lottie from 'lottie-light-react';
import ricoAnimation from '../../../assets/animations/rico/second-animation.json';
import ricoAnScaner from '../../../assets/animations/rico/rico-scaner.json';
import house from '../../../assets/animations/rico/house.json';
import rooms from '../../../assets/animations/rico/rooms.json';

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

export const ricoLink = '';

const RicoBlock = () => {
	const [currentStack, setCurrentStack] = useState(stack[0]);
	const aboutInfoBlockRef = useRef(null);
	const aboutImgBlockRef = useRef(null);
	const colorsBlockRef = useRef(null);

	const isDesktop = useMediaQuery({
		query: `(min-width: 1281px)`,
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
			const rightBlock = aboutImgBlockRef.current;
			const rightBlockBottom = rightBlock.getBoundingClientRect().bottom;
			const colorsBlock = colorsBlockRef.current;
			const colorsBlockBottom = colorsBlock.getBoundingClientRect().bottom;
			const windowHeight = window.innerHeight;

			if (leftBlockBottom < windowHeight) {
				leftBlock.classList.add("rico-animate-in");
			}

			if (rightBlockBottom < windowHeight) {
				rightBlock.classList.add("rico-animate-in");
			}

			if (colorsBlockBottom < windowHeight) {
				colorsBlock.classList.add("rico-animate-in");
			}
		};
	
		window.addEventListener("scroll", handleScroll);
	
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isDesktop]);

	return (
		<div className='rico__wrapper'>
			<div className='rico__navigation'>
				{!isMobile && (<div className='rico__item'>
					<ReactSVG
						src={ricoLogo}
						className='rico__item-main-svg'
						wrapper='span'
					/>
				</div>)}
				<div className='rico__item'>
					2023
				</div>
				<div className='rico__item'>
					Spain, Barcelona
				</div>
			</div>
			{isDesktop ? (<header className='rico__header'>
				<div className='rico__header-svg-block' />
				<div className='rico__header-info'>
					<div className='rico__header-link' target='_blank'>
						<span className='rico__header-title'>Rico</span>
					</div>
					<div className='rico__header-description'>
					  Save time with Rico’s property management instruments and rent an appropriate place to experience your vivid moments. Depending on your requirements, the App renders relevant listings of available realty thanks to numerous categories and tags provided by a progressive search toolset. Find the perfect fit for your lifestyle with Rico's wide interface offering extra features to help you make the right decision!
					</div>
					<div className='rico__header-list'>
						{services.map((service, index) => (
							<div className='rico__header-list-item' key={service + index}>
								{service}
							</div>
						))}
					</div>
					<div className='rico__header-behance'>
						<span>View the project on Behance</span>
						<a
							href={ricoLink}
							target='_blank'
							className='rico__header-behance-svg'
							rel="noreferrer"
						>
							<ReactSVG
								src={behanceIcon}
								wrapper='span'
								style={{
									width: '24x',
									height: '16px',
								}}
							/>
						</a>
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
							<div className='rico__animation' key={tickerElement.id}>
								<Lottie
									animationData={tickerElement.animation}
									autoplay={true}
									loop={true}
									style={{
										width: '120px',
										height: '100px',
									}}
								/>
							</div>
						))}
					</Marquee>	
				)}
			</>
			<div className='rico__stack'>
				<div className='rico__stack-titles'>
					{stack.map(stackItem => (
						<div
							key={stackItem.id}
							className={`rico__stack-title ${stackItem.id === currentStack.id ? 'active-stack-title' : ''
								}`}
							onClick={() => setCurrentStack(stackItem)}
						>
							{stackItem.title}
						</div>
					))}
				</div>
				<div className='rico__stack-subtitles'>
					{currentStack.subtitles.map(subtitleItem => (
						<div
							key={subtitleItem.id}
							className='rico__stack-subtitle'
						>
							{subtitleItem.subtitle}
						</div>
					))}
				</div>
			</div>
			<div className='rico__about'>
				<div className='rico__about-info' ref={aboutInfoBlockRef}>
					<div className='rico__about-title'>
						<span>About</span>
						<span>Rico</span>
					</div>
					<p className='rico__about-description'>
					  Rico is a smart mobile application providing an extended set of real estate searching tools to deliver only the listings consistent with users' requirements. Like any other up-to-date technology, Rico aims to save time, assure a pleasant user experience, and endow professional service. The App offers plenty of tags to apply during search queries to consider required square footage, accommodation, price, facilities, design, rental term, etc. Whether you're looking for a long-term lease or short-term rental of a luminous apartment, vintage mansion, luxury yacht, or high-end multi-family residential building, Rico is a great option to find the solution fast and effortlessly.
					</p>
				</div>
				{isDesktop && (
					<div className='rico__about-img' ref={aboutImgBlockRef}>
						<Lottie
							animationData={ricoAnScaner}
							autoplay={true}
							loop={true}
							style={{
								width: '60%',
								height: '60%',
							}}
						/>
					</div>
				)}
			</div>
			{isDesktop ? (<div className='rico__content'>
				<div className='rico__content_top'>
					<div className='rico__content_top-logo rico-bottom-block'>
						<Lottie
							animationData={ricoAnimation}
							autoplay={true}
							loop={true}
							style={{
								width: '100%',
								height: '100%',
							}}
						/>
					</div>
					<div className='rico__content_top-colors rico-bottom-block'>
						<div className='rico__content_top-colors-block' ref={colorsBlockRef}>
							<div className='rico__content_top-color-block'>
								<div className='rico__content_top-color rico-tang'>
								</div>
								<div className='rico__content_top-color-title '>
									#000040
								</div>
							</div>
							<div className='rico__content_top-color-block'>
								<div className='rico__content_top-color rico-rich'>
								</div>
								<div className='rico__content_top-color-title'>
									#07077B
								</div>
							</div>
							<div className='rico__content_top-color-block'>
								<div className='rico__content_top-color rico-penn'>
								</div>
								<div className='rico__content_top-color-title'>
									#00CE7D
								</div>
							</div>
							<div className='rico__content_top-color-block'>
								<div className='rico__content_top-color rico-delft'>
								</div>
								<div className='rico__content_top-color-title'>
									#63E2B0
								</div>
							</div>
							<div className='rico__content_top-color-block'>
								<div className='rico__content_top-color rico-light-delft'>
								</div>
								<div className='rico__content_top-color-title'>
									#FF9331
								</div>
							</div>
							<div className='rico__content_top-color-block'>
								<div className='rico__content_top-color rico-marian'>
								</div>
								<div className='rico__content_top-color-title'>
									#FFBE83
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='rico__content_bottom'>
					<div className='rico__content_bottom-info-block'>
						<div className='rico__content_bottom-info rico-bottom-block'>
							<span className='rico__content_bottom-info-title'>
								WElCOME TO RICO RENT
							</span>
							<p className='rico__content_bottom-info-description'>
							 Rico is a free, smart app that helps you find best rental properties in Barcelona - private homes, commercial real estate or even yachts.
							</p>
						</div>
						<div className='rico__content_bottom-images'>
							<div className='rico__tablet-content_bottom-image-block rico-bottom-block'>
									<Lottie
										animationData={rooms}
										autoplay={true}
										loop={true}
										style={{
											width: '100%',
											height: '100%',
										}}
									/>
							</div>
							<div className='rico__tablet-content_bottom-image-block rico-bottom-block'>
								<Lottie
										animationData={house}
										autoplay={true}
										loop={true}
										style={{
											width: '100%',
											height: '100%',
										}}
									/>
							</div>
						</div>
					</div>
					<div className='rico__content_bottom-devices-block rico-bottom-block'>
						<ReactSVG
							src={devices}
							className='rico__content_bottom-devices-img'
							wrapper='span'
							style={{
								width: '330px',
								height: '670px'
							}}
						/>
					</div>
				</div>
			</div>) : (<BottomTabletComponent />)}

		</div>
	);
};

export default RicoBlock;
