import React from 'react';
import { PiggyBank, Zap, BadgeCheck, FileCheck, Home, FileText, ArrowRight } from 'lucide-react';

export default function Features() {
  return (
    <div className="bg-slate-50">
      {/* Designed to deliver */}
      <div className="py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight max-w-3xl">
              All our products are designed to deliver
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <PiggyBank size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Maximum tax savings</h3>
              <p className="text-gray-500 leading-relaxed">
                Businesses save upto 2-7% of their net GST with us every month. Individuals can save upto ₹86,500 by filing their tax returns through us.
              </p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 px-3">
                 <div className="w-full border-t-2 border-green-600 relative">
                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-100 px-2 text-xl">⏳</div>
                 </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Unparalleled speed</h3>
              <p className="text-gray-500 leading-relaxed">
                Experience 3x faster GST filings, 5x faster invoice reconciliation and 10x faster e-waybill generation. Individuals file their tax returns in under 3 min.
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <BadgeCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Accurate Compliance</h3>
              <p className="text-gray-500 leading-relaxed">
                Our products are designed and tested by in-house tax experts, ensuring every new clause, form or feature is updated and sent to you over the cloud.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Looking for services */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Looking for ITR filing Services?
          </h2>
          <p className="text-gray-500 mb-16">
            India's best tax experts at your service for a tailored, accurate and premium tax filing experience.
          </p>

          <div className="max-w-2xl mx-auto text-left">
            <h3 className="text-xl font-bold text-slate-900 text-center mb-8">For You</h3>
            
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex gap-6 p-6 rounded-2xl hover:bg-white transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center shrink-0">
                  <FileCheck size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">ITR Filing Assistance</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Get Expert assistance in tax filing for Salaried and self-employed individuals, NRIs, Capital gains, and more.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-6 p-6 rounded-2xl hover:bg-white transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                  <Home size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">TDS on Sale of Property</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Hassle-free 26QB compliance on sale of property
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-6 p-6 rounded-2xl hover:bg-white transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center shrink-0">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Legal Services</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    For drafting and review of legal documents such as Sale deed, Vendor agreement, Co-founders agreement etc
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center justify-center mx-auto transition-colors">
                See all services <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
