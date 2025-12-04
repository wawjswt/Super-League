
import React from 'react';
import { Scroll, Trophy, Users, Clock, Shield, AlertTriangle, Medal, Crown, Star, Footprints, Hand } from 'lucide-react';

const BracketNode = ({ label, sub, type }: { label: string, sub?: string, type?: 'home' | 'away' | 'final' }) => (
    <div className={`
        relative px-4 py-3 rounded-lg border flex flex-col justify-center min-w-[140px] z-10 shadow-md
        ${type === 'final' 
            ? 'bg-yellow-500 text-black border-yellow-400 text-center h-28 w-48' 
            : 'bg-slate-900/90 border-slate-600 h-20 w-40'}
    `}>
        <span className={`font-bold ${type === 'final' ? 'text-black text-xl' : 'text-white text-sm'}`}>{label}</span>
        {sub && <span className={`text-xs uppercase tracking-wider ${type === 'final' ? 'text-black/60' : 'text-slate-400'}`}>{sub}</span>}
    </div>
);

const Connector = ({ className }: { className: string }) => (
    <div className={`absolute border-white/40 ${className}`}></div>
);

const RulesView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto pb-20 animate-in fade-in duration-500 px-4">
      
      {/* Header */}
      <div className="text-center py-12 border-b border-white/10 mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-slate-800 rounded-full mb-6 ring-4 ring-slate-700 shadow-xl">
          <Scroll className="w-10 h-10 text-yellow-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-widest uppercase mb-4">
          League Regulations
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-serif italic">
          "The Official Rules & Regulations of Pantheon Super League 2.0"
        </p>
      </div>

      {/* Main Grid: Rules & Honors */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        
        {/* Left Column: Core Rules */}
        <div className="lg:col-span-2 space-y-8">
            
            {/* Chapter 1: Overview */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-slate-600 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Crown className="w-24 h-24 text-white" />
                </div>
                <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-yellow-500">I.</span> League Overview
                </h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                    The Pantheon Super League (PSL) is a premier closed league featuring 10 elite squads built around the tactical philosophies of history's greatest managers. The league aims to determine the greatest tactical system and player combination in football history.
                </p>
            </div>

            {/* Chapter 2: Regular Season */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-yellow-500">II.</span> Regular Season
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                        <div className="flex items-center gap-2 mb-2 text-blue-400 font-bold uppercase text-sm">
                            <Users className="w-4 h-4" /> Format
                        </div>
                        <ul className="space-y-2 text-slate-300 text-sm">
                            <li className="flex justify-between"><span>Teams</span> <span className="font-bold text-white">10</span></li>
                            <li className="flex justify-between"><span>System</span> <span className="font-bold text-white">Double Round-Robin</span></li>
                            <li className="flex justify-between"><span>Total Rounds</span> <span className="font-bold text-white">18</span></li>
                            <li className="flex justify-between"><span>Total Matches</span> <span className="font-bold text-white">90</span></li>
                        </ul>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                        <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold uppercase text-sm">
                            <Trophy className="w-4 h-4" /> Points System
                        </div>
                        <div className="flex justify-between items-center text-center">
                            <div className="px-4 py-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                                <div className="text-xl font-bold text-emerald-400">3</div>
                                <div className="text-[10px] uppercase text-slate-400">Win</div>
                            </div>
                            <div className="px-4 py-2 bg-slate-700/30 rounded-lg border border-slate-600">
                                <div className="text-xl font-bold text-slate-200">1</div>
                                <div className="text-[10px] uppercase text-slate-400">Draw</div>
                            </div>
                            <div className="px-4 py-2 bg-red-500/10 rounded-lg border border-red-500/20">
                                <div className="text-xl font-bold text-red-400">0</div>
                                <div className="text-[10px] uppercase text-slate-400">Loss</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800/30 rounded-xl p-5">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Tie-Breakers Priority</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Goal Difference', 'Goals Scored', 'Head-to-Head', 'Fair Play'].map((item, i) => (
                            <div key={i} className="flex items-center">
                                <span className="px-3 py-1 bg-slate-700 rounded text-sm text-slate-200">{i+1}. {item}</span>
                                {i < 3 && <div className="w-4 h-0.5 bg-slate-600 mx-2"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Details & Honors */}
        <div className="space-y-8">
            
            {/* Chapter 4: Match Regulations */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6">
                <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-yellow-500">IV.</span> Match Regulations
                </h2>
                
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <Clock className="w-6 h-6 text-slate-400 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-slate-200">Duration</h3>
                            <p className="text-sm text-slate-400 mt-1">
                                Regular: 90 mins + Stoppage<br/>
                                Playoffs: +30 mins ET & Penalties if drawn.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Users className="w-6 h-6 text-slate-400 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-slate-200">Substitutions</h3>
                            <p className="text-sm text-slate-400 mt-1">
                                5 subs per match.<br/>
                                +1 extra sub allowed in Extra Time.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <AlertTriangle className="w-6 h-6 text-slate-400 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-slate-200">Discipline</h3>
                            <p className="text-sm text-slate-400 mt-1">
                                5 Yellow Cards = 1 Match Ban.<br/>
                                Red Card = 1+ Match Ban.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chapter 5: Honors */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg">
                <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-yellow-500">V.</span> Honors
                </h2>
                
                <div className="space-y-4">
                    <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20 flex items-center gap-3">
                        <Trophy className="w-6 h-6 text-yellow-500" />
                        <div>
                            <div className="font-bold text-white">The Pantheon Cup</div>
                            <div className="text-xs text-yellow-500/80">Playoff Champion</div>
                        </div>
                    </div>
                    <div className="p-3 bg-slate-700/30 rounded-lg border border-slate-600/30 flex items-center gap-3">
                        <Shield className="w-6 h-6 text-slate-300" />
                        <div>
                            <div className="font-bold text-slate-200">League Shield</div>
                            <div className="text-xs text-slate-400">Regular Season Winner</div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 pt-2">
                         <div className="p-2 bg-slate-800 rounded border border-slate-700 flex flex-col items-center text-center">
                             <Footprints className="w-5 h-5 text-emerald-400 mb-1" />
                             <span className="text-xs font-bold text-slate-300">Golden Boot</span>
                         </div>
                         <div className="p-2 bg-slate-800 rounded border border-slate-700 flex flex-col items-center text-center">
                             <Star className="w-5 h-5 text-blue-400 mb-1" />
                             <span className="text-xs font-bold text-slate-300">Playmaker</span>
                         </div>
                         <div className="p-2 bg-slate-800 rounded border border-slate-700 flex flex-col items-center text-center">
                             <Hand className="w-5 h-5 text-orange-400 mb-1" />
                             <span className="text-xs font-bold text-slate-300">Golden Glove</span>
                         </div>
                         <div className="p-2 bg-slate-800 rounded border border-slate-700 flex flex-col items-center text-center">
                             <Medal className="w-5 h-5 text-purple-400 mb-1" />
                             <span className="text-xs font-bold text-slate-300">Season MVP</span>
                         </div>
                    </div>
                </div>
            </div>

        </div>
      </div>

      {/* Chapter 3: Playoffs (Visual Bracket) - Full Width at Bottom */}
      <div className="w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-slate-800 px-8 py-6 border-b border-slate-700 flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-display font-bold text-white flex items-center gap-3">
                        <span className="text-yellow-500">III.</span> The Championship Cup
                    </h2>
                    <p className="text-slate-400 mt-1">
                        Top 6 teams qualify. Top 2 receive a bye to the Semi-Finals.
                    </p>
                </div>
                <Trophy className="w-10 h-10 text-yellow-500/20" />
            </div>

            {/* Pitch Background Container */}
            <div 
                className="relative py-16 px-4 md:px-12 flex justify-center items-center min-h-[500px]"
                style={{
                    backgroundColor: '#059669', // Emerald 600
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.07) 50px, rgba(255,255,255,0.07) 100px)',
                    boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)'
                }}
            >
                {/* Center Circle Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4 border-white/20 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white/20 -translate-x-1/2 pointer-events-none"></div>

                {/* Bracket Visualization */}
                <div className="w-full max-w-6xl flex justify-between items-center relative z-10">
                    
                    {/* Quarter Finals */}
                    <div className="flex flex-col gap-24 relative">
                        <div className="absolute -top-12 left-0 text-sm font-bold text-white/80 uppercase tracking-widest bg-black/30 px-3 py-1 rounded">Quarter-Finals</div>
                        
                        {/* QF A */}
                        <div className="relative group">
                            <BracketNode label="3rd Place" sub="Home" />
                            <div className="h-4"></div>
                            <BracketNode label="5th Place" sub="Away" />
                            
                            {/* Lines */}
                            <Connector className="border-r border-t border-b h-[calc(100%-4rem)] w-12 top-8 right-[-3rem] rounded-r-xl" />
                            <Connector className="border-b w-12 top-1/2 right-[-3rem]" />
                        </div>

                         {/* QF B */}
                         <div className="relative group">
                            <BracketNode label="4th Place" sub="Home" />
                            <div className="h-4"></div>
                            <BracketNode label="6th Place" sub="Away" />

                            {/* Lines */}
                            <Connector className="border-r border-t border-b h-[calc(100%-4rem)] w-12 top-8 right-[-3rem] rounded-r-xl" />
                            <Connector className="border-b w-12 top-1/2 right-[-3rem]" />
                        </div>
                    </div>

                    {/* Semi Finals */}
                    <div className="flex flex-col gap-48 relative mx-12">
                         <div className="absolute -top-12 left-0 text-sm font-bold text-white/80 uppercase tracking-widest bg-black/30 px-3 py-1 rounded">Semi-Finals</div>
                        {/* SF A */}
                        <div className="relative">
                             <BracketNode label="1st Place" sub="Home Advantage" />
                             <div className="my-2 text-xs text-white/80 text-center font-bold bg-black/20 rounded px-2 py-1 mx-auto w-fit">vs Winner QF-A</div>
                             <Connector className="border-r border-b h-32 w-12 top-10 right-[-3rem] rounded-br-xl" />
                        </div>
                         {/* SF B */}
                         <div className="relative">
                             <BracketNode label="2nd Place" sub="Home Advantage" />
                             <div className="my-2 text-xs text-white/80 text-center font-bold bg-black/20 rounded px-2 py-1 mx-auto w-fit">vs Winner QF-B</div>
                             <Connector className="border-r border-t h-32 w-12 top-10 -translate-y-[5rem] right-[-3rem] rounded-tr-xl" />
                        </div>
                    </div>

                    {/* Final */}
                    <div className="relative pl-12 flex flex-col items-center">
                         <div className="absolute -top-24 text-sm font-bold text-yellow-300 uppercase tracking-widest bg-black/50 px-4 py-2 rounded-full border border-yellow-500/50 shadow-lg mb-4 text-center">
                             Grand Final<br/><span className="text-[10px] text-white/80">Neutral Venue</span>
                         </div>
                         <BracketNode label="The Pantheon Cup" sub="Champion" type="final" />
                         <Connector className="border-b w-12 top-1/2 left-[-3rem]" />
                    </div>

                </div>
            </div>
      </div>

    </div>
  );
};

export default RulesView;
