import React, { useState } from 'react';
import { PageView, LearningStep } from '../types';
import { 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Bot, 
  Send,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PersonalizedLearningPathPageProps {
  onNavigate: (page: PageView) => void;
  roadmapSteps: LearningStep[];
  onToggleStep: (stepNumber: number) => void;
}

export const PersonalizedLearningPathPage: React.FC<PersonalizedLearningPathPageProps> = ({
  onNavigate,
  roadmapSteps,
  onToggleStep,
}) => {
  const [expandedStep, setExpandedStep] = useState<number | null>(2);
  const [chatMessages, setChatMessages] = useState<{ sender: 'ai' | 'user'; text: string }[]>([
    {
      sender: 'ai',
      text: "Hello Alex! I am your SkillBridge AI Tutor. Need help choosing which ML project to build or understanding Gradient Descent for Step 2?"
    }
  ]);
  const [inputQuestion, setInputQuestion] = useState('');

  const completedCount = roadmapSteps.filter(s => s.status === 'completed').length;
  const overallProgress = Math.round((completedCount / roadmapSteps.length) * 100);

  const toggleExpand = (stepNum: number) => {
    setExpandedStep(prev => (prev === stepNum ? null : stepNum));
  };

  const handleStepCompleteToggle = (stepNumber: number) => {
    onToggleStep(stepNumber);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuestion.trim()) return;

    const userText = inputQuestion;
    setInputQuestion('');
    setChatMessages(prev => [...prev, { sender: 'user', text: userText }]);

    setTimeout(() => {
      let reply = "Great question! For Step 2, I recommend starting with Scikit-Learn's Pipeline class to chain StandardScaler with RandomForestClassifier to avoid data leakage.";
      if (userText.toLowerCase().includes('cloud') || userText.toLowerCase().includes('aws')) {
        reply = "For Cloud Fundamentals (Step 4), focus on AWS IAM roles, S3 bucket permissions, and containerizing with Docker before moving to ECS.";
      } else if (userText.toLowerCase().includes('project') || userText.toLowerCase().includes('capstone')) {
        reply = "For your AI Capstone (Step 3), an audio stream classifier using PyTorch & FastAPI provides the highest recruiter match score for AI/ML Internships!";
      }

      setChatMessages(prev => [...prev, { sender: 'ai', text: reply }]);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* 1. HEADER */}
      <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F0E6F2] border border-[#DEC8E2] text-xs font-bold text-[#4A2E4B] mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Tailored Roadmap</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2E2823] tracking-tight font-display">
            Personalized Learning Path
          </h1>
          <p className="text-xs sm:text-sm text-[#7E7367] mt-1 max-w-xl">
            Target Role: <strong className="text-[#4A2E4B]">AI/ML Engineer</strong>. Designed to systematically close your gap in Machine Learning and Cloud Deployments.
          </p>
        </div>

        {/* Progress Card */}
        <div className="bg-[#FAF8F5] border border-[#DDD5C8] rounded-2xl p-4 w-full lg:w-auto min-w-[260px]">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-bold text-[#574D43]">Milestones Completed</span>
            <span className="font-mono font-bold text-[#4A2E4B]">{completedCount} of {roadmapSteps.length}</span>
          </div>
          <div className="w-full bg-[#EAE3D9] rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-[#4A2E4B] to-[#5B7B64] h-full rounded-full transition-all duration-700"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
          <div className="mt-2 text-[11px] text-[#7E7367] flex items-center justify-between">
            <span>Overall Progress</span>
            <span className="font-bold text-[#2E2823]">{overallProgress}%</span>
          </div>
        </div>
      </div>

      {/* 2. ROADMAP & AI TUTOR */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Steps (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          {roadmapSteps.map((step) => {
            const isExpanded = expandedStep === step.stepNumber;
            const isCompleted = step.status === 'completed';
            const isInProgress = step.status === 'in-progress';

            return (
              <div 
                key={step.stepNumber}
                className={`bg-white border rounded-3xl transition-all duration-200 overflow-hidden shadow-sm ${
                  isExpanded
                    ? 'border-[#4A2E4B]'
                    : isCompleted
                      ? 'border-[#B2CDBD]'
                      : 'border-[#EAE3D9]'
                }`}
              >
                {/* Header */}
                <div 
                  onClick={() => toggleExpand(step.stepNumber)}
                  className="p-5 sm:p-6 cursor-pointer flex items-start justify-between gap-4 select-none hover:bg-[#FAF8F5]/60 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 border ${
                      isCompleted 
                        ? 'bg-[#EAF1EB] text-[#3B5342] border-[#B2CDBD]' 
                        : isInProgress
                          ? 'bg-[#F0E6F2] text-[#4A2E4B] border-[#DEC8E2]'
                          : 'bg-[#FAF8F5] text-[#7E7367] border-[#EAE3D9]'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5 text-[#5B7B64]" /> : `0${step.stepNumber}`}
                    </div>

                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-base sm:text-lg font-bold text-[#2E2823]">{step.title}</h3>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                          isCompleted
                            ? 'bg-[#EAF1EB] text-[#3B5342] border-[#B2CDBD]'
                            : isInProgress
                              ? 'bg-[#F0E6F2] text-[#4A2E4B] border-[#DEC8E2]'
                              : 'bg-[#FAF8F5] text-[#7E7367] border-[#EAE3D9]'
                        }`}>
                          {isCompleted ? 'Completed' : isInProgress ? 'In Progress' : 'Upcoming'}
                        </span>
                      </div>
                      <p className="text-xs text-[#7E7367] mt-1">{step.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <span className="hidden sm:flex items-center space-x-1 text-xs text-[#7E7367] font-semibold">
                      <Clock className="w-3.5 h-3.5 text-[#5B7B64]" />
                      <span>{step.estimatedDuration}</span>
                    </span>
                    <button className="p-1 rounded-lg text-[#7E7367]">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Body */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-[#F4EFEA] space-y-4 bg-[#FAF8F5]/40">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#7E7367] mb-2">
                        Competencies Gained
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {step.skillsGained.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="text-xs font-bold px-2.5 py-1 rounded-lg bg-white text-[#4A2E4B] border border-[#EAE3D9] flex items-center space-x-1"
                          >
                            <Code2 className="w-3 h-3 text-[#5B7B64]" />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white border border-[#DEC8E2] flex items-start space-x-3">
                      <Terminal className="w-5 h-5 text-[#4A2E4B] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-[#2E2823]">Capstone Deliverable:</div>
                        <div className="text-xs text-[#574D43] mt-0.5">{step.projectDeliverable}</div>
                      </div>
                    </div>

                    <div className="pt-3 flex items-center justify-between">
                      <button
                        onClick={() => handleStepCompleteToggle(step.stepNumber)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                          isCompleted
                            ? 'bg-[#EAF1EB] text-[#3B5342] border border-[#B2CDBD]'
                            : 'bg-[#4A2E4B] hover:bg-[#3D223E] text-white shadow-xs'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{isCompleted ? 'Completed ✓ (Click to Reopen)' : 'Mark Step Completed'}</span>
                      </button>

                      <button
                        onClick={() => onNavigate('opportunities')}
                        className="px-4 py-2 rounded-xl text-xs font-bold bg-[#D96B50] hover:bg-[#C65236] text-white shadow-xs flex items-center space-x-1.5"
                      >
                        <span>View Matched Jobs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* AI Tutor (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 shadow-sm flex flex-col h-[500px]">
            <div className="flex items-center space-x-3 pb-4 border-b border-[#F4EFEA]">
              <div className="w-9 h-9 rounded-xl bg-[#F0E6F2] text-[#4A2E4B] flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#2E2823]">SkillBridge AI Tutor</h4>
                <p className="text-[10px] text-[#7E7367]">Contextual Learning Assistant</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-1 text-xs">
              {chatMessages.map((msg, idx) => (
                <div 
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-[#4A2E4B] text-white rounded-br-none'
                      : 'bg-[#FAF8F5] border border-[#EAE3D9] text-[#2E2823] rounded-bl-none leading-relaxed'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="py-2 flex flex-wrap gap-1.5">
              <button
                onClick={() => setInputQuestion("Explain Gradient Descent in simple terms")}
                className="text-[10px] bg-[#FAF8F5] hover:bg-[#F4EFEA] text-[#574D43] px-2 py-1 rounded-md border border-[#EAE3D9]"
              >
                💡 Explain Gradient Descent
              </button>
            </div>

            <form onSubmit={handleSendChat} className="pt-2 border-t border-[#F4EFEA] flex items-center space-x-2">
              <input
                type="text"
                value={inputQuestion}
                onChange={(e) => setInputQuestion(e.target.value)}
                placeholder="Ask AI tutor anything..."
                className="flex-1 bg-[#FAF8F5] border border-[#DDD5C8] text-[#2E2823] text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-[#4A2E4B]"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-[#4A2E4B] hover:bg-[#3D223E] text-white shadow-xs"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

      </div>

    </div>
  );
};
