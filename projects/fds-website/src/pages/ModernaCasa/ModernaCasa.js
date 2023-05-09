import React from 'react';

import './ModernaCasa.scss';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import ModernaCasaBlock from './ModernaCasaBlock/ModernaCasaBlock';


const ModernaCasa = () => {
	return (
		<PageTemplate id='modernaCasaSection' title='Products & cases' children={<ModernaCasaBlock />}/>
	);
};

export default ModernaCasa;
