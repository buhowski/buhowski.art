import { createContext, useState } from 'react';

const FormContext = createContext({});

export const FormProvider = ({ children, title, data, setData, page, setPage }) => {
	const [invalidInputs, setInvalidInputs] = useState([]);
	const [inputInvalidName, setInputInvalidName] = useState(false);

	const [dropInputFile, setDropInputFile] = useState('Click to upload PDF* File (CV)');
	const [numberOfPeople, setNumberOfPeople] = useState(0);
	const [selectedCountry, setSelectCountry] = useState(0);
	const [selectedLang, setSelectedLang] = useState(0);
	const [seniorityLevel, setSeniorityLevel] = useState(0);
	const [yearsOfExperience, setYearsOfExperience] = useState(0);
	const [selectedSpecialization, setSelectedSpecialization] = useState(0);
	const [coreSkillsTechnology, setCoreSkillsTechnology] = useState([]);
	const [coreSkillsExperience, setCoreSkillsExperience] = useState([]);
	const [additionalTechnology, setAdditionalTechnology] = useState([]);
	const [additionalExperience, setAdditionalExperience] = useState([]);
	const [languages, setLanguages] = useState([]);
	const [languagesLevel, setLanguagesLevel] = useState([]);
	const [chooseServiceState, setChooseServiceState] = useState(0);
	const [yourBudgetState, setYourBudgetState] = useState(0);
	const [preferredMethodContact, setPreferredMethodContact] = useState(0);
	const [preferredLangState, setPreferredLangState] = useState(0);
	
	// For selected options when change
	const handlePreferredLangState = (select, item) => {
		setPreferredLangState(select);

		setData((prevData) => ({
			...prevData,
			[item.name]: select.label,
		}));
	};
	const handleChooseServiceState = (select, item) => {
		setChooseServiceState(select);

		setData((prevData) => ({
			...prevData,
			[item.name]: select.label,
		}));
	};
	const handleYourBudgetState = (select, item) => {
		setYourBudgetState(select);

		setData((prevData) => ({
			...prevData,
			[item.name]: select.label,
		}));
	};
	const handlePreferredMethodContact = (select, item) => {
		setPreferredMethodContact(select);

		setData((prevData) => ({
			...prevData,
			[item.name]: select.label,
		}));
	};
	const handleNumberOfPeople = (select, item) => {
		setNumberOfPeople(select);

		setData((prevData) => ({
			...prevData,
			[item.name]: select.label,
		}));
	};
	const handleChangeCountry = (select, item) => {
		setSelectCountry(select);

		setData((prevData) => ({
			...prevData,
			[item.name]: select.label,
		}));
	};
	const handleChangeSpecialization = (select, item) => {
		setSelectedSpecialization(select);

		setData((prevData) => ({
			...prevData,
			[item.name]: select.label,
		}));
	};
	const handleChangeLanguages = (item, value) => {
		setLanguages(value);
		setData((prevData) => ({
			...prevData,
			[item.name]: value,
		}));
	};
	const handleChangeLanguagesLevel = (item, value) => {
		setLanguagesLevel(value);
		setData((prevData) => ({
			...prevData,
			[item.name]: value,
		}));
	};
	const handleChangeCoreSkillsTechnology = (item, value) => {
		setCoreSkillsTechnology(value);
		setData((prevData) => ({
			...prevData,
			[item.name]: value,
		}));
	};
	const handleChangeCoreSkillsExperience = (item, value) => {
		setCoreSkillsExperience(value);
		setData((prevData) => ({
			...prevData,
			[item.name]: value,
		}));
	};
	const handleChangeAdditionalTechnology = (item, value) => {
		setAdditionalTechnology(value);
		setData((prevData) => ({
			...prevData,
			[item.name]: value,
		}));
	};
	const handleChangeAdditionalExperience = (item, value) => {
		setAdditionalExperience(value);
		setData((prevData) => ({
			...prevData,
			[item.name]: value,
		}));
	};
	const handleSelectedLang = (select, item) => {
		setSelectedLang(select);

		setData((prevData) => ({
			...prevData,
			[item.name]: select.label,
		}));
	};
	const handleSeniorityLevel = (select, item) => {
		setSeniorityLevel(select);

		setData((prevData) => ({
			...prevData,
			[item.name]: select.label,
		}));
	};
	const handleYearsOfExperience = (select, item) => {
		setYearsOfExperience(select);

		setData((prevData) => ({
			...prevData,
			[item.name]: select.label,
		}));
	};

	// Inputs status change
	// this for input type phone
	const handleChangePhone = (e) => {
		setData((prevData) => ({
			...prevData,
			step4addPhone: e,
		}));
	};

	const handleChange = (e) => {
		let type = e.target.type;
		let name = e.target.name;
		let value = type === 'checkbox' ? e.target.checked : e.target.value;

		// console.log(name, value);

		// Validation for inputs text
		if (type === 'text') {
			// regular expression to check what kinds of symbol allows
			const textRegex = /^[a-zA-Z0-9 ]*$/;
			const isValid = textRegex.test(value);

			if (!isValid) {
				setInputInvalidName('Invalid Symbols');
				return;
			} else {
				setInputInvalidName(false);
			}
		}

		setData((prevData) => ({
			...prevData,
			[name]: value,
		}));

		if (type === 'file') {
			// Validate file formats
			const file = e.target.files[0];
			// Validate file size
			const maxSizeInBytes = 2500000; // Bytes ( 2.5 MB )

			if (file.size > maxSizeInBytes) {
				alert('File size is too large. Maximum size allowed is 2.5 MB.');
				return;
			}

			// Check if the selected file is a pdf
			if (file.type !== 'application/pdf') {
				alert('Please select a PDF file.');
				return;
			} else {
				setDropInputFile(file.name);
			}

			setData((prevData) => ({
				...prevData,
				[name]: file,
			}));
		}
	};

	const hideBtn = page === Object.keys(title).length - 1;

	const disableNext = (() => {
		for (let i = 1; i <= Object.keys(title).length; i++) {
			const canStep = Object.keys(data)
				.filter((key) => key.startsWith(`step${i}`))
				.map((key) => data[key])
				.every(Boolean);

			if (page === i - 1 && !canStep) {
				return true;
			}
		}

		return page === Object.keys(title).length - 1;
	})();

	const handleValidation = () => {
		const invalidKeys = [];

		for (let i = 1; i <= Object.keys(title).length; i++) {
			if (page === i - 1) {
				Object.keys(data)
					.filter((key) => key.startsWith(`step${i}`))
					.forEach((key) => {
						if (!data[key]) {
							invalidKeys.push(key);
						}
					});
			}
		}

		setInvalidInputs(invalidKeys);
		return invalidKeys.length === 0;
	};

	return (
		<FormContext.Provider
			value={{
				title,
				page,
				setPage,
				data,
				setData,
				hideBtn,
				disableNext,
				invalidInputs,
				handleValidation,
				inputInvalidName,

				dropInputFile,

				handleChange,
				handleChangePhone,
				numberOfPeople,
				handleNumberOfPeople,
				selectedLang,
				handleSelectedLang,
				selectedCountry,
				handleChangeCountry,

				selectedSpecialization,
				handleChangeSpecialization,
				seniorityLevel,
				handleSeniorityLevel,
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
				languages,
				handleChangeLanguages,
				languagesLevel,
				handleChangeLanguagesLevel,

				chooseServiceState,
				yourBudgetState,
				preferredMethodContact,
				handleChooseServiceState,
				handleYourBudgetState,
				handlePreferredMethodContact,
				preferredLangState,
				handlePreferredLangState,
			}}
		>
			{children}
		</FormContext.Provider>
	);
};

export default FormContext;
