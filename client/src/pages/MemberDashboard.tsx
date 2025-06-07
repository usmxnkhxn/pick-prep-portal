
import React from 'react';
import Layout from '../components/Layout';
import PicksDisplay from '../components/member/PicksDisplay';
import { config } from '../config/config';
import { TrendingUp, Star, Target, Clock } from 'lucide-react';

const MemberDashboard = () => {
  const stats = [
    { name: 'Win Rate', value: '68.3%', icon: TrendingUp, color: 'text-green-600' },
    { name: 'This Week', value: '12-5', icon: Target, color: 'text-blue-600' },
    { name: 'Premium Picks', value: '127', icon: Star, color: 'text-purple-600' },
    { name: 'Last Updated', value: '2 hrs ago', icon: Clock, color: 'text-gray-600' },
  ];

  return (
    <Layout capperName={config.capper.name} logoUrl={config.capper.logoUrl}>
      <div className="px-4 sm:px-0">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="text-center">
            <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4">
              {config.capper.logoUrl ? (
                <img 
                  src={config.capper.logoUrl} 
                  alt="Logo" 
                  className="h-16 w-16 rounded-full object-cover"
                />
              ) : (
                <span className="text-2xl font-bold text-white">
                  {config.capper.name.charAt(0)}
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to {config.capper.name}
            </h1>
            <p className="text-lg text-gray-600">
              Your premium destination for winning sports betting picks
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className="h-12 w-12 bg-gray-50 rounded-lg flex items-center justify-center">
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Picks Display */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <PicksDisplay />
        </div>
      </div>
    </Layout>
  );
};

export default MemberDashboard;
