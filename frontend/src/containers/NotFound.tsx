import React from "react";
import logo from "../logo.svg";

export default function NotFound() {
  return (
    <>

      <header className="App-header">
        <h1 className="mb-4">Sorry, page not found!</h1>

        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link mb-4"
          href="lunmoji.zip"
          rel="noopener noreferrer"
        >
          Download here
        </a>
      </header>
    </>
  );
}