import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';

// const schema = yup.object().shape({
// 	client_name: yup.string().required(),
// 	client_email: yup.string().email().required(),
// 	client_company: yup.string().required(),
// 	choose_service: yup.string().required(),
// 	client_budget: yup.number().required(),
// 	project_details: yup.string().required(),
// 	call_language: yup.string().required(),
// 	method_contact: yup.string().required(),
// });

export const useTeamContext = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		// resolver: yupResolver(schema),
	});

	let [data, setData] = useState({
		step1FirstName: '',
		step1NumberOfPeople: '',
		step1CountryOfResidence: '',
		step1NativeLanguage: '',
		step1portfolioLinks: '',

		step2MainSpecialization: '',
		step2SeniorityLevel: '',
		step2YearsOfExperience: '',

		step2CoreTechnologie: '',
		step2CoreTechnologieExp: '',
		coreTechnologie0: '',
		coreTechnologieExp0: '',

		step2AdditionalTechnologie: '',
		step2AdditionalTechnologieExp: '',
		additionalTechnologie0: '',
		additionalTechnologieExp0: '',

		step3kindOfProject: '',

		step3EnglishLevelAsk: '',
		step3EnglishLevelAnswear: '',
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
		core_technologies: JSON.stringify({
			[data.step2CoreTechnologie]: data.step2CoreTechnologieExp,
		}),
		additional_technologies: JSON.stringify([
			{ [data.step2AdditionalTechnologie]: data.step2AdditionalTechnologieExp },
		]),
		kind_project: data.step3kindOfProject,
		level_english: data.step3EnglishLevelAsk,
		hourly_rate: data.step3desiredHourlyRate,
		email: data.step4addEmail,
		phone_number: data.step4addPhone,
		telegram_username: data.step4addTelegram,
		team_name: data.step1FirstName,
		number_people: data.step1NumberOfPeople,
		portfolio_links: data.step1portfolioLinks,
	};

	const onSubmitHandler = async (e) => {
		// e.preventDefault();

		// formData = {
		// 	country_residence: 'string',
		// 	native_language: 'string',
		// 	main_specialisation: 'string',
		// 	seniority_level: 'string',
		// 	years_experience: 2147483647,
		// 	core_technologies: JSON.stringify({ x: 5, y: 6 }),
		// 	additional_technologies: JSON.stringify({ x: 5, y: 6 }),
		// 	kind_project: 'string',
		// 	level_english: 'string',
		// 	hourly_rate: 2147483647,
		// 	email: 'user@example.com',
		// 	phone_number: 380993333333,
		// 	telegram_username: 'string',
		// 	team_name: 'string',
		// 	number_people: 2147483647,
		// 	portfolio_links: 'string',
		// };

		console.log(formData);
		// console.log(JSON.stringify(formData));

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
				console.log(response.data);
			})
			.catch((error) => {
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
	};
};
