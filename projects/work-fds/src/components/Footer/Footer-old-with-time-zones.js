import React, { useState, useEffect } from 'react';
import './Footer.scss';

const Footer = () => {
	// Find out World Time
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);

	const [isTop, setIsTop] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			// console.log(true);
			if (window.scrollY > 100) {
				setIsTop('scrolled');
			} else {
				setIsTop('');
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const timeZones = [
		{ name: 'New York', zone: 'America/New_York' },
		{ name: 'Barcelona', zone: 'Europe/Madrid' },
		{ name: 'Kyiv', zone: 'Europe/Kiev' },
	];

	return (
		<footer className={`footer ${isTop}`}>
			<div className='wrapper'>
				<div className='footerContent'>
					<p className='footerContent__item footerContent__title'>
						Nice to see you amigo
					</p>

					{timeZones.map((item) => (
						<p className='footerContent__item footerTime' key={item.name}>
							{item.name}{' '}
							<span className='footerTime__item'>
								{time.toLocaleTimeString('en-US', {
									timeZone: item.zone,
									hour: 'numeric',
									minute: 'numeric',
									second: 'numeric',
									hour12: false,
								})}
							</span>
						</p>
					))}

					<p className='footerContent__item footerContent__pageNumber'>01</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
