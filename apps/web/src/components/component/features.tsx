"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Package,
  RefreshCw,
  BarChart,
  ShoppingCart,
  Server,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: <Package className="w-10 h-10 text-blue-500" />,
    title: "Real-time Inventory Tracking",
    description:
      "Stay updated with stock levels, sales, and incoming shipments in real time.",
  },
  {
    icon: <RefreshCw className="w-10 h-10 text-green-500" />,
    title: "Storefont Management",
    description:
      "Keep your online storefronts updated and optimized across platforms.",
  },
  {
    icon: <BarChart className="w-10 h-10 text-purple-500" />,
    title: "Analytics & Reports",
    description:
      "Gain insights into sales trends, revenue, and stock movements.",
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-orange-500" />,
    title: "Multi-Channel Integration",
    description:
      "Sync your inventory with Shopify, Amazon, WooCommerce, and more.",
  },
  {
    icon: <Server className="w-10 h-10 text-red-500" />,
    title: "Expense & Revenue Tracking",
    description:
      "Monitor your financials effortlessly with smart expense tracking.",
  },
  {
    icon: <Zap className="w-10 h-10 text-yellow-500" />,
    title: "Custom E-Commerce Website",
    description:"We design and build custom e-commerce websites.",
  },
];

export default function FeaturesSections() {
  return (
    <section className="py-16 px-6 md:px-12  dark:bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🚀 Key Features & Benefits
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Power up your e-commerce business with advanced inventory management
          tools.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 rounded-xl">
              <CardHeader className="flex items-center space-x-4">
                {feature.icon}
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
