
import React from 'react';
import { LogEntry } from '../types';

interface DevLogViewProps {
  onBack: () => void;
}

const DevLogView: React.FC<DevLogViewProps> = ({ onBack }) => {
  const recoveryLog: LogEntry[] = [
    {
      id: '1',
      phase: 'Phase 1',
      title: 'Initial Recovery',
      status: 'completed',
      date: 'Completed Oct 12',
      description: 'The first 48 hours post-operation. Focus on pain management and simple breathing.',
      milestones: ['First stand-up', 'Basic breathing exercises', 'Pain management routine']
    },
    {
      id: '2',
      phase: 'Phase 2',
      title: 'Foundational Mobility',
      status: 'current',
      date: 'Estimated Oct 26',
      description: 'Restoring basic range of motion. Introduction of the 7-step morning ritual.',
      milestones: ['Morning Ritual 7/7 complete', 'Short hallway walks', 'Joint lubrication focus']
    },
    {
      id: '3',
      phase: 'Phase 3',
      title: 'Gentle Strengthening',
      status: 'upcoming',
      description: 'Moving from chair-based yoga to wall-supported strength work.',
      milestones: ['First Wall Pushup', '500 daily steps', 'Improved core stability']
    },
    {
      id: '4',
      phase: 'Phase 4',
      title: 'Vitality & Independence',
      status: 'upcoming',
      description: 'Returning to daily outdoor walks and advanced nutrition for long-term health.',
      milestones: ['1km outdoor walk', 'Self-managed meal prep', 'Total Vitality state']
    }
  ];

  return (
    <div className="p-6 space-y-8 animate-fadeIn">
      <div className="flex items-center gap-4">
        <button 
          onClick={onBack}
          className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Recovery Roadmap</h2>
          <p className="text-sm font-medium text-slate-500">Your journey to full vitality.</p>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-4 space-y-12">
        {/* The Vertical Line */}
        <div className="absolute left-[31px] top-4 bottom-4 w-1 bg-slate-100 rounded-full">
          <div 
            className="w-full bg-indigo-500 rounded-full transition-all duration-1000"
            style={{ height: '40%' }}
          ></div>
        </div>

        {recoveryLog.map((entry, idx) => (
          <div key={entry.id} className="relative pl-12">
            {/* The Dot */}
            <div className={`absolute left-0 top-1 w-10 h-10 rounded-2xl flex items-center justify-center z-10 shadow-lg border-4 border-white transition-all ${
              entry.status === 'completed' ? 'bg-emerald-500 text-white' :
              entry.status === 'current' ? 'bg-indigo-600 text-white scale-110' :
              'bg-slate-200 text-slate-400'
            }`}>
              <i className={`fa-solid ${
                entry.status === 'completed' ? 'fa-check' :
                entry.status === 'current' ? 'fa-person-running' :
                'fa-lock'
              } text-sm`}></i>
            </div>

            {/* Content Card */}
            <div className={`p-6 rounded-[2.5rem] border-2 transition-all ${
              entry.status === 'current' 
                ? 'bg-white border-indigo-100 shadow-xl shadow-indigo-50' 
                : 'bg-slate-50/50 border-transparent'
            }`}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                    entry.status === 'completed' ? 'text-emerald-500' :
                    entry.status === 'current' ? 'text-indigo-600' :
                    'text-slate-400'
                  }`}>{entry.phase}</span>
                  <h3 className={`text-xl font-black tracking-tight ${
                    entry.status === 'upcoming' ? 'text-slate-400' : 'text-slate-900'
                  }`}>{entry.title}</h3>
                </div>
                {entry.date && (
                  <span className="text-[10px] font-bold text-slate-400 bg-white px-2 py-1 rounded-full border border-slate-100">
                    {entry.date}
                  </span>
                )}
              </div>
              
              <p className={`text-sm leading-relaxed mb-4 font-medium ${
                entry.status === 'upcoming' ? 'text-slate-300' : 'text-slate-500'
              }`}>
                {entry.description}
              </p>

              {entry.status !== 'upcoming' && (
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Milestones</h4>
                  <div className="flex flex-wrap gap-2">
                    {entry.milestones.map((m, mIdx) => (
                      <span key={mIdx} className="text-[10px] font-bold bg-white text-slate-600 border border-slate-100 px-3 py-1.5 rounded-xl shadow-sm">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Encouragement Footer */}
      <div className="bg-slate-900 rounded-[2.5rem] p-8 text-center text-white space-y-4">
        <div className="w-16 h-16 bg-indigo-500 rounded-3xl mx-auto flex items-center justify-center text-2xl rotate-12 shadow-xl shadow-indigo-500/20">
          <i className="fa-solid fa-flag-checkered"></i>
        </div>
        <div>
          <h3 className="text-xl font-black tracking-tight">You're doing great!</h3>
          <p className="text-sm text-slate-400 font-medium">Every step you take today is a victory for tomorrow.</p>
        </div>
      </div>
    </div>
  );
};

export default DevLogView;
