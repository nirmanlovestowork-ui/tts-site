import React from 'react';
import { ArrowLeft, ArrowRight, ArrowRightCircle } from 'lucide-react';

export default function TestimonialsAndAwards() {
  return (
    <div className="bg-slate-50 py-24 overflow-hidden">
      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 max-w-2xl leading-tight">
            Trusted by experts and businesses
          </h2>
          <div className="hidden md:flex gap-4">
             <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-slate-900 hover:border-slate-300 transition-colors bg-white">
               <ArrowLeft size={20} />
             </button>
             <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-slate-900 hover:border-slate-300 transition-colors bg-white">
               <ArrowRight size={20} />
             </button>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {/* Card 1 (Partial left) */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 min-w-[350px] w-1/3 shrink-0 snap-start flex flex-col justify-between hidden lg:flex">
             <div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">trust our SMB</h3>
               <p className="text-gray-500 mb-8 leading-relaxed line-clamp-4">
                 We customers, track my ng 7 to 8 days to do a matter of hours. The any given point in time.
               </p>
             </div>
             <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-600">P</div>
                <div>
                  <div className="font-bold text-slate-900">ton</div>
                </div>
             </div>
             <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm cursor-pointer hover:underline">
               arge Enterprises <ArrowRight className="ml-1 w-4 h-4" />
             </div>
          </div>

          {/* Card 2 (Center) */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 min-w-[350px] lg:w-1/3 flex-1 shrink-0 snap-start flex flex-col justify-between">
             <div>
               <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">Over <span className="text-blue-600">1,200</span> enterprises use our compliance stack</h3>
               <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                 Tax & Trade Solutions has made core GST returns simple and fast 3 years. I use it for my entire family's income tax returns. Very effective<br/>and least time consuming.
               </p>
             </div>
             <div>
               <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/100?img=11" alt="Manmohan" className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Mr. Manmohan</div>
                    <div className="text-xs text-gray-500">Tax Payer, Kochi, Kerala</div>
                  </div>
               </div>
               <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm cursor-pointer hover:underline">
                 File ITRs yourself or seek expert assistance <ArrowRight className="ml-1 w-4 h-4" />
               </div>
             </div>
          </div>

          {/* Card 3 (Right) */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 min-w-[350px] lg:w-1/3 flex-1 shrink-0 snap-start flex flex-col justify-between">
             <div>
               <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">Over <span className="text-blue-600">5 million</span> tax payers have filed with us</h3>
               <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                 I have been using Tax & Trade Solutions' DIY e-filing of ITR for implemented literally in a couple of days. I am impressed with time-saving features embedded in the software like advanced reconciliation of 2A data with invoices.
               </p>
             </div>
             <div>
               <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/100?img=12" alt="Anil" className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Mr. Anil Chakravarthy</div>
                    <div className="text-xs text-gray-500">Tax Suite user</div>
                  </div>
               </div>
               <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm cursor-pointer hover:underline">
                 Explore products for tax experts <ArrowRight className="ml-1 w-4 h-4" />
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Headlines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 max-w-2xl leading-tight">
            Making the Headlines
          </h2>
          <div className="hidden md:flex gap-4">
             <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-slate-900 hover:border-slate-300 transition-colors bg-white">
               <ArrowLeft size={20} />
             </button>
             <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-slate-900 hover:border-slate-300 transition-colors bg-white">
               <ArrowRight size={20} />
             </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
           {[1, 2, 3, 4].map((item, i) => (
             <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center aspect-[4/5]">
               <div className="text-sm font-bold text-gray-400 mb-6">{i >= 2 ? '2024' : '2023'}</div>
               <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                 <svg className="absolute inset-0 w-full h-full text-yellow-500" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                 </svg>
                 <div className="text-xs font-bold text-slate-700 leading-tight">
                    {i === 1 ? "Most Trusted\nBrand award" : i === 2 ? "Best B2B\nCampaign" : "Great Indian\nEmployee\nEngagement\nteam"}
                 </div>
               </div>
               <div className="text-xs text-gray-400 uppercase tracking-widest mt-auto">
                 {i === 1 ? "Marksmen Daily" : i === 2 ? "ET Brand Disruption Awards" : "CHRO"}
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
