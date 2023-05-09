import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import './UIUXBlock.scss';
import uxIcon from '../../../../assets/svg/services/ui-ux.svg';
import brainsIcon from '../../../../assets/svg/services/brains.svg';
import pallete from '../../../../assets/svg/services/pallete.svg';
import ServiceNavigation from '../../../../shared/components/ServiceNavigation/ServiceNavigation';
import UXContent from './UXContent/UXContent';
import UIContent from './UIContent/UIContent';

const UIUXBlock = () => {
	const [currentNavItem, setCurrentNavItem] = useState('UX Process');

	return (
		<div className='uiux__wrapper'>
			<div className='uiux__title'>
				<h4 className='uiux__title-text'>
					UI/UX Services
				</h4>
				<div className='servicesItem__icon'>
					<ReactSVG src={uxIcon} />
				</div>
			</div>
			<div className='uiux__description'>
			  User Interface and User Experience design services are crucial elements in creating successful digital products such as websites, mobile applications, and software. While UI design focuses on the visual aspects of the product, such as its layout, colors, typography, and iconography, UX design focuses on the overall experience of the user, including the product's ease of use, accessibility, and functionality.
			</div>
			<ServiceNavigation
				firstNavItem='UX Process'
				secondNavItem='UI Process'
				currentNavItem={currentNavItem}
				setCurrentNavItem={setCurrentNavItem}
				icon={currentNavItem === 'UX Process' ? brainsIcon : pallete}
			/>
			{currentNavItem === 'UX Process'
				? (<UXContent />)
				: (<UIContent />)
			}
		</div>
	);
};

export default UIUXBlock;
