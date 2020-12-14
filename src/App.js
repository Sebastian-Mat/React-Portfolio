import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <Router>
      <Navbar bg="transparent" expand="lg" fixed="top" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center nav"
        >
          <Nav>
            <NavLink to="/" exact={true} className="link" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" className="link">
              About
            </NavLink>
            <NavLink to="/portfolio" className="link">
              Porfolio
            </NavLink>
            <NavLink to="/contact" className="link">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
