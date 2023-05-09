import useFormContext from '../../hooks/useFormContext';
import SingleSelect from '../SingleSelect';
import { preferredLangOptions, preferredMethodOptions } from '../dataSelection';

import { useClientContext } from '../../context/useClientContext';

const WhatStep = () => {
	const {
		// chooseServiceState,
		// handleChooseServiceState,
		preferredMethodContact,
		handlePreferredMethodContact,
		preferredLangState,
		handlePreferredLangState,
		invalidInputs,
	} = useFormContext();

	const { register, errors } = useClientContext();

	const content = (
		<>
			<div className='formField formField--client'>
				<SingleSelect
					invalidCheck={`required ${
						invalidInputs.includes('step3preferredLang') ? 'invalid' : ''
					}`}
					selectName='step3preferredLang'
					selectPlaceholder='Set language'
					selectOptions={preferredLangOptions}
					selectValue={preferredLangState}
					onSelectChange={handlePreferredLangState}
					isSearchable={false}
				/>

				<SingleSelect
					invalidCheck={`required ${
						invalidInputs.includes('step3preferredMethod') ? 'invalid' : ''
					}`}
					selectName='step3preferredMethod'
					selectPlaceholder='Preferred method of contact'
					selectOptions={preferredMethodOptions}
					selectValue={preferredMethodContact}
					onSelectChange={handlePreferredMethodContact}
					isSearchable={false}
				/>
			</div>
		</>
	);

	return content;
};

export default WhatStep;
