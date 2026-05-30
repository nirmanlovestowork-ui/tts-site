import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-bold text-lg tracking-tighter">
              Tax & Trade Solutions
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Products <ChevronDown className="ml-1 w-4 h-4 text-gray-400" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Resources <ChevronDown className="ml-1 w-4 h-4 text-gray-400" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Company <ChevronDown className="ml-1 w-4 h-4 text-gray-400" />
              </button>
            </div>
          </nav>
          <div className="flex items-center space-x-4">
             <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 hidden md:block">Log in</button>
            <button className="bg-white border border-blue-600 text-blue-600 px-5 py-2 rounded-md font-medium text-sm hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
