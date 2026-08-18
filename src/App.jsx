import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Footer as Kaki, Detail } from "./components/Footer";
import { Card } from "./components/Card";
import React from "react";
import TugasUseStateAndRef from "./tugas-praktek-05/TugasUseStateAndRef";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        {/* <Navbar />
        <Hero />
        <Card />
        <Kaki />
        <Detail /> */}
        <TugasUseStateAndRef />
      </div>
    </React.Fragment>
  );
}

export default App;
