
import React from 'react';
import { Meal } from '../types';

const NutritionView: React.FC = () => {
  const meals: Meal[] = [
    { id: 'm1', type: 'Breakfast', name: 'Oatmeal with Blueberries', calories: 320, benefits: ['Fiber', 'Antioxidants'] },
    { id: 'm2', type: 'Lunch', name: 'Grilled Salmon Salad', calories: 450, benefits: ['Omega-3', 'Protein'] },
    { id: 'm3', type: 'Dinner', name: 'Roast Chicken & Sweet Potato', calories: 510, benefits: ['B Vitamins', 'Potassium'] },
  ];

  return (
    <div className="p-6 space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Fuel Your Recovery</h2>
        <p className="text-slate-500 text-sm">Balanced meals for healing and energy.</p>
      </div>

      {/* Calories Overview */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="w-24 h-24 rounded-full border-8 border-slate-50 flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 border-8 border-rose-500 rounded-full border-t-transparent -rotate-45"></div>
            <span className="text-xl font-black text-slate-800">1,280</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase">kcal</span>
          </div>
          <div className="space-y-3 flex-1 ml-8">
            <NutritionStat label="Proteins" current={45} target={60} color="bg-rose-500" />
            <NutritionStat label="Carbs" current={120} target={180} color="bg-amber-500" />
            <NutritionStat label="Fats" current={30} target={50} color="bg-indigo-500" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-800">Today's Meals</h3>
        {meals.map(meal => (
          <div key={meal.id} className="bg-white border border-slate-100 p-5 rounded-3xl shadow-sm flex justify-between items-center group hover:border-rose-100 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500">
                <i className={`fa-solid ${meal.type === 'Breakfast' ? 'fa-egg' : meal.type === 'Lunch' ? 'fa-bowl-food' : 'fa-utensils'}`}></i>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{meal.type}</p>
                <h4 className="font-bold text-slate-800">{meal.name}</h4>
                <div className="flex gap-2 mt-1">
                  {meal.benefits.map(b => (
                    <span key={b} className="text-[9px] bg-slate-50 text-slate-500 px-2 py-0.5 rounded-full font-bold">{b}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-black text-slate-800">{meal.calories}</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase">KCAL</p>
            </div>
          </div>
        ))}
        
        <button className="w-full border-2 border-dashed border-slate-200 py-4 rounded-3xl text-slate-400 font-bold text-sm hover:border-rose-400 hover:text-rose-500 transition-all">
          <i className="fa-solid fa-plus mr-2"></i> Add Meal
        </button>
      </div>
    </div>
  );
};

const NutritionStat: React.FC<{ label: string; current: number; target: number; color: string }> = ({ label, current, target, color }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-[10px] font-bold uppercase tracking-tight">
      <span className="text-slate-500">{label}</span>
      <span className="text-slate-800">{current}g / {target}g</span>
    </div>
    <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
      <div className={`h-full ${color} rounded-full`} style={{ width: `${(current/target)*100}%` }}></div>
    </div>
  </div>
);

export default NutritionView;
