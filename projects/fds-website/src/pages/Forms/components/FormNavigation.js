import useFormContext from '../hooks/useFormContext';
import { ReactSVG } from 'react-svg';
import checkedIcon from '../img/checked.svg';

import '../Forms.scss';

const FormNavigation = () => {
	const { page, setPage, disableNext, handleValidation } = useFormContext();

	const handlePageNum = (e) => {
		handleValidation();
		page >= e && setPage(e);
		!disableNext && setPage(e);
	};

	const content = (
		<div className='formPageNav'>
			<button
				type='button'
				className={`formPage__step ${page === 0 && 'active'}`}
				onClick={() => handlePageNum(0)}
			>
				Profile info
				<ReactSVG src={checkedIcon} className='formPage__step-svg' wrapper={'span'} />
			</button>

			<button
				type='button'
				className={`formPage__step ${page === 1 && 'active'}`}
				onClick={() => handlePageNum(1)}
			>
				Tech stack
				<ReactSVG src={checkedIcon} className='formPage__step-svg' wrapper={'span'} />
			</button>

			<button
				type='button'
				className={`formPage__step ${page === 2 && 'active'}`}
				onClick={() => handlePageNum(2)}
			>
				Project preferences
				<ReactSVG src={checkedIcon} className='formPage__step-svg' wrapper={'span'} />
			</button>

			<button
				type='button'
				className={`formPage__step ${page === 3 && 'active'}`}
				onClick={() => handlePageNum(3)}
			>
				Finish
				<ReactSVG src={checkedIcon} className='formPage__step-svg' wrapper={'span'} />
			</button>
		</div>
	);

	return content;
};
export default FormNavigation;
