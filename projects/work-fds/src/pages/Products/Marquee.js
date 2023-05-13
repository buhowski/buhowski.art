import React from 'react';

const Marquee = ({ marqueeImg, directionClass }) => {
	return (
		<div className={`verticalMarquee ${directionClass}`}>
			{/* {[1, 2].map((item, i) => ( */}
			<div className={`verticalMarquee__content`}>
				<img src={marqueeImg} alt='' />
			</div>

			<div className={`verticalMarquee__content`}>
				<img src={marqueeImg} alt='' />
			</div>

			<div className={`verticalMarquee__content`}>
				<img src={marqueeImg} alt='' />
			</div>
			{/* ))} */}

			{/* Duplicate the content */}
			{/* <div className='verticalMarquee__content'>
				<img src={marqueeImg} alt='' />
			</div> */}
		</div>
	);
};

export default Marquee;
