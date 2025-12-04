import React from 'react';
import { Shield, User, MapPin, Swords } from 'lucide-react';
import { TeamData } from '../types';

interface TeamCardProps {
  team: TeamData;
  onClick: (team: TeamData) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ team, onClick }) => {
  return (
    <div 
      onClick={() => onClick(team)}
      className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-yellow-500/50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1"
      style={{
        backgroundImage: 'radial-gradient(circle at top right, rgba(255, 255, 255, 0.05) 0%, transparent 30%)',
      }}
    >
      {/* Hexagon Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'28\' height=\'49\' viewBox=\'0 0 28 49\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg id=\'hexagons\' fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'nonzero\'%3E%3Cpath d=\'M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.99-7.5L26 15v18.5L13 41 0 33.5V15z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      ></div>

      {/* Colored Banner Header */}
      <div 
        className="h-2 w-full absolute top-0 left-0"
        style={{ background: `linear-gradient(to right, ${team.primaryColor}, ${team.secondaryColor})` }}
      />

      <div className="p-5 mt-2 relative">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold font-display text-white group-hover:text-yellow-400 transition-colors">
              {team.nameEN}
            </h3>
            <p className="text-sm font-light text-slate-400 font-display tracking-wider">
              {team.nameCN}
            </p>
          </div>
          <div className="p-2 rounded-full bg-slate-700/50">
             <Shield className="w-5 h-5 text-slate-300" style={{ color: team.primaryColor }} />
          </div>
        </div>

        <div className="space-y-2 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-slate-500" />
            <span className="font-semibold">{team.coach}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-slate-500" />
            <span className="truncate">{team.stadium}</span>
          </div>
          <div className="flex items-center gap-2">
            <Swords className="w-4 h-4 text-slate-500" />
            <span className="text-yellow-500/80">{team.tacticalStyle}</span>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default TeamCard;