import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../translations';

interface LanguageSelectorProps {
  variant?: 'compact' | 'expanded' | 'segmented';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'compact',
  className = '',
}) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; nativeName: string; flag: string }[] = [
    { code: 'en', label: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'si', label: 'Sinhala', nativeName: 'සිංහල', flag: '🇱🇰' },
    { code: 'ta', label: 'Tamil', nativeName: 'தமிழ்', flag: '🇱🇰' },
  ];

  const current = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (variant === 'segmented') {
    return (
      <div className={`inline-flex items-center bg-neutral-100 p-0.5 rounded-lg border border-neutral-200 text-xs font-semibold ${className}`}>
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => setLanguage(l.code)}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
              language === l.code
                ? 'bg-white text-[#e1251b] font-bold shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <span>{l.nativeName}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold transition-colors cursor-pointer border border-neutral-200"
        title="Change Language / භාෂාව තෝරන්න / மொழியை மாற்றவும்"
      >
        <Globe className="w-3.5 h-3.5 text-[#e1251b]" />
        <span>{current.nativeName}</span>
        <ChevronDown className={`w-3 h-3 text-neutral-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-44 rounded-xl bg-white shadow-xl border border-neutral-200 py-1.5 z-50 animate-in fade-in">
          <div className="px-3 py-1 text-[10px] font-bold text-neutral-400 uppercase tracking-wider border-b border-neutral-100 mb-1">
            Select Language
          </div>
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLanguage(l.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                language === l.code
                  ? 'bg-red-50 text-[#e1251b] font-bold'
                  : 'text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">{l.flag}</span>
                <div>
                  <div className="font-semibold">{l.nativeName}</div>
                  <div className="text-[10px] text-neutral-400">{l.label}</div>
                </div>
              </div>
              {language === l.code && <Check className="w-3.5 h-3.5 text-[#e1251b]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
