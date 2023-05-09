import React from 'react';
import Select from 'react-select';

import dropIcon from '../img/select-down.svg';
import { useClientContext } from '../context/useClientContext';
import { customSelectStyles } from './SelectStyles';

const SingleSelect = ({
	selectOptions,
	selectPlaceholder,
	onSelectChange,
	selectValue,
	selectName,
	invalidCheck,
	isSearchable,
}) => {
	const { register } = useClientContext();

	return (
		<Select
			name={selectName}
			value={selectValue}
			options={selectOptions}
			placeholder={selectPlaceholder}
			styles={customSelectStyles}
			children={dropIcon}
			className={`formSelect ${invalidCheck}`}
			classNamePrefix='formSelect'
			isSearchable={isSearchable}
			onChange={onSelectChange}
			// {...register(selectName)}
		/>
	);
};

export default SingleSelect;
