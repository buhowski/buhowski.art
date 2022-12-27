import React, { useState } from "react";
import IdeaRu from "./IdeaRu";

export default function IdeaText() {
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      title: "ru",
      content: <IdeaRu />,
    },
    {
      id: 2,
      title: "en",
      content: "2222",
    },
    {
      id: 3,
      title: "ua",
      content: "3333",
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="idea-info">
      {/* Copyright */}
      <div className="idea-copy">
        <p>
          {new Date().getFullYear()} <span>&copy;</span> A. Tsiomakh
        </p>
      </div>

      <div className="idea-tabs">
        {tabs.map((tab, i) => (
          <button
            className="idea-tabs__btn"
            type="button"
            key={i}
            id={tab.id}
            onClick={handleTabClick}
            data-active={currentTab === `${tab.id}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {tabs.map((tab, i) => (
        <div
          className="idea-overflow"
          data-content={currentTab === `${tab.id}`}
          key={i}
        >
          {currentTab === `${tab.id}` && tab.content}
        </div>
      ))}
    </div>
  );
}
