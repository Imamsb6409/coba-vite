import React from "react";
import Dasar from "./usestate/Dasar";
import MenyimpanData from "./usestate/MenyimpanData";
import Praktik from "./usestate/Praktik";
import PraktikTwo from "./usestate/PraktikTwo";

function AppUseState() {
  return (
    <div className="flex flex-col gap-y-5">
      {/* <Dasar />
      <MenyimpanData />
      <Praktik /> */}
      <PraktikTwo />
    </div>
  );
}

export default AppUseState;
