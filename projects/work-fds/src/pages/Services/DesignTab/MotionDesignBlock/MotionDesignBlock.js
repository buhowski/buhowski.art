import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import './MotionDesignBlock.scss';
import motionSvg from '../../../../assets/svg/services/motion-svg.svg';
import wayIcon from '../../../../assets/svg/services/way.svg';
import ServiceNavigation from '../../../../shared/components/ServiceNavigation/ServiceNavigation';
import GraphicContent from './GraphicContent/GraphicContent';
import MotionContent from './MotionContent/MotionContent';
// import UXContent from '../UXContent/UXContent';
// import UIContent from '../UIContent/UIContent';

const MotionDesignBlock = () => {
	const [currentNavItem, setCurrentNavItem] = useState('Graphic Design');

	return (
		<div className='motion__wrapper'>
			<div className='motion__title'>
				<h4 className='motion__title-text'>
				Graphic & Motion Services
				</h4>
				<div className='servicesItem__icon'>
					<ReactSVG src={motionSvg} />
				</div>
			</div>
			<div className='motion__description'>
			  Our motion design service has several great advantages, one of which is that our files are very lightweight but high quality. This gives a huge speed advantage to our clients' websites over competitors, as well as adding unique branding and a pleasant user experience.
			</div>
			<ServiceNavigation
				firstNavItem='Graphic Design'
				secondNavItem='Motion Design'
				currentNavItem={currentNavItem}
				setCurrentNavItem={setCurrentNavItem}
				icon={wayIcon}
			/>
			{currentNavItem === 'Graphic Design'
				? (<GraphicContent />)
				: (<MotionContent />)
			}
		</div>
	);
};

export default MotionDesignBlock;
