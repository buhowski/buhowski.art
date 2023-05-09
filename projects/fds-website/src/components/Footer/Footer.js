import React from 'react';
import { ReactSVG } from 'react-svg';
import { useTabletMedia } from '../../utils/useMediaQueries';
import FooterCopyright from './FooterCopyright';
import { routePaths } from '../../shared/routes';
import footerLogo from '../../assets/svg/logo.svg';

import './Footer.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
	setCurrentService,
	setCurrentServiceGroup,
} from '../../redux/actions/servicesActions';
import {
	servicesConstants,
	servicesGroupsConstants,
} from '../../pages/Services/Services.constants';

const footerData = [
	{
		title: 'Legal',
		links: [
			{ url: '#', label: 'Terms and conditions' },
			{ url: routePaths.privacyPolicyPage, label: 'Privacy policy' },
		],
	},
	{
		title: 'Services',
		links: [
			{
				url: '#servicesSection',
				label: 'Web/Mobile development',
				serviceGroup: servicesGroupsConstants.engineering,
				service: servicesConstants.webDev,
			},
			{
				url: '#servicesSection',
				label: 'AI/ML services',
				serviceGroup: servicesGroupsConstants.engineering,
				service: servicesConstants.aiml,
			},
			{
				url: '#servicesSection',
				label: 'DevOps',
				serviceGroup: servicesGroupsConstants.engineering,
				service: servicesConstants.devops,
			},
			{
				url: '#servicesSection',
				label: 'Elevate Phase ',
				serviceGroup: servicesGroupsConstants.engineering,
				service: servicesConstants.phase,
			},
			{
				url: '#servicesSection',
				label: 'UI/UX Services',
				serviceGroup: servicesGroupsConstants.design,
				service: servicesConstants.ux,
			},
			{
				url: '#servicesSection',
				label: 'Graphic & Motion',
				serviceGroup: servicesGroupsConstants.design,
				service: servicesConstants.motionDesign,
			},
			{
				url: '#servicesSection',
				label: 'Outstaff',
				serviceGroup: servicesGroupsConstants.outstaff,
				service: servicesConstants.outstaff,
			},
		],
	},
	{
		title: 'Phone',
		className: 'footerBlock--phone',
		links: [
			{ url: 'tel:+34674740712', label: '+34674740712' },
			{ url: 'tel:+380665199577', label: '+380665199577' },
		],
	},
	{
		title: 'Email',
		links: [
			{
				url: 'mailto:international@focusdigitalsyndicate.com',
				label: 'international@focusdigitalsyndicate.com',
			},
			{
				url: 'mailto:sales@focusdigitalsyndicate.com',
				label: 'sales@focusdigitalsyndicate.com',
			},
		],
	},
];

const Footer = () => {
	const isTablet = useTabletMedia();
	const dispatch = useDispatch();

	const handleLinkClick = (serviceGroupId, service) => {
		dispatch(setCurrentServiceGroup(serviceGroupId));
		dispatch(setCurrentService(service));
	};

	const currentService = useSelector((state) => state.servicesReducer.currentService);

	// console.log('currentService', currentService);

	return (
		<footer className={`footer `}>
			<div className='wrapper'>
				<div className='footerContent'>
					<div className='footerContent__logo'>
						<ReactSVG
							src={footerLogo}
							wrapper='span'
							className='footerContent__logo-svg'
						/>
						<p className='footerContent__logo-year'>{new Date().getFullYear()}</p>

						{isTablet && <FooterCopyright />}
					</div>

					<div className='footerInfo'>
						{footerData.map((block, index) => (
							<div key={index} className={`footerBlock ${block.className}`}>
								<h3 className='footerBlock__title'>{block.title}</h3>

								<div className='footerBlock__actions'>
									{block.links.map((link, index) => (
										<p className='footerBlock__link' key={index}>
											<a
												href={link?.url}
												onClick={() =>
													link.serviceGroup &&
													handleLinkClick(link?.serviceGroup, link?.service)
												}
											>
												{link.label}
											</a>
										</p>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{!isTablet && (
				<>
					<div className='wrapper'>
						<span className='footer__line'></span>

						<FooterCopyright />
					</div>
				</>
			)}
		</footer>
	);
};

export default Footer;
