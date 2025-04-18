import { AnimatedTestimonials } from "@/components/ui/testimonial";

export function AnimatedTestimonial() {
  const testimonials = [
    {
      quote:
        "We've been running our family-owned electronics store for over 20 years, and shifting to e-commerce was something we were hesitant about. Rise On Ecom’s marketplace registration and product listing services made the whole process effortless. They helped us expand our reach and grow our business exponentially. The response has been phenomenal!",
      name: "Ravi Sharma",
      designation: " Founder of Sharma Electronics",
      src: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740",
    },
    {
      quote:
       "As a traditional saree business, we always relied on our offline store. But with Rise On Ecom's professional product images and multi-category listings, we’ve been able to showcase our beautiful collection online in a way that feels just as luxurious. Our online sales have increased significantly, and we've gained customers from all over India!",
      name: "Neha Joshi",
      designation: "CEO of Divine Sarees",
      src: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740",
    },
    {
      quote:
        "The transition from offline to online was overwhelming, especially with GST and financial management. But Rise On Ecom’s team took care of everything for us. They provided detailed advice, and now our finances are in order, and we can focus on growing the business. Their support was invaluable!",
      name: "Amit Kumar",
      designation: "Owner of A.K. Ayurvedic Products",
      src: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740",
    },
    {
      quote:
        "I had no idea where to start with selling my handmade jewelry online, but Rise On Ecom’s business consultancy and vendor onboarding services were just what we needed. Their team walked us through the entire process, and now we're listed on multiple top marketplaces. It's been a fantastic experience!",
      name: "Priya Mehta",
      designation: "Founder of Mehta Creations",
      src: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-center">
      {/* Header Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-500 dark:text-white">
        What Our Clients Say
      </h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Hear from industry leaders about their experience with our product.
      </p>

      {/* Testimonials Component */}
      <div className="mt-8">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
}
