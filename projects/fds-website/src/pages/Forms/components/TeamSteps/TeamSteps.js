import useFormContext from '../../hooks/useFormContext';
import ProfileInfo from './ProfileInfo';
import TechStack from './TechStack';
import ProjectPreferences from './ProjectPreferences';
import EnterFinalStep from './EnterFinalStep';

const TeamSteps = ({ devForm }) => {
	const { page } = useFormContext();

	const display = {
		0: <ProfileInfo devForm={devForm} />,
		1: <TechStack />,
		2: <ProjectPreferences />,
		3: <EnterFinalStep />,
	};

	const content = <>{display[page]}</>;

	return content;
};
export default TeamSteps;
