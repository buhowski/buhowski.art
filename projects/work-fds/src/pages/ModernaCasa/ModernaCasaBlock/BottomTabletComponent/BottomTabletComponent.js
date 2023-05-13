import React from 'react';
import './BottomTabletComponent.scss';
import { ReactSVG } from 'react-svg';
import { useMediaQuery } from 'react-responsive';
import modernaCasaLogo from '../../../../assets/svg/moderna-white-logo.svg';
import devices from '../../../../assets/images/moderna/moderna-devices.svg';

const BottomTabletComponent = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: 719px)`,
  });

	return (
		<div className='moderna-casa__tablet-content'>
			{isMobile ? (
			<div className='moderna-casa__tablet-content_top'>
				<div className='moderna-casa__tablet-content_top-mobile'>
					<div className='moderna-casa__tablet-content_top-logo moderna-bottom-block'>
						<ReactSVG
							src={modernaCasaLogo}
							className='moderna-casa__top-logo-svg'
							wrapper='span'
						/>
					</div>
					<div className='moderna-casa__tablet-content_top-img'/>
				</div>
				
				<div className='moderna-casa__tablet-content_top-colors moderna-bottom-block'>
				<div className='moderna-casa__tablet-content_top-color-block'>
					<div className='rico__content_top-color moderna-onyx' />
					<div className='moderna-casa__tablet-content_top-color-title '>
						#323436
					</div>
				</div>
				<div className='moderna-casa__tablet-content_top-color-block'>
					<div className='rico__content_top-color moderna-maize' />
					<div className='moderna-casa__tablet-content_top-color-title'>
						#FFE662
					</div>
				</div>
				<div className='moderna-casa__tablet-content_top-color-block'>
					<div className='rico__content_top-color moderna-black' />
					<div className='moderna-casa__tablet-content_top-color-title'>
						#000000
					</div>
				</div>
			</div>
		</div>) : (<div className='moderna-casa__tablet-content_top'>
			
			<div className='moderna-casa__tablet-content_top-logo moderna-bottom-block'>
				<ReactSVG
					src={modernaCasaLogo}
					className='moderna-casa__top-logo-svg'
					wrapper='span'
				/>
			</div>
			<div className='moderna-casa__tablet-content_top-colors moderna-bottom-block'>
				<div className='moderna-casa__tablet-content_top-color-block'>
					<div className='rico__content_top-color moderna-onyx' />
					<div className='moderna-casa__tablet-content_top-color-title '>
						#323436
					</div>
				</div>
				<div className='moderna-casa__tablet-content_top-color-block'>
					<div className='rico__content_top-color moderna-maize' />
					<div className='moderna-casa__tablet-content_top-color-title'>
						#FFE662
					</div>
				</div>
				<div className='moderna-casa__tablet-content_top-color-block'>
					<div className='rico__content_top-color moderna-black' />
					<div className='moderna-casa__tablet-content_top-color-title'>
						#000000
					</div>
				</div>
			</div>
			<div className='moderna-casa__tablet-content_top-img'/>
		</div>)}
		
		<div className='moderna-casa__tablet-content_bottom'>
			<div className='moderna-casa__tablet-content_bottom-info-block'>
				<div className='moderna-casa__tablet-content_bottom-info moderna-bottom-block'>
					<span className='moderna-casa__tablet-content_bottom-info-title'>
						Building the future together
					</span>
					<p className='moderna-casa__tablet-content_bottom-info-description'>
						Building Your Dreams: Elevate your living experience with our comprehensive and innovative construction services that make your dream home a reality. Our unwavering commitment to safety and luxury is reflected in every aspect of our work, from using the latest technology to employing the finest craftsmanship, resulting in exceptional quality and precision. You can trust us to bring your unique vision to life, creating a space that perfectly encapsulates your personality, lifestyle, and aspirations. With our expert team at the helm, you can sit back, relax, and enjoy the journey toward your dream home.
					</p>
				</div>
				<div className='moderna-casa__tablet-content_bottom-images'>
					<div className='moderna-casa__tablet-content_bottom-first-img'/>
					{!isMobile && (<div className='moderna-casa__tablet-content_bottom-second-img'/>)}
				</div>
			</div>
			<div className='moderna-casa__tablet-content_bottom-devices-block moderna-bottom-block'>
				<ReactSVG
					src={devices}
					className='moderna-casa__tablet-content_bottom-devices-img'
					wrapper='span'
				/>
			</div>
		</div>
	</div>
	);
};

export default BottomTabletComponent;
