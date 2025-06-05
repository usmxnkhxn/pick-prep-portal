
import React from 'react';
import Layout from '../components/Layout';
import { config } from '../config/config';
import { TrendingUp, Upload, Clock, Users } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { name: 'Total Picks', value: '127', icon: TrendingUp, change: '+12%' },
    { name: 'This Week', value: '23', icon: Clock, change: '+5%' },
    { name: 'Active Subscribers', value: '1,284', icon: Users, change: '+8%' },
    { name: 'Win Rate', value: '68.3%', icon: TrendingUp, change: '+2.1%' },
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
              Welcome back, {config.capper.name}!
            </h1>
            <p className="text-lg text-gray-600">
              Ready to add today's winning picks to your community?
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
                  <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                  <span className="text-gray-500 text-sm ml-1">from last week</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/add-picks"
              className="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
            >
              <div className="flex items-center">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Upload className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Add New Picks</h3>
                  <p className="text-gray-500">Upload today's betting selections</p>
                </div>
              </div>
            </a>
            
            <a
              href="/history"
              className="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
            >
              <div className="flex items-center">
                <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <Clock className="h-5 w-5 text-gray-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">View History</h3>
                  <p className="text-gray-500">See your previous picks</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
