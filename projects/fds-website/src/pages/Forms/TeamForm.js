import { useState } from 'react';
import TeamSteps from './components/TeamSteps/TeamSteps';
import FormNavigation from './components/FormNavigation';
import FormActions from './components/FormActions';
import { FormProvider } from './context/FormContext';
import { useTeamContext } from './context/useTeamContext';

import './Forms.scss';

const TeamForm = () => {
	const [page, setPage] = useState(0);
	const { handleSubmit, data, setData, onSubmitHandler } = useTeamContext();

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
			</div>
		</FormProvider>
	);

	return content;
};
export default TeamForm;
