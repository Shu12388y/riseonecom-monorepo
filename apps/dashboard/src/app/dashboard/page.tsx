import {
  ArrowRight,
  ShoppingCart,
  CheckCircle,
  Package,
  CreditCard,
  Users,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

export default function GetStartedPage() {
  const features = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-indigo-500" />,
      title: "Easy Store Setup",
      description:
        "Launch your online store in minutes with our intuitive dashboard",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-indigo-500" />,
      title: "Seamless Integration",
      description:
        "Connect with popular payment gateways and shipping providers",
    },
    {
      icon: <Package className="h-8 w-8 text-indigo-500" />,
      title: "Inventory Management",
      description: "Track stock levels and receive low inventory notifications",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-indigo-500" />,
      title: "Secure Payments",
      description:
        "Process transactions with bank-level security and encryption",
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-500" />,
      title: "Customer Profiles",
      description:
        "Build relationships with in-depth customer management tools",
    },
    {
      icon: <HelpCircle className="h-8 w-8 text-indigo-500" />,
      title: "24/7 Support",
      description: "Get help whenever you need with our dedicated support team",
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Launch Your E-commerce Business with{" "}
              <span className="text-indigo-600">RiseOnEcom</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6">
              Everything you need to create, manage, and scale your online store
              in one powerful platform.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row">
              <Link href="/dashboard/management">
              <button className="mt-3 sm:mt-0 sm:ml-3 px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition flex items-center justify-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Everything You Need to Succeed Online
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Our platform provides all the tools and features to help your
              e-commerce business thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
