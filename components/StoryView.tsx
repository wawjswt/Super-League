
import React, { useMemo, useState } from 'react';
import { Scroll, Mic2, ArrowRight, ArrowLeft, Search } from 'lucide-react';
import { STORY_DATA, StorySection, StoryTable } from '../data/story';
import { STORY_DATA_PART_2 } from '../data/story1';
import { STORY_DATA_PART_3 } from '../data/story2';
import { STORY_DATA_PART_4 } from '../data/story3';
import { STORY_DATA_PART_5 } from '../data/story4';
import { STORY_DATA_PART_6 } from '../data/story5';
import { STORY_DATA_PART_7 } from '../data/story6';
import { STORY_DATA_PART_8 } from '../data/story7';
import { STORY_DATA_PART_9 } from '../data/story8';
import PlayoffBracket from './PlayoffBracket';

// Merge all story chapters
const RAW_STORY_DATA = [...STORY_DATA, ...STORY_DATA_PART_2, ...STORY_DATA_PART_3, ...STORY_DATA_PART_4, ...STORY_DATA_PART_5, ...STORY_DATA_PART_6, ...STORY_DATA_PART_7, ...STORY_DATA_PART_8, ...STORY_DATA_PART_9];

interface StoryViewProps {
  activeChapterId: number;
  onChapterChange: (id: number) => void;
}

const StoryTableView: React.FC<{ table: StoryTable }> = ({ table }) => {
    return (
        <div className="overflow-x-auto my-4 rounded-lg border border-slate-700 shadow-xl">
            <table className="w-full text-left text-sm">
                <thead className="bg-slate-800 text-yellow-500 uppercase tracking-wider font-bold">
                    <tr>
                        {table.headers.map((header, i) => (
                            <th key={i} className="px-4 py-3 border-b border-slate-700">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                    {table.rows.map((row, i) => (
                        <tr key={i} className="bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
                            {row.map((cell, j) => (
                                <td key={j} className={`px-4 py-3 text-slate-300 ${j === 0 ? 'font-mono text-slate-500' : ''}`}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const StoryView: React.FC<StoryViewProps> = ({ activeChapterId, onChapterChange }) => {
  const [jumpPage, setJumpPage] = useState('');

  // Ensure chapters are sorted by ID to guarantee correct flow
  const sortedChapters = useMemo(() => {
    return [...RAW_STORY_DATA].sort((a, b) => a.id - b.id);
  }, []);

  // Find the index of the current chapter
  const currentIndex = sortedChapters.findIndex(c => c.id === activeChapterId);
  
  // Fallback to first chapter if ID not found, or if currentIndex is -1
  const activeChapter = currentIndex !== -1 ? sortedChapters[currentIndex] : sortedChapters[0];
  const safeCurrentIndex = currentIndex !== -1 ? currentIndex : 0;

  const handleNext = () => {
    const nextIndex = (safeCurrentIndex + 1) % sortedChapters.length;
    const nextChapterId = sortedChapters[nextIndex].id;
    onChapterChange(nextChapterId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrev = () => {
    // If index is 0, wrap around to length - 1
    const prevIndex = (safeCurrentIndex - 1 + sortedChapters.length) % sortedChapters.length;
    const prevChapterId = sortedChapters[prevIndex].id;
    onChapterChange(prevChapterId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJumpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(jumpPage, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= sortedChapters.length) {
      onChapterChange(sortedChapters[pageNum - 1].id);
      setJumpPage('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20 animate-in fade-in duration-500">
      
      {/* Title Section */}
      <div className="text-center space-y-4 py-10 border-b border-white/10">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-500/10 rounded-full mb-4 ring-1 ring-yellow-500/50">
          <Scroll className="w-8 h-8 text-yellow-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white tracking-wider uppercase">
          Pantheon Chronicles
        </h1>
        
        <div className="flex flex-col items-center justify-center gap-6 mt-6">
            {/* Navigation Buttons */}
            <div className="flex items-center gap-6">
                <button 
                    onClick={handlePrev}
                    className="p-3 rounded-full border border-slate-700 text-slate-400 hover:border-yellow-500 hover:text-yellow-500 transition-all hover:scale-110 active:scale-95"
                    title="Previous Chapter"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="min-w-[280px]">
                    <p className="text-xl text-yellow-500 font-serif italic">
                        {activeChapter.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">
                        Page {safeCurrentIndex + 1} of {sortedChapters.length}
                    </p>
                </div>
                <button 
                    onClick={handleNext}
                    className="p-3 rounded-full border border-slate-700 text-slate-400 hover:border-yellow-500 hover:text-yellow-500 transition-all hover:scale-110 active:scale-95"
                    title="Next Chapter"
                >
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>

            {/* Quick Jump Input */}
            <form onSubmit={handleJumpSubmit} className="flex items-center gap-2">
                <div className="relative">
                    <input 
                        type="number"
                        min="1"
                        max={sortedChapters.length}
                        placeholder="Jump to page..."
                        value={jumpPage}
                        onChange={(e) => setJumpPage(e.target.value)}
                        className="w-32 bg-slate-900 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-center text-white focus:border-yellow-500 outline-none transition-colors"
                    />
                    <Search className="w-3 h-3 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                <button 
                    type="submit"
                    className="text-xs font-bold text-slate-400 hover:text-yellow-500 uppercase tracking-wider px-3 py-1.5 rounded-full border border-transparent hover:border-slate-700 transition-all"
                >
                    Go
                </button>
            </form>
        </div>
      </div>

      {/* Story Content */}
      <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl space-y-10 leading-relaxed text-lg text-slate-300 font-serif relative overflow-hidden min-h-[800px]">
        
        {/* Background ambience */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500" key={activeChapter.id}>
             
            {/* Global Intro */}
            {activeChapter.intro && (
                <div className="space-y-4">
                    {activeChapter.intro.map((line, idx) => (
                        <p key={idx} className="italic text-slate-500 border-l-2 border-slate-700 pl-4 whitespace-pre-line">{line}</p>
                    ))}
                </div>
            )}

            {/* Manager Speech (Start) */}
            {activeChapter.managerSpeech && (
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-yellow-500 font-display font-bold text-xl uppercase tracking-wide">
                        <Mic2 className="w-5 h-5" /> {activeChapter.managerSpeech.speaker}
                    </div>
                    <div className="pl-6 border-l border-yellow-500/30 space-y-2">
                         {activeChapter.managerSpeech.lines.map((line, idx) => (
                             <p key={idx} className={idx === activeChapter.managerSpeech!.lines.length - 1 ? "font-bold text-white" : ""}>
                                 {line}
                             </p>
                         ))}
                    </div>
                </div>
            )}

            {/* Sections Loop */}
            {activeChapter.sections.map((section: StorySection, idx: number) => (
                <div key={idx} className="pt-8 border-t border-white/5 first:border-0 first:pt-0">
                    <h2 className="text-2xl text-yellow-100 font-display font-bold mb-4 flex items-center gap-3">
                        <span className="text-yellow-500">{section.title.split('.')[0]}.</span> 
                        {section.title.split('.').slice(1).join('.')} 
                        <span className="text-sm opacity-50 font-sans font-normal">{section.subtitle}</span>
                    </h2>

                    {/* Q&A Context Box */}
                    {section.context && (
                        <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-6 border-b border-slate-800 pb-2">
                            {section.context}
                        </div>
                    )}

                    {/* Stage Directions / Intro */}
                    {section.intro && (
                         <div className={`mb-6 ${section.context ? 'bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 text-slate-400' : 'italic text-slate-500'}`}>
                            {section.intro.map((line, i) => (
                                <p key={i} className={i > 0 ? "mt-4 whitespace-pre-line" : "whitespace-pre-line"}>{line}</p>
                            ))}
                         </div>
                    )}

                    {/* Dialogues */}
                    <div className="space-y-4 pl-4">
                        {section.dialogues.map((dlg, dIdx) => (
                            <div key={dIdx} className="group">
                                <span className={`${dlg.colorClass} font-bold uppercase text-sm block mb-1`}>{dlg.speaker}</span>
                                {dlg.customType === 'bracket' ? (
                                    <div className="my-6">
                                        <PlayoffBracket />
                                    </div>
                                ) : dlg.table ? (
                                    <StoryTableView table={dlg.table} />
                                ) : (
                                    <p className="text-white whitespace-pre-line">
                                        {dlg.text} 
                                        {dlg.action && <span className="text-slate-500 text-sm italic ml-2">{dlg.action}</span>}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Outro */}
            {activeChapter.outro && (
                <div className="pt-12 border-t border-white/10 space-y-6">
                    {/* Only Show Header if Manager Speaks */}
                    {activeChapter.outro.speaker && (
                         <div className="flex items-center gap-2 text-yellow-500/80 font-display font-bold text-xl uppercase tracking-wide">
                            <Mic2 className="w-5 h-5" /> {activeChapter.outro.speaker}
                        </div>
                    )}
                    <div className="pl-6 border-l border-yellow-500/30 space-y-2">
                        {activeChapter.outro.lines.map((line, idx) => (
                             <p key={idx}>{line}</p>
                         ))}
                    </div>
                    {activeChapter.outro.action && (
                        <p className="italic text-slate-500 text-sm pl-6">{activeChapter.outro.action}</p>
                    )}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default StoryView;
