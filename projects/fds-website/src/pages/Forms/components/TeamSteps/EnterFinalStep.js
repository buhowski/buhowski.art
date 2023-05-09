import useFormContext from '../../hooks/useFormContext';
import Singleinput from '../SingleInput';
import 'react-phone-number-input/style.css';

const EnterFinalStep = () => {
	const { data, invalidInputs } = useFormContext();

	const content = (
		<div className='finalFormBlock'>
			<div className='formField'>
				<Singleinput
					labelClassName={`formLabel required ${
						invalidInputs.includes('step4addEmail') ? 'invalid' : ''
					}`}
					labelText='Add your email'
					htmlForLabel='step4addEmail'
					inputId='step4addEmail'
					inputName='step4addEmail'
					inputValue={data.step4addEmail}
					inputType={`email`}
				/>
			</div>

			<div className='formField'>
				<Singleinput
					phoneInput={true}
					labelClassName={`formLabel required ${
						invalidInputs.includes('step4addPhone') ? 'invalid' : ''
					}`}
					labelText='Phone number'
					htmlForLabel='step4addPhone'
					inputId='step4addPhone'
					inputName='step4addPhone'
					inputValue={data.step4addPhone}
					inputType={`tel`}
				/>
			</div>

			<div className='formField'>
				<Singleinput
					labelClassName={`formLabel required ${
						invalidInputs.includes('step4addTelegram') ? 'invalid' : ''
					}`}
					labelText='Add your telegram @nickname'
					htmlForLabel='step4addTelegram'
					inputId='step4addTelegram'
					inputName='step4addTelegram'
					inputValue={data.step4addTelegram}
					inputType={`text`}
				/>
			</div>
		</div>
	);

	return content;
};

export default EnterFinalStep;
