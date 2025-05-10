import React from "react";
import Statcard from "@/components/ui/statcard";
import { ChartComponent } from "@/components/ui/barchart";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ApiKeyInstructions from "@/components/ui/apikeypage";
const amazonData = [
  { title: "Total Sales", amount: "250" },
  { title: "Total Revenue", amount: "$1500" },
  { title: "Amount Received", amount: "$14,000" },
  { title: "Amount Pending", amount: "$10,000" },
];

function Page() {
  return (
    <div className="flex flex-col items-center w-full p-4 md:p-10">
      {process.env.NEXT_PUBLIC_DEV ? (
        <ApiKeyInstructions />
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-center mb-6">
            Amazon Dashboard
          </h1>

          {/* Platform Sales Overview */}
          <div className="w-full max-w-6xl">
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-2xl font-semibold mb-4">
                Platform Sales Overview
              </h2>
              <Link href="/dashboard/metric/amazonmetric">
                <Button>View Metric</Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {amazonData.map((ele, index) => (
                <Statcard key={index} title={ele.title} amount={ele.amount} />
              ))}
            </div>
          </div>

          {/* Product Insight Overview */}
          <div className="w-full max-w-6xl mt-10">
            <h2 className="text-2xl font-semibold mb-4">
              Product Insight Overview
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-2/3 h-64">
                <ChartComponent />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-1/3">
                <Statcard title="Top Product" amount="Product A" />
                <Statcard title="Best Seller" amount="Product B" />
                <Statcard title="Highest Revenue" amount="$5,000" />
                <Statcard title="Lowest Stock" amount="15 Left" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
