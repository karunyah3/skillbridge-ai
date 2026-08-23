import React, { useState } from 'react';
import { PageView } from '../types';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Lock, Mail, User } from 'lucide-react';

interface LoginPageProps {
  onLoginSuccess: (userName: string, email: string) => void;
  onNavigate: (page: PageView) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess, onNavigate }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('Alex Chen');
  const [email, setEmail] = useState('alex.chen@ciat.edu');
  const [password, setPassword] = useState('••••••••••••');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(name || 'Alex Chen', email);
    }, 600);
  };

  const handleDemoLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess('Alex Chen', 'alex.chen@ciat.edu');
    }, 400);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white border border-[#EAE3D9] rounded-3xl p-8 sm:p-10 shadow-lg shadow-[#4A2E4B]/5 space-y-7">
        
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#F0E6F2] border border-[#DEC8E2] text-[#4A2E4B] mb-2 shadow-xs">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="flex items-center justify-center space-x-1.5">
            <h1 className="text-2xl font-black text-[#2E2823] font-display tracking-tight">SkillBridge</h1>
            <span className="text-xs font-black px-2 py-0.5 rounded-md bg-[#4A2E4B] text-white font-mono">AI</span>
          </div>
          <p className="text-xs text-[#7E7367]">
            {isSignUp ? 'Create your verified student account' : 'Welcome back! Sign in to your student portal'}
          </p>
        </div>

        {/* 1-Click Fast Track Demo Button */}
        <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#DEC8E2] text-center space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#4A2E4B] flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#5B7B64]" />
            <span>Hackathon Quick Access</span>
          </div>
          <button
            type="button"
            onClick={handleDemoLogin}
            disabled={isLoading}
            className="w-full py-2.5 rounded-xl font-bold text-xs bg-[#4A2E4B] hover:bg-[#3D223E] text-white shadow-sm transition-all flex items-center justify-center space-x-2"
          >
            <span>Continue as Student (Alex Chen)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="border-t border-[#EAE3D9] w-full" />
          <span className="bg-white px-3 text-[11px] text-[#A2978A] font-semibold uppercase">Or continue with email</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-xs font-bold text-[#574D43] mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-[#A2978A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Chen"
                  className="w-full bg-[#FAF8F5] border border-[#DDD5C8] rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-[#2E2823] focus:outline-none focus:border-[#4A2E4B]"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-[#574D43] mb-1">University / Work Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#A2978A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex.chen@ciat.edu"
                className="w-full bg-[#FAF8F5] border border-[#DDD5C8] rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-[#2E2823] focus:outline-none focus:border-[#4A2E4B]"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#574D43] mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#A2978A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-[#FAF8F5] border border-[#DDD5C8] rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-[#2E2823] focus:outline-none focus:border-[#4A2E4B]"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl font-bold text-xs bg-[#D96B50] hover:bg-[#C65236] text-white shadow-md transition-all flex items-center justify-center space-x-1.5 mt-2"
          >
            <span>{isLoading ? 'Signing In...' : isSignUp ? 'Create Student Account' : 'Sign In to Dashboard'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Social login placeholders */}
        <div className="space-y-2.5 pt-1">
          <div className="text-center text-[11px] text-[#A2978A]">Single Sign-On Options</div>
          <div className="grid grid-cols-3 gap-2">
            <button 
              type="button" 
              onClick={handleDemoLogin}
              className="py-2 px-3 rounded-xl border border-[#EAE3D9] text-[11px] font-semibold text-[#574D43] hover:bg-[#FAF8F5] transition-colors"
            >
              Google
            </button>
            <button 
              type="button" 
              onClick={handleDemoLogin}
              className="py-2 px-3 rounded-xl border border-[#EAE3D9] text-[11px] font-semibold text-[#574D43] hover:bg-[#FAF8F5] transition-colors"
            >
              GitHub
            </button>
            <button 
              type="button" 
              onClick={handleDemoLogin}
              className="py-2 px-3 rounded-xl border border-[#EAE3D9] text-[11px] font-semibold text-[#574D43] hover:bg-[#FAF8F5] transition-colors"
            >
              LinkedIn
            </button>
          </div>
        </div>

        {/* Toggle sign up / sign in */}
        <div className="pt-2 text-center text-xs text-[#7E7367]">
          {isSignUp ? (
            <span>
              Already have an account?{' '}
              <button 
                type="button" 
                onClick={() => setIsSignUp(false)} 
                className="font-bold text-[#4A2E4B] hover:underline"
              >
                Sign In
              </button>
            </span>
          ) : (
            <span>
              Don't have an account?{' '}
              <button 
                type="button" 
                onClick={() => setIsSignUp(true)} 
                className="font-bold text-[#D96B50] hover:underline"
              >
                Create Account
              </button>
            </span>
          )}
        </div>

      </div>
    </div>
  );
};
