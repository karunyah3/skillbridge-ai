import React, { useState } from 'react';
import { PageView, AssessmentQuestion, SkillScore } from '../types';
import { 
  CheckSquare, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  RotateCcw,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface SkillAssessmentPageProps {
  onNavigate: (page: PageView) => void;
  questions: AssessmentQuestion[];
  onCompleteAssessment: (newSkills: SkillScore[], calculatedScore: number) => void;
}

export const SkillAssessmentPage: React.FC<SkillAssessmentPageProps> = ({
  onNavigate,
  questions,
  onCompleteAssessment,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string | number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [evaluatedScore, setEvaluatedScore] = useState(68);

  const currentQ = questions[currentQuestionIndex];
  const progressPercent = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);

  const handleSelectOption = (value: string | number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQ.id]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      let totalPoints = 0;
      let answeredCount = 0;

      questions.forEach((q) => {
        const ans = selectedAnswers[q.id];
        if (ans !== undefined) {
          const opt = q.options.find(o => o.value === ans);
          if (opt) {
            totalPoints += opt.score;
            answeredCount++;
          }
        }
      });

      const avgScore = answeredCount > 0 ? Math.round(totalPoints / answeredCount) : 72;
      const finalScore = Math.max(50, Math.min(95, avgScore));
      setEvaluatedScore(finalScore);
      setIsSubmitting(false);
      setIsCompleted(true);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {!isCompleted ? (
        <div className="space-y-8">
          
          {/* Header & Progress Bar */}
          <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F0E6F2] border border-[#DEC8E2] text-xs font-bold text-[#4A2E4B] mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Adaptive Diagnostic Quiz</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2E2823] tracking-tight font-display">
                  Skill Assessment
                </h1>
                <p className="text-xs sm:text-sm text-[#7E7367] mt-1">
                  Evaluate your technical competencies, code comprehension, and soft skills against industry benchmarks.
                </p>
              </div>

              <div className="text-right">
                <div className="text-xs font-bold text-[#7E7367] uppercase tracking-wider">
                  Question
                </div>
                <div className="text-2xl font-black text-[#4A2E4B] font-mono">
                  {currentQuestionIndex + 1} <span className="text-[#A2978A] text-base">/ {questions.length}</span>
                </div>
              </div>
            </div>

            {/* Progress Track */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-[#7E7367]">
                <span>Progress</span>
                <span className="text-[#4A2E4B] font-mono font-bold">{progressPercent}%</span>
              </div>
              <div className="w-full h-2.5 bg-[#FAF8F5] border border-[#EAE3D9] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#4A2E4B] via-[#6B466E] to-[#D96B50] rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

          </div>

          {/* Current Question Card */}
          <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Category and Skill tags */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F0E6F2] text-[#4A2E4B] border border-[#DEC8E2]">
                  {currentQ.category}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FAF8F5] text-[#574D43] border border-[#EAE3D9]">
                  Skill: {currentQ.skill}
                </span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-[#7E7367]">
                <Clock className="w-3.5 h-3.5 text-[#5B7B64]" />
                <span>Proctored Simulation</span>
              </div>
            </div>

            {/* Question Title */}
            <h3 className="text-lg sm:text-xl font-bold text-[#2E2823] leading-snug">
              {currentQ.question}
            </h3>

            {/* Code Snippet Box (if present) */}
            {currentQ.codeSnippet && (
              <div className="bg-[#2E2823] text-[#FAF8F5] rounded-2xl p-4 overflow-x-auto font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#574D43] text-[10px] text-[#A2978A] uppercase">
                  <span>Code Inspection</span>
                  <span>Syntax Checked</span>
                </div>
                <pre>{currentQ.codeSnippet}</pre>
              </div>
            )}

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedAnswers[currentQ.id] === opt.value;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.value)}
                    className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between group ${
                      isSelected
                        ? 'bg-[#F0E6F2] border-[#4A2E4B] text-[#2E2823] shadow-xs'
                        : 'bg-[#FAF8F5] border-[#EAE3D9] hover:border-[#DDD5C8] text-[#3D352E] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                        isSelected
                          ? 'bg-[#4A2E4B] text-white'
                          : 'bg-white border border-[#DDD5C8] text-[#574D43] group-hover:bg-[#FAF8F5]'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className="font-semibold">{opt.label}</span>
                    </div>

                    {isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-[#4A2E4B] shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="pt-6 border-t border-[#F4EFEA] flex items-center justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all ${
                  currentQuestionIndex === 0
                    ? 'opacity-40 cursor-not-allowed bg-[#FAF8F5] text-[#A2978A] border border-[#EAE3D9]'
                    : 'bg-[#FAF8F5] hover:bg-[#F4EFEA] text-[#3D352E] border border-[#DDD5C8]'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#4A2E4B] hover:bg-[#3D223E] text-white shadow-sm transition-all flex items-center space-x-2"
                >
                  <span>Next Question</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-7 py-2.5 rounded-xl font-bold text-xs bg-[#D96B50] hover:bg-[#C65236] text-white shadow-md transition-all flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Analyzing Competencies...</span>
                  ) : (
                    <>
                      <span>Submit Assessment 🚀</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>

          </div>

        </div>
      ) : (
        /* ASSESSMENT COMPLETION / RESULTS VIEW */
        <div className="bg-white border border-[#EAE3D9] rounded-3xl p-8 sm:p-12 shadow-sm text-center space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 rounded-3xl bg-[#F0E6F2] border border-[#DEC8E2] text-[#4A2E4B] mx-auto flex items-center justify-center shadow-xs">
            <Award className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EAF1EB] text-[#3B5342] border border-[#B2CDBD]">
              Assessment Complete & Verified
            </span>
            <h2 className="text-3xl font-extrabold text-[#2E2823] font-display mt-3">
              Diagnostic Evaluation Complete!
            </h2>
            <p className="text-sm text-[#7E7367] max-w-md mx-auto mt-2">
              Your competency scores have been mapped against the current AI/ML Engineer industry rubric.
            </p>
          </div>

          {/* Evaluated Score Card */}
          <div className="bg-[#FAF8F5] border border-[#EAE3D9] rounded-2xl p-6 max-w-md mx-auto">
            <div className="text-xs font-bold text-[#7E7367] uppercase tracking-wider">
              Evaluated Industry Readiness
            </div>
            <div className="text-5xl font-black text-[#4A2E4B] font-display mt-2 font-mono">
              {evaluatedScore}%
            </div>
            <div className="text-xs text-[#574D43] mt-2">
              ⚡ Strong foundation in <strong className="text-[#5B7B64]">Python & Java</strong>, with top growth areas in <strong className="text-[#D96B50]">Machine Learning & Cloud</strong>.
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('skill-mapping')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-[#D96B50] hover:bg-[#C65236] text-white shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <span>View Skill Mapping Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setIsCompleted(false);
                setCurrentQuestionIndex(0);
                setSelectedAnswers({});
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs bg-[#FAF8F5] hover:bg-[#F4EFEA] text-[#3D352E] border border-[#DDD5C8] transition-all flex items-center justify-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Assessment</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
