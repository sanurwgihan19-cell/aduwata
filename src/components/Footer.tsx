import React from 'react';
import { Mail, Phone, Home, MapPin, ShieldCheck } from 'lucide-react';
import { PropertyType, PropertyPurpose } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onFilterQuickLink: (params: {
    propertyType?: PropertyType;
    purpose?: PropertyPurpose;
    district?: string;
  }) => void;
}

export const Footer: React.FC<FooterProps> = ({ onFilterQuickLink }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1a1a1a] text-[#ccc] pt-14 pb-6 mt-16">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        {/* Col 1: Brand */}
        <div>
          <div className="flex items-center gap-2 text-white font-extrabold text-xl mb-3">
            <Home className="w-5 h-5 text-[#e1251b]" />
            <span>
              ADUWATA<span className="text-[#e1251b]">.LK</span>
            </span>
          </div>
          <p className="text-[13px] text-[#aaa] leading-relaxed mb-4">
            {t.footerTagline}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-[#e1251b]" />
            <span>Verified Clear Deeds & Land Registry Support</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold text-base mb-4">{t.footerQuickLinks}</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button
                onClick={() => onFilterQuickLink({ propertyType: 'house', purpose: 'buy' })}
                className="hover:text-[#e1251b] transition-colors cursor-pointer text-left"
              >
                {t.footerHousesSale}
              </button>
            </li>
            <li>
              <button
                onClick={() => onFilterQuickLink({ propertyType: 'land', purpose: 'buy' })}
                className="hover:text-[#e1251b] transition-colors cursor-pointer text-left"
              >
                {t.footerLandsSale}
              </button>
            </li>
            <li>
              <button
                onClick={() => onFilterQuickLink({ propertyType: 'apartment', purpose: 'rent' })}
                className="hover:text-[#e1251b] transition-colors cursor-pointer text-left"
              >
                {t.footerApartmentsRent}
              </button>
            </li>
            <li>
              <button
                onClick={() => onFilterQuickLink({ propertyType: 'commercial', purpose: 'buy' })}
                className="hover:text-[#e1251b] transition-colors cursor-pointer text-left"
              >
                {t.footerCommercial}
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Popular Districts */}
        <div>
          <h4 className="text-white font-bold text-base mb-4">{t.footerPopularDistricts}</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button
                onClick={() => onFilterQuickLink({ district: 'Colombo' })}
                className="hover:text-[#e1251b] transition-colors cursor-pointer text-left"
              >
                Colombo Real Estate
              </button>
            </li>
            <li>
              <button
                onClick={() => onFilterQuickLink({ district: 'Gampaha' })}
                className="hover:text-[#e1251b] transition-colors cursor-pointer text-left"
              >
                Gampaha Real Estate
              </button>
            </li>
            <li>
              <button
                onClick={() => onFilterQuickLink({ district: 'Kandy' })}
                className="hover:text-[#e1251b] transition-colors cursor-pointer text-left"
              >
                Kandy Real Estate
              </button>
            </li>
            <li>
              <button
                onClick={() => onFilterQuickLink({ district: 'Galle' })}
                className="hover:text-[#e1251b] transition-colors cursor-pointer text-left"
              >
                Galle Real Estate
              </button>
            </li>
            <li>
              <button
                onClick={() => onFilterQuickLink({ district: 'Kurunegala' })}
                className="hover:text-[#e1251b] transition-colors cursor-pointer text-left"
              >
                Kurunegala Real Estate
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact Us */}
        <div>
          <h4 className="text-white font-bold text-base mb-4">{t.footerContactUs}</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#e1251b] shrink-0" />
              <a href="mailto:info@aduwata.lk" className="hover:text-[#e1251b]">
                info@aduwata.lk
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#e1251b] shrink-0" />
              <a href="tel:+94112345678" className="hover:text-[#e1251b]">
                +94 11 234 5678
              </a>
            </li>
            <li className="flex items-start gap-2 text-xs text-neutral-400 mt-2">
              <MapPin className="w-4 h-4 text-[#e1251b] shrink-0 mt-0.5" />
              <span>Galle Road, Colombo 03, Sri Lanka</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 pt-5 border-t border-[#333] text-center text-[13px] text-[#777]">
        {t.footerRights}
      </div>
    </footer>
  );
};
