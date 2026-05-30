import React, { useState } from 'react';
import { User, Building2, UserCog, Building, Receipt, FileSpreadsheet, Truck, CheckSquare } from 'lucide-react';

export default function PlugAndPlay() {
  const [activeTab, setActiveTab] = useState('enterprise');

  const tabs = [
    { id: 'individuals', label: 'Individuals', icon: <User size={20} /> },
    { id: 'enterprise', label: 'Enterprise', icon: <Building2 size={20} /> },
    { id: 'tax-expert', label: 'Tax Expert', icon: <UserCog size={20} /> },
    { id: 'smes', label: 'SMEs', icon: <Building size={20} /> }
  ];

  const features = [
    {
      title: "Tax & Trade e-Invoicing",
      desc: "Fast, dependable and affordable solution",
      icon: <Receipt size={20} />
    },
    {
      title: "Tax & Trade GST",
      desc: "G1 to G9 filing, 10x faster reconciliations & reports",
      icon: <FileSpreadsheet size={20} />
    },
    {
      title: "Tax & Trade E-Waybill",
      desc: "10x faster waybill solution for large businesses",
      icon: <Truck size={20} />
    },
    {
      title: "Tax & Trade ITC",
      desc: "End-to-end solution to maximize ITC for businesses",
      icon: <CheckSquare size={20} />
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Plug and Play
          </h2>
          <p className="text-gray-500 text-lg">
            An exhaustive portfolio of cloud based products you could use from day one for personal and business compliance
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="bg-slate-50 rounded-2xl p-2 mb-12 flex flex-wrap justify-center border border-gray-100 max-w-4xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-200 min-w-[120px]
                ${activeTab === tab.id 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
                }`}
            >
              <div className={`mb-2 ${activeTab === tab.id ? 'text-white' : 'text-slate-400'}`}>
                 {tab.icon}
              </div>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-slate-100 rounded-3xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm cursor-pointer hover:border-blue-500 border border-transparent transition-colors group text-center flex flex-col items-center">
                  <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
