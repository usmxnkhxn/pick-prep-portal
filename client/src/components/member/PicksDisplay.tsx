
import React from 'react';
import PickCard from './PickCard';

const PicksDisplay = () => {
  const tutorialPick = {
    player: "Tutorial Player",
    stat: "Points",
    line: "25.5",
    pick: "Over",
    analysis: "This is where you'll see detailed analysis explaining why this pick has value. Our AI analyzes player performance, matchup data, and recent trends to provide you with the best betting opportunities."
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Today's Premium Picks</h2>
        <p className="text-gray-600">
          Get access to our expertly analyzed betting picks with detailed breakdowns
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PickCard
          player={tutorialPick.player}
          stat={tutorialPick.stat}
          line={tutorialPick.line}
          pick={tutorialPick.pick}
          analysis={tutorialPick.analysis}
          isTutorial={true}
        />
        
        {/* Empty state message */}
        <div className="col-span-full">
          <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-500 text-lg">
              No picks available yet - check back soon!
            </p>
            <p className="text-sm text-gray-400 mt-2">
              New picks are typically posted daily
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicksDisplay;
