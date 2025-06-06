// "use client";

// import { Store, ShoppingBag, Truck, Users, Building, CheckCircle } from "lucide-react";
// import { GlowingEffect } from "@/components/ui/glowing-effect";

// export function TargetAudienceSection() {
//   return (
//     <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
//       <GridItem
//         area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
//         icon={<Store className="h-6 w-6 text-blue-500" />}
//         title="E-commerce Stores"
//         description="Perfect for online sellers managing multiple products and sales channels."
//       />

//       <GridItem
//         area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
//         icon={<ShoppingBag className="h-6 w-6 text-green-500" />}
//         title="Retail Businesses"
//         description="Streamline in-store and online inventory with ease."
//       />

//       <GridItem
//         area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
//         icon={<Truck className="h-6 w-6 text-purple-500" />}
//         title="Wholesale Distributors"
//         description="Track large shipments, stock movements, and order fulfillment efficiently."
//       />

//       <GridItem
//         area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
//         icon={<Users className="h-6 w-6 text-orange-500" />}
//         title="Dropshipping Businesses"
//         description="Automate order processing and track supplier inventory in real time."
//       />

//       <GridItem
//         area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
//         icon={<Building className="h-6 w-6 text-red-500" />}
//         title="Manufacturers"
//         description="Monitor raw materials, production status, and product dispatch seamlessly."
//       />

//       <GridItem
//         area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
//         icon={<CheckCircle className="h-6 w-6 text-yellow-500" />}
//         title="Growing Startups"
//         description="Scale effortlessly with a flexible and AI-powered inventory system."
//       />
//     </ul>
//   );
// }

// interface GridItemProps {
//   area: string;
//   icon: React.ReactNode;
//   title: string;
//   description: React.ReactNode;
// }

// const GridItem = ({ area, icon, title, description }: GridItemProps) => {
//   return (
//     <li className={`min-h-[14rem] list-none ${area}`}>
//       <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
//         <GlowingEffect
//           spread={40}
//           glow={true}
//           disabled={false}
//           proximity={64}
//           inactiveZone={0.01}
//         />
//         <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
//           <div className="relative flex flex-1 flex-col justify-between gap-3">
//             <div className="w-fit rounded-lg border border-gray-600 p-2">
//               {icon}
//             </div>
//             <div className="space-y-3">
//               <h3 className="pt-0.5 text-xl font-semibold font-sans md:text-2xl text-black dark:text-white">
//                 {title}
//               </h3>
//               <p className="font-sans text-sm md:text-base text-black dark:text-neutral-400">
//                 {description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   );
// };


"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function TargetAudienceSection() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none max-w-7xl gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Do things the right way"
        description="Running out of copy so I'll write anything."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="The best AI code editor ever."
        description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="You should buy Aceternity UI Pro"
        description="It's the best money you'll ever spend"
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="This card is also built by Cursor"
        description="I'm not even kidding. Ask my mom if you don't believe me."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Coming soon on Aceternity UI"
        description="I'm writing the code as I record this, no shit."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
