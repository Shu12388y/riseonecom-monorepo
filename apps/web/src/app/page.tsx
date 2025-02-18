// "use client";
// import { BackgroundLines } from "@/components/ui/background-lines";
// import { TypeAnimation } from "react-type-animation";
// // import { RainbowButton } from "@/components/ui/rainbow-button";
// // import { Bento } from "@/components/component/BentoGrid";
// // import { FeaturesSection } from "@/components/component/feature";
// import { AnimatedTestimonial } from "@/components/component/animate-testimonial";
// import FeaturesSections from "@/components/component/features";
// // import { TargetAudienceSection } from "@/components/component/target-audience";
// import ServiceCard from "@/components/component/service";

// const service = [
//   {
//     title: "Marketplaces Registration",
//     description:
//       "E-Commerce Platform Registration. End-to-end registration support",
//     image1:
//       "https://images.pexels.com/photos/7172830/pexels-photo-7172830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     image2:
//       "https://images.pexels.com/photos/5716033/pexels-photo-5716033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     title: "Marketplace Listing",
//     description: "Multi-Category Product Listings Brand Services",
//     image1:
//       "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     image2:
//       "https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     title: "Finances",
//     description: "GST & Financial Management",
//     image1:
//       "https://images.pexels.com/photos/14647295/pexels-photo-14647295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     image2:
//       "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     title: "Product Images",
//     description: "Professional Images of your products for platforms",
//     image1:
//       "https://images.pexels.com/photos/7552326/pexels-photo-7552326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     image2:
//       "https://images.pexels.com/photos/5717978/pexels-photo-5717978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     title: "Business Consultancy",
//     description: "Vendor Onboarding & Management",
//     image1:
//       "https://images.pexels.com/photos/8528742/pexels-photo-8528742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     image2:
//       "https://images.pexels.com/photos/7875995/pexels-photo-7875995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     title: "Designing & Packaging",
//     description: "Designing the most attractive packaging",
//     image1:
//       "https://images.pexels.com/photos/7309209/pexels-photo-7309209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     image2:
//       "https://images.pexels.com/photos/7309306/pexels-photo-7309306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
// ];

// const cardData = [
//   {
//     title: "Comprehensive Support",
//     description:
//       "We streamline the entire e-commerce journey, from platform registration and product listings to inventory management.",
//   },
//   {
//     title: "Personalized Guidance",
//     description:
//       "Dedicated relationship managers offer tailored support, guiding sellers through every stage of the process.",
//   },
//   {
//     title: "Scalable Solutions",
//     description:
//       "Our solutions are designed to grow with sellers, providing expert assistance as they scale their business at their own pace.",
//   },
// ];

// const Card = ({
//   title,
//   description,
// }: {
//   title: string;
//   description: string;
// }) => {
//   return (
//     <div className="bg-white shadow-md rounded-xl p-6 text-center border border-gray-300 hover:shadow-2xl transition duration-300 transform hover:scale-105">
//       <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
//       <p className="text-gray-600 text-base leading-relaxed">{description}</p>
//     </div>
//   );
// };

// export default function Home() {
//   return (
//     <>
//       <div className="overflow-x-hidden">
//         <BackgroundLines className="flex items-center justify-center  w-full flex-col px-6">
//           <section className="flex flex-col items-center text-center max-w-3xl">
//             <h2 className="text-4xl lg:text-7xl font-bold mb-6">
//               Take Control of Your <br />
//               <span className="text-blue-500">
//                 <TypeAnimation
//                   sequence={[
//                     "Amazon Inventory",
//                     1000,
//                     "Flipkart Inventory",
//                     1000,
//                     "Meesho Inventory",
//                     1000,
//                   ]}
//                   wrapper="span"
//                   speed={50}
//                   repeat={Infinity}
//                 />
//               </span>
//             </h2>
//             <p className="text-lg lg:text-4xl font-light mb-6">
//               Streamlining Your E-Commerce Journey <br /> with Expert Guidance
//               and Technology
//             </p>
//           </section>
//         </BackgroundLines>

//         <div className="text-center p-6">
//           <h2 className="text-2xl font-bold mb-4">
//             Partnering with Global E-Commerce Leaders for Your Success
//           </h2>
//           <div className="grid grid-cols-2  sm:grid-cols-4 gap-4 items-center justify-center">
//             <img
//               src="https://mms.businesswire.com/media/20240429744210/en/2113615/23/Amazon_logo.jpg"
//               alt="amazon"
//               className="w-full max-w-[150px] mx-auto"
//             />
//             <img
//               src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.jpg"
//               alt="flipkart"
//               className="w-full max-w-[150px] mx-auto"
//             />
//             <img
//               src="https://stockarea.io/blogs/wp-content/uploads/2021/11/1_vNRDrFBkpQ9CtWZ33fScng-1024x536.png"
//               alt="meesho"
//               className="w-full max-w-[150px] mx-auto"
//             />
//             <img
//               src="https://www.ecommerce-nation.com/wp-content/uploads/2018/01/Shopify-ecommerce-platform.png.webp"
//               alt="shopify"
//               className="w-full max-w-[150px] mx-auto"
//             />
//           </div>
//         </div>

//         <div>
//           <FeaturesSections />
//         </div>

//         <div className="flex flex-col items-center w-full py-10">
//           <h1 className="text-4xl text-blue-600 font-bold mb-12 text-center md:text-5xl lg:text-6xl">
//             What Sets Us Apart
//           </h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 w-full max-w-7xl">
//             {cardData.map((card, index) => (
//               <Card
//                 key={index}
//                 title={card.title}
//                 description={card.description}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col items-center w-full py-10">
//           <h1 className="text-4xl text-blue-600 font-bold mb-12 text-center md:text-5xl lg:text-6xl">
//             Our Service&apos;s
//           </h1>
//           <div className="w-1/2">
           

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//               {service.map((service, index) => (
//                 <ServiceCard key={index} {...service} />
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col items-center justify-center py-10">
//         </div>
//         <div className="bg-gray-50">
//           <AnimatedTestimonial />
//         </div>
//       </div>
//     </>
//   );
// }



"use client";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TypeAnimation } from "react-type-animation";
import { AnimatedTestimonial } from "@/components/component/animate-testimonial";
import FeaturesSections from "@/components/component/features";
import ServiceCard from "@/components/component/service";
import { motion } from "framer-motion";

const service = [
  {
    title: "Marketplaces Registration",
    description:
      "E-Commerce Platform Registration. End-to-end registration support",
    image1:
      "https://images.pexels.com/photos/7172830/pexels-photo-7172830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image2:
      "https://images.pexels.com/photos/5716033/pexels-photo-5716033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Marketplace Listing",
    description: "Multi-Category Product Listings Brand Services",
    image1:
      "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image2:
      "https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Finances",
    description: "GST & Financial Management",
    image1:
      "https://images.pexels.com/photos/14647295/pexels-photo-14647295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image2:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Product Images",
    description: "Professional Images of your products for platforms",
    image1:
      "https://images.pexels.com/photos/7552326/pexels-photo-7552326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image2:
      "https://images.pexels.com/photos/5717978/pexels-photo-5717978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Business Consultancy",
    description: "Vendor Onboarding & Management",
    image1:
      "https://images.pexels.com/photos/8528742/pexels-photo-8528742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image2:
      "https://images.pexels.com/photos/7875995/pexels-photo-7875995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Designing & Packaging",
    description: "Designing the most attractive packaging",
    image1:
      "https://images.pexels.com/photos/7309209/pexels-photo-7309209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image2:
      "https://images.pexels.com/photos/7309306/pexels-photo-7309306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const cardData = [
  {
    title: "Comprehensive Support",
    description:
      "We streamline the entire e-commerce journey, from platform registration and product listings to inventory management.",
  },
  {
    title: "Personalized Guidance",
    description:
      "Dedicated relationship managers offer tailored support, guiding sellers through every stage of the process.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Our solutions are designed to grow with sellers, providing expert assistance as they scale their business at their own pace.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Card = ({ title, description }: { title: string; description: string }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white shadow-md rounded-xl p-6 text-center border border-gray-300 hover:shadow-2xl transition duration-300 transform hover:scale-105"
    >
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden">
        <BackgroundLines className="flex items-center justify-center  w-full flex-col px-6">
          <motion.section
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-3xl"
          >
            <h2 className="text-4xl lg:text-7xl font-bold mb-6">
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
            <p className="text-lg lg:text-4xl font-light mb-6">
              Streamlining Your E-Commerce Journey <br /> with Expert Guidance
              and Technology
            </p>
          </motion.section>
        </BackgroundLines>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center p-6"
        >
          <h2 className="text-2xl font-bold mb-4">
            Partnering with Global E-Commerce Leaders for Your Success
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center justify-center">
            <img
              src="https://mms.businesswire.com/media/20240429744210/en/2113615/23/Amazon_logo.jpg"
              alt="amazon"
              className="w-full max-w-[150px] mx-auto"
            />
            <img
              src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.jpg"
              alt="flipkart"
              className="w-full max-w-[150px] mx-auto"
            />
            <img
              src="https://stockarea.io/blogs/wp-content/uploads/2021/11/1_vNRDrFBkpQ9CtWZ33fScng-1024x536.png"
              alt="meesho"
              className="w-full max-w-[150px] mx-auto"
            />
            <img
              src="https://www.ecommerce-nation.com/wp-content/uploads/2018/01/Shopify-ecommerce-platform.png.webp"
              alt="shopify"
              className="w-full max-w-[150px] mx-auto"
            />
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
          <FeaturesSections />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center w-full py-10"
        >
          <h1 className="text-4xl text-blue-600 font-bold mb-12 text-center md:text-5xl lg:text-6xl">
            What Sets Us Apart
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 w-full max-w-7xl">
            {cardData.map((card, index) => (
              <Card key={index} title={card.title} description={card.description} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center w-full py-10"
        >
          <h1 className="text-4xl text-blue-600 font-bold mb-12 text-center md:text-5xl lg:text-6xl">
            Our Service&apos;s
          </h1>
          <div className="w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {service.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="bg-gray-50"
        >
          <AnimatedTestimonial />
        </motion.div>
      </div>
    </>
  );
}

