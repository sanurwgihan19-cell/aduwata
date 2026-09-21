import React, { useState } from 'react';
import { Home, Heart, PlusCircle, User, Menu, X, Sparkles, LogIn } from 'lucide-react';
import { PropertyPurpose, UserAccount } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  onSelectPurpose: (purpose: PropertyPurpose) => void;
  onOpenFavorites: () => void;
  favoritesCount: number;
  onOpenPostAd: () => void;
  onOpenLogin: (tab?: 'login' | 'register') => void;
  onOpenDashboard: () => void;
  onOpenGuide: () => void;
  onResetFilters: () => void;
  currentPurpose: PropertyPurpose;
  currentUser: UserAccount | null;
}

export const Header: React.FC<HeaderProps> = ({
  onSelectPurpose,
  onOpenFavorites,
  favoritesCount,
  onOpenPostAd,
  onOpenLogin,
  onOpenDashboard,
  onOpenGuide,
  onResetFilters,
  currentPurpose,
  currentUser,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] sticky top-0 z-50">
      {/* Top micro banner for Register & Post guidance */}
      <div className="bg-[#111] text-white text-[11px] sm:text-xs py-1.5 px-4 text-center flex items-center justify-center gap-2 border-b border-neutral-800">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span className="truncate sm:overflow-visible">
          {t.bannerText}
        </span>
        <button
          onClick={onOpenGuide}
          className="underline text-amber-300 hover:text-amber-200 ml-1 cursor-pointer font-bold shrink-0"
        >
          {t.bannerGuideLink}
        </button>
      </div>

      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-5 py-3">
        {/* Logo */}
        <button
          onClick={onResetFilters}
          className="text-[24px] sm:text-[26px] font-extrabold text-[#e1251b] flex items-center gap-2 tracking-tight hover:opacity-95 transition-opacity text-left cursor-pointer"
        >
          <Home className="w-7 h-7 stroke-[2.5]" />
          <span>
            ADUWATA<span className="text-[#111]">.LK</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 font-semibold text-[14px] text-[#333]">
          <button
            onClick={() => onSelectPurpose('buy')}
            className={`transition-colors cursor-pointer py-1 ${
              currentPurpose === 'buy' ? 'text-[#e1251b] font-bold' : 'hover:text-[#e1251b]'
            }`}
          >
            {t.navBuy}
          </button>
          <button
            onClick={() => onSelectPurpose('rent')}
            className={`transition-colors cursor-pointer py-1 ${
              currentPurpose === 'rent' ? 'text-[#e1251b] font-bold' : 'hover:text-[#e1251b]'
            }`}
          >
            {t.navRent}
          </button>
          <button
            onClick={onOpenGuide}
            className="hover:text-[#e1251b] transition-colors cursor-pointer text-neutral-800"
          >
            {t.navHowToPost}
          </button>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Language Switcher Dropdown */}
          <LanguageSelector />

          {/* Favorites Wishlist */}
          <button
            onClick={onOpenFavorites}
            className="relative p-2 rounded-full hover:bg-neutral-100 text-neutral-700 transition-colors cursor-pointer"
            title={t.navSaved}
          >
            <Heart className="w-5 h-5" />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#e1251b] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Post Ad Button */}
          <button
            onClick={onOpenPostAd}
            className="bg-[#111] text-white hover:bg-neutral-800 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
          >
            <PlusCircle className="w-4 h-4 text-amber-400" />
            <span>{t.navPostAd}</span>
            <span className="text-[10px] bg-amber-500 text-black px-1.5 py-0.2 rounded font-bold">
              {t.navPostAdFreeBadge}
            </span>
          </button>

          {/* User Account / Login Button */}
          {currentUser ? (
            <button
              onClick={onOpenDashboard}
              className="bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-900 px-3.5 py-1.5 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-xs"
              title={t.navMyAccount}
            >
              <div className="w-6 h-6 rounded-full bg-[#e1251b] text-white flex items-center justify-center text-xs font-bold">
                {currentUser.name.charAt(0).toUpperCase()}
              </div>
              <span className="max-w-[110px] truncate">{currentUser.name}</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">
                {t.navMyAccount}
              </span>
            </button>
          ) : (
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => onOpenLogin('register')}
                className="bg-neutral-100 hover:bg-neutral-200 text-neutral-800 px-3 py-2 rounded-full font-semibold text-xs transition-colors cursor-pointer"
              >
                {t.navRegister}
              </button>
              <button
                onClick={() => onOpenLogin('login')}
                className="bg-[#e1251b] text-white hover:bg-[#b81c15] px-4 py-2 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              >
                <LogIn className="w-4 h-4" />
                <span>{t.navLogin}</span>
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <LanguageSelector variant="compact" />

          <button
            onClick={onOpenFavorites}
            className="relative p-2 rounded-full text-neutral-700"
          >
            <Heart className="w-5 h-5" />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#e1251b] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-800 rounded-lg hover:bg-neutral-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-neutral-200 bg-white px-5 py-4 space-y-3 shadow-lg">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
            <span className="text-xs font-bold text-neutral-500">Language / භාෂාව / மொழி:</span>
            <LanguageSelector variant="segmented" />
          </div>

          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-neutral-100">
            <button
              onClick={() => {
                onSelectPurpose('buy');
                setMobileMenuOpen(false);
              }}
              className={`py-2 rounded-lg text-center font-bold text-sm ${
                currentPurpose === 'buy' ? 'bg-[#e1251b] text-white' : 'bg-neutral-100 text-neutral-700'
              }`}
            >
              {t.navBuy}
            </button>
            <button
              onClick={() => {
                onSelectPurpose('rent');
                setMobileMenuOpen(false);
              }}
              className={`py-2 rounded-lg text-center font-bold text-sm ${
                currentPurpose === 'rent' ? 'bg-[#e1251b] text-white' : 'bg-neutral-100 text-neutral-700'
              }`}
            >
              {t.navRent}
            </button>
          </div>

          <div className="flex flex-col gap-2 font-medium text-neutral-800 text-sm">
            <button
              onClick={() => {
                onOpenGuide();
                setMobileMenuOpen(false);
              }}
              className="py-1.5 text-left flex items-center gap-2 hover:text-[#e1251b] text-emerald-700 font-bold"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              {t.navHowToPost}
            </button>
          </div>

          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenPostAd();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#111] text-white py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
            >
              <PlusCircle className="w-4 h-4 text-amber-400" />
              <span>{t.navPostAd}</span>
              <span className="text-[10px] bg-amber-500 text-black px-1.5 py-0.2 rounded font-bold">
                {t.navPostAdFreeBadge}
              </span>
            </button>

            {currentUser ? (
              <button
                onClick={() => {
                  onOpenDashboard();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-800 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4 text-[#e1251b]" />
                <span>{currentUser.name} ({t.navMyAccount})</span>
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    onOpenLogin('register');
                    setMobileMenuOpen(false);
                  }}
                  className="bg-neutral-100 text-neutral-800 py-2.5 rounded-lg text-xs font-bold text-center"
                >
                  {t.navRegister}
                </button>
                <button
                  onClick={() => {
                    onOpenLogin('login');
                    setMobileMenuOpen(false);
                  }}
                  className="bg-[#e1251b] text-white py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <LogIn className="w-4 h-4" />
                  {t.navLogin}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
