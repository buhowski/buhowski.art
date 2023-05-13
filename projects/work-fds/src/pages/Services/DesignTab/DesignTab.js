import React from 'react';
import { ReactSVG } from 'react-svg';
import uxIcon from '../../../assets/svg/services/ui-ux.svg';
import './DesignTab.scss';
import { useState } from 'react';
import UIUXBlock from './UIUXBlock/UIUXBlock';
import exitIcon from '../../../assets/svg/services/exit-icon.svg';
import motionDesign from '../../../assets/svg/services/mediatech.svg';
import { useEffect } from 'react';
import MotionDesignBlock from './MotionDesignBlock/MotionDesignBlock';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentService } from '../../../redux/actions/servicesActions';

const designItems = [
	{
		id: 'ux',
		icon: uxIcon,
		title: 'UI/UX Services',
		titleBottom: '',
		className: 'ux',
		children: <UIUXBlock />
	},
	{
		id: 'motionDesign',
		icon: motionDesign,
		title: 'Graphic & Motion',
		titleBottom: '',
		className: 'motionDesign',
		children: <MotionDesignBlock />,
	},
];

const DesignTab = () => {
	const dispatch = useDispatch();
	const currentService = useSelector(
    (state) => state.servicesReducer.currentService
  );

	const handleTabClick = (serviceId) => {
		dispatch(setCurrentService(serviceId));
	};

	return (
		<div className='service_tab'>
			<div className='service_tab-titles'>
				{designItems.map((item) => (
					<div
						className={
							`servicesItem ${'servicesItem--' + item.className} ${currentService === item.id ? 'active' : ''}`
						}
						key={item.id}
						onClick={(e) => handleTabClick(item.id)}
					>
						{currentService === item.id && (
							<div
								className='servicesItem__exit-icon'
								onClick={
									(e) => {
										handleTabClick(null);
										e.stopPropagation();
									}}
							>
								<ReactSVG src={exitIcon} className='servicesItem__exit-icon-svg'/>
							</div>)}
						
						<div className='servicesItem__icon'>
							<ReactSVG src={item.icon} />
						</div>
						<div className='servicesItem__text'>
							<p>
								{item.title}{' '}
								<span className='servicesItem__textLine'>{item.titleBottom}</span>
							</p>
						</div>
					</div>
				))}
			</div>
			<div>
				{designItems.find(designItem => designItem.id === currentService)?.children}
			</div>
		</div>
		
	);
};

export default DesignTab;
