import { useState, useEffect } from 'react';

import useFormContext from '../../hooks/useFormContext';
import Singleinput from '../SingleInput';
import SingleSelect from '../SingleSelect';
import SingleTextarea from '../SingleTextarea';
import SingleDropFile from '../SingleDropFile';

// import { optionsCountry, optionsLang } from '../dataSelection';

const ProfileInfo = ({ devForm }) => {
	const {
		data,
		selectedCountry,
		handleChangeCountry,
		selectedLang,
		handleSelectedLang,
		invalidInputs,
	} = useFormContext();

	const [countryOptions, setCountryOptions] = useState([]);
	const [languagesOptions, setLanguagesOptions] = useState([]);

	useEffect(() => {
		fetch('https://restcountries.com/v2/all')
			.then((response) => response.json())
			.then((data) => {
				const options = data.map((country) => ({
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
				)
					.sort()
					.map((name) => ({ value: name, label: name }));
				setLanguagesOptions(languages);
			})
			.catch((error) => console.log(error));
	}, []);

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

			<div className='formField formField--mobile'>
				{devForm ? (
					<SingleDropFile
						labelClassName={`formLabel required ${
							invalidInputs.includes('step1dropFileCV') ? 'invalid' : ''
						}`}
						dropInput={`step1dropFileCV`}
						dropInputId={'step1dropFileCV'}
						htmlForLabel='step1dropFileCV'
					/>
				) : (
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
