
import React from 'react';
import { Workout } from '../types';

const WorkoutView: React.FC = () => {
  const workouts: Workout[] = [
    { 
      id: 'w1', 
      title: 'Chair Yoga', 
      difficulty: 'Easy', 
      duration: '15 min', 
      image: 'https://picsum.photos/id/1/400/300',
      description: 'Gentle yoga session focused on mobility without needing to get on the floor.'
    },
    { 
      id: 'w2', 
      title: 'Wall Pushups', 
      difficulty: 'Easy', 
      duration: '10 min', 
      image: 'https://picsum.photos/id/10/400/300',
      description: 'Strengthen your chest and arms using vertical support.'
    },
    { 
      id: 'w3', 
      title: 'Knee Lifts', 
      difficulty: 'Moderate', 
      duration: '12 min', 
      image: 'https://picsum.photos/id/20/400/300',
      description: 'Build core stability and hip flexor strength while seated or standing.'
    },
    { 
      id: 'w4', 
      title: 'Gentle Walking', 
      difficulty: 'Easy', 
      duration: '20 min', 
      image: 'https://picsum.photos/id/30/400/300',
      description: 'Indoor or outdoor low-impact steady state cardio.'
    }
  ];

  return (
    <div className="p-6 space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Gentle Movement</h2>
        <p className="text-slate-500 text-sm">Motion is lotion for your joints.</p>
      </div>

      <div className="bg-emerald-600 rounded-3xl p-6 text-white shadow-lg shadow-emerald-100">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center text-xl">
            <i className="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h3 className="font-bold">Next Milestone</h3>
            <p className="text-emerald-50 text-xs">Reach 150 active minutes this week</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {workouts.map((workout) => (
          <div key={workout.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col group transition-all hover:shadow-md">
            <div className="relative h-40">
              <img src={workout.image} alt={workout.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  workout.difficulty === 'Easy' ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
                }`}>
                  {workout.difficulty}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg text-white text-[10px] font-bold">
                <i className="fa-regular fa-clock mr-1"></i> {workout.duration}
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg text-slate-800 mb-1">{workout.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">{workout.description}</p>
              <button className="w-full py-3 bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 font-bold rounded-xl transition-all">
                Start Session
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutView;
