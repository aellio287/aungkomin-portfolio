
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { Message } from '../types';

const AssistantChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm Aung Ko Min's AI Librarian Assistant. How can I help you learn more about Aung or suggest some books for your next read?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      
      const response = await sendMessageToGemini(history, userMessage);
      setMessages(prev => [...prev, { role: 'model', text: response || "I'm sorry, I couldn't process that. Could you try again?" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Error: My connection to the library archives was interrupted. Please check if your API key is active." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="assistant" className="py-24 bg-white dark:bg-slate-950 border-t border-amber-50 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold mb-4">
            <Bot className="w-4 h-4" />
            <span>AI POWERED LIBRARIAN</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 serif">Ask the Librarian</h2>
          <p className="text-slate-500 dark:text-slate-400">
            Have questions about Aung Ko Min's journey or need a book recommendation? I'm here to help.
          </p>
        </div>

        <div className="bg-[#FDFCF8] dark:bg-slate-900 border border-amber-100 dark:border-slate-800 rounded-3xl shadow-xl overflow-hidden flex flex-col h-[600px]">
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-amber-200 dark:scrollbar-thumb-slate-700"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-3 max-w-[80%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-indigo-600' : 'bg-amber-800 dark:bg-amber-700'}`}>
                    {m.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-none' 
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-amber-50 dark:border-slate-700 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-full bg-amber-800 dark:bg-amber-700 flex items-center justify-center shrink-0">
                    <Loader2 className="w-4 h-4 text-white animate-spin" />
                  </div>
                  <div className="bg-white dark:bg-slate-800 border border-amber-50 dark:border-slate-700 p-4 rounded-2xl rounded-tl-none shadow-sm text-slate-400 dark:text-slate-500 text-sm italic">
                    Consulting the archives...
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 border-t border-amber-100 dark:border-slate-800">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything about books or Aung..."
                className="w-full pl-6 pr-14 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-800/20 dark:focus:ring-amber-500/20 focus:border-amber-800 dark:focus:border-amber-500 transition-all text-sm dark:text-white"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-3 bg-amber-800 dark:bg-amber-600 text-white rounded-xl hover:bg-amber-900 dark:hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 dark:text-slate-500 mt-3 flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3" />
              Powered by Gemini 3 Flash • Built for the love of reading
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistantChat;
