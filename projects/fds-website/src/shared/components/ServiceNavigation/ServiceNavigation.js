import React from 'react';
import { ReactSVG } from 'react-svg';
import './ServiceNavigation.scss';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';



const ServiceNavigation = ({
	firstNavItem,
	secondNavItem,
	icon,
	currentNavItem,
	setCurrentNavItem,
	oneBlock
}) => {
	return (
		<div className='uiux__navigation'>
			<BottomNavigation
        showLabels
        value={currentNavItem}
        onChange={(event, newValue) => {
          setCurrentNavItem(newValue);
        }}
      >
        <BottomNavigationAction
					label={firstNavItem}
					value={firstNavItem}
				/>
        {!oneBlock && (<BottomNavigationAction
					label={secondNavItem}
					value={secondNavItem}
				/>)}
      </BottomNavigation>
			<ReactSVG src={icon} className='uiux__navigation-icon' />
		</div>
	);
};

export default ServiceNavigation;
