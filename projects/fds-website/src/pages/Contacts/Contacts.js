import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useTabletMedia, useMobileMedia } from '../../utils/useMediaQueries';

import LetsWork from '../../components/LetsWork/LetsWork';

import ContactMapDesktop from './ContactMapDesktop';
import ContactMapTablet from './ContactMapTablet';
import ContactMapMobile from './ContactMapMobile';

import globeIcon from './img/globe.svg';
import spainIcon from './img/sagrada-familia.svg';
import uaIcon from './img/ua.svg';
import usaIcon from './img/usa.svg';
import whatsappIcon from './img/whatsapp.svg';
import telegramIcon from './img/telegram.svg';
import triangle from './img/triangle.svg';

import './Contacts.scss';

const topText = 'START YOUR ELEVATE PHASE';
const letsWorkTitle = 'Looking for someone to help with your problems?';
const mainEmail = 'keepintouch@focusdigitalsyndicate.com';

const Contacts = () => {
	const isTabletMedia = useTabletMedia();
	const isMobileMedia = useMobileMedia();

	const [countryActive, setCountryActive] = useState('');
	const [countryUsa, setCountryUsa] = useState('');
	const [countryUa, setCountryUa] = useState('');
	const [countrySpain, setCountrySpain] = useState('');
	const [notUsa, setNotUsa] = useState('');
	const [notUa, setNotUa] = useState('');
	const [notSpain, setNotSpain] = useState('');

	const mouseHoverUsa = () => {
		setCountryUsa('is-visible');
		setNotUsa('is-hidden');
		setCountryActive('is-active');
	};

	const mouseHoverUa = () => {
		setCountryUa('is-visible');
		setNotUa('is-hidden');
		setCountryActive('is-active');
	};

	const mouseHoverSpain = () => {
		setCountrySpain('is-visible');
		setNotSpain('is-hidden');
		setCountryActive('is-active');
	};

	const mouseHoverUsaLeave = () => {
		setCountryUsa('');
		setNotUsa('');
		setCountryActive('');
	};

	const mouseHoverUaLeave = () => {
		setCountryUa('');
		setNotUa('');
		setCountryActive('');
	};

	const mouseHoverSpainLeave = () => {
		setCountrySpain('');
		setNotSpain('');
		setCountryActive('');
	};

	const contactsBlock = [
		{
			name: 'World Wide Support',
			nameIcon: globeIcon,
			mail: 'international@focusdigitalsyndicate.com',
			// phone: '',
			// phoneWhatsappIcon: whatsappIcon,
			// phoneTelegramIcon: telegramIcon,
		},
		{
			name: 'Barcelona, ES',
			nameIcon: spainIcon,
			countryPosClass: 'spain',
			countryClass: countrySpain,
			nameMapIcon: spainIcon,
			// mail: 'spain@focusdigitalsyndicate.com',
			phone: '+34674740712',
			phoneWhatsappIcon: whatsappIcon,
			// phoneTelegramIcon: telegramIcon,

			handleHoverCountry: mouseHoverSpain,
			handleLeaveCountry: mouseHoverSpainLeave,
		},
		{
			name: 'Kyiv, UA',
			nameIcon: uaIcon,
			countryPosClass: 'ua',
			countryClass: countryUa,
			nameMapIcon: uaIcon,
			mail: 'ukraine@focusdigitalsyndicate.com',
			phone: '+380665199577',
			phoneWhatsappIcon: whatsappIcon,
			phoneTelegramIcon: telegramIcon,

			handleHoverCountry: mouseHoverUa,
			handleLeaveCountry: mouseHoverUaLeave,
		},
		{
			name: 'California, USA',
			nameIcon: usaIcon,
			nameMapIcon: usaIcon,
			countryPosClass: 'usa',
			countryClass: countryUsa,
			mail: 'usa@focusdigitalsyndicate.com',
			// phone: '+1***********',
			// phoneWhatsappIcon: whatsappIcon,
			// phoneTelegramIcon: telegramIcon,

			handleHoverCountry: mouseHoverUsa,
			handleLeaveCountry: mouseHoverUsaLeave,
		},
	];

	return (
		<section id='contactsSection' className='pageSection'>
			<div className={`contactsMap `}>
				<div className={`contactsMap__svg ${countryActive}`}>
					{isMobileMedia && (
						<ContactMapMobile
							mouseHoverUsa={mouseHoverUsa}
							mouseHoverUsaLeave={mouseHoverUsaLeave}
							mouseHoverSpain={mouseHoverSpain}
							mouseHoverSpainLeave={mouseHoverSpainLeave}
							mouseHoverUa={mouseHoverUa}
							mouseHoverUaLeave={mouseHoverUaLeave}
							notUsa={notUsa}
							notUa={notUa}
							notSpain={notSpain}
						/>
					)}
					{isTabletMedia && !isMobileMedia && (
						<ContactMapTablet
							mouseHoverUsa={mouseHoverUsa}
							mouseHoverUsaLeave={mouseHoverUsaLeave}
							mouseHoverSpain={mouseHoverSpain}
							mouseHoverSpainLeave={mouseHoverSpainLeave}
							mouseHoverUa={mouseHoverUa}
							mouseHoverUaLeave={mouseHoverUaLeave}
							notUsa={notUsa}
							notUa={notUa}
							notSpain={notSpain}
						/>
					)}
					{!isTabletMedia && !isMobileMedia && (
						<ContactMapDesktop
							mouseHoverUsa={mouseHoverUsa}
							mouseHoverUsaLeave={mouseHoverUsaLeave}
							mouseHoverSpain={mouseHoverSpain}
							mouseHoverSpainLeave={mouseHoverSpainLeave}
							mouseHoverUa={mouseHoverUa}
							mouseHoverUaLeave={mouseHoverUaLeave}
							notUsa={notUsa}
							notUa={notUa}
							notSpain={notSpain}
						/>
					)}
				</div>

				<div className='mapContacts'>
					{contactsBlock.slice(1).map((block, index) => (
						<div
							className={`contactsInfo ${block.countryPosClass} ${block.countryClass}`}
							key={index}
							onMouseEnter={block.handleHoverCountry}
							onMouseLeave={block.handleLeaveCountry}
						>
							<div className='contactsInfo__title'>
								<ReactSVG
									src={block.nameMapIcon}
									className='contactsInfo__title-svg'
									wrapper='span'
								/>

								{block.name}
							</div>

							{block.mail && (
								<a href={`mailto:${block.mail}`} className='contactsInfo__link'>
									{block.mail}
								</a>
							)}

							{block.phone && (
								<div className='contactsInfo__link contactsInfo__link--phone'>
									{block.phoneWhatsappIcon && (
										<ReactSVG
											src={block.phoneWhatsappIcon}
											className='contactsInfo__link-svg'
											wrapper='span'
										/>
									)}

									{block.phoneTelegramIcon && (
										<ReactSVG
											src={block.phoneTelegramIcon}
											className='contactsInfo__link-svg'
											wrapper='span'
										/>
									)}

									<a href={`tel:${block.phone}`}>{block.phone}</a>
								</div>
							)}

							{/* <ReactSVG
								src={triangle}
								className='contactsInfo__triangle'
								wrapper='span'
							/> */}
						</div>
					))}
				</div>
			</div>

			<div className='wrapper'>
				<div className='contactsContent'>
					<div className='contacts'>
						<div className='contacts__left'>
							<h3 className='contacts__main'>
								{/* <p>FOCUS DIGITAL SYNDICATE SL, B72772981, </p>
								<p>ES, Barcelona, Av. De Les Drassanes 6</p> */}
								FOCUS DIGITAL SYNDICATE
							</h3>
							<a
								className='contacts__mail'
								href={`mailto:${mainEmail}`}
								target='_blank'
								rel='noreferrer noopener'
							>
								{mainEmail}
							</a>
						</div>

						<div className='contacts__right'>
							{contactsBlock.map((block, index) => (
								<div className='contactsInfo' key={index}>
									<div className='contactsInfo__title'>
										{block.nameIcon && (
											<ReactSVG
												src={block.nameIcon}
												className='contactsInfo__title-svg'
												wrapper='span'
											/>
										)}

										{block.name}
									</div>

									{block.mail && (
										<a
											href={`mailto:${block.mail}`}
											className='contactsInfo__link'
											// target='_blank'
											// rel='noreferrer noopener'
										>
											{block.mail}
										</a>
									)}

									{block.phone && (
										<div className='contactsInfo__link contactsInfo__link--phone'>
											{block.phoneWhatsappIcon && (
												<ReactSVG
													src={block.phoneWhatsappIcon}
													className='contactsInfo__link-svg'
													wrapper='span'
												/>
											)}
											{block.phoneTelegramIcon && (
												<ReactSVG
													src={block.phoneTelegramIcon}
													className='contactsInfo__link-svg'
													wrapper='span'
												/>
											)}
											<a
												href={`tel:${block.phone}`}
												className=''
												// target='_blank'
												// rel='noreferrer noopener'
											>
												{block.phone}
											</a>
										</div>
									)}
								</div>
							))}
						</div>
					</div>

					<LetsWork letsWorkTitle={letsWorkTitle} topText={topText} />
				</div>
			</div>
		</section>
	);
};

export default Contacts;
