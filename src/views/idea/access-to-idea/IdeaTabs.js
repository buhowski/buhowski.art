import React, { useState } from "react";
import IdeaRu from "./IdeaRu";

export default function IdeaTabs() {
  const [currentTab, setCurrentTab] = useState("2");
  const tabs = [
    {
      id: 1,
      title: "en",
      content: "en",
    },
    {
      id: 2,
      title: "ru",
      content: <IdeaRu />,
    },
    {
      id: 3,
      title: "ua",
      content: "ua",
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="idea-info">
      <div className="idea-tabs">
        {/* Here goes tab items*/}
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

      {/* Here goes tabs content */}
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
