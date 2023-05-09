import { ReactSVG } from 'react-svg';

import iconFB from './media/facebook.svg';
import iconIG from './media/instagram.svg';
import iconLinkedIn from './media/linkedin.svg';
import iconDribble from './media/dribble.svg';
import iconBehance from './media/behance.svg';

const socialData = [
	{
		url: '',
		icon: iconIG,
	},
	{
		url: '',
		icon: iconFB,
	},

	{
		url: '',
		icon: iconLinkedIn,
	},
	{
		url: '',
		icon: iconDribble,
	},
	{
		url: '',
		icon: iconBehance,
	},
];

const FooterCopyright = () => {
	return (
		<div className='footerCopyright'>
			<div className='footerCopyright__info'>
				<p className='footerCopyright__text'>
					{new Date().getFullYear()} Focus Digital Syndicate All rights reserved
				</p>

				<p className='footerCopyright__address'>
					FOCUS DIGITAL SYNDICATE SL, B72772981, ES, Barcelona, Av. De Les Drassanes 6{' '}
				</p>
			</div>

			<div className='footerCopyright__social'>
				{socialData.map((item, index) => (
					<a
						href={item.url}
						target='_blank'
						rel='noreferrer noopener'
						key={index}
						className='footerCopyright__social-item'
					>
						<ReactSVG src={item.icon} wrapper='span' />
					</a>
				))}
			</div>
		</div>
	);
};

export default FooterCopyright;
