import React from 'react';
import { Lock, Shield, Database, CheckShield, Globe } from 'lucide-react';

export default function ExpertsAndSecurity() {
  return (
    <div className="bg-white">
      {/* Designed by experts */}
      <div className="py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
               Designed by experts
             </h2>
             <p className="text-gray-500 text-lg leading-relaxed">
               With our solutions, you don't have to worry about complying with the latest regulations. 60+ in-house tax experts, co-build and test every product feature. Over 60,000 tax experts give us constant feedback which helps us stay on top of every new tax clause.
             </p>
          </div>
        </div>
      </div>

      {/* Committed to security */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
             <div className="flex-1">
               <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight max-w-sm">
                 Committed to security
               </h2>
               <p className="text-gray-500 leading-relaxed max-w-lg">
                 We value your data as if it were ours. All our certifications and licenses, including GSP, were awarded after rigorous scrutiny of our systems and multiple VAPT audits.
               </p>
             </div>
             
             <div className="flex-[1.2] flex flex-wrap gap-8 justify-center lg:justify-end items-center opacity-60">
                {/* Badges placeholder */}
                <div className="w-24 h-24 border-4 border-gray-300 rounded-full flex items-center justify-center flex-col p-2 text-center text-[10px] font-bold text-gray-400">
                  <span className="text-2xl text-gray-500 block mb-1">GSP</span>
                  Certified
                </div>
                <div className="w-24 h-24 border-4 border-gray-300 rounded-full flex items-center justify-center flex-col p-2 text-center text-[10px] font-bold text-gray-400 relative">
                   <div className="absolute w-[110%] h-[110%] border border-dashed border-gray-300 rounded-full"></div>
                  <span className="text-lg text-gray-500 block">ISO</span>
                  <span>27001</span>
                </div>
                <div className="w-24 h-24 border-2 border-gray-300 flex items-center justify-center flex-col p-2 text-center text-[10px] font-bold text-gray-400">
                  <span className="text-lg text-gray-500 block">AICPA</span>
                  <span>SOC 2</span>
                </div>
                <div className="flex items-center text-gray-500 font-bold ml-4">
                  <Lock className="w-8 h-8 mr-2" />
                  <div className="text-left leading-tight">
                    <span className="text-xl">SSL</span><br/><span className="text-sm tracking-widest">SECURE</span>
                  </div>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 pt-8">
             <div>
               <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-6">
                 <Shield size={24} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">Encryption</h3>
               <p className="text-gray-500 leading-relaxed">
                 Your data is transmitted across SSL certified pathways. We are SOC 2 compliant.
               </p>
             </div>

             <div>
               <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center mb-6">
                 <Lock size={24} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">Privacy</h3>
               <p className="text-gray-500 leading-relaxed">
                 We do not share your or your clients' data with unaffiliated third parties for their own purposes.
               </p>
             </div>

             <div>
               <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                 <Database size={24} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">Data Storage</h3>
               <p className="text-gray-500 leading-relaxed">
                 We use ISO 27001 certified data centres, which are quarterly VAPT tested and externally audited.
               </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
