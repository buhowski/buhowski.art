import React  from 'react';
import { ReactSVG } from 'react-svg';
import './EngineeringTab.scss';
import webdevIcon from '../../../assets/svg/services/webdev.svg';
import devops from '../../../assets/svg/services/devops.svg';
import robotIcon from '../../../assets/svg/services/robot.svg';
import exitIcon from '../../../assets/svg/services/exit-icon.svg';
import phaseIcon from '../../../assets/svg/services/phase.svg';
import { useEffect } from 'react';
import DevopsBlock from './DevopsBlock/DevopsBlock';
import DevopmentBlock from './DevelopmentBlock/DevopmentBlock';
import ElevantePhaseBlock from './ElevantePhaseBlock/ElevantePhaseBlock';
import AIMLBlock from './AIMLBlock/AIMLBlock';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentService } from '../../../redux/actions/servicesActions';

const dataEngineering = [
	{
		id: 'webDev',
		icon: webdevIcon,
		title: 'Web/Mobile',
		titleBottom: 'development',
		className: 'webDev',
		children: <DevopmentBlock />,
	},
	{
		id: 'aiml',
		icon: robotIcon,
		title: 'AI/ML',
		titleBottom: 'services',
		className: 'aiml',
		children: <AIMLBlock />,
	},
	{
		id: 'devops',
		icon: devops,
		title: 'DevOps',
		titleBottom: '',
		className: 'devops',
		children: <DevopsBlock />,
	},
	{
		id: 'phase',
		icon: phaseIcon,
		title: 'Elevate Phase ',
		titleBottom: '',
		className: 'phase',
		children: <ElevantePhaseBlock />
	},
];

const EngineeringTab = () => {
	// const [curentTabId, setCurrentTabId] = useState(null);
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
				{dataEngineering.map((item) => (
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
				{dataEngineering.find(engeneeringItem => engeneeringItem.id === currentService)?.children}
			</div>
		</div>
		
	);
};

export default EngineeringTab;
