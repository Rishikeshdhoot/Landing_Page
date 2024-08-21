import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/shared/header";
import Home from "./components/module/home";
import Service from "./components/module/Service";
import { screensRoute } from "./constants/screens";
import About from "./components/module/about";
import Contact from "./components/module/contact";
import Footer from "./components/shared/footer";
import useWindowResize from "./utils/useWindowResize";
import ToastNotification from "./components/shared/toast";
import { useSelector } from "react-redux";
import TermConditions from "./components/module/term-and-conditions";

const App = () => {
  const { width } = useWindowResize();
  const { isToastVisible } = useSelector((state) => state.ToastReducer);
  console.log("isToastVisible APP " + isToastVisible);
  return (
    <Router>
      {isToastVisible && <ToastNotification />}
      <Header />
      <Routes>
        <Route exact path={screensRoute.HOME} element={<Home />} />
        <Route exact path={screensRoute.ABOUT} element={<About />} />
        <Route exact path={screensRoute.SERVICES} element={<Service />} />
        <Route exact path={screensRoute.CONTACT} element={<Contact />} />
        <Route
          exact
          path={screensRoute.TERM_AND_CONDITION}
          element={<TermConditions />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};
// Health is coin preserve it
export default App;
