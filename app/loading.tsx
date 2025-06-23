import { Spinner } from "@heroui/spinner";
import React from "react";

function MainLoadingPage() {
  return (
    <div className="w-full h-[100dvh] flex flex-col justify-center items-center gap-2 p-5">
      <Spinner />
      <span className="text-lg font-semibold mt-4">Loading...</span>
    </div>
  );
}

export default MainLoadingPage;
