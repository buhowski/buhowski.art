import React, { Component } from "react";

const dataContacts = [
  {
    name: "Gmail:",
    url: "mailto:a.tsiomakh@gmail.com",
    linkTitle: "a.tsiomakh@gmail.com",
  },
  {
    name: "Telegram:",
    url: "https://t.me/buhowski",
    linkTitle: "text me",
  },
  {
    name: "LinkedIn:",
    url: "https://www.linkedin.com/in/buhowski",
    linkTitle: "Alexander Tsiomakh",
  },
];

class PopupContacts extends Component {
  state = {
    activeIndex: 0,
    setContacts: null,
  };

  toggleShowContacts = (e) => {
    const clickMe = e.target.id;
    if (this.state.setContacts === clickMe) {
      this.setState({
        setContacts: null,
      });
    } else {
      this.setState({
        setContacts: clickMe,
      });
    }
  };

  render() {
    const { contactBtnTitle } = this.props;

    return (
      <div className="idea-contacts" data-active={this.state.setContacts}>
        <div className="idea-contacts__list">
          <div className="idea-contacts__list-items">
            {dataContacts.map((item, i) => (
              <p key={i}>
                {item.name} <a href={item.url}>{item.linkTitle}</a>
              </p>
            ))}
          </div>
        </div>

        <button
          onClick={this.toggleShowContacts}
          type="button"
          className="a nav-link nav-link--underline"
        >
          {contactBtnTitle}
        </button>
      </div>
    );
  }
}

export default PopupContacts;
