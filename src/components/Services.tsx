import React from 'react';
import { Cloud, FileText, Globe, ArrowRight, Wallet, Users, Calculator, FileSpreadsheet } from 'lucide-react';

export default function Services() {
  return (
    <div className="py-16 bg-white">
      {/* AI Solutions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16 max-w-3xl mx-auto">
          AI-powered finance solutions for individuals and teams worldwide
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Cloud size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Tax & Trade<br/>Finance Cloud</h3>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg font-medium transition-colors">
              Learn more
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <FileText size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">ITR Filing</h3>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg font-medium transition-colors">
              File Now
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Global e-<br/>Invoicing</h3>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg font-medium transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* Platform Features Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 max-w-2xl">
            India's largest tax and financial services platform
          </h2>
          <p className="text-gray-500 mb-12">Explore our wide range of software solutions</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Wallet className="w-8 h-8 text-orange-500" />,
                bg: "bg-orange-50",
                title: "Self ITR Filing",
                desc: "ITR filing for every tax situation"
              },
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                bg: "bg-blue-50",
                title: "Expert Filing",
                desc: "ITR filed by India's top Tax Experts"
              },
              {
                icon: <Calculator className="w-8 h-8 text-cyan-500" />,
                bg: "bg-cyan-50",
                title: "Taxcloud",
                desc: "ITR filing software for Tax Experts"
              },
              {
                icon: <FileSpreadsheet className="w-8 h-8 text-purple-500" />,
                bg: "bg-purple-50",
                title: "GST software",
                desc: "GSTR-1 to GSTR-9 filings made 3x faster"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className={`w-14 h-14 ${feature.bg} rounded-lg flex items-center justify-center mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 mb-6">{feature.desc}</p>
                </div>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Know more <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-20 border-t border-gray-200 pt-10 text-center">
             <p className="text-sm font-medium text-gray-500 mb-8">Trusted by your favorite brands</p>
             <div className="flex flex-wrap justify-center gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
               {/* Since I cant load real logos easily, I will use formatted text placeholders that look like logos */}
               <span className="text-xl font-bold font-serif tracking-tight">SWIGGY</span>
               <span className="text-xl font-bold tracking-widest uppercase">Myntra</span>
               <span className="text-2xl font-black text-red-600 lowercase tracking-tighter">zomato</span>
               <span className="text-xl font-bold tracking-tight italic text-blue-600">Flipkart</span>
               <span className="text-2xl font-bold uppercase tracking-tight">apollo</span>
               <span className="text-2xl font-black uppercase text-red-700 tracking-wider">BOSCH</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
