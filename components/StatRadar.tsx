import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarRadiusAxis,
  Tooltip
} from 'recharts';
import { TeamStats } from '../types';

interface StatRadarProps {
  stats: TeamStats;
  color: string;
}

const StatRadar: React.FC<StatRadarProps> = ({ stats, color }) => {
  const data = [
    { subject: 'ATT', A: stats.attack, fullMark: 100 },
    { subject: 'DEF', A: stats.defense, fullMark: 100 },
    { subject: 'MID', A: stats.midfield, fullMark: 100 },
    { subject: 'SPD', A: stats.pace, fullMark: 100 },
    { subject: 'CRE', A: stats.creativity, fullMark: 100 },
    { subject: 'DIS', A: stats.discipline, fullMark: 100 },
  ];

  return (
    <div className="w-full h-64 font-display">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#475569" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#f8fafc' }} 
            itemStyle={{ color: color }}
            formatter={(value: number) => [value, 'Rating']}
          />
          <Radar
            name="Stats"
            dataKey="A"
            stroke={color}
            strokeWidth={2}
            fill={color}
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatRadar;
