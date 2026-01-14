
import React from 'react';
import { Section } from '../types';

interface BottomNavProps {
  activeTab: Section;
  onTabChange: (tab: Section) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'home', icon: 'fa-house', label: 'Home' },
    { id: 'morning', icon: 'fa-sun', label: 'Morning' },
    { id: 'workouts', icon: 'fa-person-walking', label: 'Work' },
    { id: 'nutrition', icon: 'fa-apple-whole', label: 'Eat' },
    { id: 'evening', icon: 'fa-moon', label: 'Night' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-slate-100 safe-area-bottom z-50">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id as Section)}
            className={`flex flex-col items-center justify-center w-full transition-all ${
              activeTab === item.id ? 'text-indigo-600 scale-110' : 'text-slate-400'
            }`}
          >
            <i className={`fa-solid ${item.icon} text-lg mb-1`}></i>
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
