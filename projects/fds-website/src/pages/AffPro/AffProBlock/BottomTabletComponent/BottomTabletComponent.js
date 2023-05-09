import React from 'react';
import './BottomTabletComponent.scss';
import { ReactSVG } from 'react-svg';
import { useMediaQuery } from 'react-responsive';
import affPro from '../../../../assets/svg/affpro-logo.svg';
import devices from '../../../../assets/images/affpro/affpro-devices.svg';
import firstBottomImg from '../../../../assets/images/affpro/affpro-bottom-2.svg';
import secondBottomImg from '../../../../assets/images/affpro/affpro-bottom-3.svg';
import affProLogoAnimation from '../../../../assets/animations/affpro/affpro-logo.json';
import Lottie from 'lottie-light-react';

const BottomTabletComponent = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: 719px)`,
  });

	return (
		<div className='affpro__tablet-content'>
			{isMobile ? (
			<div className='affpro__tablet-content_top'>
				<div className='affpro__tablet-content_top-mobile'>
					<div className='affpro__tablet-content_top-logo affpro-bottom-block'>
						<Lottie
							animationData={affProLogoAnimation}
							autoplay={true}
							loop={true}
							style={{
								width: '100%',
								height: '100%',
							}}
						/>
					</div>
				</div>
				
				<div className='affpro__tablet-content_top-colors affpro-bottom-block'>
				<div className='affpro__tablet-content_top-color-block'>
					<div className='affpro__tablet-content_top-color affpro-tang' />
					<div className='affpro__tablet-content_top-color-title '>
						#2757C1
					</div>
				</div>
				<div className='affpro__tablet-content_top-color-block'>
					<div className='affpro__tablet-content_top-color affpro-rich' />
					<div className='affpro__tablet-content_top-color-title'>
						#08071B
					</div>
				</div>
				<div className='affpro__tablet-content_top-color-block'>
					<div className='affpro__tablet-content_top-color affpro-penn' />
					<div className='affpro__tablet-content_top-color-title'>
						#121040
					</div>
				</div>
				<div className='affpro__tablet-content_top-color-block'>
					<div className='affpro__tablet-content_top-color affpro-delft' />
					<div className='affpro__tablet-content_top-color-title'>
						#232C67
					</div>
				</div>
				<div className='affpro__tablet-content_top-color-block'>
					<div className='affpro__tablet-content_top-color affpro-light-delft' />
					<div className='affpro__tablet-content_top-color-title'>
						#2E387A
					</div>
				</div>
				<div className='affpro__tablet-content_top-color-block'>
					<div className='affpro__tablet-content_top-color affpro-marian' />
					<div className='affpro__tablet-content_top-color-title'>
						#36418E
					</div>
				</div>
			</div>
		</div>) : (<div className='affpro__tablet-content_top'>
			
			<div className='affpro__tablet-content_top-logo affpro-bottom-block'>
				<Lottie
					animationData={affProLogoAnimation}
					autoplay={true}
					loop={true}
					style={{
						width: '100%',
						height: '100%',
					}}
				/>
			</div>
			<div className='affpro__tablet-content_top-colors affpro-bottom-block'>
						<div className='affpro__tablet-content_top-color-block'>
							<div className='affpro__tablet-content_top-color affpro-tang' />
							<div className='affpro__tablet-content_top-color-title '>
								#2757C1
							</div>
						</div>
						<div className='affpro__tablet-content_top-color-block'>
							<div className='affpro__tablet-content_top-color affpro-rich' />
							<div className='affpro__tablet-content_top-color-title'>
								#08071B
							</div>
						</div>
						<div className='affpro__tablet-content_top-color-block'>
							<div className='affpro__tablet-content_top-color affpro-penn' />
							<div className='affpro__tablet-content_top-color-title'>
								#121040
							</div>
						</div>
						<div className='affpro__tablet-content_top-color-block'>
							<div className='affpro__tablet-content_top-color affpro-delft' />
							<div className='affpro__tablet-content_top-color-title'>
								#232C67
							</div>
						</div>
						<div className='affpro__tablet-content_top-color-block'>
							<div className='affpro__tablet-content_top-color affpro-light-delft' />
							<div className='affpro__tablet-content_top-color-title'>
								#2E387A
							</div>
						</div>
						<div className='affpro__tablet-content_top-color-block'>
							<div className='affpro__tablet-content_top-color affpro-marian' />
							<div className='affpro__tablet-content_top-color-title'>
								#36418E
							</div>
						</div>
					</div>
		</div>)}
		
		<div className='affpro__tablet-content_bottom'>
			<div className='affpro__tablet-content_bottom-info-block'>
				<div className='affpro__tablet-content_bottom-info affpro-bottom-block'>
					<span className='affpro__tablet-content_bottom-info-title'>
						Building the future together
					</span>
					<p className='affpro__tablet-content_bottom-info-description'>
						Welcome to AFFPRO! Our main goal is to promote the rapid development of your business through effective marketing services and trusted professionals. We offer favorable terms of cooperation for advertisers and partners. Achieve high results with us!
					</p>
				</div>
				<div className='affpro__tablet-content_bottom-images'>
				<div className='affpro__tablet-content_bottom-image-block affpro-bottom-block'>
					<ReactSVG
						src={firstBottomImg}
						className='affpro__tablet-content_bottom-first-img'
						wrapper='span'
					/>
				</div>
					{!isMobile && (<div className='affpro__tablet-content_bottom-image-block affpro-bottom-block'><ReactSVG
					src={secondBottomImg}
					className='affpro__tablet-content_bottom-second-img'
					wrapper='span'
				/></div>)}
				</div>
			</div>
			<div className='affpro__tablet-content_bottom-devices-block affpro-bottom-block'>
				<ReactSVG
					src={devices}
					className='affpro__tablet-content_bottom-devices-img'
					wrapper='span'
				/>
			</div>
		</div>
	</div>
	);
};

export default BottomTabletComponent;
