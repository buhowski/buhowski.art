import { useState } from 'react';
import useFormContext from '../../hooks/useFormContext';
import Singleinput from '../SingleInput';
import SingleSelect from '../SingleSelect';
import { seniorityLevelOptions, yearsOptions } from '../dataSelection';

const TechStack = () => {
	const {
		data,
		invalidInputs,
		seniorityLevel,
		handleSeniorityLevel,
		yearsOfExperience,
		handleYearsOfExperience,
		coreTechnologieExp,
		handleCoreTechnologieExp,
		additionalTechnologie,
		handleAdditionalTechnologie,

		// isSearchable,
	} = useFormContext();
	const [coreSkills, setCoreSkills] = useState([]);
	const [additionalSkills, setAdditionalSkills] = useState([]);

	const addCoreSkill = () => {
		setCoreSkills((prevState) => [
			...prevState,
			{
				name: '',
				years: '',
			},
		]);
	};

	const removeBlock = (index) => {
		setCoreSkills((prevState) => {
			const newState = [...prevState];
			newState.splice(index, 1);
			return newState;
		});
	};

	const addAdditionalSkill = () => {
		setAdditionalSkills((prevState) => [
			...prevState,
			{
				name: '',
				years: '',
			},
		]);
	};

	const removeAdditionalSkill = (index) => {
		setAdditionalSkills((prevState) => {
			const newState = [...prevState];
			newState.splice(index, 1);
			return newState;
		});
	};

	const content = (
		<>
			<div className='formField formField--flex'>
				<Singleinput
					labelClassName={`formLabel required ${
						invalidInputs.includes('step2MainSpecialization') ? 'invalid' : ''
					}`}
					labelText='Main specialisation'
					htmlForLabel='step2MainSpecialization'
					inputId='step2MainSpecialization'
					inputName='step2MainSpecialization'
					inputValue={data.step2MainSpecialization}
					inputType={`text`}
					inputClassName={``}
					inputPlaceholder=''
				/>

				<SingleSelect
					invalidCheck={`required ${
						invalidInputs.includes('step2SeniorityLevel') ? 'invalid' : ''
					}`}
					selectName='step2SeniorityLevel'
					selectPlaceholder='Seniority level'
					selectOptions={seniorityLevelOptions}
					selectValue={seniorityLevel}
					onSelectChange={handleSeniorityLevel}
					isSearchable={false}
				/>
			</div>

			<div className='formField'>
				<Singleinput
					labelClassName={`formLabel required ${
						invalidInputs.includes('step2YearsOfExperience') ? 'invalid' : ''
					}`}
					labelText='Years of experience'
					htmlForLabel='step2YearsOfExperience'
					inputId='step2YearsOfExperience'
					inputName='step2YearsOfExperience'
					inputValue={data.step2YearsOfExperience}
					inputType={`number`}
				/>
				{/* <SingleSelect
					invalidCheck={`required ${
						invalidInputs.includes('step2YearsOfExperience') ? 'invalid' : ''
					}`}
					selectName='step2YearsOfExperience'
					selectPlaceholder='Years of experience'
					selectOptions={yearsOptions}
					selectValue={yearsOfExperience}
					onSelectChange={handleYearsOfExperience}
					isSearchable={false}
				/> */}
			</div>

			<div className='formFieldInfo'>
				<div className='formFieldInfo__title'>
					<p className='formFieldInfo__title-block'>Add your core technologies</p>
					<p className='formFieldInfo__title-desk'>
						Add no less than 2 technologies you're confident in
					</p>
				</div>

				<div className='formField formField--flex'>
					<Singleinput
						labelClassName={`formLabel required ${
							invalidInputs.includes('step2CoreTechnologie') ? 'invalid' : ''
						}`}
						labelText='Front-end, UI/UX, DevOps'
						htmlForLabel='step2CoreTechnologie'
						inputId='step2CoreTechnologie'
						inputName='step2CoreTechnologie'
						inputValue={data.step2CoreTechnologie}
						inputType={`text`}
					/>

					<Singleinput
						labelClassName={`formLabel required ${
							invalidInputs.includes('step2CoreTechnologieExp') ? 'invalid' : ''
						}`}
						labelText='Years of experience'
						htmlForLabel='step2CoreTechnologieExp'
						inputId='step2CoreTechnologieExp'
						inputName='step2CoreTechnologieExp'
						inputValue={data.step2CoreTechnologieExp}
						inputType={`number`}
					/>
					{/* 
					<SingleSelect
						invalidCheck={`required ${
							invalidInputs.includes('step2CoreTechnologieExp') ? 'invalid' : ''
						}`}
						selectName='step2CoreTechnologieExp'
						selectPlaceholder='Years of experience'
						selectOptions={yearsOptions}
						selectValue={coreTechnologieExp}
						onSelectChange={handleCoreTechnologieExp}
						isSearchable={false}
					/> */}

					<div className=' formMore formField--flex'>
						<button
							className={`formField__btnMore`}
							type='button'
							onClick={addCoreSkill}
						></button>
					</div>
				</div>

				{coreSkills.map((skill, index) => (
					<div className='formField formField--flex' key={index}>
						<Singleinput
							labelClassName='formLabel'
							labelText='Front-end, UI/UX, DevOps'
							htmlForLabel={`coreTechnologie${index}`}
							inputId={`coreTechnologie${index}`}
							inputName={`coreTechnologie${index}`}
							inputValue={data.coreTechnologie}
							inputType='text'
						/>

						<Singleinput
							labelClassName='formLabel'
							labelText='Years of experience'
							htmlForLabel={`coreTechnologieExp${index}`}
							inputId={`coreTechnologieExp${index}`}
							inputName={`coreTechnologieExp${index}`}
							inputValue={data.coreTechnologieExp}
							inputType='number'
						/>

						<div className='formMore formField--flex'>
							<button
								className='formField__btnMore formField__btnMore--remove'
								type='button'
								onClick={() => removeBlock(index)}
							></button>
						</div>
					</div>
				))}
			</div>

			<div className='formFieldInfo'>
				<div className='formFieldInfo__title'>
					<p className='formFieldInfo__title-block'>Add your additional technologies</p>
					<p className='formFieldInfo__title-desk'>Show what else you're good a</p>
				</div>

				<div className='formField formField--flex'>
					<Singleinput
						labelClassName={`formLabel required ${
							invalidInputs.includes('step2AdditionalTechnologie') ? 'invalid' : ''
						}`}
						labelText='Front-end, UI/UX, DevOps'
						htmlForLabel='step2AdditionalTechnologie'
						inputId='step2AdditionalTechnologie'
						inputName='step2AdditionalTechnologie'
						inputValue={data.step2AdditionalTechnologie}
						inputType={`text`}
					/>

					<Singleinput
						labelClassName={`formLabel required ${
							invalidInputs.includes('step2AdditionalTechnologieExp') ? 'invalid' : ''
						}`}
						labelText='Years of experience'
						htmlForLabel='step2AdditionalTechnologieExp'
						inputId='step2AdditionalTechnologieExp'
						inputName='step2AdditionalTechnologieExp'
						inputValue={data.step2AdditionalTechnologieExp}
						inputType={`number`}
					/>

					{/* <SingleSelect
						invalidCheck={`required ${
							invalidInputs.includes('step2AdditionalTechnologieExp') ? 'invalid' : ''
						}`}
						selectName='step2AdditionalTechnologieExp'
						selectPlaceholder='Years of experience'
						selectOptions={yearsOptions}
						selectValue={additionalTechnologie}
						onSelectChange={handleAdditionalTechnologie}
						isSearchable={false}
					/> */}

					<div className='formMore formField--flex'>
						<button
							className={`formField__btnMore`}
							type='button'
							onClick={addAdditionalSkill}
						></button>
					</div>
				</div>

				{additionalSkills.map((skill, index) => (
					<div className='formField formField--flex' key={index}>
						<Singleinput
							labelClassName='formLabel'
							labelText='Front-end, UI/UX, DevOps'
							htmlForLabel={`additionalTechnologie${index}`}
							inputId={`additionalTechnologie${index}`}
							inputName={`additionalTechnologie${index}`}
							inputValue={data.additionalTechnologie}
							inputType='text'
						/>

						<Singleinput
							labelClassName='formLabel'
							labelText='Years of experience'
							htmlForLabel={`additionalTechnologieExp${index}`}
							inputId={`additionalTechnologieExp${index}`}
							inputName={`additionalTechnologieExp${index}`}
							inputValue={data.additionalTechnologieExp}
							inputType='text'
						/>

						<div className='formMore formField--flex'>
							<button
								className='formField__btnMore formField__btnMore--remove'
								type='button'
								onClick={() => removeAdditionalSkill(index)}
							></button>
						</div>
					</div>
				))}
			</div>
		</>
	);

	return content;
};

export default TechStack;
