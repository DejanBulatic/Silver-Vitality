
import React, { useState } from 'react';
import { RoutineStep } from '../types';

interface RoutineViewProps {
  type: 'morning' | 'evening';
}

const RoutineView: React.FC<RoutineViewProps> = ({ type }) => {
  const isMorning = type === 'morning';
  const [selectedStep, setSelectedStep] = useState<RoutineStep | null>(null);
  
  const [steps, setSteps] = useState<RoutineStep[]>(isMorning ? [
    { 
      id: '1', 
      title: 'Bed Feet Yoga', 
      duration: '5 min', 
      description: 'Waking up the feet and ankles before standing.', 
      longDescription: 'Before placing your feet on the ground, spend a few minutes rotating your ankles and flexing your toes. This gently wakes up the nervous system and improves circulation to prevent dizziness when standing.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      icon: 'fa-socks', 
      completed: false 
    },
    { 
      id: '2', 
      title: 'Bedside Meditation & Breathing', 
      duration: '10 min', 
      description: 'Centering the mind and deep breathing.', 
      longDescription: 'Sit on the edge of the bed with your back straight. Close your eyes and take slow, deep breaths. This practice helps reduce morning anxiety and prepares you for the day ahead.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      icon: 'fa-wind', 
      completed: false 
    },
    { 
      id: '3', 
      title: 'Mouth Hygiene & Cold Plunge', 
      duration: '5 min', 
      description: 'Refreshing the senses and cleaning the palate.', 
      longDescription: 'Tongue scraping and brushing your teeth removes overnight toxins. Follow this with a cold water splash on your face or a quick cold rinse to invigorate your senses.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      icon: 'fa-faucet-drip', 
      completed: false 
    },
    { 
      id: '4', 
      title: 'Hydration', 
      duration: '2 min', 
      description: 'Rehydrating the body with warm water.', 
      longDescription: 'Slowly sip a glass of warm water. This hydrates your cells after sleep and prepares your digestive system for your first meal.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      icon: 'fa-glass-water', 
      completed: false 
    },
    { 
      id: '5', 
      title: 'Morning Yoga & Joint Rotations', 
      duration: '15 min', 
      description: 'Full body mobility and joint lubrication.', 
      longDescription: 'Move through a series of gentle standing or seated stretches. Focus on rotating your shoulders, wrists, and hips to maintain joint health and flexibility.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      icon: 'fa-person-rays', 
      completed: false 
    },
    { 
      id: '6', 
      title: 'Breathing & Stomach Yoga', 
      duration: '10 min', 
      description: 'Core activation and internal massage.', 
      longDescription: 'Specific breathing patterns designed to move the diaphragm and gently stimulate the digestive organs. This helps build core stability from the inside out.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      icon: 'fa-belly-dot', 
      completed: false 
    },
    { 
      id: '7', 
      title: 'Breakfast', 
      duration: '20 min', 
      description: 'Nutrient-rich fuel for recovery.', 
      longDescription: 'Enjoy a meal high in protein and healthy nutrients. Mindful eating at this stage ensures your body has the building blocks it needs for tissue repair.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      icon: 'fa-utensils', 
      completed: false 
    },
  ] : [
    { id: 'e1', title: 'Digital Detox', duration: '30 min', description: 'Turn off all screens and bright lights.', icon: 'fa-mobile-screen', completed: false },
    { id: 'e2', title: 'Magnesium Stretch', duration: '5 min', description: 'Light leg stretches to prevent night cramps.', icon: 'fa-person-running', completed: false },
    { id: 'e3', title: 'Reflective Journaling', duration: '5 min', description: 'Write down 3 things you achieved today.', icon: 'fa-pen-to-square', completed: false },
    { id: 'e4', title: 'Chamomile Tea', duration: '10 min', description: 'Sip slowly to signal your body to rest.', icon: 'fa-mug-hot', completed: false },
  ]);

  const toggleStep = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSteps(prev => prev.map(s => s.id === id ? { ...s, completed: !s.completed } : s));
  };

  const completedCount = steps.filter(s => s.completed).length;
  const progress = (completedCount / steps.length) * 100;

  if (selectedStep) {
    return (
      <div className="animate-fadeIn min-h-full bg-white pb-20">
        <div className="p-4 flex items-center gap-4 sticky top-0 bg-white/90 backdrop-blur-md z-10 border-b border-slate-100">
          <button 
            onClick={() => setSelectedStep(null)}
            className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 active:scale-90 transition-transform"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <h2 className="font-bold text-lg text-slate-800 truncate">Step {selectedStep.id}: Details</h2>
        </div>

        <div className="p-6 space-y-6">
          <section className="space-y-4">
            <div className="flex flex-col gap-2">
               <p className="text-xs font-black text-indigo-500 uppercase tracking-[0.2em]">Step {selectedStep.id}</p>
               <h1 className="text-3xl font-black text-slate-900 leading-tight">{selectedStep.title}</h1>
               <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase">
                 <i className="fa-regular fa-clock"></i>
                 <span>{selectedStep.duration} Duration</span>
               </div>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-inner">
              <h3 className="text-[10px] font-black text-indigo-900 mb-3 uppercase tracking-widest opacity-40">The Science & Purpose</h3>
              <p className="text-slate-700 leading-relaxed text-lg font-medium italic">
                "{selectedStep.longDescription || selectedStep.description}"
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest border-l-4 border-indigo-600 pl-3">Explainer Video</h3>
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl border-4 border-white">
              {selectedStep.videoUrl ? (
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
                >
                  <source src={selectedStep.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50 space-y-2">
                  <i className="fa-solid fa-circle-play text-5xl text-indigo-400 opacity-80"></i>
                  <span className="text-xs font-bold uppercase tracking-widest">Guide Loading...</span>
                </div>
              )}
            </div>
          </section>

          <button 
            onClick={() => {
              setSteps(prev => prev.map(s => s.id === selectedStep.id ? { ...s, completed: true } : s));
              setSelectedStep(null);
            }}
            className="w-full py-5 bg-indigo-900 text-white font-black rounded-3xl shadow-xl shadow-indigo-100 active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4"
          >
            <i className="fa-solid fa-check-double"></i>
            I've Completed This Step
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 animate-fadeIn pb-24">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">{isMorning ? 'Morning Ritual' : 'Evening Routine'}</h2>
          <p className="text-slate-500 font-medium text-sm">{isMorning ? 'Your 7-step path to energy.' : 'Deep recovery starting now.'}</p>
        </div>
        <div className={`w-14 h-14 rounded-3xl flex items-center justify-center text-white ${isMorning ? 'bg-amber-400 shadow-amber-200' : 'bg-indigo-900 shadow-indigo-200'} shadow-xl rotate-3`}>
          <i className={`fa-solid ${isMorning ? 'fa-sun' : 'fa-moon'} text-2xl`}></i>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-[2.5rem] p-6 text-white shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Completion Status</span>
            <div className="flex items-baseline gap-1">
               <span className="text-3xl font-black text-indigo-400">{completedCount}</span>
               <span className="text-sm font-bold text-slate-500">/ {steps.length} steps</span>
            </div>
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-slate-700 flex items-center justify-center relative">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="32" cy="32" r="28"
                fill="transparent"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="4"
              />
              <circle
                cx="32" cy="32" r="28"
                fill="transparent"
                stroke="#818cf8"
                strokeWidth="4"
                strokeDasharray={`${2 * Math.PI * 28}`}
                strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
                className="transition-all duration-1000"
              />
            </svg>
            <span className="absolute text-[10px] font-black">{Math.round(progress)}%</span>
          </div>
        </div>
        <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-700 rounded-full bg-indigo-400`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-4">
        {steps.map((step) => (
          <div 
            key={step.id}
            onClick={() => setSelectedStep(step)}
            className={`group flex items-center gap-4 p-4 rounded-[2.5rem] border-2 transition-all cursor-pointer active:scale-[0.97] ${
              step.completed 
                ? 'bg-indigo-50/30 border-indigo-100/50' 
                : 'bg-white border-slate-50 shadow-sm hover:border-indigo-100 hover:shadow-md'
            }`}
          >
            {/* Step Thumbnail with Lighter Gradient Background */}
            <div className={`w-14 h-14 rounded-[1.5rem] shrink-0 flex flex-col items-center justify-center transition-all ${
              step.completed 
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-100' 
                : 'bg-gradient-to-br from-indigo-300 to-violet-400 text-white shadow-lg shadow-indigo-100 group-hover:from-indigo-400 group-hover:to-violet-500'
            }`}>
              <span className="text-[9px] font-black uppercase tracking-tighter opacity-70">Step</span>
              <span className="text-xl font-black leading-none">{step.id}</span>
            </div>

            <div className="flex-1">
              <h4 className={`font-black text-base ${step.completed ? 'text-slate-400' : 'text-slate-800'}`}>
                {step.title}
              </h4>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${step.completed ? 'text-emerald-500' : 'text-slate-400'}`}>
                   {step.completed ? 'Completed' : step.duration}
                </span>
              </div>
            </div>
            
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${step.completed ? 'text-emerald-500' : 'text-slate-200 group-hover:text-indigo-400'}`}>
              <i className={`fa-solid ${step.completed ? 'fa-circle-check text-xl' : 'fa-arrow-right-long'}`}></i>
            </div>
          </div>
        ))}
      </div>

      <button className={`w-full py-5 rounded-[2rem] font-black text-white shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3 ${
        progress === 100 ? 'bg-emerald-600' : isMorning ? 'bg-indigo-900' : 'bg-indigo-900'
      }`}>
        {progress === 100 ? (
          <><i className="fa-solid fa-medal"></i> Ritual Finished</>
        ) : (
          <>{completedCount > 0 ? 'Continue Progress' : 'Begin Morning Ritual'}</>
        )}
      </button>
    </div>
  );
};

export default RoutineView;
