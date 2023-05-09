import React, { useEffect, useRef, useState } from 'react';
import useFormContext from '../hooks/useFormContext';

const SingleDropFile = ({ dropInput, dropInputId, htmlForLabel, labelClassName }) => {
	const { handleChange, dropInputFile } = useFormContext();

	const content = (
		<label htmlFor={htmlForLabel} className={`${labelClassName} dropFileLabel`}>
			<input
				type='file'
				accept='application/pdf'
				name={dropInput}
				id={dropInputId}
				className='dropFileInput'
				onChange={handleChange}
			/>

			<span className='formLabel__name'>{dropInputFile}</span>
		</label>
	);

	return content;
};

export default SingleDropFile;
