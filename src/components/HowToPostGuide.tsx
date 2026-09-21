import React from 'react';
import { UserPlus, Image as ImageIcon, CheckCircle, ShieldCheck, Sparkles, ArrowRight, PhoneCall, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HowToPostGuideProps {
  onOpenRegister: () => void;
  onOpenPostAd: () => void;
  isLoggedIn: boolean;
  userName?: string;
}

export const HowToPostGuide: React.FC<HowToPostGuideProps> = ({
  onOpenRegister,
  onOpenPostAd,
  isLoggedIn,
  userName,
}) => {
  const { t } = useLanguage();

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-5 my-10 sm:my-12" id="how-to-post-guide">
      {/* Container with distinct border and subtle clean styling */}
      <div className="bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden border border-neutral-800">
        {/* Background ambient accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e1251b]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Title Header */}
        <div className="relative z-10 max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 bg-[#e1251b]/20 text-[#ff6156] border border-[#e1251b]/30 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.guideBadge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            {t.guideTitle}
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            {t.guideSubtitle}
          </p>
        </div>

        {/* 3 Step Interactive Process */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Step 1 */}
          <div className="bg-neutral-800/80 backdrop-blur-xs border border-neutral-700/60 rounded-xl p-5 hover:border-neutral-500 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#e1251b]/20 border border-[#e1251b]/40 flex items-center justify-center text-[#ff6156]">
                <UserPlus className="w-6 h-6" />
              </div>
              <span className="text-xs font-black tracking-wider text-neutral-500 bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-800">
                {t.step1Number}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1.5">
              {t.step1Title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-3">
              {t.step1Desc}
            </p>
            <div className="text-[12px] text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{t.step1Check}</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-neutral-800/80 backdrop-blur-xs border border-neutral-700/60 rounded-xl p-5 hover:border-neutral-500 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <ImageIcon className="w-6 h-6" />
              </div>
              <span className="text-xs font-black tracking-wider text-neutral-500 bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-800">
                {t.step2Number}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1.5">
              {t.step2Title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-3">
              {t.step2Desc}
            </p>
            <div className="text-[12px] text-amber-400 font-semibold flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{t.step2Check}</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-neutral-800/80 backdrop-blur-xs border border-neutral-700/60 rounded-xl p-5 hover:border-neutral-500 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <PhoneCall className="w-6 h-6" />
              </div>
              <span className="text-xs font-black tracking-wider text-neutral-500 bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-800">
                {t.step3Number}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1.5">
              {t.step3Title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-3">
              {t.step3Desc}
            </p>
            <div className="text-[12px] text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{t.step3Check}</span>
            </div>
          </div>
        </div>

        {/* Quick Highlights and CTAs */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-800">
          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-300">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.guideAllDistrictsCheck}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>{t.guideDirectWhatsAppCheck}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={onOpenRegister}
                  className="flex-1 sm:flex-none px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs sm:text-sm rounded-xl border border-neutral-700 transition-colors cursor-pointer"
                >
                  {t.btnRegisterFree}
                </button>
                <button
                  onClick={onOpenPostAd}
                  className="flex-1 sm:flex-none px-5 py-2.5 bg-[#e1251b] hover:bg-[#b81c15] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <span>{t.btnPostAdNow}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-xs text-neutral-300">
                  {t.guideWelcomeUser} <strong className="text-white">{userName}</strong>!
                </span>
                <button
                  onClick={onOpenPostAd}
                  className="px-6 py-2.5 bg-[#e1251b] hover:bg-[#b81c15] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <span>{t.btnPostAdNow}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
