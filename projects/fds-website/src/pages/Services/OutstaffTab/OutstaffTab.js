import React from 'react';
import { ReactSVG } from 'react-svg';
import outstaffIcon from '../../../assets/svg/services/outstaff-icon.svg';
import './OutstaffTab.scss';
import exitIcon from '../../../assets/svg/services/exit-icon.svg';
import { useEffect } from 'react';
import OutstaffBlock from './DevopsBlock/OutstaffBlock';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentService } from '../../../redux/actions/servicesActions';

const outstaff = [
	{
		id: 'outstaff',
		icon: outstaffIcon,
		title: 'Outstaff',
		titleBottom: '',
		className: 'outstaff',
		children: <OutstaffBlock />
	},
];

const OutstaffTab = () => {
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
				{outstaff.map((item) => (
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
				{outstaff.find(outstaffItem => outstaffItem.id === currentService)?.children}
			</div>
		</div>
		
	);
};

export default OutstaffTab;
