import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Resume from "./pages/Resume";
// import Contact from "./pages/Contact";
// import Portfolio from "./pages/Portfolio";
// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Route exact path="/iPortfolio-2.0" component={Home} />
    </Router>
  );
}

export default App;
