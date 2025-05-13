import React from "react";
import {
  ChevronRight,
  Shield,
  RefreshCw,
  Clock,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function CancellationRefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center text-sm font-medium text-gray-500">
          <a href="/" className="hover:text-gray-700">
            Home
          </a>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-indigo-600">Cancellation & Refund Policy</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-indigo-600 px-6 py-12 md:py-16 md:px-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Cancellation & Refund Policy
            </h1>
            <p className="mt-4 text-lg text-indigo-100">
              Our commitment to customer satisfaction with a transparent and
              fair policy
            </p>
          </div>

          <div className="px-6 py-12 md:p-12">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-8">
                ODILIA GLOBAL PRIVATE LIMITED believes in helping its customers
                as far as possible, and has therefore a liberal cancellation
                policy. Please read the following details about our cancellation
                and refund processes.
              </p>

              <div className="space-y-12">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex gap-6">
                  <div className="mt-1">
                    <Clock className="w-8 h-8 text-indigo-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      Cancellation Timeline
                    </h2>
                    <p className="text-gray-700">
                      Cancellations will be considered only if the request is
                      made within{" "}
                      <span className="font-medium text-indigo-600">
                        3-5 days
                      </span>{" "}
                      of placing the order. However, the cancellation request
                      may not be entertained if the orders have been
                      communicated to the vendors/merchants and they have
                      initiated the process of shipping them.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex gap-6">
                  <div className="mt-1">
                    <RefreshCw className="w-8 h-8 text-indigo-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      Perishable Items
                    </h2>
                    <p className="text-gray-700">
                      ODILIA GLOBAL PRIVATE LIMITED does not accept cancellation
                      requests for perishable items like flowers, eatables etc.
                      However, refund/replacement can be made if the customer
                      establishes that the quality of product delivered is not
                      good.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex gap-6">
                  <div className="mt-1">
                    <Shield className="w-8 h-8 text-indigo-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      Damaged or Defective Items
                    </h2>
                    <p className="text-gray-700">
                      In case of receipt of damaged or defective items please
                      report the same to our Customer Service team. The request
                      will, however, be entertained once the merchant has
                      checked and determined the same at his own end. This
                      should be reported within{" "}
                      <span className="font-medium text-indigo-600">
                        3-5 days
                      </span>{" "}
                      of receipt of the products.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex gap-6">
                  <div className="mt-1">
                    <CheckCircle className="w-8 h-8 text-indigo-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      Product Quality Concerns
                    </h2>
                    <p className="text-gray-700">
                      In case you feel that the product received is not as shown
                      on the site or as per your expectations, you must bring it
                      to the notice of our customer service within{" "}
                      <span className="font-medium text-indigo-600">
                        3-5 days
                      </span>{" "}
                      of receiving the product. The Customer Service Team after
                      looking into your complaint will take an appropriate
                      decision.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex gap-6">
                  <div className="mt-1">
                    <Shield className="w-8 h-8 text-indigo-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      Warranty Claims
                    </h2>
                    <p className="text-gray-700">
                      In case of complaints regarding products that come with a
                      warranty from manufacturers, please refer the issue to
                      them.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex gap-6">
                  <div className="mt-1">
                    <RefreshCw className="w-8 h-8 text-indigo-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      Refund Processing
                    </h2>
                    <p className="text-gray-700">
                      In case of any Refunds approved by the ODILIA GLOBAL
                      PRIVATE LIMITED, it&apos;ll take{" "}
                      <span className="font-medium text-indigo-600">
                        3-5 days
                      </span>{" "}
                      for the refund to be processed to the end customer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="mt-16 border-t border-gray-200 pt-10">
              <h3 className="text-xl font-semibold text-gray-900">
                Need more help?
              </h3>
              <div className="mt-6 flex gap-4">
                <Link prefetch href="/contact">
                  <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
                    Contact Support
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
