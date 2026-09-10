import React from "react";
import Dasar from "./usestate/Dasar";
import MenyimpanData from "./usestate/MenyimpanData";
import Praktik from "./usestate/Praktik";
import PraktikTwo from "./usestate/PraktikTwo";
import RadixPrimitives from "./StyleComponents/RadixPrimitives";
import ExampleOne from "./learn-useReducer/ExampleOne";
import ExampleTwo from "./learn-useReducer/ExampleTwo";

function AppUseState() {
  return (
    <div className="flex flex-col gap-y-5">
      {/* <Dasar />
      <MenyimpanData />
      <Praktik /> */}
      {/* <PraktikTwo /> */}
      {/* <RadixPrimitives /> */}
      <ExampleTwo />
    </div>
  );
}

export default AppUseState;
