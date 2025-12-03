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
    >
      {/* Colored Banner Header */}
      <div 
        className="h-2 w-full absolute top-0 left-0"
        style={{ background: `linear-gradient(to right, ${team.primaryColor}, ${team.secondaryColor})` }}
      />

      <div className="p-5 mt-2">
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