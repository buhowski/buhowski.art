import React, { Component } from 'react';

const dataContacts = [
	{
		name: 'Telegram:',
		url: 'https://t.me/buhowski',
		linkTitle: 'Write To Me',
	},
	{
		name: 'Gmail:',
		url: 'mailto:a.tsiomakh@gmail.com',
		linkTitle: 'a.tsiomakh@gmail.com',
	},
	{
		name: 'LinkedIn:',
		url: 'https://www.linkedin.com/in/buhowski',
		linkTitle: 'Alexander Tsiomakh',
	},
];

class PopupContacts extends Component {
	state = {
		activeIndex: 0,
		setContacts: null,
	};

	toggleShowContacts = () => {
		this.setState({
			setContacts: 'show',
		});
	};

	toggleShowContactsHide = () => {
		this.setState({
			setContacts: '',
		});
	};

	render() {
		const { contactBtnTitle } = this.props;

		return (
			<div
				className={`idea-contacts ${this.state.setContacts}`}
				onMouseLeave={this.toggleShowContactsHide}
			>
				<div className='idea-contacts__list'>
					<div className='idea-contacts__list-items'>
						{dataContacts.map((item, i) => (
							<p key={i}>
								{item.name}{' '}
								<a href={item.url} target='_blank' rel='noopener noreferrer'>
									{item.linkTitle}
								</a>
							</p>
						))}
					</div>
				</div>

				<button
					onMouseOver={this.toggleShowContacts}
					type='button'
					className='a nav-link nav-link--underline'
				>
					{contactBtnTitle}
				</button>
			</div>
		);
	}
}

export default PopupContacts;
