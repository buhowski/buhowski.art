import { createContext, useState } from 'react';

const FormContext = createContext({});

export const FormProvider = ({ children, title, data, setData, page, setPage }) => {
	const [invalidInputs, setInvalidInputs] = useState([]);
	const [inputInvalidName, setInputInvalidName] = useState(false);

	const [englishLevelOff, setEnglishLevelOff] = useState('disabled');
	const [dropInputFile, setDropInputFile] = useState('Click to upload PDF* File (CV)');
	const [numberOfPeople, setNumberOfPeople] = useState(0);
	const [selectedCountry, setSelectCountry] = useState(0);
	const [selectedLang, setSelectedLang] = useState(0);
	const [seniorityLevel, setSeniorityLevel] = useState(0);
	const [yearsOfExperience, setYearsOfExperience] = useState(0);
	const [coreTechnologieExp, setCoreTechnologieExp] = useState(0);
	const [additionalTechnologie, setAdditionalTechnologie] = useState(0);
	const [englishLevelAsk, setEnglishLevelAsk] = useState(0);
	const [englishLevelAnswear, setEnglishLevelAnswear] = useState(0);
	const [chooseServiceState, setChooseServiceState] = useState(0);
	const [yourBudgetState, setYourBudgetState] = useState(0);
	const [preferredMethodContact, setPreferredMethodContact] = useState(0);
	const [preferredLangState, setPreferredLangState] = useState(0);

	// for validation next btn check
	// const handleSelectChange = (select, item) => {
	// 	switch (item.name) {
	// 		case 'numberOfPeople':
	// 			setNumberOfPeople(select);
	// 			break;
	// 		case 'selectedCountry':
	// 			setSelectCountry(select);
	// 			break;
	// 		case 'selectedLang':
	// 			setSelectedLang(select);
	// 			break;
	// 		case 'seniorityLevel':
	// 			setSeniorityLevel(select);
	// 			break;
	// 		case 'yearsOfExperience':
	// 			setYearsOfExperience(select);
	// 			break;
	// 		case 'coreTechnologieExp':
	// 			setCoreTechnologieExp(select);
	// 			break;
	// 		case 'additionalTechnologie':
	// 			setAdditionalTechnologie(select);
	// 			break;
	// 		case 'englishLevelAsk':
	// 			setEnglishLevelAsk(select);
	// 			if (select.value === 'No') {
	// 				data.step3EnglishLevelAnswear = 'no';
	// 				setEnglishLevelAnswear('');
	// 				setEnglishLevelOff('disabled');
	// 			} else {
	// 				data.step3EnglishLevelAnswear = '';
	// 				setEnglishLevelOff('');
	// 			}
	// 			break;
	// 		case 'englishLevelAnswear':
	// 			setEnglishLevelAnswear(select);
	// 			break;
	// 		default:
	// 			break;
	// 	}

	// 	setData((prevData) => ({
	// 		...prevData,
	// 		[item.name]: select.label,
	// 	}));
	// };

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
	const handleAdditionalTechnologie = (select, item) => {
		setAdditionalTechnologie(select);

		setData((prevData) => ({
			...prevData,
			[item.name]: select.label,
		}));
	};
	const handleEnglishLevelAnswear = (select, item) => {
		setEnglishLevelAnswear(select);

		setData((prevData) => ({
			...prevData,
			[item.name]: select.label,
		}));
	};
	const handleEnglishLevelAsk = (select, item) => {
		setEnglishLevelAsk(select);

		if (select.value === 'No') {
			data.step3EnglishLevelAnswear = 'no';
			setEnglishLevelAnswear('');
			setEnglishLevelOff('disabled');
		} else {
			data.step3EnglishLevelAnswear = '';
			setEnglishLevelOff('');
		}

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
	const handleCoreTechnologieExp = (select, item) => {
		setCoreTechnologieExp(select);

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

			// console.log(file);
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

				seniorityLevel,
				handleSeniorityLevel,
				yearsOfExperience,
				handleYearsOfExperience,
				coreTechnologieExp,
				handleCoreTechnologieExp,
				additionalTechnologie,
				handleAdditionalTechnologie,
				englishLevelAsk,
				handleEnglishLevelAsk,
				englishLevelAnswear,
				handleEnglishLevelAnswear,
				englishLevelOff,

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
