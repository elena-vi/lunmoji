import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Nav, Navbar} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";

function App() {
  return (
    <div className="App container py-3" data-bs-theme="dark">
      <Navbar collapseOnSelect expand="md" className="mb-3 px-3" data-bs-theme="dark">
        <Navbar.Brand className="fw-bold text-muted">Lunmoji</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signin">
              <Nav.Link>Signin</Nav.Link>
            </LinkContainer>
            <Nav.Link href="lunmoji.zip">Download</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
