import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';

// const schema = yup.object().shape({
// 	step1ClientName: yup.string().required(),
// 	step1ClientEmail: yup.string().email().required(),
// 	step1clientCompanyName: yup.string().required(),
// 	// choose_service: yup.string().required(),
// 	// client_budget: yup.number().required(),
// 	// project_details: yup.string().required(),
// 	// call_language: yup.string().required(),
// 	// method_contact: yup.string().required(),
// });

export const useClientContext = () => {
	const [submitMessage, setSubmitMessage] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		// resolver: yupResolver(schema),
	});

	let [data, setData] = useState({
		step1ClientName: '',
		step1ClientEmail: '',
		step1clientCompanyName: '',

		step2chooseService: '',
		step2yourBudget: '',
		step2tellUsMore: '',

		step3preferredLang: '',
		step3preferredMethod: '',
	});

	let formData = {
		client_name: data.step1ClientName,
		client_email: data.step1ClientEmail,
		client_company: data.step1clientCompanyName,
		choose_service: data.step2chooseService,
		client_budget: data.step2yourBudget,
		project_details: data.step2tellUsMore,
		call_language: data.step3preferredLang,
		method_contact: data.step3preferredMethod,
	};

	const onSubmitHandler = async (e) => {
		// e.preventDefault();

		// formData = {
		// 	client_name: 'string',
		// 	client_email: 'user@example.com',
		// 	client_company: 'string',
		// 	choose_service: 'string',
		// 	client_budget: 0,
		// 	project_details: 'string',
		// 	call_language: 'string',
		// 	method_contact: 'string',
		// };

		// console.log(formData);
		// console.log(JSON.stringify(formData));

		let config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: 'https://newdevapi.focusdigitalsyndicate.com/api/v1/lead_form/client_lead_form/',
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

				setSubmitMessage(true);

				setTimeout(() => {
					setSubmitMessage(false);
				}, 2000);
			})
			.catch((error) => {
				console.log(error);
			});

		reset();
	};

	return {
		register,
		handleSubmit,
		onSubmitHandler,
		errors,
		data,
		setData,
		formData,
		submitMessage,
	};
};
