import React from "react";
import FullPageWrapper from "./FullPage/FullPageWrapper";
import Navbar from "./NavBar/Navbar";
import "./App.css"

function App() {

  return (
    <div className="App">
      <Navbar className={"navigation-bar"} />
      <FullPageWrapper classname={"fullpage-wrapper"} />
    </div>
  );
}

export default App;
