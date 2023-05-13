import { useState, useEffect } from 'react';
import useFormContext from '../../hooks/useFormContext';
import Singleinput from '../SingleInput';
import SingleSelect from '../SingleSelect';
import { seniorityLevelOptions, specializationOptions } from '../dataSelection';

const TechStack = () => {
	const {
		data,
		invalidInputs,
		seniorityLevel,
		handleSeniorityLevel,
		selectedSpecialization,
		handleChangeSpecialization,
		yearsOfExperience,
		handleYearsOfExperience,
		coreSkillsTechnology,
		handleChangeCoreSkillsTechnology,
		coreSkillsExperience,
		handleChangeCoreSkillsExperience,
		additionalTechnology,
		handleChangeAdditionalTechnology,
		additionalExperience,
		handleChangeAdditionalExperience,
		// isSearchable,
	} = useFormContext();
	

	useEffect(() => {
		if(coreSkillsTechnology.length === 0){
			addFormLineCoreSkills();
		}
		if(additionalTechnology.length === 0){
			addFormLineAdditionalSkills();
		}
	}, [])

	const addFormLineCoreSkills = () => {
		handleChangeCoreSkillsTechnology({name: 'step2CoreTechnologie'}, [...coreSkillsTechnology, '']);
		handleChangeCoreSkillsExperience({name: 'step2CoreTechnologieExp'}, [...coreSkillsExperience, '']);
	};
	const addFormLineAdditionalSkills = () => {
		handleChangeAdditionalTechnology({name: 'step2AdditionalTechnologie'}, [...additionalTechnology, '']);
		handleChangeAdditionalExperience({name: 'step2AdditionalTechnologieExp'}, [...additionalExperience, '']);
	};

	const removeFormLineCoreSkills = (index) => {
		let newStateCoreSkillsTechnology = [...coreSkillsTechnology];
		newStateCoreSkillsTechnology.splice(index, 1);
		let newStateCoreSkillsExperience = [...coreSkillsExperience];
		newStateCoreSkillsExperience.splice(index, 1);
		handleChangeAdditionalTechnology({name: 'step2CoreTechnologie'}, newStateCoreSkillsTechnology);
		handleChangeAdditionalTechnology({name: 'step2CoreTechnologieExp'}, newStateCoreSkillsExperience);
	};

	const removeFormLineAdditionalSkills = (index) => {
		let newStateAdditionalTechnology = [...additionalTechnology];
		newStateAdditionalTechnology.splice(index, 1);
		let newStateAdditionalExperience = [...additionalExperience];
		newStateAdditionalExperience.splice(index, 1);
		handleChangeAdditionalTechnology({name: 'step2AdditionalTechnologie'}, newStateAdditionalTechnology);
		handleChangeAdditionalTechnology({name: 'step2AdditionalTechnologieExp'}, newStateAdditionalExperience);
	};
	
	const handleBlurCoreSkillsTechnology = (e, index) => {
		let newStateCoreSkillsTechnology = [...coreSkillsTechnology];
		newStateCoreSkillsTechnology[index] = e.target.value;
		handleChangeCoreSkillsTechnology({name: 'step2CoreTechnologie'}, newStateCoreSkillsTechnology);
	};

	const handleBlurCoreSkillsExperience = (e, index) => {
		let newStateCoreSkillsExperience = [...coreSkillsExperience];
		newStateCoreSkillsExperience[index] = e.target.value;
		handleChangeCoreSkillsExperience({name: 'step2CoreTechnologieExp'}, newStateCoreSkillsExperience);
	};

	const handleBlurAdditionalTechnology = (e, index) => {
		let newStateAdditionalTechnology = [...additionalTechnology];
		newStateAdditionalTechnology[index] = e.target.value;
		handleChangeAdditionalTechnology({name: 'step2AdditionalTechnologie'}, newStateAdditionalTechnology);
	};

	const handleBlurAdditionalExperience = (e, index) => {
		let newStateAdditionalExperience = [...additionalExperience];
		newStateAdditionalExperience[index] = e.target.value;
		handleChangeAdditionalExperience({name: 'step2AdditionalTechnologieExp'}, newStateAdditionalExperience);
	};

	console.log(data)


	const content = (
		<>
			<div className='formField formField--flex formField--selection'>
				<SingleSelect
					invalidCheck={`required ${
						invalidInputs.includes('step2MainSpecialization') ? 'invalid' : ''
					}`}
					selectName='step2MainSpecialization'
					selectPlaceholder='Main specialisation'
					selectOptions={specializationOptions}
					selectValue={selectedSpecialization}
					onSelectChange={handleChangeSpecialization}
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
			</div>

			<div className='formFieldInfo'>
				<div className='formFieldInfo__title'>
					<p className='formFieldInfo__title-block'>Add your core technologies</p>
					<p className='formFieldInfo__title-desk'>
						Add no less than 2 technologies you're confident in
					</p>
				</div>

				{coreSkillsTechnology.map((skill, index) => (
					<div className='formField formField--flex' key={index}>
						<Singleinput
							labelClassName='formLabel'
							labelText='Front-end, UI/UX, DevOps'
							htmlForLabel={`coreTechnologie${index}`}
							inputId={`coreTechnologie${index}`}
							inputName={`coreTechnologie${index}`}
							inputValue={data.step2CoreTechnologie[index]}
							inputType='text'
							onChange={(event) => handleBlurCoreSkillsTechnology(event, index)}
						/>

						<Singleinput
							labelClassName='formLabel'
							labelText='Years of experience'
							htmlForLabel={`coreTechnologieExp${index}`}
							inputId={`coreTechnologieExp${index}`}
							inputName={`coreTechnologieExp${index}`}
							inputValue={data.step2CoreTechnologieExp[index]}
							inputType='number'
							onChange={(event) => handleBlurCoreSkillsExperience(event, index)}
						/>

						<div className='formMore formField--flex'>
							{index === 0 ? (
									<button
									className={`formField__btnMore`}
									type='button'
									onClick={addFormLineCoreSkills}
									></button>
								) : (
									<button
									className='formField__btnMore formField__btnMore--remove'
									type='button'
									onClick={() => removeFormLineCoreSkills(index)}
									></button>
								)}
						</div>
					</div>
				))}
			</div>

			<div className='formFieldInfo'>
				<div className='formFieldInfo__title'>
					<p className='formFieldInfo__title-block'>Add your additional technologies</p>
					<p className='formFieldInfo__title-desk'>Show what else you're good at</p>
				</div>

				{additionalTechnology.map((skill, index) => (
					<div className='formField formField--flex' key={index}>
						<Singleinput
							labelClassName='formLabel'
							labelText='Front-end, UI/UX, DevOps'
							htmlForLabel={`additionalTechnologie${index}`}
							inputId={`additionalTechnologie${index}`}
							inputName={`additionalTechnologie${index}`}
							inputValue={data.step2AdditionalTechnologie[index]}
							inputType='text'
							onChange={(event) => handleBlurAdditionalTechnology(event, index)}
						/>

						<Singleinput
							labelClassName='formLabel'
							labelText='Years of experience'
							htmlForLabel={`additionalTechnologieExp${index}`}
							inputId={`additionalTechnologieExp${index}`}
							inputName={`additionalTechnologieExp${index}`}
							inputValue={data.step2AdditionalTechnologieExp[index]}
							inputType='number'
							onChange={(event) => handleBlurAdditionalExperience(event, index)}
						/>

						<div className='formMore formField--flex'>
							{index === 0 ? (
									<button
									className={`formField__btnMore`}
									type='button'
									onClick={addFormLineAdditionalSkills}
									></button>
								) : (
									<button
									className='formField__btnMore formField__btnMore--remove'
									type='button'
									onClick={() => removeFormLineAdditionalSkills(index)}
									></button>
								)}
						</div>
					</div>
				))}
			</div>
		</>
	);

	return content;
};

export default TechStack;
