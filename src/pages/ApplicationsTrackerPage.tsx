import React from 'react';
import { PageView, StudentApplication } from '../types';
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  MapPin 
} from 'lucide-react';

interface ApplicationsTrackerPageProps {
  onNavigate: (page: PageView) => void;
  applications: StudentApplication[];
}

export const ApplicationsTrackerPage: React.FC<ApplicationsTrackerPageProps> = ({
  onNavigate,
  applications,
}) => {
  const pipelineSteps: { key: StudentApplication['status']; label: string }[] = [
    { key: 'applied', label: 'Applied' },
    { key: 'under_review', label: 'Under Review' },
    { key: 'shortlisted', label: 'Shortlisted' },
    { key: 'interview', label: 'Interview' },
    { key: 'selected', label: 'Selected' }
  ];

  const getStepStatus = (currentStatus: StudentApplication['status'], stepKey: StudentApplication['status']) => {
    const order = ['applied', 'under_review', 'shortlisted', 'interview', 'selected'];
    const currentIndex = order.indexOf(currentStatus);
    const stepIndex = order.indexOf(stepKey);

    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'active';
    return 'upcoming';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* 1. HEADER */}
      <div className="bg-white border border-[#EAE3D9] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EAF1EB] border border-[#B2CDBD] text-xs font-bold text-[#3B5342] mb-2.5">
            <FileText className="w-3.5 h-3.5 text-[#5B7B64]" />
            <span>Real-time Candidate Pipeline</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2E2823] tracking-tight font-display">
            Applications Tracker
          </h1>
          <p className="text-xs sm:text-sm text-[#7E7367] mt-1 max-w-xl">
            Live multi-stage tracking for your submitted applications with verified credential match scores.
          </p>
        </div>

        <button
          onClick={() => onNavigate('opportunities')}
          className="px-5 py-2.5 rounded-xl font-bold text-xs bg-[#4A2E4B] hover:bg-[#3D223E] text-white shadow-sm transition-all flex items-center space-x-2"
        >
          <span>Browse More Roles</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2. PIPELINE SUMMARY STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white border border-[#EAE3D9] rounded-2xl p-5 shadow-2xs">
          <span className="text-xs font-bold text-[#7E7367]">Total Applied</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#2E2823] font-display mt-1">{applications.length}</div>
          <div className="text-[11px] text-[#5B7B64] font-semibold mt-0.5">100% verified profiles</div>
        </div>

        <div className="bg-white border border-[#EAE3D9] rounded-2xl p-5 shadow-2xs">
          <span className="text-xs font-bold text-[#7E7367]">Under AI Review</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#4A2E4B] font-display mt-1">
            {applications.filter(a => a.status === 'under_review').length}
          </div>
          <div className="text-[11px] text-[#7E7367] mt-0.5">Recruiter screening</div>
        </div>

        <div className="bg-white border border-[#EAE3D9] rounded-2xl p-5 shadow-2xs">
          <span className="text-xs font-bold text-[#7E7367]">Shortlisted / Interview</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#D96B50] font-display mt-1">
            {applications.filter(a => a.status === 'shortlisted' || a.status === 'interview').length}
          </div>
          <div className="text-[11px] text-[#D96B50] font-semibold mt-0.5">High fit candidates</div>
        </div>

        <div className="bg-white border border-[#EAE3D9] rounded-2xl p-5 shadow-2xs">
          <span className="text-xs font-bold text-[#7E7367]">Avg Match at Apply</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#5B7B64] font-display mt-1">82.3%</div>
          <div className="text-[11px] text-[#5B7B64] font-semibold mt-0.5">+14% above threshold</div>
        </div>
      </div>

      {/* 3. DETAILED APPLICATION CARDS WITH 5-STAGE PIPELINE */}
      <div className="space-y-6">
        {applications.length === 0 ? (
          <div className="bg-white border border-[#EAE3D9] rounded-3xl p-12 text-center space-y-4 shadow-sm">
            <Building2 className="w-12 h-12 text-[#A2978A] mx-auto" />
            <h3 className="text-lg font-bold text-[#2E2823]">No Active Applications</h3>
            <p className="text-xs text-[#7E7367] max-w-sm mx-auto">
              Explore smart matching opportunities and submit verified 1-click applications.
            </p>
            <button
              onClick={() => onNavigate('opportunities')}
              className="px-6 py-2.5 rounded-xl font-bold text-xs bg-[#4A2E4B] text-white"
            >
              Explore Opportunities
            </button>
          </div>
        ) : (
          applications.map((app) => (
            <div 
              key={app.id}
              className="bg-white border border-[#EAE3D9] hover:border-[#DDD5C8] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 transition-all"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F4EFEA]">
                <div className="flex items-start space-x-3.5">
                  <img 
                    src={app.companyLogo} 
                    alt={app.company}
                    className="w-12 h-12 rounded-2xl object-cover border border-[#EAE3D9] shrink-0" 
                  />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#2E2823]">{app.role}</h3>
                    <div className="flex items-center space-x-2 text-xs text-[#7E7367] mt-0.5">
                      <span className="font-semibold text-[#3D352E]">{app.company}</span>
                      <span>•</span>
                      <span>{app.location}</span>
                      <span>•</span>
                      <span>Applied on {app.appliedDate}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 self-end sm:self-center">
                  <div className="text-right">
                    <div className="text-[10px] font-bold text-[#7E7367] uppercase">Match Score</div>
                    <div className="text-base font-extrabold text-[#5B7B64] font-mono">{app.matchScoreAtApply}%</div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FAF8F5] text-[#3D352E] border border-[#DDD5C8] capitalize">
                    {app.status.replace('_', ' ')}
                  </span>
                </div>
              </div>

              {/* 5-STAGE VISUAL PIPELINE */}
              <div className="bg-[#FAF8F5] border border-[#EAE3D9] rounded-2xl p-5">
                <div className="text-xs font-bold text-[#7E7367] uppercase tracking-wider mb-4">
                  Application Stage Progress
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative">
                  {pipelineSteps.map((step, idx) => {
                    const status = getStepStatus(app.status, step.key);
                    const isCompleted = status === 'completed';
                    const isActive = status === 'active';

                    return (
                      <div 
                        key={step.key}
                        className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center space-y-1.5 ${
                          isActive
                            ? 'bg-white border-[#4A2E4B] shadow-xs'
                            : isCompleted
                              ? 'bg-[#EAF1EB] border-[#B2CDBD] text-[#3B5342]'
                              : 'bg-white/60 border-[#EAE3D9] text-[#A2978A]'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          isActive
                            ? 'bg-[#4A2E4B] text-white'
                            : isCompleted
                              ? 'bg-[#5B7B64] text-white'
                              : 'bg-[#F4EFEA] text-[#A2978A]'
                        }`}>
                          {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                        </div>
                        <span className={`text-xs font-bold ${
                          isActive ? 'text-[#4A2E4B]' : isCompleted ? 'text-[#3B5342]' : 'text-[#7E7367]'
                        }`}>
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Status Note */}
                <div className="mt-4 pt-3 border-t border-[#EAE3D9] flex items-center space-x-2 text-xs text-[#574D43]">
                  <Sparkles className="w-4 h-4 text-[#D96B50] shrink-0" />
                  <span>
                    <strong>Next Step:</strong> {app.nextStepNote}
                  </span>
                </div>
              </div>

            </div>
          ))
        )}
      </div>

    </div>
  );
};
