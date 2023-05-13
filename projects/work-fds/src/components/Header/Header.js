import React, { Fragment, useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import { routePaths } from '../../shared/routes';
import Menu from '../Menu/Menu';

import tridentSvg from '../../assets/svg/trident.svg';
import headerLogo from '../../assets/svg/logo.svg';
import fireSvg from '../../assets/svg/fire.svg';

import './Header.scss';
import { useNavigate } from 'react-router';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isTop, setIsTop] = useState('');
	const navigate = useNavigate();

	const handleProductClick = (url) => {
		navigate(url);
		window.scrollTo(0, 0);
	};

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			// console.log(true);
			if (window.scrollY > 300) {
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

	const handleLogoClick = (url) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		navigate(url);
	};

	return (
		<Fragment>
			<header className={`header ${isTop}`}>
				<div className='wrapper'>
					<div className='headerContainer'>
						<div className='header__logo'>
							<div onClick={() => handleLogoClick(routePaths.mainPage)}>
								<ReactSVG src={headerLogo} wrapper='span' />
							</div>
						</div>

						<a
							href='https://u24.gov.ua/'
							className='supportLink'
							target='_blank'
							rel='noreferrer noopener'
						>
							<ReactSVG src={tridentSvg} className='supportLink__svg' wrapper='span' />
							<span>Support Ukraine</span>
						</a>

						<div className='headerContainer__right'>
							<div
								// onClick={() => navigate(routePaths.clientForm)}
								onClick={() => handleProductClick(routePaths.clientForm)}
								className='headerContainer__letsWorkBtn mainBtn'
							>
								Let’s work
								<ReactSVG src={fireSvg} className='mainBtn__svg' wrapper='span' />
							</div>

							<button
								type='button'
								className={`burgerBtn ${isOpen ? 'burgerBtn--close' : ''}`}
								onClick={toggleMenu}
							>
								<div className='burgerBtn__container'>
									<div className='burgerBtn__line'></div>
									<div className='burgerBtn__line'></div>
									<div className='burgerBtn__line'></div>
								</div>
							</button>

							<Menu className={`${isOpen ? 'opened' : ''}`} setIsOpen={setIsOpen} />
						</div>
					</div>
				</div>

				<div className='header__border header__border--left'></div>
				<div className='header__border header__border--right'></div>
			</header>
		</Fragment>
	);
};

export default Header;
