
import React, { useState, useEffect } from 'react';
import { Section } from './types';
import HomeView from './components/HomeView';
import RoutineView from './components/RoutineView';
import WorkoutView from './components/WorkoutView';
import NutritionView from './components/NutritionView';
import BottomNav from './components/BottomNav';
import AIAssistant from './components/AIAssistant';
import DevLogView from './components/DevLogView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Section>('home');
  const [showAI, setShowAI] = useState(false);

  // Simple scroll reset on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView onNavigate={setActiveTab} />;
      case 'morning':
        return <RoutineView type="morning" />;
      case 'workouts':
        return <WorkoutView />;
      case 'nutrition':
        return <NutritionView />;
      case 'evening':
        return <RoutineView type="evening" />;
      case 'log':
        return <DevLogView onBack={() => setActiveTab('home')} />;
      default:
        return <HomeView onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen pb-24 flex flex-col max-w-md mx-auto bg-white shadow-xl relative overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 p-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-black text-indigo-900 tracking-tight">SilverVitality</h1>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Recovery OS</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveTab(activeTab === 'log' ? 'home' : 'log')}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${activeTab === 'log' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400'}`}
          >
            <i className="fa-solid fa-route"></i>
          </button>
          <button 
            onClick={() => setShowAI(true)}
            className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 hover:bg-indigo-100 transition-colors"
          >
            <i className="fa-solid fa-sparkles"></i>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Navigation */}
      <BottomNav activeTab={activeTab === 'log' ? 'home' : activeTab} onTabChange={setActiveTab} />

      {/* AI Assistant Overlay */}
      {showAI && <AIAssistant onClose={() => setShowAI(false)} activeTab={activeTab} />}
    </div>
  );
};

export default App;
