
import React from 'react';
import { Trophy, Shield, Swords } from 'lucide-react';

interface MatchNodeProps {
  round: string;
  homeTeam: string;
  awayTeam: string;
  homeRank?: string;
  awayRank?: string;
  location?: string;
  isFinal?: boolean;
  type?: 'qf' | 'sf' | 'final';
}

const MatchNode: React.FC<MatchNodeProps> = ({ round, homeTeam, awayTeam, homeRank, awayRank, location, type = 'qf' }) => {
  const isFinal = type === 'final';
  
  return (
    <div className={`
      relative border rounded-xl overflow-hidden shadow-lg transition-all hover:scale-[1.02]
      ${isFinal 
        ? 'bg-gradient-to-b from-yellow-500/20 to-slate-900 border-yellow-500/50 w-64' 
        : 'bg-slate-800/80 border-slate-600 w-56'}
    `}>
      {/* Header */}
      <div className={`
        px-3 py-1 text-xs font-bold uppercase tracking-widest text-center border-b
        ${isFinal ? 'bg-yellow-500 text-black border-yellow-600' : 'bg-slate-700 text-slate-400 border-slate-600'}
      `}>
        {round}
      </div>

      {/* Teams */}
      <div className="p-4 space-y-3">
        {/* Home */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isFinal ? 'bg-yellow-500/20 text-yellow-400' : 'bg-slate-900 text-slate-500'}`}>
              {homeRank}
            </span>
            <span className={`font-bold text-sm ${isFinal ? 'text-white text-lg' : 'text-slate-200'}`}>
              {homeTeam}
            </span>
          </div>
          {type === 'sf' && <span className="text-[10px] text-slate-500 uppercase">Host</span>}
        </div>

        {/* VS */}
        <div className="flex items-center gap-2 opacity-30">
           <div className="h-px bg-white flex-1"></div>
           <span className="text-[10px] uppercase">VS</span>
           <div className="h-px bg-white flex-1"></div>
        </div>

        {/* Away */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isFinal ? 'bg-yellow-500/20 text-yellow-400' : 'bg-slate-900 text-slate-500'}`}>
              {awayRank}
            </span>
             <span className={`font-bold text-sm ${isFinal ? 'text-white text-lg' : 'text-slate-200'}`}>
              {awayTeam}
            </span>
          </div>
        </div>
      </div>

      {/* Footer / Location */}
      {location && (
        <div className="bg-slate-900/50 px-3 py-1.5 text-center">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider flex items-center justify-center gap-1">
               <Shield className="w-3 h-3" /> {location}
            </span>
        </div>
      )}
    </div>
  );
};

const PlayoffBracket: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 border border-slate-700 rounded-3xl p-8 overflow-x-auto">
        <div className="min-w-[800px] flex justify-between items-center relative">
            
            {/* Column 1: Quarter Finals */}
            <div className="flex flex-col gap-24 relative z-10">
                 {/* QF A */}
                 <div className="relative">
                    <MatchNode 
                        round="Quarter-Final A" 
                        homeTeam="Orange Revolution" homeRank="3"
                        awayTeam="Elegant Cannons" awayRank="5"
                        location="Camp Nou"
                    />
                    {/* Connector Line out to SF A */}
                    <div className="absolute top-1/2 right-0 w-12 h-px bg-slate-600 translate-x-full"></div>
                    <div className="absolute top-1/2 right-0 w-px h-[calc(50%+3rem)] bg-slate-600 translate-x-[3rem] translate-y-0"></div>
                 </div>

                 {/* QF B */}
                 <div className="relative">
                    <MatchNode 
                        round="Quarter-Final B" 
                        homeTeam="Crimson Dynasty" homeRank="4"
                        awayTeam="Obsidian Fortress" awayRank="6"
                        location="Old Trafford"
                    />
                    {/* Connector Line out to SF B */}
                    <div className="absolute top-1/2 right-0 w-12 h-px bg-slate-600 translate-x-full"></div>
                    <div className="absolute top-1/2 right-0 w-px h-[calc(50%+3rem)] bg-slate-600 translate-x-[3rem] -translate-y-full origin-bottom"></div>
                 </div>
            </div>

            {/* Column 2: Semi Finals */}
            <div className="flex flex-col gap-48 relative z-10 ml-12">
                {/* SF A */}
                <div className="relative">
                     {/* Incoming Line */}
                     <div className="absolute top-1/2 left-0 w-8 h-px bg-slate-600 -translate-x-full"></div>
                     
                     <MatchNode 
                        round="Semi-Final A"
                        homeTeam="Azure Control" homeRank="1"
                        awayTeam="Winner QF-A" awayRank="?"
                        location="Etihad Stadium"
                        type="sf"
                    />

                    {/* Outgoing to Final */}
                    <div className="absolute top-1/2 right-0 w-12 h-px bg-slate-600 translate-x-full"></div>
                    <div className="absolute top-1/2 right-0 w-px h-32 bg-slate-600 translate-x-[3rem] translate-y-0"></div>
                </div>

                {/* SF B */}
                <div className="relative">
                     {/* Incoming Line */}
                     <div className="absolute top-1/2 left-0 w-8 h-px bg-slate-600 -translate-x-full"></div>

                     <MatchNode 
                        round="Semi-Final B"
                        homeTeam="White Galaxy" homeRank="2"
                        awayTeam="Winner QF-B" awayRank="?"
                        location="Stade de France"
                        type="sf"
                    />

                    {/* Outgoing to Final */}
                    <div className="absolute top-1/2 right-0 w-12 h-px bg-slate-600 translate-x-full"></div>
                    <div className="absolute top-1/2 right-0 w-px h-32 bg-slate-600 translate-x-[3rem] -translate-y-full origin-bottom"></div>
                </div>
            </div>

            {/* Column 3: Grand Final */}
            <div className="relative z-10 ml-12">
                 {/* Incoming Line */}
                 <div className="absolute top-1/2 left-0 w-8 h-px bg-slate-600 -translate-x-full"></div>
                 
                 <div className="relative">
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-yellow-500 animate-pulse">
                        <Trophy className="w-12 h-12" />
                    </div>
                    <MatchNode 
                        round="The Grand Final"
                        homeTeam="Winner SF-A" homeRank="?"
                        awayTeam="Winner SF-B" awayRank="?"
                        location="Wembley Stadium"
                        type="final"
                    />
                    <div className="mt-4 flex justify-center gap-4 text-[10px] text-slate-500 uppercase tracking-widest">
                        <div className="flex items-center gap-1"><Swords className="w-3 h-3"/> Single Leg</div>
                        <div className="flex items-center gap-1"><Shield className="w-3 h-3"/> Neutral</div>
                    </div>
                 </div>
            </div>

        </div>
    </div>
  );
};

export default PlayoffBracket;
