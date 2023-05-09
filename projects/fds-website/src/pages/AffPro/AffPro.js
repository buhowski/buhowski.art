import React from 'react';

import './AffPro.scss';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import AffProBlock from './AffProBlock/AffProBlock';

const AffPro = () => {
	return (
		<PageTemplate id='affProSection' title='Products & cases' children={<AffProBlock />} />
	);
};

export default AffPro;
