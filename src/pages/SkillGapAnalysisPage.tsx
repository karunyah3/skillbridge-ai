import React from 'react';
import { PageView, CareerTrack, SkillScore } from '../types';
import { SkillMappingPage } from './SkillMappingPage';

interface SkillGapAnalysisPageProps {
  onNavigate: (page: PageView) => void;
  selectedTrack: CareerTrack;
  careerTracks: CareerTrack[];
  onTrackChange: (trackId: string) => void;
  skillsData: SkillScore[];
}

export const SkillGapAnalysisPage: React.FC<SkillGapAnalysisPageProps> = (props) => {
  // Alias to SkillMappingPage
  return <SkillMappingPage {...props} />;
};
