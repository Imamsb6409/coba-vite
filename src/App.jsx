import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Footer as Kaki, Detail } from "./components/Footer";
import { Card } from "./components/Card";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <Hero />
        <Card />
        <Kaki />
        <Detail />
      </div>
    </React.Fragment>
  );
}

export default App;
