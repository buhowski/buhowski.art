import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import './OutstaffBlock.scss';
import wayIcon from '../../../../assets/svg/services/way.svg';
import outstaffIcon from '../../../../assets/svg/services/outstaff-icon.svg';
import ServiceNavigation from '../../../../shared/components/ServiceNavigation/ServiceNavigation';
import ProcessContent from './ProcessContent/ProcessContent';

const OutstaffBlock = () => {
	const [currentNavItem, setCurrentNavItem] = useState('Outstaff Process');

	return (
		<div className='outstaff__wrapper'>
			<div className='outstaff__title'>
				<h4 className='outstaff__title-text'>
					Outstaff Services
				</h4>
				<div className='servicesItem__icon'>
					<ReactSVG src={outstaffIcon} />
				</div>
			</div>
			<div className='outstaff__description'>
			  With our IT company, you can count on us to provide outstaffing services in the field of software development and design. Our team of experts will provide you with access to a highly skilled workforce and relevant experience to help you ensure the success of your project. We offer flexible terms of cooperation and the ability to customize the team to your needs. Contact us to learn more about our services and how we can help you achieve your business goals.
			</div>
			<ServiceNavigation
				firstNavItem='Outstaff Process'
				currentNavItem={currentNavItem}
				setCurrentNavItem={setCurrentNavItem}
				icon={wayIcon}
				oneBlock
			/>
			<div className='outstaf__content'>
				<ProcessContent />
			</div>
		</div>
	);
};

export default OutstaffBlock;
