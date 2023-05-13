import React, { useState } from 'react';
// import { ReactSVG } from 'react-svg';
// import { motion, AnimatePresence } from 'framer-motion';

// import triangle from '../../pages/Home/img/triangle.svg';

import './Menu.scss';
import { useNavigate } from 'react-router';
// import { NavLink, useNavigate } from 'react-router-dom';
import { useMobileMedia } from '../../utils/useMediaQueries';

// const langButtons = [
// 	{
// 		lang: 'English',
// 		activeClass: 'active',
// 	},
// 	{
// 		lang: 'Spanish',
// 		activeClass: '',
// 	},
// 	{
// 		lang: 'French',
// 		activeClass: '',
// 	},
// 	{
// 		lang: 'Ukrainian',
// 		activeClass: '',
// 	},
// ];
const menuItems = [
	{
		number: '01',
		name: 'WHO WE ARE',
		id: 'mainSection',
		routePath: '',
	},
	{
		number: '02',
		name: 'SERVICES',
		id: 'servicesSection',
		routePath: '',
		// submenu: [
		// 	{
		// 		title: 'Engineering',
		// 		routePath: '',
		// 	},
		// 	{
		// 		title: 'Design',
		// 		routePath: '',
		// 	},
		// ],
	},
	{
		number: '03',
		name: 'PRODUCTS & CASES',
		id: 'productsSection',
		routePath: '',
		// submenu: [
		// 	{
		// 		title: 'AFFPRO',
		// 		routePath: routePaths.affPro,
		// 		id: 'affProSection'
		// 	},
		// 	{
		// 		title: 'ModernaCasa.es',
		// 		routePath: routePaths.modernaCasa,
		// 		id: 'modernaCasaSection'
		// 	},
		// 	{
		// 		title: 'Rico App',
		// 		routePath: routePaths.rico,
		// 		id: 'ricoSection'
		// 	},
		// ],
	},
	{
		number: '04',
		name: 'COMMUNITY',
		id: 'communitySection',
		routePath: '',
	},
	{
		number: '05',
		name: 'CONTACT US',
		id: 'contactsSection',
		routePath: '',
	},
];

const Menu = ({ className, setIsOpen }) => {
	// const [submenuActive, setSubmenuActive] = useState('');
	const navigate = useNavigate();
	const isMobile = useMobileMedia();
	// const handleClick = (index) => {
	// 	setSubmenuActive(index === submenuActive ? '' : index);
	// 	setIsOpen(false);
	// };

	// const handleCaseButtonClick = (id, routePath) => {
	// 	setIsOpen(false);
	// 	navigate(routePath);

	// 	setTimeout(() => {
	// 		document.getElementById(id)?.scrollIntoView({behavior : "smooth", block: "start"});
	// 	}, 300);
	// };

	// New scroll to section + 50 top
	let mobileTop = isMobile ? 100 : 60;

	const handleCaseButtonClick = (id, routePath) => {
		setIsOpen(false);
		navigate(routePath);

		setTimeout(() => {
			const element = document.getElementById(id);
			if (element) {
				const topOffset = element.getBoundingClientRect().top + window.pageYOffset;
				window.scrollTo({
					top: id === 'mainSection' ? 0 : topOffset - mobileTop,
					// behavior: 'smooth',
				});
			}
		}, 0);
	};

	return (
		<section className={`navigationMenu ${className} `}>
			<div className='wrapper'>
				<div className='menuList'>
					{menuItems.map((item, index) => (
						<div className='menuItem' key={item.id}>
							<div
								className='menuItem__title'
								// className={`menuItem__title ${index === submenuActive ? 'active' : ''}`}
								onClick={() => handleCaseButtonClick(item.id, item.routePath)}
							>
								<span className='menuItem__titleNum'>{item.number}</span>
								<span className='menuItem__titleName'>{item.name}</span>

								{/* {item.submenu && (
									<ReactSVG
										src={triangle}
										className='menuItem__triangle'
										wrapper='span'
									/>
								)} */}
							</div>

							{/* {item.submenu && (
								<AnimatePresence>
									{index === submenuActive && (
										<motion.div
											className={`submenu item ${
												index === submenuActive ? 'active' : ''
											}`}
											initial={{ x: '100%', height: 0 }}
											animate={{ x: '0', height: 'auto' }}
											exit={{ x: '100%', height: 0 }}
											transition={{
												ease: [0.2, 0.5, 0.5, 1.15],
												duration: 0.3,
											}}
										>
											<div className='submenu__content'>
												{item.submenu.map((subitem, i) => (
													<a
														href={subitem.routePath}
														className='submenu__item'
													>
														<button
															className='submenu__button'
															key={i}
															onClick={() => handleCaseButtonClick()}
														>
															{subitem.title}
														</button>
													</a>
													// <NavLink to={subitem.routePath} className='submenu__item'>
													// 	<button
													// 		className='submenu__button'
													// 		key={i}
													// 		onClick={() => handleCaseButtonClick()}
													// 	>
													// 		{subitem.title}
													// 	</button>
													// </NavLink>
												))}
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							)} */}
						</div>
					))}
				</div>

				{/* <div className='navigationLangWrapper'>
					<div className='wrapper'>
						<div className='navigationLang'>
							{langButtons.map((item, index) => (
								<button
									className={`navigationLang__item ${item.activeClass}`}
									key={index}
								>
									{item.lang}
								</button>
							))}
						</div>
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default Menu;
