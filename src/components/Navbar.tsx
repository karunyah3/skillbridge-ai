import React, { useState } from 'react';
import { PageView, UserRole } from '../types';
import { 
  Sparkles, 
  Compass, 
  CheckSquare, 
  TrendingUp, 
  Briefcase, 
  BookOpen, 
  FileText, 
  UserCircle2, 
  Menu, 
  X, 
  ChevronDown,
  GraduationCap,
  Building2,
  Layers,
  LogOut,
  LogIn
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  applicationsCount: number;
  isLoggedIn: boolean;
  studentName: string;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  currentRole,
  onRoleChange,
  applicationsCount,
  isLoggedIn,
  studentName,
  onLogout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  // Student Navigation Items
  const navItems: { page: PageView; label: string; icon: React.ReactNode; badge?: string }[] = [
    { page: 'dashboard', label: 'Dashboard', icon: <Compass className="w-4 h-4" /> },
    { page: 'assessment', label: 'Assessment', icon: <CheckSquare className="w-4 h-4" /> },
    { page: 'skill-mapping', label: 'Skill Mapping', icon: <TrendingUp className="w-4 h-4" />, badge: 'Core' },
    { page: 'opportunities', label: 'Opportunities', icon: <Briefcase className="w-4 h-4" /> },
    { page: 'learning-programs', label: 'Learning', icon: <BookOpen className="w-4 h-4" /> },
    { page: 'applications', label: 'Applications', icon: <FileText className="w-4 h-4" />, badge: applicationsCount > 0 ? String(applicationsCount) : undefined },
    { page: 'portfolio', label: 'Portfolio', icon: <UserCircle2 className="w-4 h-4" /> },
  ];

  const roleLabels: Record<UserRole, { label: string; icon: React.ReactNode }> = {
    student: { label: 'Student', icon: <GraduationCap className="w-3.5 h-3.5" /> },
    industry: { label: 'Recruiter', icon: <Building2 className="w-3.5 h-3.5" /> },
    academician: { label: 'Faculty', icon: <Layers className="w-3.5 h-3.5" /> },
    institution: { label: 'Placement', icon: <GraduationCap className="w-3.5 h-3.5" /> },
  };

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE3D9] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('landing')}
            className="flex items-center space-x-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-[#4A2E4B] flex items-center justify-center p-0.5 shadow-xs group-hover:bg-[#3D223E] transition-all">
              <Sparkles className="w-5 h-5 text-[#FAF8F5]" />
            </div>
            <div className="text-left">
              <div className="flex items-center space-x-1.5">
                <span className="text-lg font-black tracking-tight font-display text-[#2E2823]">BRAIDLY</span>
                <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-[#D96B50] text-white font-mono">AI</span>
              </div>
              <p className="text-[10px] text-[#7E7367] font-semibold">Academia–Industry Bridge</p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-[#F4EFEA] p-1 rounded-2xl border border-[#EAE3D9]">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 relative ${
                    isActive
                      ? 'bg-[#4A2E4B] text-white shadow-xs'
                      : 'text-[#574D43] hover:text-[#2E2823] hover:bg-white/60'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`ml-1 text-[9px] font-extrabold px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-[#D96B50] text-white' : 'bg-[#EAE3D9] text-[#4A2E4B]'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools & User Profile */}
          <div className="hidden sm:flex items-center space-x-3">
            
            {/* Role Switcher Pill */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold bg-white border border-[#DDD5C8] text-[#574D43] hover:border-[#4A2E4B] transition-all"
              >
                {roleLabels[currentRole].icon}
                <span>{roleLabels[currentRole].label}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#A2978A]" />
              </button>

              {roleDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 rounded-2xl bg-white border border-[#DDD5C8] shadow-lg p-1.5 z-50 animate-in fade-in"
                  onMouseLeave={() => setRoleDropdownOpen(false)}
                >
                  <div className="text-[10px] font-bold text-[#A2978A] uppercase px-2.5 py-1">Perspective</div>
                  <button
                    onClick={() => { onRoleChange('student'); onNavigate('dashboard'); setRoleDropdownOpen(false); }}
                    className="w-full text-left flex items-center space-x-2 px-2.5 py-1.5 rounded-xl text-xs text-[#2E2823] hover:bg-[#FAF8F5] font-semibold"
                  >
                    <GraduationCap className="w-4 h-4 text-[#4A2E4B]" />
                    <span>Student Portal</span>
                  </button>
                  <button
                    onClick={() => { onRoleChange('industry'); onNavigate('industry-portal'); setRoleDropdownOpen(false); }}
                    className="w-full text-left flex items-center space-x-2 px-2.5 py-1.5 rounded-xl text-xs text-[#2E2823] hover:bg-[#FAF8F5] font-semibold"
                  >
                    <Building2 className="w-4 h-4 text-[#5B7B64]" />
                    <span>Recruiter Portal</span>
                  </button>
                  <button
                    onClick={() => { onRoleChange('academician'); onNavigate('academic-portal'); setRoleDropdownOpen(false); }}
                    className="w-full text-left flex items-center space-x-2 px-2.5 py-1.5 rounded-xl text-xs text-[#2E2823] hover:bg-[#FAF8F5] font-semibold"
                  >
                    <Layers className="w-4 h-4 text-[#D96B50]" />
                    <span>Academician Hub</span>
                  </button>
                </div>
              )}
            </div>

            {/* Profile Avatar / Login CTA */}
            {isLoggedIn ? (
              <div className="flex items-center space-x-2 pl-1">
                <button
                  onClick={() => handleNavClick('portfolio')}
                  className="flex items-center space-x-2 p-1 pr-2.5 rounded-xl bg-white border border-[#EAE3D9] hover:border-[#DEC8E2] transition-all"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
                    alt={studentName}
                    className="w-6 h-6 rounded-lg object-cover" 
                  />
                  <span className="text-xs font-bold text-[#2E2823]">{studentName.split(' ')[0]}</span>
                </button>

                <button
                  onClick={onLogout}
                  className="p-1.5 rounded-xl text-[#7E7367] hover:text-[#C65236] hover:bg-[#FBEAE4] transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleNavClick('login')}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#D96B50] hover:bg-[#C65236] text-white shadow-xs transition-all flex items-center space-x-1"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
            )}

          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white text-[#2E2823] border border-[#DDD5C8]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#EAE3D9] px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-bold ${
                  currentPage === item.page
                    ? 'bg-[#4A2E4B] text-white'
                    : 'bg-[#FAF8F5] text-[#574D43] hover:bg-[#F4EFEA]'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#EAE3D9] flex items-center justify-between">
            <button
              onClick={() => handleNavClick('login')}
              className="text-xs font-bold text-[#D96B50]"
            >
              {isLoggedIn ? 'Sign Out' : 'Sign In'}
            </button>
            <button
              onClick={() => handleNavClick('role-select')}
              className="text-xs font-bold text-[#4A2E4B]"
            >
              Switch Role View
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
