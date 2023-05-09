import React from 'react';

import './Rico.scss';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import RicoBlock from './RicoBlock/RicoBlock';


const Rico = () => {
	return (
		<PageTemplate id='ricoSection' title='Products & cases' children={<RicoBlock />}/>
	);
};

export default Rico;
