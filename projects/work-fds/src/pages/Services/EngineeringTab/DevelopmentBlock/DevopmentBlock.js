import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import './DevopmentBlock.scss';
import wayIcon from '../../../../assets/svg/services/way.svg';
import microchipIcon from '../../../../assets/svg/services/microchip.svg';
import ServiceNavigation from '../../../../shared/components/ServiceNavigation/ServiceNavigation';
import TechnologyContent from './TechnologyContent/TechnologyContent';
import webdevIcon from '../../../../assets/svg/services/webdev.svg';
import DevelopmentProcessContent from './ProcessContent/DevelopmentProcessContent';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentService } from '../../../../redux/actions/servicesActions';

const DevopmentBlock = () => {
	const [currentNavItem, setCurrentNavItem] = useState('Process');
	const dispatch = useDispatch();
	

	return (
		<div className='development__wrapper'>
			<div className='development__title'>
				<h4 className='development__title-text'>
					Web/Mobile development
				</h4>
				<div className='servicesItem__icon'>
					<ReactSVG src={webdevIcon} />
				</div>
			</div>
			<div className='development__description'>
			 Service provided by an FDS involves designing, building, and maintaining websites and web-based applications for clients, using the latest technologies and platforms. It includes a range of tasks, such as website design, front-end and back-end development, web content creation, website maintenance, and optimization for search engines. The goal is to help clients establish a strong online presence, increase their visibility, and engage with their target audience through a well-designed and user-friendly website or application.
			</div>
			<ServiceNavigation
				firstNavItem='Process'
				secondNavItem='Technology'
				currentNavItem={currentNavItem}
				setCurrentNavItem={setCurrentNavItem}
				icon={currentNavItem === 'Process' ? wayIcon : microchipIcon}
			/>
			<div className='development__content'>
				{currentNavItem === 'Process'
					? (<DevelopmentProcessContent />)
					: (<TechnologyContent />)
				}
			</div>
		</div>
	);
};

export default DevopmentBlock;
