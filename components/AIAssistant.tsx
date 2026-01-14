
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Section } from '../types';

interface AIAssistantProps {
  onClose: () => void;
  activeTab: Section;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onClose, activeTab }) => {
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    { role: 'ai', text: `Hello! I'm your health guide. Since you're looking at the ${activeTab} section, how can I help you today?` }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `The user is currently viewing the "${activeTab}" section of a recovery/wellness app for seniors. They asked: ${userMsg}. Provide a supportive, gentle, and medically-cautious response (always mention checking with a doctor for serious pain). Keep it short (max 3 sentences).`,
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I'm having trouble thinking right now. Please try again." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Sorry, I'm offline. Please make sure your recovery stays on track!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm p-4 flex flex-col items-center justify-end animate-fadeIn">
      <div className="w-full max-w-md bg-white rounded-t-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-slideUp">
        <div className="p-6 bg-indigo-600 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-sparkles"></i>
            </div>
            <div>
              <h3 className="font-bold">Health Companion</h3>
              <p className="text-[10px] font-medium text-indigo-100">AI-Powered Support</p>
            </div>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full hover:bg-white/10 transition-colors">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed shadow-sm ${
                m.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
                  : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-3xl rounded-tl-none border border-slate-100 flex gap-1">
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-100"></div>
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-white border-t border-slate-100 safe-area-bottom">
          <div className="flex gap-2 bg-slate-100 rounded-2xl p-1 px-4">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about recovery, exercises..."
              className="flex-1 bg-transparent border-none focus:outline-none py-3 text-sm text-slate-700"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="text-indigo-600 disabled:text-slate-300 transition-colors"
            >
              <i className="fa-solid fa-paper-plane text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
