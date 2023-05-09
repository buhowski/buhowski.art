import useFormContext from '../../hooks/useFormContext';
import SingleSelect from '../SingleSelect';
import SingleTextarea from '../SingleTextarea';
import { chooseServiceOptions, budgetOptions } from '../dataSelection';

import { useClientContext } from '../../context/useClientContext';

const WhatStep = () => {
	const {
		data,
		chooseServiceState,
		yourBudgetState,
		handleChooseServiceState,
		handleYourBudgetState,
		invalidInputs,
	} = useFormContext();

	const { register, errors } = useClientContext();

	const content = (
		<>
			<div className='formField formField--client'>
				<SingleSelect
					invalidCheck={`required ${
						invalidInputs.includes('step2chooseService') ? 'invalid' : ''
					}`}
					selectName='step2chooseService'
					selectPlaceholder='Choose a service'
					selectOptions={chooseServiceOptions}
					selectValue={chooseServiceState}
					onSelectChange={handleChooseServiceState}
					isSearchable={false}
				/>

				<SingleSelect
					invalidCheck={`required ${
						invalidInputs.includes('step2yourBudget') ? 'invalid' : ''
					}`}
					selectName='step2yourBudget'
					selectPlaceholder='Your budget'
					selectOptions={budgetOptions}
					selectValue={yourBudgetState}
					onSelectChange={handleYourBudgetState}
					isSearchable={false}
				/>

				<SingleTextarea
					labelClassName={`required ${
						invalidInputs.includes('step2tellUsMore') ? 'invalid' : ''
					}`}
					textareaName='step2tellUsMore'
					textareaId='step2tellUsMore'
					textareaValue={data.step2tellUsMore}
					textareaPlaceholder='Tell us please more details about your project you think we should take into account'
				/>
			</div>
		</>
	);

	return content;
};

export default WhatStep;
