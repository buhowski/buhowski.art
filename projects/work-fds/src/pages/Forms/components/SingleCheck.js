import useFormContext from '../hooks/useFormContext';

const SingleCheck = ({
	htmlForLabel,
	inputId,
	inputValue,
	radioName,
	radioSubname,
}) => {
	const { handleChange, invalidInputs } = useFormContext();

	const content = (
		<label
			htmlFor={htmlForLabel}
			className={`formLabel formRadio ${
				invalidInputs.includes('step3kindOfProject') ? 'invalid' : ''
			}`}
		>
			<input
				type='radio'
				name='step3kindOfProject'
				id={inputId}
				value={inputValue}
				onChange={handleChange}
			/>

			<span className='formRadio__name'>{radioName}</span>
			<span className='formRadio__subname'>{radioSubname}</span>
		</label>
	);
	return content;
};

export default SingleCheck;
