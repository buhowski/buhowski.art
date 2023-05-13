import { useState } from 'react';

import ClientSteps from './components/ClientSteps/ClientSteps';
import FormActions from './components/FormActions';
import { FormProvider } from './context/FormContext';
import { useClientContext } from './context/useClientContext';
import useFormContext from './hooks/useFormContext';
import EndFormModal from './components/EndFormModal';

import './Forms.scss';

const ClientForm = () => {
	const { handleSubmit, onSubmitHandler, data, setData, isModalOpen, isSuccess, popupProps } =
		useClientContext();
	const [page, setPage] = useState(0);
	const { disableNext, inputInvalidName } = useFormContext();

	const title = {
		0: 'Client Info',
		1: 'What you looking for',
		2: 'Let\'s keep in touch with you',
	};

	const handlePageNum = (e) => {
		page >= e && setPage(e);
		!disableNext && setPage(e);
	};

	const content = (
		<FormProvider
			title={title}
			data={data}
			setData={setData}
			page={page}
			setPage={setPage}
		>
			<div className='pageSection formPage'>
				<div className='wrapper'>
					<div className='formPageNav'>
						<p
							className={`formPage__step ${page === 0 && 'active'}`}
						>
							Client Info
						</p>

						<p
							className={`formPage__step ${page === 1 && 'active'}`}
						>
							What you looking for
						</p>

						<p
							className={`formPage__step ${page === 2 && 'active'}`}
						>
							Meet with us
						</p>
					</div>

					<h2 className='formPage__title'>{title[page]}</h2>

					<form
						onSubmit={handleSubmit(onSubmitHandler)}
						className={`actionForm actionFormSmall`}
					>
						{inputInvalidName ? (
							<p className='formLabel__error'>{inputInvalidName}</p>
						) : null}

						<ClientSteps />

						<FormActions />
					</form>
				</div>

				{isModalOpen && (
				<EndFormModal
					isSuccess={isSuccess}
					isOpen={isModalOpen} 
					succeedImage={popupProps.succeedImage} 
					succeedImageAlt={popupProps.succeedImageAlt} 
					succeedLabel={popupProps.succeedLabel}
					succeedButtonLabel={popupProps.succeedButtonLabel}
					onClickSucceedButton={popupProps.onClickSucceedButton}
					failImage={popupProps.failImage} 
					failImageAlt={popupProps.failImageAlt} 
					failLabel={popupProps.failLabel}
					failButtonLabel={popupProps.failButtonLabel}
					onClickFailButton={popupProps.onClickFailButton}
				/>)}
			</div>
		</FormProvider>
	);

	return content;
};
export default ClientForm;
