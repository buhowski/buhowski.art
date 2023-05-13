import React from 'react';
import './PageTemplate.scss';
import { useNavigate } from 'react-router-dom';
import { routePaths } from '../../shared/routes';
import { useMediaQuery } from 'react-responsive';

const PageTemplate = ({ id, title, children }) => {
	const navigate = useNavigate();

	const isMobile = useMediaQuery({
		query: `(max-width: 719px)`,
	});

	const handleCaseButtonClick = () => {
		navigate(routePaths.mainPage);

		setTimeout(() => {
			const element = document.getElementById('productsSection');
			if (element) {
				const topOffset = element.getBoundingClientRect().top + window.pageYOffset;
				window.scrollTo({
					top: topOffset - (isMobile ? 100 : 60),
					// behavior: 'smooth',
				});
			}
		}, 0);
	};

	return (
		<section id={id} className='page_wrapper'>
			<h3 className='page_title' onClick={() => handleCaseButtonClick()}>
				{title}
			</h3>
			{children}
		</section>
	);
};

export default PageTemplate;
