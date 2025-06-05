
import React from 'react';
import Layout from '../components/Layout';
import { config } from '../config/config';
import { Calendar, TrendingUp, TrendingDown, Clock } from 'lucide-react';

const History = () => {
  // Mock data - this would come from your API
  const mockPicks = [
    {
      id: 1,
      date: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop',
      picks: [
        { player: 'LeBron James', stat: 'Points', line: 25.5, pick: 'Over', result: 'Win' },
        { player: 'Stephen Curry', stat: 'Assists', line: 6.5, pick: 'Under', result: 'Loss' },
      ],
      status: 'completed'
    },
    {
      id: 2,
      date: '2024-01-14',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop',
      picks: [
        { player: 'Giannis Antetokounmpo', stat: 'Rebounds', line: 11.5, pick: 'Over', result: 'Win' },
        { player: 'Luka Dončić', stat: 'Points', line: 28.5, pick: 'Over', result: 'Win' },
      ],
      status: 'completed'
    },
    {
      id: 3,
      date: '2024-01-13',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop',
      picks: [
        { player: 'Jimmy Butler', stat: 'Points', line: 22.5, pick: 'Under', result: 'Pending' },
      ],
      status: 'pending'
    },
  ];

  const getResultIcon = (result: string) => {
    switch (result) {
      case 'Win':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'Loss':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-yellow-600" />;
    }
  };

  const getResultColor = (result: string) => {
    switch (result) {
      case 'Win':
        return 'text-green-600 bg-green-50';
      case 'Loss':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-yellow-600 bg-yellow-50';
    }
  };

  return (
    <Layout capperName={config.capper.name} logoUrl={config.capper.logoUrl}>
      <div className="px-4 sm:px-0">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Picks History</h1>
          <p className="text-lg text-gray-600">
            Review your previous picks and their performance
          </p>
        </div>

        {/* History List */}
        <div className="space-y-6">
          {mockPicks.map((entry) => (
            <div key={entry.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-900">
                      {new Date(entry.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    entry.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Image */}
                  <div className="lg:col-span-1">
                    <img
                      src={entry.image}
                      alt="Pick screenshot"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>

                  {/* Picks Details */}
                  <div className="lg:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Extracted Picks</h3>
                    <div className="space-y-3">
                      {entry.picks.map((pick, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{pick.player}</div>
                            <div className="text-sm text-gray-600">
                              {pick.stat} - {pick.line} ({pick.pick})
                            </div>
                          </div>
                          <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${getResultColor(pick.result)}`}>
                            {getResultIcon(pick.result)}
                            <span className="ml-1">{pick.result}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {mockPicks.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No picks yet</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by adding your first pick.</p>
            <div className="mt-6">
              <a
                href="/add-picks"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Add Picks
              </a>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default History;
