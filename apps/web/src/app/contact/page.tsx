import React from "react";

function Page() {
  return (
    <div className="lg:px-[10rem] lg:py-[3rem]">
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Get in touch with RiseOnEcom
              </h1>
              <p className="mt-4 leading-relaxed text-gray-500">
                Got questions? Need expert eCommerce solutions? We&apos;re here
                to help!
              </p>

              <form className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                  />
                </div>

                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                  />
                </div>

                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    placeholder="Enter your message"
                    cols={20}
                    rows={4}
                    className="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <p className="mt-4 leading-relaxed text-gray-500">
                Let&apos;s take your online business to the next level!
              </p>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

export default Page;
