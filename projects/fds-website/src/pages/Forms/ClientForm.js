import { useState } from 'react';

import ClientSteps from './components/ClientSteps/ClientSteps';
import FormActions from './components/FormActions';
import { FormProvider } from './context/FormContext';
import { useClientContext } from './context/useClientContext';
import useFormContext from './hooks/useFormContext';

import submitImg from './img/bg.png';

import './Forms.scss';

const ClientForm = () => {
	const { handleSubmit, onSubmitHandler, data, setData, submitMessage } =
		useClientContext();
	const [page, setPage] = useState(0);
	const { disableNext, inputInvalidName } = useFormContext();

	const title = {
		0: 'Client Info',
		1: 'what you looking for',
		2: 'book a call',
	};

	const handlePageNum = (e) => {
		// handleValidation();
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
						<button
							type='button'
							className={`formPage__step ${page === 0 && 'active'}`}
							onClick={() => handlePageNum(0)}
						>
							Client Info
						</button>

						<button
							type='button'
							className={`formPage__step ${page === 1 && 'active'}`}
							onClick={() => handlePageNum(1)}
						>
							What you looking for
						</button>

						<button
							type='button'
							className={`formPage__step ${page === 2 && 'active'}`}
							onClick={() => handlePageNum(2)}
						>
							Book a call
						</button>
					</div>

					{/* <FormNavigation /> */}

					<h2 className='formPage__title'>{title[page]}</h2>

					<form
						onSubmit={handleSubmit(onSubmitHandler)}
						// onSubmit={onSubmitHandler}
						className={`actionForm actionFormSmall`}
					>
						{inputInvalidName ? (
							<p className='formLabel__error'>{inputInvalidName}</p>
						) : null}

						<ClientSteps />

						<FormActions />
					</form>
				</div>

				{submitMessage && (
					<div className='submitMessage'>
						<div className='submitMessage__block'>
							<div className='submitMessage__img'>
								<img src={submitImg} alt='' />
							</div>

							<h2 className='submitMessage__title'>
								Thank you for your submission. We'll get back to you as soon as
								possible.
							</h2>
						</div>
					</div>
				)}
			</div>
		</FormProvider>
	);

	return content;
};
export default ClientForm;
