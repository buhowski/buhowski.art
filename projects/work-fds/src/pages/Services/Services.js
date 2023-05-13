import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LetsWork from '../../components/LetsWork/LetsWork';
import DesignTab from './DesignTab/DesignTab';
// import IndustryTab from './IndustryTab';
import './Services.scss';
import EngineeringTab from './EngineeringTab/EngineeringTab';
import Lottie from 'lottie-light-react';
import servicesMainAnimation from '../../assets/animations/services-main-animation.json';
import OutstaffTab from './OutstaffTab/OutstaffTab';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentServiceGroup } from '../../redux/actions/servicesActions';

const tabs = [
	{
		id: 'engineering',
		title: 'Engineering',
		content: <EngineeringTab />,
	},
	{
		id: 'design',
		title: 'Design',
		content: <DesignTab />,
	},
	{
		id: 'outstaff',
		title: 'Outstaff',
		content: <OutstaffTab  />,
	},
];

const Services = ({ style }) => {
	const letsWorkTitle = 'Let`s work on your project together';
	// const [currentTab, setCurrentTab] = useState('engineering');
	const dispatch = useDispatch();
	const currentServiceGroup = useSelector(
    (state) => state.servicesReducer.currentServiceGroup
  );

	const handleTabClick = (serviceGroupId) => {
		dispatch(setCurrentServiceGroup(serviceGroupId));
	};

	return (
		<motion.section
			id='servicesSection'
			className='pageSection'
			style={style}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className='wrapper'>
				<motion.div
					className={`services ${'services--' + currentServiceGroup}`}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className='servicesInfo'>
						<div className='servicesText'>
							<h2 className='servicesText__title h2'>SERVICES</h2>
							<p className='servicesText__desc'>
								We offer a wide range of services to help businesses succeed in the
								digital age. From outsourced IT services to AI integration for
								businesses. And we have the expertise and resources to deliver
								exceptional results in online and offline services.
							</p>
						</div>

						<div className='servicesImg'>
							<Lottie
								className='servicesImg__lottie'
								animationData={servicesMainAnimation}
								autoplay={true}
								loop={true}
							/>
						</div>
					</div>

					<div className='servicesTabs'>
						<div className='tabsList'>
							{tabs.map((tab) => (
								<motion.button
									type='button'
									key={tab.id}
									id={tab.id}
									data-active={currentServiceGroup === `${tab.id}`}
									className='tabsList__item'
									onClick={() => handleTabClick(tab.id)}
									// whileHover={{ scale: 1.05 }}
									// whileTap={{ scale: 0.95 }}
								>
									{tab.title}
								</motion.button>
							))}
						</div>

						<div className='servicesContent'>
							{tabs.map((tab) => (
								<motion.div
									className='servicesItems'
									data-content={currentServiceGroup === `${tab.id}`}
									key={tab.id}
									initial={{ display: 'none' }}
									animate={{ display: currentServiceGroup === tab.id ? 'flex' : 'none' }}
									transition={{ duration: 0.5 }}
								>
									{tab.content}
								</motion.div>
							))}
						</div>
					</div>

					<LetsWork letsWorkTitle={letsWorkTitle} />
				</motion.div>
			</div>
		</motion.section>
	);
};

export default Services;
