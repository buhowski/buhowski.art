import React from 'react';

class IdeaGeneral extends React.Component {
	state = {
		currentTab: '1',
		setCurrentTab: '1',
	};

	handleChange = (event) => {
		const input = event.target;
		const value = input.type === 'checkbox' ? input.checked : input.value;

		this.setState({ [input.name]: value });
	};

	handleTabClick = (e) => {
		this.setState({
			currentTab: e.target.id,
			setCurrentTab: e.target.id,
		});

		localStorage.setItem('currentIndex', e.target.id);
	};

	componentDidMount() {
		const currentIndex = localStorage.getItem('currentIndex');

		this.setState({
			currentTab: currentIndex ? currentIndex : '1',
			setCurrentTab: currentIndex ? currentIndex : '1',
		});

		if (document.querySelector('.idea-icon')) {
			document.querySelector('.idea-icon').style.animation = 'none';
		}
	}

	render() {
		const { IdeaTabRu, IdeaTabEn, IdeaTabUa } = this.props;

		const tabs = [
			{
				id: 1,
				title: 'en',
				content: IdeaTabEn,
			},
			{
				id: 2,
				title: 'ru',
				content: IdeaTabRu,
			},
			{
				id: 3,
				title: 'ua',
				content: IdeaTabUa,
			},
		];

		return (
			<div className='idea-info'>
				<div className='idea-tabs'>
					{/* Here goes tab items*/}
					{tabs.map((tab, i) => (
						<button
							className='idea-tabs__btn'
							type='button'
							key={i}
							id={tab.id}
							onClick={this.handleTabClick}
							data-active={this.state.currentTab === `${tab.id}`}
						>
							{tab.title}
						</button>
					))}
				</div>

				{/* Here goes tabs content */}
				{tabs.map((tab, i) => (
					<div
						className='idea-overflow'
						data-content={this.state.currentTab === `${tab.id}`}
						key={i}
					>
						{this.state.currentTab === `${tab.id}` && tab.content}
					</div>
				))}
			</div>
		);
	}
}

export default IdeaGeneral;
