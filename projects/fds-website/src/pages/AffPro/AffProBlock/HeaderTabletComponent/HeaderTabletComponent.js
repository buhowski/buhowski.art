import React from 'react';
import './HeaderTabletComponent.scss';
import { ReactSVG } from 'react-svg';
import linkIcon from '../../../../assets/svg/link-icon.svg';
import behanceIcon from '../../../../assets/svg/behance.svg';
import { NavLink } from 'react-router-dom';
import { affProLink, services } from '../AffProBlock';

const HeaderTabletComponent = () => {
	return (
			<header className='affpro__mobile-header'>
				<div className='affpro__mobile-header-info'>
					<a href={affProLink} className='affpro__mobile-header-link' target='_blank' rel="noreferrer">
						<span className='affpro__mobile-header-title'>Affpro</span>
						<ReactSVG
							src={linkIcon}
							className='affpro__mobile-header-svg'
							wrapper='span'
						/>
					</a>
					<div className='affpro__mobile-header-description'>
					  Take advantage of the advanced multi-vertical affiliate network and boost your profits by implementing AFFPRO's phenomenal marketing expertise into your promotion strategy! The service is aimed to provide an all-inclusive service based on techniques and mechanisms showing proven results within a specific niche. Employ the effective traffic-generating model and watch your business grow at unprecedented rates!
					</div>
					<div className='affpro__mobile-header-list'>
						{services.map((service, index) => (
							<div className='affpro__mobile-header-list-item' key={service + index}>
								{service}
							</div>
						))}
					</div>
					<div className='affpro__mobile-header-img'/>
					<div className='affpro__mobile-header-behance'>
						<span>View the project on Behance</span>
						<NavLink to={affProLink} target='_blank'>
							<ReactSVG
								src={behanceIcon}
								className='affpro__mobile-header-behance-svg'
								wrapper='span'
							/>
						</NavLink>
					</div>
				</div>
			</header>
	);
};

export default HeaderTabletComponent;
