import React, { useRef, useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';

import DrawCanvas from './DrawCanvas';

import videoUrl from './img/connected.mp4';
import videoRico from './img/rico.mp4';
import videoAfpro from './img/affpro.mp4';

import react from './img/react.svg';
import reduxIcon from './img/redux.svg';
import tsIcon from './img/typescript.svg';
import styledIcon from './img/styled.svg';
import githubIcon from './img/github.svg';
import pythonIcon from './img/python.svg';
import restIcon from './img/rest.svg';
import materialIcon from './img/material.svg';
import nodejsIcon from './img/nodejs.svg';
import exIcon from './img/ex.svg';
import firebaseIcon from './img/firebase.svg';

import Lottie from 'lottie-light-react';
import alienJson from './img/click.json';

import { routePaths } from '../../shared/routes';

import './Products.scss';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {
	setCurrentService,
	setCurrentServiceGroup,
} from '../../redux/actions/servicesActions';
import { servicesGroupsConstants } from '../Services/Services.constants';

const Products = () => {
	const videoRef = useRef(null);
	const videoRicoRef = useRef(null);
	const videoAfproRef = useRef(null);
	const [intervalId, setIntervalId] = useState(null);
	const [intervalIdRico, setIntervalIdRico] = useState(null);
	const [intervalIdAffpro, setIntervalIdAffpro] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleProductClick = (url) => {
		// dispatch(setCurrentServiceGroup(servicesGroupsConstants.engineering));
		// dispatch(setCurrentService(null));

		navigate(url);
		window.scrollTo(0, 0);
	};

	const handleHover = () => {
		clearInterval(intervalId);
		videoRef.current.currentTime = 1.1;

		const id = setInterval(() => {
			if (videoRef.current?.currentTime >= 3) {
				videoRef.current.currentTime = 2;
			}
		}, 20);

		setIntervalId(id);
	};

	const handleLeave = () => {
		clearInterval(intervalId);

		const id = setInterval(() => {
			if (videoRef.current) {
				videoRef.current.currentTime -= 0.1;

				if (videoRef.current.currentTime === 0) {
					clearInterval(id);

					const id2 = setInterval(() => {
						if (videoRef.current) {
							videoRef.current.currentTime += 0.1;

							if (videoRef.current.currentTime >= 1) {
								videoRef.current.currentTime = 0;
							}
						}
					}, 50);

					setIntervalId(id2);
				}
			}
		}, 40);

		setIntervalId(id);
	};

	const handleHoverRico = () => {
		clearInterval(intervalIdRico);

		videoRicoRef.current.currentTime = 2.3;

		const id = setInterval(() => {
			if (videoRicoRef.current) {
				if (videoRicoRef.current.currentTime >= 15) {
					videoRicoRef.current.currentTime = 2.3;
				}
			}
		}, 100);

		setIntervalIdRico(id);
	};

	const handleLeaveRico = () => {
		if (videoRicoRef.current) {
			videoRicoRef.current.currentTime = 0;
			videoRicoRef.current.play();

			const id = setInterval(() => {
				if (videoRicoRef.current) {
					if (videoRicoRef.current.currentTime >= 2.2) {
						videoRicoRef.current.currentTime = 0;
					}
				}
			}, 100);
			setIntervalIdRico(id);
		}
	};

	const handleHoverAffpro = () => {
		clearInterval(intervalIdAffpro);

		videoAfproRef.current.currentTime = 2.6;

		const id = setInterval(() => {
			if (videoAfproRef.current) {
				if (videoAfproRef.current.currentTime >= 9) {
					videoAfproRef.current.currentTime = 1;
				}
			}
		}, 100);

		setIntervalIdAffpro(id);
	};

	const handleLeaveAffpro = () => {
		if (videoAfproRef.current) {
			videoAfproRef.current.currentTime = 0;
			videoAfproRef.current.play();

			const id = setInterval(() => {
				if (videoAfproRef.current) {
					if (videoAfproRef.current.currentTime >= 2.4) {
						videoAfproRef.current.currentTime = 0;
					}
				}
			}, 100);

			setIntervalIdAffpro(id);
		}
	};

	const products = [
		{
			activeProduct: 'active',
			url: routePaths.rico,
			afterHoverImgs: videoRico,
			videoRef: videoRicoRef,
			videoHover: handleHoverRico,
			videoHoverLeave: handleLeaveRico,
			location: 'Spain, Barcelona',
			duration: '2 weeks',
			// stack: [stack, react, php, rpc],
			text: `Transform your rental experience with the help of our app. It's convenient to use and allows you to choose from thousands of properties in Spain to rent. Whether you're looking for an affordable apartment or a luxe villa within the country, Rico is here for you. Enjoy up-to-the-minute real estate selection by location or applying custom search criteria.`,

			services: [
				{ name: 'Product Design', active: 'active' },
				{ name: 'Mobile development', active: '' },
				{ name: 'Elevate Phase', active: '' },
				{ name: 'UI', active: '' },
				{ name: 'UX', active: '' },
			],
		},
		{
			notReady: 'notReady',
			url: routePaths.modernaCasa,
			afterHoverImgs: [''],
			location: 'Spain, Barcelona',
			duration: '2 months',
			stack: [react, reduxIcon, tsIcon, styledIcon, githubIcon, pythonIcon, restIcon],
			text: `Recharge your concept of construction cycle with the advanced service that is aimed to provide next-gen home design, engineering and building solutions. MODERNACASA makes it possible to implement even the most non-trivial ideas into reality and reinvigorate classical approach to construction services.`,

			services: [
				{ name: 'Engineering', active: 'active' },
				{ name: 'Mobile development', active: '' },
				{ name: 'Elevate Phase', active: '' },
				{ name: 'Mobile design', active: '' },
				{ name: 'UI', active: '' },
				{ name: 'UX', active: '' },
			],
		},

		{
			activeProduct: 'active',
			url: routePaths.affPro,
			afterHoverImgs: videoAfpro,
			videoRef: videoAfproRef,
			videoHover: handleHoverAffpro,
			videoHoverLeave: handleLeaveAffpro,
			location: 'Worldwide',
			duration: '3 months',
			stack: [
				react,
				tsIcon,
				materialIcon,
				nodejsIcon,
				exIcon,
				firebaseIcon,
				githubIcon,
			],
			text: `Design your rental experience with the help of our app. It's fun, easy, and you can select from thousands of properties in Spain to rent. Whether you're looking for an affordable apartment or a luxe villa in the country, Rico is here for you. Whether you're looking for an affordable apartment or a luxe villa in the country, Rico is here...`,

			services: [
				{ name: 'Engineering', active: 'active' },
				{ name: 'Mobile development', active: '' },
				{ name: 'Elevate Phase', active: '' },
				{ name: 'Mobile design', active: '' },
				{ name: 'UI', active: '' },
				{ name: 'UX', active: '' },
			],
		},

		{
			activeProduct: 'inDevelopment',
			url: '#',
			location: 'Worldwide',
			duration: 'Now in Developing',
			stack: [
				react,
				tsIcon,
				materialIcon,
				nodejsIcon,
				exIcon,
				firebaseIcon,
				githubIcon,
			],
			text: `Alien Click is an innovative Ad Network that provides effective partnership between advertisers and media buyers. Alien Click offer a unique technology that allows advertisers to get more leads and higher conversions.`,

			services: [
				{ name: 'Engineering', active: 'active' },
				{ name: 'Mobile development', active: '' },
				{ name: 'Elevate Phase', active: '' },
				{ name: 'Mobile design', active: '' },
				{ name: 'UI', active: '' },
				{ name: 'UX', active: '' },
			],
		},
	];

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.currentTime = 0;
			videoRef.current.play();

			const id = setInterval(() => {
				if (videoRef.current) {
					videoRef.current.currentTime += 0.1;

					if (videoRef.current.currentTime >= 1) {
						videoRef.current.currentTime = 0;
					}
				}
			}, 50);

			setIntervalId(id);
		}

		if (videoRicoRef.current) {
			videoRicoRef.current.currentTime = 0;
			videoRicoRef.current.play();

			const id = setInterval(() => {
				if (videoRicoRef.current) {
					if (videoRicoRef.current.currentTime >= 2.2) {
						videoRicoRef.current.currentTime = 0;
					}
				}
			}, 100);

			setIntervalIdRico(id);
		}

		if (videoAfproRef.current) {
			videoAfproRef.current.currentTime = 0;
			videoAfproRef.current.play();

			const id = setInterval(() => {
				if (videoAfproRef.current) {
					if (videoAfproRef.current.currentTime >= 2.4) {
						videoAfproRef.current.currentTime = 0;
					}
				}
			}, 100);

			setIntervalIdAffpro(id);
		}
	}, []);

	return (
		<section id='productsSection' className='pageSection'>
			<div className='wrapper'>
				<div className='productsInfo'>
					<h2 className='productsTitle basicTitle'>PRODUCTS & CASES</h2>

					<p className='productsDesc'>
						We are{' '}
						<span className='productsDesc__main'>
							more than just a service provider
						</span>
						. We are also a product IT company that develops innovative digital products
						to help businesses thrive. We are always open to new partnerships and
						collaborations.
					</p>
				</div>

				<div className='productsList'>
					{products.map((product, index) => (
						<button
							type='button'
							onClick={() => handleProductClick(product.url)}
							className={`product ${product.activeProduct}`}
							key={index}
							onMouseEnter={product.videoHover}
							onMouseLeave={product.videoHoverLeave}
						>
							<div
								className={`productImg ${
									product.activeProduct ? 'productImg--active' : ''
								} `}
							>
								{product.activeProduct && (
									<>
										<div className='productImg__main'>
											{product.activeProduct === 'inDevelopment' ? (
												<Lottie
													animationData={alienJson}
													autoplay={true}
													loop={true}
													style={{ width: '100%', height: '100%' }}
												/>
											) : (
												<video ref={product.videoRef} muted playsInline>
													<source src={product.afterHoverImgs} type='video/mp4' />
													Your browser does not support the video tag.
												</video>
											)}
										</div>
									</>
								)}

								{product.notReady && (
									<>
										<div className='photoContainer'>
											<DrawCanvas />
										</div>
									</>
								)}
							</div>
							<div className='productDetails'>
								<div className='productInfo'>
									<div className='productInfo__item'>
										<p className='productInfo__title'>Location</p>
										<p className='productInfo__name'>{product.location}</p>
									</div>

									<div className='productInfo__item'>
										<p className='productInfo__title'>Project duration</p>
										<p className='productInfo__name'>{product.duration}</p>
									</div>

									{product.stack && (
										<div className='productInfo__item productInfo__item--stack'>
											<p className='productInfo__title'>Tech stack</p>
											<div className='productInfo__stack'>
												{product.stack.map((item, i) => (
													<ReactSVG
														key={i}
														src={item}
														className='productInfo__stack-svg'
													/>
												))}
											</div>
										</div>
									)}
								</div>

								<div className='productText'>
									<p>{product.text}</p>
								</div>

								<div className='productServices'>
									{product.services.map((service, index) => (
										<p
											className={`productServices__item ${service.active}`}
											key={index}
										>
											{service.name}
										</p>
									))}
								</div>
							</div>
						</button>
					))}
				</div>

				<div className='productsCoop'>
					We are <span className='productsCoop__main'>looking for</span> interesting
					projects for <span className='productsCoop__main'>cooperation</span>
				</div>

				<a
					href={routePaths.clientForm}
					className='productsConnect'
					onMouseEnter={handleHover}
					onMouseLeave={handleLeave}
				>
					<div className='productsConnect__item'>
						<video ref={videoRef} muted playsInline>
							<source src={videoUrl} type='video/mp4' />
							Your browser does not support the video tag.
						</video>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Products;
