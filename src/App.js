import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavTabs />
      <Route exact path="/Tasevski87Portfolio-React2.0" component={Home} />
      <Route exact path="/Tasevski87Portfolio-React2.0/contact" component={Contact} />
      <Route exact path="/Tasevski87Portfolio-React2.0/about" component={About} />
      <Route exact path="/Tasevski87Portfolio-React2.0/portfolio" component={Portfolio} />
      <Route exact path="/Tasevski87Portfolio-React2.0/resume" component={Resume} />
      <Footer />
    </Router>
  );
}

export default App;
