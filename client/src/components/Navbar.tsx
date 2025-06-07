
import React from 'react';
import { Link, useLocation } from 'wouter';
import { Upload, Home, History } from 'lucide-react';

interface NavbarProps {
  capperName: string;
  logoUrl?: string;
}

const Navbar = ({ capperName, logoUrl }: NavbarProps) => {
  const [location] = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/add-picks', label: 'Add Picks', icon: Upload },
    { path: '/history', label: 'History', icon: History },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {logoUrl ? (
                <img className="h-8 w-8 rounded-lg" src={logoUrl} alt={`${capperName} logo`} />
              ) : (
                <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{capperName.charAt(0)}</span>
                </div>
              )}
              <span className="ml-3 text-xl font-semibold text-gray-900">{capperName}</span>
            </div>
          </div>
          
          <div className="flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.path;
              
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
