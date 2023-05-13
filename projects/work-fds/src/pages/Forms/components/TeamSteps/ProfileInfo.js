import { useState, useEffect } from 'react';

import useFormContext from '../../hooks/useFormContext';
import Singleinput from '../SingleInput';
import SingleSelect from '../SingleSelect';
import SingleTextarea from '../SingleTextarea';
import { languageLevelOptions } from '../dataSelection';
import { isAllOf } from '@reduxjs/toolkit';

// import { optionsCountry, optionsLang } from '../dataSelection';

const ProfileInfo = ({ devForm }) => {
	const {
		data,
		selectedCountry,
		handleChangeCountry,
		selectedLang,
		handleSelectedLang,
		languages,
		handleChangeLanguages,
		languagesLevel,
		handleChangeLanguagesLevel,
		invalidInputs,
	} = useFormContext();

	const [countryOptions, setCountryOptions] = useState([]);
	const [languagesOptions, setLanguagesOptions] = useState([]);
	
	useEffect(() => {
		fetch('https://restcountries.com/v2/all')
			.then((response) => response.json())
			.then((data) => {
				const options = data.filter(country => !country.name.includes("Å")).map((country) => ({
					value: country.alpha2Code,
					label: country.name,
				}));
				setCountryOptions(options);
			})
			.catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		fetch('https://restcountries.com/v2/all?fields=languages')
			.then((response) => response.json())
			.then((data) => {
				const languages = Array.from(
					new Set(data.flatMap((country) => country.languages.map((lang) => lang.name)))
				).filter((lang) => !lang.includes("å") && !lang.includes("ā"))
					.sort()
					.map((name) => ({ value: name, label: name }));
				setLanguagesOptions(languages);
			})
			.catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		if(languages.length === 0){
			addFormLine();
		}
	}, [])

	const addFormLine = () => {
		const newStateLanguages = [...languages, ''];
		const newStateLanguagesLevel = [...languagesLevel, ''];
		handleChangeLanguages({name:'step1Languages'}, newStateLanguages)
		handleChangeLanguagesLevel({name:'step1LanguagesLevel'}, newStateLanguagesLevel)
	};

	const removeFormLine = (index) => {
		let newStateLanguages = [...languages];
		let newStateLanguagesLevel = [...languagesLevel];
		newStateLanguages.splice(index, 1);
		newStateLanguagesLevel.splice(index, 1);
		handleChangeLanguages({name:'step1Languages'}, newStateLanguages)
		handleChangeLanguagesLevel({name:'step1LanguagesLevel'}, newStateLanguagesLevel)
	};

	const handleChangeLangs = (select, item, index) => {
		let newStateLanguages = [...languages];
		newStateLanguages[index] = select;
		handleChangeLanguages(item, newStateLanguages);
	};

	const handleChangeLangsLevel = (select, item, index) => {
		let newStateLanguagesLevel = [...languagesLevel];
		newStateLanguagesLevel[index] = select;
		handleChangeLanguagesLevel(item, newStateLanguagesLevel);
	};

	const content = (
		<>
			<div className='formField formField--flex'>
				{devForm ? (
					<>
						<Singleinput
							labelClassName={`formLabel required ${
								invalidInputs.includes('step1FirstName') ? 'invalid' : ''
							}`}
							labelText='First name'
							htmlForLabel='step1FirstName'
							inputId='step1FirstName'
							inputName='step1FirstName'
							inputValue={data.step1FirstName}
							inputType={`text`}
						/>

						<Singleinput
							labelClassName={`formLabel required ${
								invalidInputs.includes('step1NumberOfPeople') ? 'invalid' : ''
							}`}
							labelText='Last name'
							htmlForLabel='step1NumberOfPeople'
							inputId='step1NumberOfPeople'
							inputName='step1NumberOfPeople'
							inputValue={data.step1NumberOfPeople}
							inputType={`text`}
						/>
					</>
				) : (
					<>
						<Singleinput
							labelClassName={`formLabel required ${
								invalidInputs.includes('step1FirstName') ? 'invalid' : ''
							}`}
							labelText='Team name'
							htmlForLabel='step1FirstName'
							inputId='step1FirstName'
							inputName='step1FirstName'
							inputValue={data.step1FirstName}
							inputType={`text`}
						/>

						<Singleinput
							labelClassName={`formLabel required ${
								invalidInputs.includes('step1NumberOfPeople') ? 'invalid' : ''
							}`}
							labelText='Number of people'
							htmlForLabel='step1NumberOfPeople'
							inputId='step1NumberOfPeople'
							inputName='step1NumberOfPeople'
							inputValue={data.step1NumberOfPeople}
							inputType={`number`}
							maxLength={true}
						/>
					</>
				)}
			</div>

			<div className='formField formField--flex formField--selection'>
				<SingleSelect
					invalidCheck={`required ${
						invalidInputs.includes('step1CountryOfResidence') ? 'invalid' : ''
					}`}
					selectName='step1CountryOfResidence'
					selectPlaceholder='Country of residence'
					selectOptions={countryOptions}
					selectValue={selectedCountry}
					onSelectChange={handleChangeCountry}
				/>

				<SingleSelect
					invalidCheck={`required ${
						invalidInputs.includes('step1NativeLanguage') ? 'invalid' : ''
					}`}
					selectName='step1NativeLanguage'
					selectPlaceholder='Native language'
					selectOptions={languagesOptions}
					selectValue={selectedLang}
					onSelectChange={handleSelectedLang}
				/>
			</div>

			{languages.map((_, index) => (
					<div className='formField formField--flex formField--selection' key={index}>
						<SingleSelect
							selectName='step1Languages'
							selectPlaceholder='Other language'
							selectOptions={languagesOptions}
							selectValue={data.step1Languages[index]}
							onSelectChange={(select, item) => handleChangeLangs(select, item, index)}
							isSearchable={false}
						/>

						<SingleSelect
							selectName='step1LanguagesLevel'
							selectPlaceholder='Level'
							selectOptions={languageLevelOptions}
							selectValue={data.step1LanguagesLevel[index]}
							onSelectChange={(select, item) => handleChangeLangsLevel(select, item, index)}
							isSearchable={false}
						/>

						<div className='formMore formField--flex'>
							{index === 0 ? (
									<button
									className={`formField__btnMore`}
									type='button'
									onClick={addFormLine}
									></button>
								) : (
									<button
									className='formField__btnMore formField__btnMore--remove'
									type='button'
									onClick={() => removeFormLine(index)}
									></button>
								)}
						</div>
					</div>
				))}

			<div className='formField formField--mobile'>
				{!devForm && (
					<SingleTextarea
						labelClassName={`required ${
							invalidInputs.includes('step1portfolioLinks') ? 'invalid' : ''
						}`}
						textareaName='step1portfolioLinks'
						textareaId='step1portfolioLinks'
						textareaValue={data.step1portfolioLinks}
						textareaPlaceholder='Portfolio links'
					/>
				)}
			</div>
		</>
	);

	return content;
};

export default ProfileInfo;
