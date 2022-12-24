import React from "react";
import { Route, Routes } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.scss";
import Header from "../components/header/Header";

import Home from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";
import Gallery from "./gallery/Gallery";

const routesData = [
  {
    pathTo: "",
    pageComponent: Home,
  },
  {
    pathTo: "about",
    pageComponent: About,
  },
  {
    pathTo: "projects",
    pageComponent: Projects,
  },
  {
    pathTo: "gallery",
    pageComponent: Gallery,
  },
];

const App = () => {
  return (
    <div id="page" className="page">
      <div className="page-container">
        <Header />
        <Routes>
          {routesData.map(({ pathTo, pageComponent }, i) => {
            return (
              <Route
                path={`/${pathTo}`}
                end
                element={`<${pageComponent} />`}
                key={i}
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
};

export default App;
