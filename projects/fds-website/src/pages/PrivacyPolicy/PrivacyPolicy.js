import React from 'react';
import { policyData } from './policyData';

import './PrivacyPolicy.scss';

const PrivacyPolicy = () => {
	return (
		<section className='policyPage'>
			<div className='wrapper'>
				<p className='policyPage__pre'>Privacy policy</p>

				<h2 className='policyPage__title'>Privacy policy</h2>

				<div className='policyContent'>
					{policyData.map((block, index) => (
						<div className='policyBlock' key={index}>
							<h3 className='policyBlock__title'>{block.title}</h3>
							{block.text &&
								block.text.map((blockItem, i) => (
									<p className='policyBlock__text' key={i}>
										{blockItem}
									</p>
								))}

							{block.list && (
								<ul>
									{block.list.map((listItem, i) => (
										<li className='policyBlock__list' key={i}>
											{listItem}
										</li>
									))}
								</ul>
							)}

							{block.text2 &&
								block.text2.map((blockItem, i) => (
									<p className='policyBlock__text' key={i}>
										{blockItem}
									</p>
								))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default PrivacyPolicy;
