export const customSelectStyles = {
	container: (baseStyles, state) => ({
		// ...baseStyles,
		backgroundColor: 'rgba(22, 22, 22, 0.7)',
		// borderColor: state.isSelected ? 'rgba(255, 255, 255, 0.2)' : '',
		borderRadius: '16px',
		width: '100%',
		// height: 63,
		// '&:hover': {
		// 	borderColor: state.isFocused ? 'blue' : 'grey',
		// },
	}),
	control: (state) => ({
		// textAlign: 'center',
		padding: '0 20px',
		// borderColor: state.isFocused ? 'red' : 'green',
	}),
	menu: (baseStyles, state) => ({
		// ...baseStyles,
		// backgroundColor: '#101011',
	}),
	menuList: (baseStyles) => ({
		// ...baseStyles,
	}),
	option: (baseStyles, state) => ({
		// ...baseStyles,
	}),
	singleValue: (baseStyles, state) => ({
		...baseStyles,
		color: '#fff',
		overflow: 'unset',
	}),
	dropdownIndicator: (baseStyles, state) => ({
		// ...baseStyles,
		// color: '#fff',
		padding: 0,
	}),
	valueContainer: (baseStyles, state) => ({
		...baseStyles,
		color: '#fff',
		padding: '5px 0',
		margin: 0,
	}),
	input: (baseStyles, state) => ({
		...baseStyles,
		color: '#fff',
		padding: 0,
		margin: 0,
	}),
	placeholder: (baseStyles, state) => ({
		...baseStyles,
		padding: 0,
		margin: 0,
	}),

	indicatorSeparator: (baseStyles) => ({
		// Remove the default styles
		// ...provided,
		// padding: '0',
		// width: '24px',
		// height: '24px',
	}),
};
