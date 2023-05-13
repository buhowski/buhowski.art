import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import { useNavigate } from 'react-router-dom';

import smileIcon from '../../assets/svg/smile.svg';
import alienIcon from '../../assets/svg/alien.svg';
import cowboyIcon from '../../assets/svg/cowboy.svg';
import robotIcon from '../../assets/svg/robot.svg';

import { useMobileMedia, useTabletMedia } from '../../utils/useMediaQueries';

import './Community.scss';
import { routePaths } from '../../shared/routes';

import Lottie from 'lottie-light-react';
import animationFromCommunity from './img/community-animation.json';

const chooseWho = [
	{
		id: 'developer',
		name: 'Developer',
		text: 'Looking for a job? We have something to offer',
		icons: [smileIcon],
	},
	{
		id: 'developmentTeam',
		name: 'Development team',
		text: 'Do you want to cooperate on projects?',
		icons: [smileIcon, alienIcon, cowboyIcon, robotIcon],
	},
];

const Community = () => {
	const navigate = useNavigate();
	const isMobileMedia = useMobileMedia();
	const isTabletMedia = useTabletMedia();
	const communitySectionRef = useRef(null);
	const animationFromCommunityRef = useRef(null);
	const communityImageContainerRef = useRef(null);
	const [animationClass, setAnimationClass] = useState('');
	const [selectedItem, setSelectedItem] = useState('developer');
	const [selectedFormUrl, setSelectedFormUrl] = useState(
		routePaths.singleDeveloperFrom
	);

	let headerTop = isMobileMedia ? 107 : isTabletMedia ? 69 : 89;

	const handleSelectionChange = useCallback((event) => {
		setSelectedItem(event.target.id);
		setSelectedFormUrl(
			event.target.id === routePaths.singleDeveloperFrom
				? routePaths.singleDeveloperFrom
				: routePaths.developmentTeamForm
		);
	}, []);

	const handleContinue = () => {
		setAnimationClass('exit-active');

		window.scrollTo({
			top: communitySectionRef.current.offsetTop + headerTop,
			behavior: 'smooth',
		});

		let animTopTime = setTimeout(() => {
			animationFromCommunityRef.current.goToAndPlay(0);
		}, 1000);

		let animPlay = setTimeout(() => {
			navigate(selectedFormUrl);
			window.scrollTo(0, 0);

			// window.location.href = selectedFormUrl;

			clearTimeout(animTopTime);
			clearTimeout(animPlay);
		}, 3900);
	};

	useEffect(() => {
		animationFromCommunityRef.current.goToAndStop(0);
		setAnimationClass('');

		const handleBackChange = () => {
			animationFromCommunityRef.current.goToAndStop(0, 0);
			setAnimationClass('');
		};

		window.addEventListener('popstate', handleBackChange);
		window.addEventListener('hashchange', handleBackChange);

		return () => {
			window.removeEventListener('popstate', handleBackChange);
			window.removeEventListener('hashchange', handleBackChange);
		};
	}, []);

	return (
		<section
			ref={communitySectionRef}
			id='communitySection'
			className={`pageSection ${animationClass}`}
		>
			<div className='communityWrapper'>
				<div className='wrapper'>
					<h2 className='communityTitle basicTitle'>COMMUNITY</h2>

					<div className='community'>
						<div className='communityChoose'>
							<h3 className='communityChoose__title'>Choose who you are to continue</h3>
							{chooseWho.map((item, index) => (
								<div className={`chooseItem ${item.id}`} key={index}>
									<label
										htmlFor={item.id}
										className={`chooseItem__label ${
											selectedItem === item.id ? 'active' : ''
										}`}
									>
										<input
											type='radio'
											name='item'
											id={item.id}
											value={item.id}
											checked={selectedItem === item.id}
											onChange={handleSelectionChange}
										/>

										<p className='chooseItem__icons'>
											{item.icons.map((icon, i) => (
												<ReactSVG
													src={icon}
													className='chooseItem__icon'
													wrapper='span'
													key={i}
												/>
											))}
										</p>

										<p>
											<span className='chooseItem__name'>{item.name}</span>
											<span className='chooseItem__text'>{item.text}</span>
										</p>
									</label>
								</div>
							))}

							<button
								type='button'
								className='communityBtn mainBtn'
								disabled={!selectedItem}
								onClick={handleContinue}
							>
								Continue
							</button>
						</div>
					</div>
				</div>

				<div className={`communityImage`} ref={communityImageContainerRef}>
					<Lottie
						animationData={animationFromCommunity}
						lottieRef={animationFromCommunityRef}
						autoplay={false}
						loop={false}
					/>
				</div>
			</div>
		</section>
	);
};

export default Community;
