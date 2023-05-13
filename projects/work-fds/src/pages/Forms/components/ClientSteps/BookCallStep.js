import useFormContext from '../../hooks/useFormContext';
import SingleSelect from '../SingleSelect';
import SingleInput from '../SingleInput';
import { preferredLangOptions, preferredMethodOptions } from '../dataSelection';

import { useClientContext } from '../../context/useClientContext';

const WhatStep = () => {
	const {
		preferredMethodContact,
		handlePreferredMethodContact,
		preferredLangState,
		handlePreferredLangState,
		invalidInputs,
		data
	} = useFormContext();

	const { register, errors, isEmailAlreadyUsed } = useClientContext();

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
					required
				/>

				<SingleInput
					labelClassName={`formLabel required ${
						invalidInputs.includes('step3ClientEmail') ? 'invalid' : ''
					}`}
					labelText='Email'
					htmlForLabel='step3ClientEmail'
					inputId='step3ClientEmail'
					inputName='step3ClientEmail'
					inputValue={data.step3ClientEmail}
					inputType={`email`}
					onBlur={isEmailAlreadyUsed}
				/>

				<SingleInput
					phoneInput={true}
					labelClassName={`formLabel ${
						invalidInputs.includes('step4addPhone') ? 'invalid' : ''
					}`}
					labelText='Phone number'
					htmlForLabel='step4addPhone'
					inputId='step4addPhone'
					inputName='step4addPhone'
					inputValue={data.step4addPhone}
					inputType={`tel`}
				/>

				<SingleInput
					labelClassName={`formLabel ${
						invalidInputs.includes('step3ClientTelegram') ? 'invalid' : ''
					}`}
					labelText='Add your telegram @nickname'
					htmlForLabel='step3ClientTelegram'
					inputId='step3ClientTelegram'
					inputName='step3ClientTelegram'
					inputValue={data.step3ClientTelegram}
					inputType={`text`}
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
