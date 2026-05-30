import React from 'react';

export default function Stats() {
  return (
    <div className="py-20 bg-slate-50">
      {/* Products for everyone */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-12">
           <div className="max-w-3xl">
             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Products for everyone
             </h2>
             <p className="text-gray-500 text-lg leading-relaxed">
                Built for scale, made by experts and secure by design. Bringing you maximum tax savings, unmatched speed and complete peace of mind.
             </p>
           </div>

           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mx-auto">
             {[
               { title: 'For\nIndividuals', color: 'bg-blue-50' },
               { title: 'For\nTax Experts', color: 'bg-purple-50' },
               { title: 'For\nSMEs', color: 'bg-green-50' },
               { title: 'For\nEnterprise', color: 'bg-blue-100' }
             ].map((item, i) => (
               <div key={i} className={`${item.color} rounded-2xl p-6 min-h-[200px] flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-pointer text-left`}>
                 <h3 className="text-2xl font-bold text-slate-900 whitespace-pre-line relative z-10">{item.title}</h3>
                 <div className="self-end mt-4 relative z-10 w-24 h-24 bg-white/50 rounded-xl flex items-center justify-center">
                    {/* Placeholder for vectors */}
                    <span className="text-4xl opacity-50">👥</span>
                 </div>
                 <div className="absolute bottom-4 right-4 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
