
import React from 'react';
import { Section } from '../types';

interface HomeViewProps {
  onNavigate: (tab: Section) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="p-6 space-y-8 animate-fadeIn">
      {/* Welcome Card */}
      <section className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-6 text-white shadow-lg shadow-indigo-200">
        <h2 className="text-2xl font-bold mb-1">Good Morning, Arthur</h2>
        <p className="text-indigo-100 text-sm mb-6">Today is a great day for recovery. Take it step by step.</p>
        
        <div className="flex gap-4">
          <div className="bg-white/20 rounded-2xl p-3 flex-1 backdrop-blur-sm">
            <p className="text-xs uppercase font-bold text-indigo-100 mb-1">Hydration</p>
            <p className="text-lg font-bold">3/8 Glasses</p>
          </div>
          <div className="bg-white/20 rounded-2xl p-3 flex-1 backdrop-blur-sm">
            <p className="text-xs uppercase font-bold text-indigo-100 mb-1">Activity</p>
            <p className="text-lg font-bold">12 mins</p>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-slate-800">Your Journey</h3>
          <span className="text-indigo-600 text-sm font-semibold">View Stats</span>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex justify-between items-center text-sm font-medium">
            <span className="text-slate-600">Daily Goal Completion</span>
            <span className="text-indigo-600">65%</span>
          </div>
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 rounded-full w-[65%] transition-all duration-1000"></div>
          </div>
        </div>
      </section>

      {/* Grid of Sections */}
      <section className="grid grid-cols-2 gap-4">
        <QuickLink 
          title="Morning" 
          icon="fa-sun" 
          color="bg-amber-50 text-amber-600"
          onClick={() => onNavigate('morning')}
        />
        <QuickLink 
          title="Workouts" 
          icon="fa-person-walking" 
          color="bg-emerald-50 text-emerald-600"
          onClick={() => onNavigate('workouts')}
        />
        <QuickLink 
          title="Nutrition" 
          icon="fa-apple-whole" 
          color="bg-rose-50 text-rose-600"
          onClick={() => onNavigate('nutrition')}
        />
        <QuickLink 
          title="Evening" 
          icon="fa-moon" 
          color="bg-blue-50 text-blue-600"
          onClick={() => onNavigate('evening')}
        />
      </section>

      {/* Daily Tip */}
      <section className="bg-slate-900 rounded-2xl p-5 text-white flex items-center gap-4">
        <div className="bg-indigo-500 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
          <i className="fa-solid fa-lightbulb"></i>
        </div>
        <div>
          <h4 className="font-bold text-sm">Tip of the Day</h4>
          <p className="text-xs text-slate-400">Remember to stand up and stretch every hour to keep joints lubricated.</p>
        </div>
      </section>
    </div>
  );
};

const QuickLink: React.FC<{ title: string; icon: string; color: string; onClick: () => void }> = ({ title, icon, color, onClick }) => (
  <button 
    onClick={onClick}
    className="bg-white border border-slate-50 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all active:scale-95 flex flex-col items-center text-center group"
  >
    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
      <i className={`fa-solid ${icon} text-2xl`}></i>
    </div>
    <span className="font-bold text-slate-700">{title}</span>
  </button>
);

export default HomeView;
