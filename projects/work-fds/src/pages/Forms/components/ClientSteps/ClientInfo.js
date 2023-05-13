import useFormContext from '../../hooks/useFormContext';
import Singleinput from '../SingleInput';
import { useClientContext } from '../../context/useClientContext';

const ProfileInfo = () => {
	const { data, invalidInputs, inputInvalidName } = useFormContext();
	const { register, errors } = useClientContext();
	const content = (
		<>
			<div className='formField formField--client'>
				<Singleinput
					labelClassName={`formLabel required ${
						invalidInputs.includes('step1ClientName') ? 'invalid' : ''
					}`}
					labelText='Name'
					htmlForLabel='step1ClientName'
					inputId='step1ClientName'
					inputName='step1ClientName'
					inputValue={data.step1ClientName}
					inputType={`text`}
					// requiredInput={{ ...register('step1ClientName') }}
				/>

				<Singleinput
					labelClassName={`formLabel required ${
						invalidInputs.includes('step1clientCompanyName') ? 'invalid' : ''
					}`}
					labelText='Company name'
					htmlForLabel='step1clientCompanyName'
					inputId='step1clientCompanyName'
					inputName='step1clientCompanyName'
					inputValue={data.step1clientCompanyName}
					inputType={`text`}
				/>
			</div>
		</>
	);

	return content;
};

export default ProfileInfo;
