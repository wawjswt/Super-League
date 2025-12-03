import React from 'react';
import { Player } from '../types';
import { User, Shield, Zap, Target, Brain, Footprints } from 'lucide-react';

interface SquadListProps {
  squad: Player[];
  primaryColor: string;
  secondaryColor: string;
}

const SquadList: React.FC<SquadListProps> = ({ squad, primaryColor, secondaryColor }) => {
  const starters = squad.filter(p => p.role === 'Starter');
  const subs = squad.filter(p => p.role !== 'Starter');

  const AttributeIcon = ({ attr, val }: { attr: string, val: number }) => {
     let Icon = User;
     if (attr === 'ATT') Icon = Target;
     if (attr === 'DEF') Icon = Shield;
     if (attr === 'SPD') Icon = Zap;
     if (attr === 'CRE') Icon = Brain;
     if (attr === 'DIS') Icon = Shield; // Reuse or find better

     const getColor = (v: number) => {
         if (v >= 90) return 'text-yellow-400';
         if (v >= 80) return 'text-emerald-400';
         return 'text-slate-400';
     };

     return (
        <div className="flex flex-col items-center group relative cursor-help">
            <div className={`text-[10px] font-bold ${getColor(val)}`}>{attr}</div>
            <div className="text-xs font-mono text-white">{val}</div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full mb-1 hidden group-hover:block bg-black/80 px-2 py-1 rounded text-[10px] text-white whitespace-nowrap z-10">
                {attr}: {val}
            </div>
        </div>
     );
  };

  const PlayerRow = ({ player }: { player: Player }) => (
    <div className="grid grid-cols-12 gap-2 items-center p-3 hover:bg-white/5 rounded-lg transition-colors border-b border-white/5 last:border-0">
        <div className="col-span-1 text-slate-400 font-mono text-xs font-bold">{player.position}</div>
        <div className="col-span-4 flex flex-col">
            <span className="text-sm font-bold text-white">{player.name.split('(')[0]}</span>
            <span className="text-xs text-slate-500">{player.name.match(/\((.*?)\)/)?.[1] || ''}</span>
        </div>
        <div className="col-span-2 text-center">
            <div className={`
                inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm
                ${player.ovr >= 95 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' : 
                  player.ovr >= 90 ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50' :
                  'bg-slate-700 text-slate-300'}
            `}>
                {player.ovr}
            </div>
        </div>
        <div className="col-span-5 flex justify-between px-2">
             <AttributeIcon attr="ATT" val={player.attributes.ATT} />
             <AttributeIcon attr="MID" val={player.attributes.MID} />
             <AttributeIcon attr="DEF" val={player.attributes.DEF} />
             <AttributeIcon attr="SPD" val={player.attributes.SPD} />
        </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col space-y-6">
        {/* Starters */}
        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
            <h3 className="text-xs font-bold uppercase tracking-wider text-yellow-500 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
                Starting XI
            </h3>
            <div className="space-y-1">
                {starters.map((p, i) => <PlayerRow key={i} player={p} />)}
            </div>
        </div>

        {/* Subs */}
        <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
             <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Substitutes</h3>
             <div className="space-y-1">
                {subs.map((p, i) => <PlayerRow key={i} player={p} />)}
            </div>
        </div>
    </div>
  );
};

export default SquadList;