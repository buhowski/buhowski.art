import React from 'react';
import './HeaderTabletComponent.scss';
import { ReactSVG } from 'react-svg';
import behanceIcon from '../../../../assets/svg/behance.svg';
import { NavLink } from 'react-router-dom';
import { ricoLink, services } from '../RicoBlock';

const HeaderTabletComponent = () => {
	return (
			<header className='rico__mobile-header'>
				<div className='rico__mobile-header-info'>
					<div className='rico__mobile-header-link' target='_blank'>
						<span className='rico__mobile-header-title'>RICO</span>
					</div>
					<div className='rico__mobile-header-description'>
					  Save time with Rico’s property management instruments and rent an appropriate place to experience your vivid moments. Depending on your requirements, the App renders relevant listings of available realty thanks to numerous categories and tags provided by a progressive search toolset. Find the perfect fit for your lifestyle with Rico's wide interface offering extra features to help you make the right decision!
					</div>
					<div className='rico__mobile-header-list'>
						{services.map((service, index) => (
							<div className='rico__mobile-header-list-item' key={service + index}>
								{service}
							</div>
						))}
					</div>
					<div className='rico__mobile-header-svg-block' />
					<div className='rico__mobile-header-behance'>
						<span>View the project on Behance</span>
						<a
							href={ricoLink}
							target='_blank'
							className='rico__mobile-header-behance-svg' rel="noreferrer"
						>
							<ReactSVG
								src={behanceIcon}
								wrapper='span'
							/>
						</a>
					</div>
				</div>
			</header>
	);
};

export default HeaderTabletComponent;
