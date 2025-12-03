import React, { useState, useEffect, useCallback } from 'react';
import { fetchLeagueData } from './services/geminiService';
import { TeamData } from './types';
import TeamCard from './components/TeamCard';
import Modal from './components/Modal';
import { RefreshCcw, Trophy, Loader2, AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const [teams, setTeams] = useState<TeamData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<TeamData | null>(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    setTeams([]);
    try {
      const data = await fetchLeagueData();
      setTeams(data.teams);
    } catch (err) {
      setError("Failed to generate league data. Please check your API key or try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0f172a] to-black text-white selection:bg-yellow-500/30">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/20">
              <Trophy className="w-6 h-6 text-black fill-black" />
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold tracking-wide uppercase text-white">Pantheon</h1>
              <span className="text-xs text-yellow-500 font-bold tracking-[0.3em] uppercase block -mt-1">Super League 2.0</span>
            </div>
          </div>
          
          <button 
            onClick={loadData}
            disabled={loading}
            className={`
              flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm transition-all
              ${loading 
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                : 'bg-white text-black hover:bg-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.5)] active:scale-95'
              }
            `}
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCcw className="w-4 h-4" />}
            {loading ? 'Initializing...' : 'Reset League'}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {error && (
          <div className="max-w-2xl mx-auto bg-red-500/10 border border-red-500/50 text-red-200 p-6 rounded-xl flex items-center gap-4 mb-8">
            <AlertCircle className="w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg">Scouting Error</h3>
              <p>{error}</p>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-slate-700 border-t-yellow-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-slate-600" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-2">Summoning Legends</h2>
              <p className="text-slate-400">Analyzing tactical data for the new 10 teams...</p>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 mb-4">
                The Icons Have Arrived
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                The Chairman has spoken. Explore the data of the 10 legendary squads selected for the Pantheon 2.0 era.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teams.map((team) => (
                <TeamCard 
                  key={team.id} 
                  team={team} 
                  onClick={setSelectedTeam} 
                />
              ))}
            </div>
            
            <div className="mt-16 border-t border-white/10 pt-8 text-center">
                <p className="text-slate-500 text-sm">
                    Powered by Gemini 2.5 Flash • Pantheon Football Association © {new Date().getFullYear()}
                </p>
            </div>
          </>
        )}
      </main>

      <Modal team={selectedTeam} onClose={() => setSelectedTeam(null)} />
    </div>
  );
};

export default App;