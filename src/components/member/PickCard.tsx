
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

interface PickCardProps {
  player: string;
  stat: string;
  line: string;
  pick: string;
  analysis: string;
  isTutorial?: boolean;
}

const PickCard = ({ player, stat, line, pick, analysis, isTutorial = false }: PickCardProps) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{player}</CardTitle>
          {isTutorial && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              Tutorial
            </Badge>
          )}
        </div>
        <div className="flex items-center space-x-4 mt-2">
          <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600">
              {player.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-600">{stat}</div>
            <div className="font-semibold">
              {pick} {line}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">Analysis</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {analysis}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PickCard;
