'use client'
import { useState } from 'react';
import { ChevronUp,ChevronRight } from 'lucide-react';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('');
  
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `This privacy policy sets out how ODILIA GLOBAL PRIVATE LIMITED uses and protects any information that you give ODILIA GLOBAL PRIVATE LIMITED when you visit their website and/or agree to purchase from them. ODILIA GLOBAL PRIVATE LIMITED is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement. ODILIA GLOBAL PRIVATE LIMITED may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you adhere to these changes.`
    },
    {
      id: 'collection',
      title: 'Information We Collect',
      content: `We may collect the following information:
      • Name
      • Contact information including email address
      • Demographic information such as postcode, preferences and interests, if required
      • Other information relevant to customer surveys and/or offers`
    },
    {
      id: 'usage',
      title: 'How We Use Your Information',
      content: `We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
      • Internal record keeping.
      • We may use the information to improve our products and services.
      • We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.
      • From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail.
      • We may use the information to customise the website according to your interests.
      
      We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures.`
    },
    {
      id: 'cookies',
      title: 'How We Use Cookies',
      content: `A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.

      We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
      
      Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
      
      You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.`
    },
    {
      id: 'control',
      title: 'Controlling Your Personal Information',
      content: `You may choose to restrict the collection or use of your personal information in the following ways:
      • Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes
      • If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at contact@riseonecom.in
      
      We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
      
      If you believe that any information we are holding on you is incorrect or incomplete, please write to 3RD FLOOR, D-2 SHOP NO 311, KRISHNA APRA ROYAL PLAZA, ALPHA 1 COMMERCIAL BELT, GREATER NOIDA Gautambuddha Nagar UTTAR PRADESH 201308, or contact us at 7011166413 or contact@riseonecom.in as soon as possible. We will promptly correct any information found to be incorrect.`
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center text-sm font-medium text-gray-500">
          <a href="/" className="hover:text-gray-700">
            Home
          </a>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-indigo-600">Privacy Policy</span>
        </nav>
      </div>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Privacy Policy</h1>
            <p className="text-purple-100 mt-4 text-center max-w-2xl mx-auto">
              Learn how we collect, use, and protect your personal information
            </p>
          </div>
          
          {/* Company Info */}
          <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="font-medium text-indigo-900">ODILIA GLOBAL PRIVATE LIMITED</div>
              <div className="text-sm text-indigo-700 mt-2 md:mt-0">Last Updated: May 13, 2025</div>
            </div>
          </div>
          
          {/* Accordion Privacy Policy */}
          <div className="px-6 py-8">
            <div className="space-y-4">
              {sections.map((section) => (
                <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white hover:bg-purple-50 transition-colors"
                    onClick={() => toggleSection(section.id)}
                  >
                    <span className="font-medium text-lg text-gray-900">{section.title}</span>
                    <ChevronUp
                      className={`w-5 h-5 text-purple-500 transition-transform ${
                        activeSection === section.id ? '' : 'transform rotate-180'
                      }`}
                    />
                  </button>
                  
                  {activeSection === section.id && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="bg-indigo-50 px-6 py-6 border-t border-indigo-100">
            <h3 className="text-lg font-medium text-indigo-900 mb-3">Contact Us</h3>
            <div className="text-sm text-gray-700 space-y-2">
              <p><span className="font-medium">Address:</span> 3RD FLOOR, D-2 SHOP NO 311, KRISHNA APRA ROYAL PLAZA, ALPHA 1 COMMERCIAL BELT, GREATER NOIDA Gautambuddha Nagar UTTAR PRADESH 201308</p>
              <p><span className="font-medium">Phone:</span> 7011166413</p>
              <p><span className="font-medium">Email:</span> contact@riseonecom.in</p>
            </div>
          </div>
          
          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
              <p>© 2025 ODILIA GLOBAL PRIVATE LIMITED. All rights reserved.</p>
              <div className="mt-2 md:mt-0 flex space-x-4">
                <a href="/termsandconditions" className="text-purple-600 hover:text-purple-800">Terms & Conditions</a>
                <a href="/contact" className="text-purple-600 hover:text-purple-800">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}