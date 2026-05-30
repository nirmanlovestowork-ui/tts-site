import React from 'react';
import { Star, FileText, UserCheck, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#f4f7fc]">
      {/* Background shape */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path fill="#e2e8f0" d="M47.7,-57.2C59.6,-47.3,65.3,-29.4,69.5,-10.8C73.8,7.9,76.5,27.3,68.9,42.5C61.3,57.7,43.3,68.7,24.6,73.1C6,77.5,-13.2,75.3,-30.3,68C-47.5,60.6,-62.5,48,-71.4,31.4C-80.3,14.8,-83.1,-5.9,-77.3,-23.4C-71.6,-40.8,-57.4,-55.1,-41.8,-63.9C-26.2,-72.6,-9.3,-75.8,5.4,-82.1C20.1,-88.4,35.8,-67.2,47.7,-57.2Z" transform="translate(200 200) scale(1.1)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 relative z-10 text-center">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-6 mx-auto">
               <span className="w-2 h-2 rounded-full bg-green-500"></span>
               <span>₹1766.69 Cr Refund processed last year</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-12 leading-tight">
              Get Maximum Tax Refund
            </h1>

            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Self ITR filing</h3>
                  <p className="text-slate-500 mb-6 flex items-center">
                    <CheckCircle2 size={16} className="text-green-500 mr-2" />
                    100% accuracy
                  </p>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  File Now
                </button>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <UserCheck size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Hire an expert</h3>
                  <p className="text-slate-500 mb-6 flex items-center">
                    <CheckCircle2 size={16} className="text-green-500 mr-2" />
                    ITR filed in 24 hours
                  </p>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-t border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-8 text-center sm:text-left">
            <div className="flex-1 min-w-[200px]">
              <p className="text-sm text-gray-500 mb-2">We are now live for ITR filing on</p>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                 {/* Dummy icons for Platforms */}
                 <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">P</div>
                 <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">G</div>
                 <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">Z</div>
              </div>
            </div>
            <div className="flex-[1.5] flex justify-between gap-4">
              <div>
                <div className="flex items-center text-2xl font-bold text-slate-900 justify-center sm:justify-start">
                  <Star className="text-yellow-400 w-6 h-6 mr-1" fill="currentColor" />
                  4.9/5
                </div>
                <p className="text-sm text-gray-500">45K+ Reviews</p>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
              <div>
                <div className="text-2xl font-bold text-slate-900">₹5 Cr+</div>
                <p className="text-sm text-gray-500">Life Time ITR Refund Delivered</p>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
              <div>
                <div className="text-2xl font-bold text-slate-900">100+</div>
                <p className="text-sm text-gray-500">Users Trust Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
