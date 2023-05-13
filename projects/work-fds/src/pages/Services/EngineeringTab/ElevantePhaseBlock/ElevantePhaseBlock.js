import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import './ElevantePhaseBlock.scss';
import wayIcon from '../../../../assets/svg/services/way.svg';
import ServiceNavigation from '../../../../shared/components/ServiceNavigation/ServiceNavigation';
import phaseIcon from '../../../../assets/svg/services/phase.svg';
import LaunchContent from './LaunchContent/LaunchContent';
import EfficiencyContent from './EfficiencyContent/EfficiencyContent';

const ElevantePhaseBlock = () => {
	const [currentNavItem, setCurrentNavItem] = useState('Launch');

	return (
		<div className='phase__wrapper'>
			<div className='phase__title'>
				<h4 className='phase__title-text'>
					Elevate Phase 
				</h4>
				<div className='servicesItem__icon'>
					<ReactSVG src={phaseIcon} />
				</div>
			</div>
			<div className='phase__description'>
			  Elevate Phase is a comprehensive set of activities designed to help businesses create a custom service that meets their unique needs, from stakeholder interviews to product concept validation. We provide a complete range of services, including expert evaluations of UX/UI, user research, competitors research, and proposal development to create a user-friendly custom service.Our Elevate Phase approach includes creating an agile UI prototype, an interactive UI prototype, motion design, and product decomposition to develop a custom service that aligns with the client's needs and meets their objectives.
			</div>
			<ServiceNavigation
				firstNavItem='Launch'
				secondNavItem='Our efficiency'
				currentNavItem={currentNavItem}
				setCurrentNavItem={setCurrentNavItem}
				icon={wayIcon}
			/>
			<div className='phase__content'>
				{currentNavItem === 'Launch'
					? (<LaunchContent />)
					: (<EfficiencyContent />)
				}
			</div>
		</div>
	);
};

export default ElevantePhaseBlock;
