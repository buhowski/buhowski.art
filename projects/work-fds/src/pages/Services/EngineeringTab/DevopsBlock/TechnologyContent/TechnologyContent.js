import React from 'react';
import './TechnologyContent.scss';
import IconsBlock from '../../../IconBlock/IconBlock';
import { technologyIcons } from './TechnologyContent.constants';

const TechnologyContent = () => {
	return (
		<div className='technology__wrapper'>
			<h2 className='technology__title'>
				<span>Technology</span>
			</h2>
			<div className='technology__icons'>
				<IconsBlock technologyIcons={technologyIcons} />
			</div>
		</div>
	);
};

export default TechnologyContent;
