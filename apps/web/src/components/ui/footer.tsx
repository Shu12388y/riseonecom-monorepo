import React from "react";
function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">RiseOn Ecom</h2>
            <p className="text-sm mb-4">
              Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
              lacinia curabitur lacinia mollis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Our Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  FAQ&apos;s
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              <li>
                <div>
                  <span className="text-xs text-gray-400">April 27, 2024</span>
                  <a href="#" className="block hover:text-blue-400">
                    Achieve Goals With Precision & Speed
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <span className="text-xs text-gray-400">April 27, 2024</span>
                  <a href="#" className="block hover:text-blue-400">
                    Clients Achieve Goals With Precision
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2 text-blue-400"></i>
                6391 Elgin St. Celina, USA
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-2 text-blue-400"></i>
                +91 9220840792
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-2 text-blue-400"></i>
                +91 7676986903
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-blue-400"></i>
                infotech@example.com
              </li>
            </ul>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
              Get A Quote →
            </button>
          </div>
        </div>

        <div className="bg-blue-700 text-center py-4 mt-6">
          <div className="flex justify-between items-center container mx-auto px-4 text-sm">
            <p>All Rights Reserved.</p>
            <div className="space-x-4">
              <a href="#" className="hover:text-blue-300">
                Terms & Condition
              </a>
              <a href="#" className="hover:text-blue-300">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="fixed bottom-4 right-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-md">
              ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
