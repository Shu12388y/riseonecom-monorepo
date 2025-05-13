'use client'
import { useState } from 'react';
import { ChevronUp,ChevronRight } from 'lucide-react';

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState('');
  
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `For the purpose of these Terms and Conditions, The term "we", "us", "our" used anywhere on this page shall mean ODILIA GLOBAL PRIVATE LIMITED, whose registered/operational office is 3RD FLOOR, D-2 SHOP NO 311, KRISHNA APRA ROYAL PLAZA, ALPHA 1 COMMERCIAL BELT, GREATER NOIDA Gautambuddha Nagar UTTAR PRADESH 201308. "you", "your", "user", "visitor" shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.`
    },
    {
      id: 'usage',
      title: 'Website Usage',
      content: `Your use of the website and/or purchase from us are governed by following Terms and Conditions: The content of the pages of this website is subject to change without notice. Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.`
    },
    {
      id: 'risk',
      title: 'Risk Disclaimer',
      content: `Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through our website and/or product pages meet your specific requirements.`
    },
    {
      id: 'intellectual',
      title: 'Intellectual Property',
      content: `Our website contains material which is owned by or licensed to us. This material includes, but are not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions. All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.`
    },
    {
      id: 'unauthorized',
      title: 'Unauthorized Use',
      content: `Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense. From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information. You may not create a link to our website from another website or document without ODILIA GLOBAL PRIVATE LIMITED's prior written consent.`
    },
    {
      id: 'jurisdiction',
      title: 'Governing Law & Jurisdiction',
      content: `Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India. We, shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.`
    }
  ];

  const toggleSection = (id:string) => {
    if (activeSection === id) {
      setActiveSection('');
    } else {
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
          {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center text-sm font-medium text-gray-500">
          <a href="/" className="hover:text-gray-700">
            Home
          </a>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-indigo-600">Terms and Conditions</span>
        </nav>
      </div>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-500 px-6 py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Terms and Conditions</h1>
            <p className="text-blue-100 mt-4 text-center max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our website or services
            </p>
          </div>
          
          {/* Company Info */}
          <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="font-medium text-indigo-900">ODILIA GLOBAL PRIVATE LIMITED</div>
              <div className="text-sm text-indigo-700 mt-2 md:mt-0">Last Updated: May 13, 2025</div>
            </div>
          </div>
          
          {/* Accordion Terms */}
          <div className="px-6 py-8">
            <div className="space-y-4">
              {sections.map((section) => (
                <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white hover:bg-indigo-50 transition-colors"
                    onClick={() => toggleSection(section.id)}
                  >
                    <span className="font-medium text-lg text-gray-900">{section.title}</span>
                    <ChevronUp
                      className={`w-5 h-5 text-indigo-500 transition-transform ${
                        activeSection === section.id ? '' : 'transform rotate-180'
                      }`}
                    />
                  </button>
                  
                  {activeSection === section.id && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{section.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
              <p>© 2025 ODILIA GLOBAL PRIVATE LIMITED. All rights reserved.</p>
              <div className="mt-2 md:mt-0 flex space-x-4">
                <a href="/privacypolicy" className="text-indigo-600 hover:text-indigo-800">Privacy Policy</a>
                <a href="/contact" className="text-indigo-600 hover:text-indigo-800">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}