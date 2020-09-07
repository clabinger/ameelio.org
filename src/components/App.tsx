import React, { useEffect } from "react";
import "./App.scss";

import Landing from "./pages/landing";
import Mission from "./pages/Mission";
import HowFree from "./pages/HowFree";
import NavBar from "./Navbar/Navbar";
import Team from "./pages/Team";
import Footer from "./footer/Footer";
import HowItWorks from "./pages/HowItWorks";
import GetInvolved from "./pages/GetInvolved";
import ReferralPage from "./pages/ReferralPage";
import Onboarding from "./pages/Onboarding";

import ReactPixel from "react-facebook-pixel";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { trackPageOpen, load, page } from "src/utils/analytics";

import AOS from "aos";
import "aos/dist/aos.css";

if (process.env.REACT_APP_PIXEL_KEY) {
  ReactPixel.init(process.env.REACT_APP_PIXEL_KEY);
  ReactPixel.pageView();
}

const App: React.FC = () => {
  useEffect(() => {
    AOS.init();
    load();
    trackPageOpen();
    page();
  }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/how-we-work" component={HowItWorks} />
        <Route path="/transparency" component={HowFree} />
        <Route path="/team" component={Team} />
        <Route path="/mission" component={Mission} />
        <Route path="/get-involved" component={GetInvolved} />
        <Route path="/join/:id" component={ReferralPage} />
        <Route exact path="/signup" component={Onboarding} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
