import React from 'react';
import './BottomTabletComponent.scss';
import { ReactSVG } from 'react-svg';
import { useMediaQuery } from 'react-responsive';
import devices from '../../../../assets/images/rico/rico-devices.svg';
import Lottie from 'lottie-light-react';
import ricoAnimation from '../../../../assets/animations/rico/second-animation.json';
import house from '../../../../assets/animations/rico/house.json';
import rooms from '../../../../assets/animations/rico/rooms.json';

const BottomTabletComponent = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: 719px)`,
  });

	return (
		<div className='rico__tablet-content'>
			{isMobile ? (
			<div className='rico__tablet-content_top'>
				<div className='rico__tablet-content_top-mobile'>
				<div className='rico__content_top-logo rico-bottom-block'>
						<Lottie
							animationData={ricoAnimation}
							autoplay={true}
							loop={true}
							style={{
								width: '90%',
								height: '90%',
							}}
						/>
					</div>
				</div>
				
				<div className='rico__tablet-content_top-colors rico-bottom-block'>
						<div className='rico__tablet-content_top-color-block'>
							<div className='rico__content_top-color rico-tang'>
							</div>
							<div className='rico__content_top-color-title '>
								#000040
							</div>
						</div>
						<div className='rico__content_top-color-block'>
							<div className='rico__content_top-color rico-rich'>
							</div>
							<div className='rico__content_top-color-title'>
								#07077B
							</div>
						</div>
						<div className='rico__content_top-color-block'>
							<div className='rico__content_top-color rico-penn'>
							</div>
							<div className='rico__content_top-color-title'>
								#00CE7D
							</div>
						</div>
						<div className='rico__content_top-color-block'>
							<div className='rico__content_top-color rico-delft'>
							</div>
							<div className='rico__content_top-color-title'>
								#63E2B0
							</div>
						</div>
						<div className='rico__content_top-color-block'>
							<div className='rico__content_top-color rico-light-delft'>
							</div>
							<div className='rico__content_top-color-title'>
								#FF9331
							</div>
						</div>
						<div className='rico__content_top-color-block'>
							<div className='rico__content_top-color rico-marian'>
							</div>
							<div className='rico__content_top-color-title'>
								#FFBE83
							</div>
						</div>
					</div>
		</div>) : (<div className='rico__tablet-content_top'>
			
			<div className='rico__tablet-content_top-logo affpro-bottom-block'>
				<Lottie
					animationData={ricoAnimation}
					autoplay={true}
					loop={true}
					style={{
						width: '100%',
						height: '100%',
					}}
				/>
			</div>
			<div className='rico__tablet-content_top-colors rico-bottom-block'>
						<div className='rico__content_top-color-block'>
							<div className='rico__content_top-color rico-tang'>
							</div>
							<div className='rico__content_top-color-title '>
								#000040
							</div>
						</div>
						<div className='rico__content_top-color-block'>
							<div className='rico__content_top-color rico-rich'>
							</div>
							<div className='rico__content_top-color-title'>
								#07077B
							</div>
						</div>
						<div className='rico__content_top-color-block'>
							<div className='rico__content_top-color rico-penn'>
							</div>
							<div className='rico__content_top-color-title'>
								#00CE7D
							</div>
						</div>
						<div className='rico__content_top-color-block'>
							<div className='rico__content_top-color rico-delft'>
							</div>
							<div className='rico__content_top-color-title'>
								#63E2B0
							</div>
						</div>
						<div className='rico__content_top-color-block'>
							<div className='rico__content_top-color rico-light-delft'>
							</div>
							<div className='rico__content_top-color-title'>
								#FF9331
							</div>
						</div>
						<div className='rico__content_top-color-block'>
							<div className='rico__content_top-color rico-marian'>
							</div>
							<div className='rico__content_top-color-title'>
								#FFBE83
							</div>
						</div>
					</div>
		</div>)}
		
		<div className='rico__tablet-content_bottom'>
			<div className='rico__tablet-content_bottom-info-block'>
				<div className='rico__tablet-content_bottom-info affpro-bottom-block'>
					<span className='rico__tablet-content_bottom-info-title'>
						WElCOME TO RICO RENT
					</span>
					<p className='rico__tablet-content_bottom-info-description'>
					 Rico is a free, smart app that helps you find best rental properties in Barcelona - private homes, commercial real estate or even yachts.
					</p>
				</div>
				<div className='rico__content_bottom-images'>
					<div className='rico__tablet-content_bottom-image-block rico-bottom-block'>
						<Lottie
							animationData={rooms}
							autoplay={true}
							loop={true}
							style={{
								width: '100%',
								height: '100%',
							}}
						/>
					</div>
					{!isMobile && (
						<div className='rico__tablet-content_bottom-image-block rico-bottom-block'>
							<Lottie
								animationData={house}
								autoplay={true}
								loop={true}
								style={{
									width: '100%',
									height: '100%',
								}}
							/>
					</div>
					)}
				</div>
			</div>
			<div className='rico__tablet-content_bottom-devices-block rico-bottom-block'>
						<ReactSVG
							src={devices}
							className='rico__tablet-content_bottom-devices-img'
							wrapper='span'
							style={{
								width: '230px',
								height: '470px'
							}}
						/>
					</div>
		</div>
	</div>
	);
};

export default BottomTabletComponent;
