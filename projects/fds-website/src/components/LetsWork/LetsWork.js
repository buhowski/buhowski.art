import React from 'react';
import { ReactSVG } from 'react-svg';
import { routePaths } from '../../shared/routes';
import smileMsg from '../../assets/svg/smile-msg.svg';

import './LetsWork.scss';

const LetsWork = ({ letsWorkTitle, topText }) => {
	return (
		<div className='letsWork'>
			<div className='letsWork__text'>
				{topText && <p className='letsWork__top'>{topText}</p>}

				<h3 className='letsWork__title'>{letsWorkTitle}</h3>
			</div>

			<a href={routePaths.clientForm} className='letsWork__btn mainBtn'>
				Continue <ReactSVG src={smileMsg} className='mainBtn__svg' wrapper='span' />
			</a>

			<span className='letsWork__bg'></span>
		</div>
	);
};

export default LetsWork;
