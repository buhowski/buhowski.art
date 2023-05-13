import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import submitSucceedImg from '../img/bg.png';

export const useTeamContext = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({});

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSuccess, setIsSuccess] = useState(true);

	const goBackHome = () => {
		window.location.href = '/';
	}

	const popupProps = {
		succeedImage: submitSucceedImg,
		succeedImageAlt: 'succeed image',
		succeedLabel: "Nice doing business with you. We’ll get back to you soon.",
		succeedButtonLabel: "Back to home",
		onClickSucceedButton: goBackHome,
		failImage: submitSucceedImg,
		failImageAlt: "fail submit image",
		failLabel: "Ups... Something went wrong. Please try again later.",
		failButtonLabel: "Back to home",
		onClickFailButton: goBackHome,
	}

	let [data, setData] = useState({
		step1FirstName: '',
		step1NumberOfPeople: '',
		step1CountryOfResidence: '',
		step1NativeLanguage: '',
		step1portfolioLinks: '',
		step1Languages: [],
		step1LanguagesLevel: [],

		step2MainSpecialization: '',
		step2SeniorityLevel: '',
		step2YearsOfExperience: '',

		step2CoreTechnologie: [],
		step2CoreTechnologieExp: [],
		step2AdditionalTechnologie: [],
		step2AdditionalTechnologieExp: [],

		step3kindOfProject: '',
		step3desiredHourlyRate: '',

		step4addEmail: '',
		step4addPhone: '',
		step4addTelegram: '',
	});

	let formData = {
		country_residence: data.step1CountryOfResidence,
		native_language: data.step1NativeLanguage,
		main_specialisation: data.step2MainSpecialization,
		seniority_level: data.step2SeniorityLevel,
		years_experience: data.step2YearsOfExperience,
		core_technologies: "",
		additional_technologies: "",
		kind_project: data.step3kindOfProject,
		other_languages: "",
		hourly_rate: data.step3desiredHourlyRate,
		email: data.step4addEmail,
		phone_number: data.step4addPhone,
		telegram_username: data.step4addTelegram,
		team_name: data.step1FirstName,
		number_people: data.step1NumberOfPeople,
		portfolio_links: data.step1portfolioLinks,
	};

	const buildObjectForJsonFormat = (data, keysVar, valuesVar) => {
		let obj = {};
		const keys = data[keysVar];
		const values = data[valuesVar];
		for (let i = 0; i < keys.length; i++) {
			obj[keys[i].value] = values[i].value;
		}
		return obj;
	}

	const buildObjectFromStringArrayForJsonFormat = (data, keysVar, valuesVar) => {
		let obj = {};
		const keys = data[keysVar];
		const values = data[valuesVar];
		for (let i = 0; i < keys.length; i++) {
			obj[keys[i]] = values[i];
		}
		return obj;
	}

	const onSubmitHandler = async (e) => {
		let languagesJSON = JSON.stringify(buildObjectForJsonFormat(data, 'step1Languages', 'step1LanguagesLevel'));
		let coreTechnologiesJSON = JSON.stringify(buildObjectFromStringArrayForJsonFormat(data, 'step2CoreTechnologie', 'step2CoreTechnologieExp'));
		let additionalTechnologiesJSON = JSON.stringify(buildObjectFromStringArrayForJsonFormat(data, 'step2AdditionalTechnologie', 'step2AdditionalTechnologieExp'));

		formData.other_languages = languagesJSON;
		formData.core_technologies = coreTechnologiesJSON;
		formData.additional_technologies = additionalTechnologiesJSON;

		let config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: 'https://newdevapi.focusdigitalsyndicate.com/api/v1/lead_form/team_lead_form/',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'multipart/form-data',
			},
			data: formData,
		};

		axios
			.request(config)
			.then((response) => {
				setIsSuccess(true);
				setIsModalOpen(true);
			})
			.catch((error) => {
				setIsSuccess(false);
				setIsModalOpen(true);
				console.log(error);
			});
	};

	return {
		register,
		handleSubmit,
		onSubmitHandler,
		errors,
		reset,
		data,
		setData,
		formData,
		isModalOpen,
		isSuccess,
		popupProps
	};
};
