import React from 'react';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Socials from '../socials/Socials';
import './Header.scss';

const linksData = [
	{
		pageLink: 'proposal',
		pageName: 'Proposal',
		ideaIcon: 'idea-icon',
	},
	{
		pageLink: 'about',
		pageName: 'About Me',
		ideaIcon: '',
	},
	{
		pageLink: 'projects',
		pageName: 'Projects',
		ideaIcon: '',
	},
	// {
	//   pageLink: "gallery",
	//   pageName: "Gallery",
	// },

	// {
	//   pageLink: "/access-to-idea",
	//   pageName: "access to idea",
	// },
];
const Header = () => {
	const [menuOpen, setMenuOpen] = React.useState(false);
	const navLinkItems = linksData.map(({ pageLink, pageName, ideaIcon }, i) => {
		return (
			<li className='nav-item d-flex' key={i}>
				<NavLink className={`a nav-link ${ideaIcon}`} to={`${pageLink}`} end>
					{pageName}
				</NavLink>
			</li>
		);
	});
	const LogoNavLink = () => {
		return (
			<div className='logo d-flex'>
				<NavLink className='a logo-link' to='/' end>
					<span className='tag-color'>&lt;</span>
					<span>Buhowski</span>
					<span className='tag-color'>/&gt;</span>
				</NavLink>
			</div>
		);
	};

	return (
		<header className={`header d-flex-c${menuOpen ? ' header-overflow' : ''}`}>
			<div className='wrapper'>
				<MediaQuery minWidth={769}>
					<div className='d-flex-c-b'>
						<LogoNavLink />
						<nav>
							<ul className='nav d-flex-c'>{navLinkItems}</ul>
						</nav>
					</div>
				</MediaQuery>
				<MediaQuery maxWidth={768}>
					<LogoNavLink />
					<div
						className='mobile-menu-btn'
						onClick={() => {
							// document.querySelector('.page-container').style.paddingRight = `${
							// 	menuOpen ? '0' : '1px'
							// }`;
							setMenuOpen((o) => !o);
						}}
					>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<nav className={`pos-abs mobile-menu${menuOpen ? ' open' : ''}`}>
						<div className='d-flex-c-c'>
							<div>
								<ul className='nav'>{navLinkItems}</ul>
								<Socials />
							</div>
						</div>
					</nav>
				</MediaQuery>
			</div>
		</header>
	);
};

export default Header;
