import useFormContext from '../hooks/useFormContext';

import '../Forms.scss';

const FormActions = () => {
	const { page, setPage, hideBtn, disableNext, handleValidation } = useFormContext();

	const handlePrev = () => {
		setPage((prev) => (page !== 0 ? prev - 1 : 0));
	};

	const handleNext = () => {
		handleValidation();

		if (!disableNext) {
			setPage((prev) => prev + 1);
		}
		// setPage((prev) => prev + 1);

		// console.log(disableNext);
	};

	const content = (
		<div className='formActions'>
			<button
				className={`mainBtn mainBtn--back ${page === 0 ? 'remove-button' : ''}`}
				type='button'
				onClick={handlePrev}
			>
				Back
			</button>

			<button
				className={`mainBtn mainBtn--continue ${hideBtn ? 'remove-button' : ''}`}
				type='button'
				onClick={handleNext}
				disabled={hideBtn}
			>
				Continue
			</button>

			<button
				type='submit'
				className={`mainBtn mainBtn--continue ${hideBtn ? '' : 'remove-button'}`}
			>
				Register
			</button>
		</div>
	);

	return content;
};
export default FormActions;
