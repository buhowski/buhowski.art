import React from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import Community from './pages/Community/Community';
import Contacts from './pages/Contacts/Contacts';
import TeamForm from './pages/Forms/TeamForm';
import DevForm from './pages/Forms/DevForm';
import ClientForm from './pages/Forms/ClientForm';

import ModernaCasa from './pages/ModernaCasa/ModernaCasa';
import { routePaths } from './shared/routes';
import AffPro from './pages/AffPro/AffPro';
import Rico from './pages/Rico/Rico';

import './App.scss';

const dataRoutes = [
	{
		url: routePaths.mainPage,
		pageName: (
			<>
				<div className='transitionPage'>
					<div className='pageAnimation' id='mainSection'>
						<Home />
						<Services />
						<Products />
						<Community />
						<Contacts />
					</div>
				</div>
			</>
		),
	},
	{
		url: routePaths.developmentTeamForm,
		pageName: (
			<div className='transitionPage'>
				<TeamForm />
			</div>
		),
	},
	{
		url: routePaths.singleDeveloperFrom,
		pageName: (
			<div className='transitionPage'>
				<DevForm />
			</div>
		),
	},
	{
		url: routePaths.clientForm,
		pageName: (
			<div className='transitionPage'>
				<ClientForm />
			</div>
		),
	},
	{
		url: routePaths.modernaCasa,
		pageName: <ModernaCasa />,
	},
	{
		url: routePaths.affPro,
		pageName: <AffPro />,
	},
	{
		url: routePaths.rico,
		pageName: <Rico />,
	},
	{
		url: routePaths.privacyPolicyPage,
		pageName: <PrivacyPolicy />,
	},
];

const App = () => {
	const location = useLocation();

	return (
		<Provider store={store}>
			<div className='main'>
				<Header />

				{/* <TransitionGroup>
					<CSSTransition key={location.key} timeout={0}> */}
				<Routes location={location}>
					{dataRoutes.map(({ url, pageName }, i) => {
						return <Route path={`/${url}`} element={pageName} key={i} />;
					})}
				</Routes>
				{/* </CSSTransition>
				</TransitionGroup> */}

				<Footer />
			</div>
		</Provider>
	);
};

export default App;
