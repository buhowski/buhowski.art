import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import './AIMLBlock.scss';
import wayIcon from '../../../../assets/svg/services/way.svg';
import devopsIcon from '../../../../assets/svg/services/devops.svg';
import ServiceNavigation from '../../../../shared/components/ServiceNavigation/ServiceNavigation';
import ProcessContent from './ProcessContent/ProcessContent';

const AIMLBlock = () => {
	const [currentNavItem, setCurrentNavItem] = useState('AI/ML Service');

	return (
		<div className='aiml__wrapper'>
			<div className='aiml__title'>
				<h4 className='aiml__title-text'>
					AI/ML services
				</h4>
				<div className='servicesItem__icon'>
					<ReactSVG src={devopsIcon} />
				</div>
			</div>
			<div className='aiml__description'>
				Our skilled machine learning engineers provide expertise, dedication, and a wide range of skills to support your project's journey. We offer tools and services to develop, train, test, automate data preparation, feature engineering, monitor, evaluate model performance, and deploy machine learning models to production. We aim to optimize your resources, speed up development, and exceed your expectations. We're flexible and eager to identify the best solution for your unique needs. Whether you're new or seasoned, we can help you achieve your goals.
			</div>
			<ServiceNavigation
				firstNavItem='AI/ML Service'
				currentNavItem={currentNavItem}
				setCurrentNavItem={setCurrentNavItem}
				icon={wayIcon}
				oneBlock
			/>
			<div className='aiml__content'>
				<ProcessContent />
			</div>
		</div>
	);
};

export default AIMLBlock;
