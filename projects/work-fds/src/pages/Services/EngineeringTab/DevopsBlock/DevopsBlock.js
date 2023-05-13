import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import './DevopsBlock.scss';
import wayIcon from '../../../../assets/svg/services/way.svg';
import microchipIcon from '../../../../assets/svg/services/microchip.svg';
import devopsIcon from '../../../../assets/svg/services/devops.svg';
import ServiceNavigation from '../../../../shared/components/ServiceNavigation/ServiceNavigation';
import ProcessContent from './ProcessContent/ProcessContent';
import TechnologyContent from './TechnologyContent/TechnologyContent';

const DevopsBlock = () => {
	const [currentNavItem, setCurrentNavItem] = useState('Process');

	return (
		<div className='devops__wrapper'>
			<div className='devops__title'>
				<h4 className='devops__title-text'>
					DevOps
				</h4>
				<div className='servicesItem__icon'>
					<ReactSVG src={devopsIcon} />
				</div>
			</div>
			<div className='devops__description'>
			  We’d be thrilled to lend a hand! Our skilled DevOps team is here to support you with implementing Continuous Integration and Deployment, Infrastructure as Code, Monitoring, and Alerting, as well as any other infrastructure-related tasks you might require. These powerful tools enable you to make the most efficient use of your resources, speed up your development process, and produce high-quality end products that exceed your expectations. We’re always eager to work with you to identify the best solution for your unique needs, and our flexibility ensures that we can meet your requirements in the most effective way possible.
			</div>
			<ServiceNavigation
				firstNavItem='Process'
				secondNavItem='Technology'
				currentNavItem={currentNavItem}
				setCurrentNavItem={setCurrentNavItem}
				icon={currentNavItem === 'Process' ? wayIcon : microchipIcon}
			/>
			<div className='devops__content'>
				{currentNavItem === 'Process'
					? (<ProcessContent />)
					: (<TechnologyContent />)
				}
			</div>
		</div>
	);
};

export default DevopsBlock;
