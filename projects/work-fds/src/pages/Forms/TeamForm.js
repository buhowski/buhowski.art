import { useState } from 'react';
import TeamSteps from './components/TeamSteps/TeamSteps';
import FormNavigation from './components/FormNavigation';
import FormActions from './components/FormActions';
import { FormProvider } from './context/FormContext';
import { useTeamContext } from './context/useTeamContext';
import EndFormModal from './components/EndFormModal';

import './Forms.scss';

const TeamForm = () => {
	const [page, setPage] = useState(0);
	const { handleSubmit, data, setData, onSubmitHandler, isModalOpen, isSuccess, popupProps } = useTeamContext();

	const title = {
		0: 'your profile Info',
		1: 'Your Tech stack',
		2: 'Your Project preferences',
		3: 'ENTER FOCUS DIGITAL SYNDICATE',
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
					<FormNavigation />

					<h2 className='formPage__title'>{title[page]}</h2>

					<form
						onSubmit={handleSubmit(onSubmitHandler)}
						className={`actionForm ${page === 3 ? 'actionFormSmall' : ''}`}
					>
						<TeamSteps />

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
export default TeamForm;
