import useFormContext from '../../hooks/useFormContext';
import ClientInfo from './ClientInfo';
import WhatStep from './WhatStep';
import BookCallStep from './BookCallStep';

const ClientSteps = () => {
	const { page } = useFormContext();

	const display = {
		0: <ClientInfo />,
		1: <WhatStep />,
		2: <BookCallStep />,
	};

	const content = <>{display[page]}</>;

	return content;
};
export default ClientSteps;
