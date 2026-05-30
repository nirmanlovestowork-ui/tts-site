import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function FooterSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who should file an ITR?",
      a: "An individual whose annual income is more than the basic exemption limit of Rs 2.5 lakh should file an ITR. The basic exemption limit for senior citizens (60 years onwards and less than 80 years) is Rs 3 lakh, and for super senior citizens is Rs 5 lakh."
    },
    { q: "How can I claim deductions for tax saving?" },
    { q: "I receive my salary income after deduction of TDS. Am I required to file an income tax return?" },
    { q: "How do I check TDS details from my form 26AS?" },
    { q: "How can I claim an income tax refund?" },
    { q: "Is my data filed with Tax & Trade Solutions secure?" },
    { q: "What are the GST services offered by Tax & Trade Solutions?" },
    { q: "How to e-verify my ITR?" },
    { q: "How to choose a suitable mutual fund for SIP?" },
    { q: "How does Tax & Trade One invoicing software help small businesses?" },
  ];

  return (
    <>
      <div className="bg-white py-24">
        {/* Call to Action */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
             
             {/* Background decorative elements */}
             <div className="absolute left-0 bottom-0 w-64 h-64 bg-green-50 rounded-tr-full opacity-50 pointer-events-none"></div>

             <div className="relative z-10 text-center md:text-left mb-12 md:mb-0">
               <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                 Ready to get started?
               </h2>
               <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold transition-all hover:shadow-lg text-lg">
                 Try for free
               </button>
             </div>

             <div className="relative z-10 w-full max-w-sm flex justify-center md:justify-end">
                {/* Illustration Placeholder */}
                <div className="relative w-72 h-64">
                   <div className="absolute right-0 bottom-0 w-48 h-48 bg-gray-100 rounded-xl border border-gray-200"></div>
                   <div className="absolute right-10 bottom-10 w-32 h-32 bg-white rounded-xl shadow-md border border-gray-100 flex flex-col items-center justify-center p-4">
                     <div className="w-16 h-16 bg-blue-100 rounded-full mb-2 flex items-center justify-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-sm"></div>
                     </div>
                     <div className="h-2 w-full bg-gray-200 rounded"></div>
                   </div>
                   <div className="absolute left-4 bottom-0 w-24 h-48">
                      {/* Character representation */}
                      <svg viewBox="0 0 100 200" className="w-full h-full text-slate-800">
                        <circle cx="50" cy="40" r="20" fill="currentColor" />
                        <rect x="30" y="65" width="40" height="70" rx="10" fill="currentColor" />
                        <rect x="35" y="140" width="12" height="60" fill="#ec4899" />
                        <rect x="53" y="140" width="12" height="60" fill="#ec4899" />
                      </svg>
                   </div>
                   <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full mix-blend-multiply opacity-50 blur-xl"></div>
                   <div className="absolute bottom-20 right-20 w-16 h-16 bg-green-400 rounded-full mix-blend-multiply opacity-50 blur-xl"></div>
                </div>
             </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-4">
                <button 
                  className="w-full flex justify-between items-center py-4 text-left font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="pr-8">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                {openFaq === i && faq.a && (
                  <div className="pb-4 text-gray-500 text-sm leading-relaxed pr-12">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#465362] text-gray-300 py-16 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
             <div className="col-span-2 lg:col-span-1">
               <div className="text-white font-bold text-xl mb-6">Tax & Trade Solutions</div>
               <p className="mb-4 text-xs">Follow us on</p>
               <div className="flex gap-4">
                  <Facebook size={18} className="hover:text-white cursor-pointer" />
                  <Twitter size={18} className="hover:text-white cursor-pointer" />
                  <Linkedin size={18} className="hover:text-white cursor-pointer" />
                  <Instagram size={18} className="hover:text-white cursor-pointer" />
                  <Youtube size={18} className="hover:text-white cursor-pointer" />
               </div>
               <div className="mt-8 text-xs">
                 <p className="font-semibold text-white mb-2">Have a query?</p>
                 <a href="#" className="hover:text-white transition-colors">Support</a>
               </div>
             </div>

             <div>
               <h4 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Products</h4>
               <ul className="space-y-3 text-xs">
                 <li><a href="#" className="hover:text-white transition-colors">Individuals</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Income Tax E-Filing</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Tax Planning</a></li>
               </ul>
             </div>

             <div>
               <h4 className="text-white font-semibold mb-4 text-transparent select-none uppercase text-xs tracking-wider">Spacer</h4>
               <ul className="space-y-3 text-xs">
                 <li><a href="#" className="hover:text-white transition-colors">Income Tax Filing</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Income Tax App android</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Income Tax</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Section 80 deductions</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Income Tax for NRI</a></li>
               </ul>
             </div>

             <div>
               <h4 className="text-white font-semibold mb-4 text-transparent select-none uppercase text-xs tracking-wider">Spacer</h4>
               <ul className="space-y-3 text-xs">
                 <li><a href="#" className="hover:text-white transition-colors">Tax & Trade GST</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">GST Login</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">GST software</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">New GST returns</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">e-invoicing</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Input Tax Credit</a></li>
               </ul>
             </div>

             <div>
               <h4 className="text-white font-semibold mb-4 text-transparent select-none uppercase text-xs tracking-wider">Spacer</h4>
               <ul className="space-y-3 text-xs">
                 <li><a href="#" className="hover:text-white transition-colors">Enterprises</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Tax & Trade GST</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Tax & Trade E-Waybill</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">e-Invoicing Software</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Tax & Trade TDS</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">e-Way Bill Registration</a></li>
               </ul>
             </div>
             
             <div>
                <h4 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Company</h4>
                <ul className="space-y-3 text-xs mb-8">
                  <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Media & Press</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">User reviews</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Engineering blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Tax & Trade Library</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FinTech glossary</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Tax & Trade Chronicles</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">GST Product Guides</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Trust & Safety</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Tax & Trade Solutions(Saudi Arabia)</a></li>
                </ul>
             </div>
          </div>

          <div className="border-t border-gray-600 pt-8 mt-12 grid md:grid-cols-5 gap-8">
             <div>
               <h4 className="text-white font-semibold mb-4 text-xs tracking-wider">CAs</h4>
               <ul className="space-y-3 text-xs">
                 <li><a href="#" className="hover:text-white transition-colors">CA partner program</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Tax & Trade GST</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Tax & Trade TDS</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Tax & Trade Cloud</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Tax & Trade Pro App</a></li>
               </ul>
             </div>
             <div>
               <h4 className="text-white font-semibold mb-4 text-xs tracking-wider">SMEs</h4>
               <ul className="space-y-3 text-xs">
                 <li><a href="#" className="hover:text-white transition-colors">Tax & Trade GST</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Tax & Trade One</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Billing Software</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Invoicing Software</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Services for businesses</a></li>
               </ul>
             </div>
             <div>
               <h4 className="text-white font-semibold mb-4 text-xs tracking-wider">Tax & Trade Services</h4>
               <ul className="space-y-3 text-xs">
                 <li><a href="#" className="hover:text-white transition-colors">Tax filing for professionals</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Tax filing for traders</a></li>
               </ul>
             </div>
             <div>
               <h4 className="text-white font-semibold mb-4 text-xs tracking-wider">HSN Lookup</h4>
               <ul className="space-y-3 text-xs">
                 <li><a href="#" className="hover:text-white transition-colors">HSN Code Finder</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Cement HSN Code</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Transport HSN Code</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Plastic HSN Code</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Cloth GST Rate</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Books GST Rate</a></li>
               </ul>
             </div>
          </div>

          <div className="border-t border-gray-600 pt-8 mt-12 mb-8">
             <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-wider">Resources & Guides</h4>
             <div className="grid md:grid-cols-4 gap-8">
                <div>
                   <ul className="space-y-3 text-xs">
                     <li><a href="#" className="text-blue-400 hover:text-white transition-colors font-semibold">GST Resources</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">GST Registration</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">GST Returns</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">GSTR Procedure</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">GST News & Announcement</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">GSTR 9 Annual Returns</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">GST Payments & Refunds</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Invoicing Under GST</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">GSTR-2B</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">GSTR-3B</a></li>
                   </ul>
                </div>
                <div>
                   <ul className="space-y-3 text-xs">
                     <li><a href="#" className="text-blue-400 hover:text-white transition-colors font-semibold">ITR Resources</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Income Tax Slab</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Form 26AS</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">What is Form 16</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Salary Income</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">How to File TDS Returns</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">New Income Tax Portal</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">incometax.gov.in</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Income from Selling Shares</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Income Tax Due Dates</a></li>
                   </ul>
                </div>
                <div>
                   <ul className="space-y-3 text-xs">
                     <li><a href="#" className="text-blue-400 hover:text-white transition-colors font-semibold">Mutual Fund Resources</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">How to Invest in Mutual Funds</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Mutual fund Types</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">ELSS</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">SIP Mutual Funds</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Hedge Funds</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Debt Funds</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">NFO</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">What is AMFI</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">What is NAV</a></li>
                   </ul>
                </div>
                <div>
                   <ul className="space-y-3 text-xs">
                     <li><a href="#" className="text-blue-400 hover:text-white transition-colors font-semibold">Business Resources</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Memorandum of Understanding (MOU)</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Mudra Yojana</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Inflation & Deflation</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Loan Agreement</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Succession Certificate</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Solvency Certificate</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Debt Settlement Agreement</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Rental Agreement</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Letters Of Credit</a></li>
                   </ul>
                </div>
             </div>
          </div>

          <div className="border-t border-gray-600 py-8 mb-8">
             <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-wider">Tools</h4>
             <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs justify-between">
                <a href="#" className="hover:text-white">Income Tax Calculator</a>
                <a href="#" className="hover:text-white">PPF Calculator</a>
                <a href="#" className="hover:text-white">HRA calculator</a>
                <a href="#" className="hover:text-white">Find HSN code</a>
                <a href="#" className="hover:text-white">EMI Calculator</a>
                <a href="#" className="hover:text-white">GST Number Search</a>
                <a href="#" className="hover:text-white">FD Calculator</a>
                <a href="#" className="hover:text-white">Tax Saving Calculator</a>
                <a href="#" className="hover:text-white">Mutual fund calculator</a>
                <a href="#" className="hover:text-white">IFSC Code Search</a>
                <a href="#" className="hover:text-white">RD Calculator</a>
                <a href="#" className="hover:text-white">Get IT refund status</a>
                <a href="#" className="hover:text-white">HSN Code Finder</a>
                <a href="#" className="hover:text-white">Generate rent receipts</a>
                <a href="#" className="hover:text-white">Gold Rates Today</a>
                <a href="#" className="hover:text-white">Salary Calculator</a>
                <a href="#" className="hover:text-white">SIP calculator</a>
                <a href="#" className="hover:text-white">Home Loan EMI Calculator</a>
                <a href="#" className="hover:text-white">Currency Converter</a>
                <a href="#" className="hover:text-white">EPF Calculator</a>
                <a href="#" className="hover:text-white">GST calculator</a>
                <a href="#" className="hover:text-white">NPS Calculator</a>
                <a href="#" className="hover:text-white">Compound Interest Calculator</a>
                <a href="#" className="hover:text-white">GST Number Search By Name</a>
             </div>
          </div>

          <div className="text-[10px] text-gray-500 pb-12 leading-relaxed">
             <p className="mb-4">
               Tax & Trade Solutions offers taxation & financial solutions to individuals, businesses, organizations & chartered accountants in India. Tax & Trade Solutions serves 1.5+ Million happy customers, 20000+ CAs & tax experts & 10000+ businesses across India.
             </p>
             <p className="mb-4">
               Efiling Income Tax Returns(ITR) is made easy with Tax & Trade Solutions platform. Just upload your form 16, claim your deductions and get your acknowledgment number online. You can efile income tax return on your income from salary, house property, capital gains, business & profession and income from other sources. Further you can also file TDS returns, generate Form-16, use our Tax Calculator software, claim HRA, check refund status and generate rent receipts for Income Tax Filing.
             </p>
             <p className="mb-4">
               CAs, experts and businesses can get GST ready with Tax & Trade GST software & certification course. Our GST Software helps CAs, tax experts & business to manage returns & invoices in an easy manner. Our Goods & Services Tax course includes tutorial videos, guides and expert assistance to help you in mastering Goods and Services Tax. Tax & Trade Solutions can also help you in getting your business registered for Goods & Services Tax Law.
             </p>
             <p className="mb-8">
               Save taxes with Tax & Trade Solutions by investing in tax saving mutual funds (ELSS) online. Our experts suggest the best funds and you can get high returns by investing directly or through SIP. Download Black by Tax & Trade App to file returns from your mobile phone.
             </p>
             <div className="flex justify-between items-center border-t border-gray-600 pt-8">
               <p>Office Address - Defmacro Software Private Limited, C-24/4, Ground Floor, Room No. 2, Vikas Puri, New Delhi, New Delhi, Delhi-110018, India</p>
               <div className="flex gap-4">
                 <div className="text-center"><span className="text-white font-bold block text-sm">ISO 27001</span> Data Center</div>
                 <div className="text-center"><span className="text-white font-bold block text-sm">SSL Certified</span> 128-bit encryption</div>
               </div>
             </div>
          </div>

          <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold border-t border-gray-600 pt-8 flex justify-between">
             <span>TAX & TRADE SOLUTIONS IS A PRODUCT BY DEFMACRO SOFTWARE PVT. LTD.</span>
             <div className="space-x-4">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of use</a>
             </div>
          </div>
        </div>
      </footer>
    </>
  );
}
