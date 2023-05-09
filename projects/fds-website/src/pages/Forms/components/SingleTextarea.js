import React from 'react';
import useFormContext from '../hooks/useFormContext';
import { useClientContext } from '../context/useClientContext';

const SingleTextarea = ({
	textareaName,
	textareaId,
	textareaPlaceholder,
	textareaValue,
	labelClassName,
}) => {
	const { handleChange } = useFormContext();
	const { register } = useClientContext();

	const content = (
		<textarea
			name={textareaName}
			id={textareaId}
			value={textareaValue}
			placeholder={textareaPlaceholder}
			className={`${labelClassName} formField__textarea `}
			onChange={(e) => handleChange(e)}
			// {...register(textareaName)}
		></textarea>
	);

	return content;
};

export default SingleTextarea;
