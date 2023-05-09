import React from 'react';
import './IconBlock.scss';
import IconRow from './IconRow/IconRow';

const IconBlock = ({ technologyIcons, notCentered }) => {
	return (
		<div className='icon-block__wrapper'>
			{technologyIcons.map((technologyIconsRow) => (
				<IconRow
					technologyIconsRow={technologyIconsRow}
					notCentered={notCentered}
					key={technologyIconsRow.id}
				/>
			))}
		</div>
	);
};

export default IconBlock;
