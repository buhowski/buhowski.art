import React, { useState, useEffect, useRef } from 'react';
import { ReactSVG } from 'react-svg';
import PhoneInput from 'react-phone-number-input';

import useFormContext from '../hooks/useFormContext';

import checkedIcon from '../img/checked.svg';
import invalidIcon from '../img/invalid.svg';
import { useClientContext } from '../context/useClientContext';

const Singleinput = ({
	phoneInput,
	htmlForLabel,
	labelClassName,
	inputType,
	inputId,
	inputName,
	inputValue,
	labelText,
	maxLength,
	onChange,
	onBlur
}) => {
	const { handleChange, handleChangePhone } = useFormContext();
	const [isFocused, setIsFocused] = useState('');
	const inputRef = useRef(null);

	const { register } = useClientContext();

	const handleFocus = () => {
		setIsFocused('onInput');
	};

	const handleBlur = (e) => {
		if (e.target.value.length > 0) {
			setIsFocused('onInput checked');
		} else {
			setIsFocused('');
		}
	};

	const handleChangeStatus = (e) => {
		if (e.target.value.length > 0) {
			setIsFocused('onInput');
		} else {
			setIsFocused('');
		}
	};

	useEffect(() => {
		if (inputRef.current.value.length > 0) {
			setIsFocused('onInput checked');
		} else {
			setIsFocused('');
		}
	}, []);

	const content = (
		<label
			htmlFor={htmlForLabel}
			className={`${labelClassName}  ${!phoneInput && isFocused} `}
		>
			{phoneInput ? (
				<PhoneInput
					placeholder='Phone number'
					type={inputType}
					id={inputId}
					name={inputName}
					// value={inputValue}
					value='+380 Phone number'
					onChange={handleChangePhone}
					ref={inputRef}
					defaultCountry='UA'
					international
					limitMaxLength={true}
				/>
			) : (
				<>
					<input
						type={inputType}
						id={inputId}
						name={inputName}
						value={inputValue}
						onChange={(e) => {
							handleChange(e);
							handleChangeStatus(e);
							if(typeof onChange === "function") {onChange(e);}
						}}
						onFocus={handleFocus}
						onBlur={(e) => {
							handleBlur(e);
							if(typeof onBlur === "function") {onBlur(e);}
						}}
						ref={inputRef}
						minLength={1}
						maxLength={250}
						// {...register(inputValue)}
					/>

					<span className='formLabel__name'>{labelText}</span>
				</>
			)}

			<span className='formLabel__check'>
				<ReactSVG src={checkedIcon} className='' wrapper={'span'} />
			</span>
			<span className='formLabel__fail'>
				<ReactSVG src={invalidIcon} className='' wrapper={'span'} />
			</span>
		</label>
	);

	return content;
};

export default Singleinput;
