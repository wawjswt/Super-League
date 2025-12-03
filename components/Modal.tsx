import React, { useState } from 'react';
import { X, MapPin, User, Trophy, LayoutTemplate, Quote, Users, Activity, BarChart3 } from 'lucide-react';
import { TeamData } from '../types';
import PitchVisualizer from './PitchVisualizer';
import StatRadar from './StatRadar';
import SquadList from './SquadList';

interface ModalProps {
  team: TeamData | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ team, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'squad'>('overview');

  if (!team) return null;

  // Calculate Team Overall Rating (Average of all squad players)
  const teamOvr = team.squad 
    ? Math.round(team.squad.reduce((sum, p) => sum + p.ovr, 0) / team.squad.length) 
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Content Wrapper */}
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Floating Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white/80 hover:text-white transition-all border border-white/10 backdrop-blur-md"
        >
            <X className="w-6 h-6" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto scrollbar-hide flex-1">
            
            {/* Header Area */}
            <div className="relative p-8 pt-16 pb-32 text-center overflow-hidden">
                <div 
                    className="absolute inset-0 opacity-20"
                    style={{ 
                        background: `linear-gradient(135deg, ${team.primaryColor} 0%, ${team.secondaryColor} 100%)` 
                    }}
                />
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                
                <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-2 uppercase tracking-wide drop-shadow-2xl px-4 leading-tight">{team.nameEN}</h2>
                    <p className="text-xl md:text-2xl text-yellow-500 font-display tracking-[0.2em] font-light">{team.nameCN}</p>
                </div>

                {/* Tab Navigation */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center z-20">
                     <div className="bg-slate-900/80 backdrop-blur border-t border-x border-slate-700 rounded-t-xl px-4 pt-2 flex gap-2">
                        <button 
                            onClick={() => setActiveTab('overview')}
                            className={`
                                flex items-center gap-2 px-6 py-3 rounded-t-lg text-sm font-bold uppercase tracking-wider transition-colors border-b-2
                                ${activeTab === 'overview' 
                                    ? 'text-white border-yellow-500 bg-white/5' 
                                    : 'text-slate-500 border-transparent hover:text-slate-300 hover:bg-white/5'}
                            `}
                        >
                            <Activity className="w-4 h-4" />
                            Overview
                        </button>
                        {team.squad && (
                            <button 
                                onClick={() => setActiveTab('squad')}
                                className={`
                                    flex items-center gap-2 px-6 py-3 rounded-t-lg text-sm font-bold uppercase tracking-wider transition-colors border-b-2
                                    ${activeTab === 'squad' 
                                        ? 'text-white border-yellow-500 bg-white/5' 
                                        : 'text-slate-500 border-transparent hover:text-slate-300 hover:bg-white/5'}
                                `}
                            >
                                <Users className="w-4 h-4" />
                                Squad
                            </button>
                        )}
                     </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-slate-900 min-h-[400px]">
                {activeTab === 'overview' ? (
                     <div className="px-6 pb-8 md:px-10 pt-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                            
                            {/* Left Column: Stats & Lore */}
                            <div className="space-y-6 flex flex-col">
                                <div className="bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-xl p-4 shadow-xl flex-1">
                                    <h4 className="text-slate-400 uppercase text-xs font-bold mb-4 tracking-wider text-center">Team Attributes</h4>
                                    <StatRadar stats={team.stats} color={team.primaryColor} />
                                </div>
                                <div className="bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-xl p-6 shadow-xl">
                                    <div className="flex items-start gap-4">
                                        <Quote className="w-8 h-8 text-yellow-500/40 flex-shrink-0" />
                                        <div className="space-y-3">
                                            <p className="text-slate-300 italic text-sm leading-relaxed font-serif">"{team.descriptionEN}"</p>
                                            <p className="text-slate-400 italic text-sm leading-relaxed font-serif">"{team.descriptionCN}"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Center Column: Pitch & OVR */}
                            <div className="flex flex-col items-center order-first lg:order-none mb-6 lg:mb-0">
                                <div className="bg-slate-800 border-4 border-slate-700 rounded-xl overflow-hidden shadow-2xl w-full max-w-[340px] transform hover:scale-[1.02] transition-transform duration-500">
                                    <PitchVisualizer 
                                        formation={team.formation} 
                                        primaryColor={team.primaryColor}
                                        secondaryColor={team.secondaryColor}
                                    />
                                    <div className="bg-slate-900 py-3 text-center border-t border-slate-700">
                                        <span className="text-yellow-400 font-display text-2xl tracking-widest font-bold">{team.formation}</span>
                                        <span className="text-slate-500 text-xs uppercase block tracking-wider mt-1">Formation Scheme</span>
                                    </div>
                                </div>
                                
                                {/* Team OVR Display */}
                                {teamOvr > 0 && (
                                    <div className="mt-4 flex items-center gap-3 bg-slate-800/80 px-5 py-2 rounded-full border border-slate-700 shadow-lg">
                                        <div className="flex flex-col items-center">
                                            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Team Rating</span>
                                            <span className="text-2xl font-bold font-display text-white">{teamOvr}</span>
                                        </div>
                                        <div className="h-8 w-px bg-slate-700"></div>
                                        <div className="flex gap-1">
                                             {Array.from({length: 5}).map((_, i) => (
                                                 <div key={i} className={`w-1.5 h-6 rounded-sm ${i < Math.floor(teamOvr/20) ? 'bg-emerald-500' : 'bg-slate-700'}`}></div>
                                             ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Right Column: Key Info */}
                            <div className="space-y-4">
                                <div className="bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-xl p-5 shadow-xl flex items-center gap-4 hover:bg-slate-800 transition-colors group">
                                    <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                        <User className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold">Manager</p>
                                        <p className="text-lg text-white font-bold">{team.coach}</p>
                                    </div>
                                </div>

                                <div className="bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-xl p-5 shadow-xl flex items-center gap-4 hover:bg-slate-800 transition-colors group">
                                    <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                                        <MapPin className="w-6 h-6 text-red-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold">Stadium</p>
                                        <p className="text-lg text-white font-bold">{team.stadium}</p>
                                        <p className="text-xs text-slate-400">Iconic Venue</p>
                                    </div>
                                </div>

                                <div className="bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-xl p-5 shadow-xl flex items-center gap-4 hover:bg-slate-800 transition-colors group">
                                    <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                                        <LayoutTemplate className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold">Tactical Style</p>
                                        <p className="text-lg text-white font-bold">{team.tacticalStyle}</p>
                                    </div>
                                </div>

                                <div className="bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-xl p-5 shadow-xl flex items-center gap-4 hover:bg-slate-800 transition-colors group">
                                    <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                                        <Trophy className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold">League Status</p>
                                        <p className="text-lg text-white font-bold">Founding Member</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="px-6 pb-8 md:px-10 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                         {team.squad ? (
                             <SquadList 
                                squad={team.squad} 
                                primaryColor={team.primaryColor}
                                secondaryColor={team.secondaryColor}
                             />
                         ) : (
                             <div className="text-center py-20 text-slate-500">
                                 <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                 <p>Squad data not available for this team.</p>
                             </div>
                         )}
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;