"use client";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TypeAnimation } from "react-type-animation";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Bento } from "@/components/component/BentoGrid";
import { FeaturesSection } from "@/components/component/feature";
import { AnimatedTestimonial } from "@/components/component/animate-testimonial";
import FeaturesSections from "@/components/component/features";
import { TargetAudienceSection } from "@/components/component/target-audience";
import Connectivity from "@/components/component/connectivity"


export default function Home() {
  return (
    <>
      <BackgroundLines className="flex items-center justify-center min-h-screen w-full flex-col px-6">
        <section className="flex flex-col items-center text-center max-w-3xl">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Take Control of Your <br />
            <span className="text-blue-500">
              <TypeAnimation
                sequence={[
                  "Amazon Inventory",
                  1000,
                  "Flipkart Inventory",
                  1000,
                  "Meesho Inventory",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>
          <p className="text-lg lg:text-2xl font-light mb-6">
            Effortlessly manage, optimize, and scale your inventory with our
            powerful tools designed for Amazon sellers.
          </p>
          <div className="flex items-center gap-4 mb-6">
            {/* <span className="w-2 h-10 bg-yellow-300 rounded-full"></span> */}
            <p className="text-base lg:text-lg text-center">
              Simplify your e-commerce journey with seamless inventory
              management, real-time analytics, and scalable solutions tailored
              to your business needs.
            </p>
          </div>
          <RainbowButton>Get Unlimited Access</RainbowButton>
        </section>
      </BackgroundLines>
      <div>
        <FeaturesSections />
      </div>
      <div className="flex flex-col items-center w-full py-10">
        <h1 className="text-4xl text-blue-600 font-bold mb-12 text-center md:text-5xl lg:text-6xl">
          What Sets Us Apart
        </h1>
        <div className="w-1/2">
          <Bento />
        </div>
      </div>
      <div className="bg-gray-50">
        <FeaturesSection />
      </div>
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-4xl text-blue-600 font-bold mb-12 text-center md:text-5xl lg:text-6xl">
        🎯 Who It&apos;s For
        </h1>
        <TargetAudienceSection />
      </div>
      <div className="bg-gray-50">
        <AnimatedTestimonial />
      </div>
      <div className="flex flex-col items-center justify-center py-10">
        <Connectivity/>
      </div>
    </>
  );
}
