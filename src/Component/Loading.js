import React from "react";
import { BeatLoader } from "react-spinners";

function Loading() {
  return (
    <div className="flex justify-center items-center py-20 font-bold text-3xl h-screen">
      <BeatLoader />
    </div>
  );
}

export default Loading;
