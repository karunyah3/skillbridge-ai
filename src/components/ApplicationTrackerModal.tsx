import React from 'react';
import { StudentApplication } from '../types';
import { X, CheckCircle2, Clock, Calendar, ArrowRight, Building2 } from 'lucide-react';

interface ApplicationTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  applications: StudentApplication[];
  onNavigateToOpportunities: () => void;
}

export const ApplicationTrackerModal: React.FC<ApplicationTrackerModalProps> = ({
  isOpen,
  onClose,
  applications,
  onNavigateToOpportunities,
}) => {
  if (!isOpen) return null;

  const getStatusBadge = (status: StudentApplication['status']) => {
    switch (status) {
      case 'applied':
        return (
          <span className="inline-flex items-center space-x-1 text-xs font-bold px-2.5 py-1 rounded-full bg-[#FAF8F5] text-[#574D43] border border-[#DDD5C8]">
            <Clock className="w-3.5 h-3.5 text-[#7E7367]" />
            <span>Applied</span>
          </span>
        );
      case 'under_review':
        return (
          <span className="inline-flex items-center space-x-1 text-xs font-bold px-2.5 py-1 rounded-full bg-[#F0E6F2] text-[#4A2E4B] border border-[#DEC8E2]">
            <Clock className="w-3.5 h-3.5 text-[#4A2E4B] animate-spin" />
            <span>Under Review</span>
          </span>
        );
      case 'shortlisted':
        return (
          <span className="inline-flex items-center space-x-1 text-xs font-bold px-2.5 py-1 rounded-full bg-[#EAF1EB] text-[#3B5342] border border-[#B2CDBD]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7B64]" />
            <span>Shortlisted</span>
          </span>
        );
      case 'interview':
        return (
          <span className="inline-flex items-center space-x-1 text-xs font-bold px-2.5 py-1 rounded-full bg-[#FBEAE4] text-[#8A3421] border border-[#F7D3C6]">
            <Calendar className="w-3.5 h-3.5 text-[#D96B50]" />
            <span>Interview</span>
          </span>
        );
      case 'selected':
        return (
          <span className="inline-flex items-center space-x-1 text-xs font-bold px-2.5 py-1 rounded-full bg-[#EAF1EB] text-[#3B5342] border border-[#B2CDBD]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7B64]" />
            <span>Offer Selected 🎉</span>
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#231E1A]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border border-[#EAE3D9] rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-[#EAE3D9] flex items-center justify-between bg-[#FAF8F5]">
          <div>
            <h3 className="text-lg font-bold text-[#2E2823] flex items-center space-x-2">
              <span>Tracked Applications</span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-[#F0E6F2] text-[#4A2E4B] border border-[#DEC8E2]">
                {applications.length} Active
              </span>
            </h3>
            <p className="text-xs text-[#7E7367] mt-0.5">
              Live status tracking with match scores
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#7E7367] hover:text-[#2E2823] hover:bg-[#FAF8F5] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="p-5 overflow-y-auto space-y-4 divide-y divide-[#F4EFEA]">
          {applications.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] flex items-center justify-center mx-auto mb-3 text-[#A2978A]">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-[#2E2823]">No applications yet</h4>
              <p className="text-xs text-[#7E7367] mt-1 max-w-sm mx-auto">
                Explore smart matched opportunities and submit 1-click applications verified with your BRAIDLY portfolio.
              </p>
              <button
                onClick={() => { onClose(); onNavigateToOpportunities(); }}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-[#4A2E4B] hover:bg-[#3B2238] text-white shadow-xs transition-all"
              >
                Browse Matching Opportunities
              </button>
            </div>
          ) : (
            applications.map((app) => (
              <div key={app.id} className="pt-4 first:pt-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-[#2E2823]">{app.role}</h4>
                    <div className="flex items-center space-x-2 text-xs text-[#7E7367] mt-0.5">
                      <span className="font-semibold text-[#3D352E]">{app.company}</span>
                      <span>•</span>
                      <span>Applied on {app.appliedDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <div className="text-[10px] text-[#7E7367] uppercase font-bold">Match Score</div>
                      <div className="text-sm font-bold text-[#5B7B64] font-mono">{app.matchScoreAtApply}%</div>
                    </div>
                    {getStatusBadge(app.status)}
                  </div>
                </div>

                {/* Progress pipeline tracker */}
                <div className="mt-3.5 bg-[#FAF8F5] border border-[#EAE3D9] rounded-xl p-3">
                  <div className="flex items-center justify-between text-[11px] text-[#7E7367] font-semibold relative">
                    <div className="flex items-center space-x-1 text-[#5B7B64] font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Applied</span>
                    </div>
                    <ArrowRight className="w-3 h-3 text-[#A2978A]" />
                    <div className={`flex items-center space-x-1 ${
                      app.status !== 'applied' ? 'text-[#4A2E4B] font-bold' : 'text-[#A2978A]'
                    }`}>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Review</span>
                    </div>
                    <ArrowRight className="w-3 h-3 text-[#A2978A]" />
                    <div className={`flex items-center space-x-1 ${
                      app.status === 'shortlisted' || app.status === 'interview' || app.status === 'selected' ? 'text-[#D96B50] font-bold' : 'text-[#A2978A]'
                    }`}>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Shortlist</span>
                    </div>
                    <ArrowRight className="w-3 h-3 text-[#A2978A]" />
                    <div className={`flex items-center space-x-1 ${
                      app.status === 'interview' || app.status === 'selected' ? 'text-[#4A2E4B] font-bold' : 'text-[#A2978A]'
                    }`}>
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Interview</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#EAE3D9] bg-[#FAF8F5] flex items-center justify-between">
          <span className="text-xs text-[#7E7367]">
            BRAIDLY Verified Candidate Pipeline
          </span>
          <button
            onClick={() => { onClose(); onNavigateToOpportunities(); }}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white border border-[#DDD5C8] text-[#2E2823] hover:bg-[#FAF8F5] transition-colors"
          >
            Explore Opportunities
          </button>
        </div>

      </div>
    </div>
  );
};
