import React from "react";
import Statcard from "@/components/ui/statcard";
import { ChartComponent } from "@/components/ui/barchart";

function page() {
  return (
    <div className="flex flex-col items-center w-full">
      <div>
        <div className="p-10">
          <h1 className="text-3xl font-bold text-center">
            Amazon Dashboard Info
          </h1>
        </div>
        <div className="p-10">
          <h2 className="text-2xl font-semibold text-left">
            Platform Sales Overview
          </h2>
          <div className="flex flex-row items-center justify-center gap-10">
            <Statcard />
            <Statcard />
            <Statcard />
            <Statcard />
            <Statcard />
          </div>
        </div>
        <div className="p-10">
          <h2 className="text-2xl font-semibold text-left">
            Product Insight Overview
          </h2>
          <div className="flex flex-row gap-10">
            <div className="w-1/2">
              <ChartComponent />
            </div>
            <div className="grid grid-cols-2 items-center justify-center gap-10">
              <Statcard />
              <Statcard />
              <Statcard />
              <Statcard />
              <Statcard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
