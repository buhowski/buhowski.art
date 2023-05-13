import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import submitSucceedImg from '../img/bg.png';

export const useClientContext = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSuccess, setIsSuccess] = useState(true);

	const goBackHome = () => {
		window.location.href = '/';
	}

	const isEmailAlreadyUsed = (e) => {
		console.log(e);
		if(!e.target?.value) {
			e.target?.setCustomValidity('Email is required');
			e.target?.classList.add('invalid');
			return;
		}
		let param = "email=" + e.target?.value;
		let config = {
			method: 'get',
			maxBodyLength: Infinity,
			url: `https://newdevapi.focusdigitalsyndicate.com/api/v1/lead_form/check_email/?${param}`,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'multipart/form-data',
			}
		};
		axios
			.request(config)
			.then((res) => {
				console.log(res.data?.lead_form_client_exists);
				if(res.data?.lead_form_client_exists){
					e.target?.setCustomValidity('Email already used');
					e.target?.classList.add('invalid');
				}else{
					e.target?.setCustomValidity('');
					e.target?.classList.remove('invalid');
				}

			})
			.catch(() => {
				e.target?.setCustomValidity('');
				e.target?.classList.remove('invalid');
			});
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

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({});

	let [data, setData] = useState({
		step1ClientName: '',
		step1clientCompanyName: '',

		step2chooseService: '',
		step2yourBudget: '',
		step2tellUsMore: '',

		step3preferredLang: '',
		step3ClientEmail: '',
		//TODO : wrong name to change when refact form
		step4addPhone: '',
		step3ClientTelegram: '',
		step3preferredMethod: '',
	});

	let formData = {
		client_name: data.step1ClientName,
		client_email: data.step3ClientEmail,
		phone_number: data.step4addPhone,
		telegram_username: data.step3ClientTelegram,
		client_company: data.step1clientCompanyName,
		choose_service: data.step2chooseService,
		client_budget: data.step2yourBudget,
		project_details: data.step2tellUsMore,
		call_language: data.step3preferredLang,
		method_contact: data.step3preferredMethod,
	};

	const onSubmitHandler = async (e) => {

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
				setIsSuccess(true);
				setIsModalOpen(true);
			})
			.catch((error) => {
				setIsSuccess(false);
				setIsModalOpen(true);
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
		isModalOpen,
		isSuccess,
		popupProps,
		isEmailAlreadyUsed
	};
};
