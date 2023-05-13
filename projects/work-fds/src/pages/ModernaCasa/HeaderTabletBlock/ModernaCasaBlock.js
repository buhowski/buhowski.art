import React, { useState } from 'react';
import './ModernaCasaBlock.scss';
import { ReactSVG } from 'react-svg';
import modernaCasaIcon from '../../../assets/svg/moderna-casa-logo.svg';
import rightArrow from '../../../assets/svg/link-right-arrow.svg';
import linkIcon from '../../../assets/svg/link-icon.svg';
import modernaCasaLogo from '../../../assets/svg/moderna-white-logo.svg';
import behanceIcon from '../../../assets/svg/behance.svg';
import devices from '../../../assets/images/moderna/moderna-devices.svg';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import '../../../styles/variables';

const services = [
	'Engineering',
	'Web development',
	'Web design',
	'UI',
	'UX',
	'Research',
	'Prototyping',
	'Construction',
	'Real estate'
]

const stack = [
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
	{
		id: 3,
		title: 'Development',
		subtitles: [
			{
				id: 31,
				subtitle: 'Front-end developments',
			},
			{
				id: 32,
				subtitle: 'Back-end development',
			},
			{
				id: 33,
				subtitle: 'Testing and quality assurance',
			},
		]
	}
]

const ModernaCasaBlock = () => {
	const [currentStack, setCurrentStack] = useState(stack[0]);

	const modernaCasaLink = 'https://modernacasa.es/';

	return (
		<div className='moderna-casa__wrapper'>
			<div className='moderna-casa__navigation'>
				<div className='moderna-casa__item'>
					<ReactSVG
						src={modernaCasaIcon}
						className='moderna-casa__item-svg'
						wrapper='span'
					/>
					<span className='moderna-casa__item-title'>Modernacasa</span>
				</div>
				<div className='moderna-casa__item'>
				  2023
				</div>
				<div className='moderna-casa__item'>
				  Spain, Barcelona
				</div>
				<NavLink to={modernaCasaLink} className='moderna-casa__item' target='_blank'>
					<span className='moderna-casa__item-title'>modernacasa.es</span>
					<ReactSVG
						src={rightArrow}
						className='moderna-casa__item-svg'
						wrapper='span'
					/>
				</NavLink>
			</div>
			<header className='moderna-casa__header'>
				<div className='moderna-casa__header-img'/>
				<div className='moderna-casa__header-info'>
					<NavLink to={modernaCasaLink} className='moderna-casa__header-link' target='_blank'>
						<span className='moderna-casa__header-title'>Modernacasa.es</span>
						<ReactSVG
							src={linkIcon}
							className='moderna-casa__header-svg'
							wrapper='span'
						/>
					</NavLink>
					<div className='moderna-casa__header-description'>
					  Design your rental experience with the help of our app. It's fun, easy, and you can select from thousands of properties in Spain to rent. Whether you're looking for an affordable apartment or a luxe villa in the country, Rico is here for you. Whether you're looking for an affordable apartment or a luxe villa in the country, Rico is here...
					</div>
					<div className='moderna-casa__header-list'>
						{services.map((service, index) => (
							<div className='moderna-casa__header-list-item' key={service + index}>
								{service}
							</div>
						))}
					</div>
					<div className='moderna-casa__header-behance'>
						<span>View the project on Behance</span>
						<NavLink to={modernaCasaLink} target='_blank'>
							<ReactSVG
								src={behanceIcon}
								className='moderna-casa__header-behance-svg'
								wrapper='span'
							/>
						</NavLink>
					</div>
				</div>
			</header>
			<div className='moderna-casa__stack'>
				<div className='moderna-casa__stack-titles'>
					{stack.map(stackItem => (
						<div
							key={stackItem.id}
							className={`moderna-casa__stack-title ${
								stackItem.id === currentStack.id ? 'active' : ''
							}`}
							onClick={() => setCurrentStack(stackItem)}
						>
							{stackItem.title}
						</div>
					))}
				</div>
				<div className='moderna-casa__stack-subtitles'>
					{currentStack.subtitles.map(subtitleItem => (
						<div
							key={subtitleItem.id}
							className='moderna-casa__stack-subtitle'
						>
							{subtitleItem.subtitle}
						</div>
					))}
				</div>
			</div>
			<div className='moderna-casa__about'>
				<div className='moderna-casa__about-info'>
					<div className='moderna-casa__about-title'>
						<span>About</span>
						<span>Modernacasa</span>
					</div>
					<p className='moderna-casa__about-description'>
						Design your rental experience with the help of our app. It's fun, easy, and you can select from thousands of properties in Spain to rent. Whether you're looking for an affordable apartment or a luxe villa in the country, Rico is here for you. Whether you're looking for an affordable apartment or a luxe villa in the country, Rico is here. Design your rental experience with the help of our app. It's fun, easy, and you can select from thousands of properties in Spain to rent. Whether you're looking for an affordable apartment or a luxe villa in the country, Rico is here for you. Whether you're looking for an affordable apartment or a luxe villa in the country, Rico is here...
					</p>
				</div>
				<div className='moderna-casa__about-img'/>
			</div>
			<div className='moderna-casa__content'>
				<div className='moderna-casa__content_top'>
					<div className='moderna-casa__content_top-logo bottom-block'>
						<ReactSVG
							src={modernaCasaLogo}
							className='moderna-casa__top-logo-svg'
							wrapper='span'
						/>
					</div>
					<div className='moderna-casa__content_top-colors bottom-block'>
						<div className='moderna-casa__content_top-color-block'>
							<div className='moderna-casa__content_top-color onyx'>
								Onyx
							</div>
							<div className='moderna-casa__content_top-color-title '>
								#323436
							</div>
						</div>
						<div className='moderna-casa__content_top-color-block'>
							<div className='moderna-casa__content_top-color maize'>
								Maize
							</div>
							<div className='moderna-casa__content_top-color-title'>
								#FFE662
							</div>
						</div>
						<div className='moderna-casa__content_top-color-block'>
							<div className='moderna-casa__content_top-color black'>
								Black
							</div>
							<div className='moderna-casa__content_top-color-title'>
								#000000
							</div>
						</div>
					</div>
					<div className='moderna-casa__content_top-img'/>
				</div>
				<div className='moderna-casa__content_bottom'>
					<div className='moderna-casa__content_bottom-info-block'>
						<div className='moderna-casa__content_bottom-info bottom-block'>
							<span className='moderna-casa__content_bottom-info-title'>
								Building the future together
							</span>
							<p className='moderna-casa__content_bottom-info-description'>
							  Building Your Dreams: Elevate your living experience with our comprehensive and innovative construction services that make your dream home a reality. Our unwavering commitment to safety and luxury is reflected in every aspect of our work, from using the latest technology to employing the finest craftsmanship, resulting in exceptional quality and precision. You can trust us to bring your unique vision to life, creating a space that perfectly encapsulates your personality, lifestyle, and aspirations. With our expert team at the helm, you can sit back, relax, and enjoy the journey toward your dream home.
							</p>
						</div>
						<div className='moderna-casa__content_bottom-images'>
							<div className='moderna-casa__content_bottom-first-img'/>
							<div className='moderna-casa__content_bottom-second-img'/>
						</div>
					</div>
					<div className='moderna-casa__content_bottom-devices-block bottom-block'>
						<ReactSVG
							src={devices}
							className='moderna-casa__content_bottom-devices-img'
							wrapper='span'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModernaCasaBlock;
