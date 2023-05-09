import React from 'react';
import './HeaderTabletComponent.scss';
import { ReactSVG } from 'react-svg';
import linkIcon from '../../../../assets/svg/link-icon.svg';
import behanceIcon from '../../../../assets/svg/behance.svg';
import { NavLink } from 'react-router-dom';
import { modernaCasaLink, services } from '../ModernaCasaBlock';

const HeaderTabletComponent = () => {
	return (
			<header className='moderna-casa__mobile-header'>
				<div className='moderna-casa__mobile-header-info'>
					<div className='moderna-casa__mobile-header-top'>
						<a href={modernaCasaLink} className='moderna-casa__mobile-header-link' target='_blank' rel="noreferrer">
							<span className='moderna-casa__mobile-header-title'>Modernacasa.es</span>
							<ReactSVG
								src={linkIcon}
								className='moderna-casa__mobile-header-svg'
								wrapper='span'
							/>
						</a>
						<div className='moderna-casa__mobile-header-description'>
							Recharging your concept of the construction cycle is a must to avoid immersing in chaos when building your dream home. MODERNACASA is perfect to give a boost to your genuine ideas and harmonize every phase of your project implementation. We provide a complete service from the initial requirements collection and analysis to deliver high-quality results.
						</div>
						<div className='moderna-casa__mobile-header-list'>
							{services.map((service, index) => (
								<div className='moderna-casa__mobile-header-list-item' key={service + index}>
									{service}
								</div>
							))}
						</div>
					</div>
					<div className='moderna-casa__mobile-header-img'/>
					<div className='moderna-casa__mobile-header-behance'>
						<span>View the project on Behance</span>
						<a
							href={modernaCasaLink}
							target='_blank' rel="noreferrer" className='moderna-casa__mobile-header-behance-svg'
						>
							<ReactSVG
								src={behanceIcon}
								
								wrapper='span'
								style={{
									width: '36px',
									height: '26px',
								}}
							/>
						</a>
					</div>
				</div>
			</header>
	);
};

export default HeaderTabletComponent;
