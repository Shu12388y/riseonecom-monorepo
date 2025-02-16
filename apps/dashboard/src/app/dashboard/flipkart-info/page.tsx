import React from "react";
import Statcard from "@/components/ui/statcard";
import { ChartComponent } from "@/components/ui/barchart";

function Page() {
  return (
    <div className="flex flex-col items-center w-full px-4 md:px-8 lg:px-12">
      <div className="py-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">
          Flipkart Dashboard Info
        </h1>
      </div>

      {/* Platform Sales Overview */}
      <div className="py-6 w-full">
        <h2 className="text-xl md:text-2xl font-semibold text-left">
          Platform Sales Overview
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <Statcard />
          <Statcard />
          <Statcard />
          <Statcard />
          <Statcard />
        </div>
      </div>

      {/* Product Insight Overview */}
      <div className="py-6 w-full">
        <h2 className="text-xl md:text-2xl font-semibold text-left">
          Product Insight Overview
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Chart */}
          <div className="w-full lg:w-1/2">
            <ChartComponent />
          </div>

          {/* Stat Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-6 items-center justify-center w-full lg:w-1/2">
            <Statcard />
            <Statcard />
            <Statcard />
            <Statcard />
            <Statcard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
