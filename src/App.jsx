import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Footer as Kaki, Detail } from "./components/Footer";
import { Card } from "./components/Card";
import React from "react";
import TugasUseStateAndRef from "./tugas-praktek-05/TugasUseStateAndRef";
import LoginForm from "./formUncontrolledVsControlled/LoginForm";
import LoginFormWithUseReff from "./formUncontrolledVsControlled/LoginFormWithUseReff";
import LoginFormControlled from "./formUncontrolledVsControlled/LoginFormControlled";
import SignUpForm from "./tugas-06-form/SignUpForm";

function App() {
  return (
    <React.Fragment>
      <div className="App p-5">
        {/* <Navbar />
        <Hero />
        <Card />
        <Kaki />
        <Detail /> 
        <TugasUseStateAndRef />*/}
        <SignUpForm />
      </div>
    </React.Fragment>
  );
}

export default App;
