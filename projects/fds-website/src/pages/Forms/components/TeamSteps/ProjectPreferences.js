import useFormContext from '../../hooks/useFormContext';
import Singleinput from '../SingleInput';
import SingleCheck from '../SingleCheck';
import SingleSelect from '../SingleSelect';
import { englishLevelAskOptions, englishLevelOptions } from '../dataSelection';

const ProjectPreferences = () => {
	const {
		data,
		invalidInputs,
		englishLevelAsk,
		handleEnglishLevelAsk,
		englishLevelAnswear,
		handleEnglishLevelAnswear,
		englishLevelOff,
	} = useFormContext();

	const content = (
		<>
			<div className='formField'>
				<div className='formFieldInfo__title'>
					<p className='formFieldInfo__title-block'>
						What kind of project are you looking for?
					</p>
				</div>

				<div className='formField--flex'>
					<SingleCheck
						htmlForLabel='fullTime'
						inputId='fullTime'
						inputValue='fullTime'
						radioName='Full-time'
						radioSubname='(40h / week)'
					/>

					<SingleCheck
						htmlForLabel='partTime'
						inputId='partTime'
						inputValue='partTime'
						radioName='Part-time'
						radioSubname='(20-35h / week)'
					/>

					<SingleCheck
						htmlForLabel='lessTime'
						inputId='lessTime'
						inputValue='lessTime'
						radioName='Less than'
						radioSubname='(20h / week)'
					/>
				</div>
			</div>

			<div className='formFieldInfo'>
				<div className='formFieldInfo__title'>
					<p className='formFieldInfo__title-block'>Level of English</p>
				</div>

				<div className='formField formField--flex formField--english'>
					<SingleSelect
						invalidCheck={`required ${
							invalidInputs.includes('step3EnglishLevelAsk') ? 'invalid' : ''
						}`}
						selectName='step3EnglishLevelAsk'
						selectPlaceholder='Do you want to work with English-speaking clients?'
						selectOptions={englishLevelAskOptions}
						selectValue={englishLevelAsk}
						onSelectChange={handleEnglishLevelAsk}
						isSearchable={false}
					/>

					<SingleSelect
						invalidCheck={`required ${
							invalidInputs.includes('step3EnglishLevelAnswear') ? 'invalid' : ''
						} ${englishLevelOff}`}
						selectName='step3EnglishLevelAnswear'
						selectPlaceholder='B1, B2, C1'
						selectOptions={englishLevelOptions}
						selectValue={englishLevelAnswear}
						onSelectChange={handleEnglishLevelAnswear}
						isSearchable={false}
					/>
				</div>
			</div>

			<div className='formFieldInfo'>
				<div className='formFieldInfo__title'>
					<p className='formFieldInfo__title-block'>What is your hourly rate?</p>
				</div>

				<div className='formField'>
					<Singleinput
						labelClassName={`formLabel required ${
							invalidInputs.includes('step3desiredHourlyRate') ? 'invalid' : ''
						}`}
						labelText='Desired hourly rate '
						htmlForLabel='step3desiredHourlyRate'
						inputId='step3desiredHourlyRate'
						inputName='step3desiredHourlyRate'
						inputValue={data.step3desiredHourlyRate}
						inputType={`number`}
					/>
				</div>
			</div>
		</>
	);

	return content;
};

export default ProjectPreferences;
