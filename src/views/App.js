import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.scss";
import Header from "../components/header/Header";

import Home from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";
// Gallery page with funny photos TODO: comment page
// import Gallery from "./gallery/Gallery";
import IdeaGeneral from "./idea/IdeaGeneral";
import AccessToIdea from "./idea/AccessToIdea";

const routesData = [
  {
    pathTo: "",
    pageComponent: <Home />,
  },
  {
    pathTo: "about",
    pageComponent: <About />,
  },
  {
    pathTo: "projects",
    pageComponent: <Projects />,
  },
  // {
  //   pathTo: "gallery",
  //   pageComponent: <Gallery />,
  // },
  {
    pathTo: "idea",
    pageComponent: <IdeaGeneral />,
  },
  {
    pathTo: "access-to-idea",
    pageComponent: <AccessToIdea />,
  },
];

const App = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={1700}>
        <div id="page" className="page">
          <div className="page-container">
            <Header />
            <Routes location={location}>
              {routesData.map(({ pathTo, pageComponent }, i) => {
                return (
                  <Route
                    path={`/${pathTo}`}
                    end
                    element={pageComponent}
                    key={i}
                  />
                );
              })}
            </Routes>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
