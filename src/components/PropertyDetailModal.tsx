import React, { useState } from 'react';
import {
  X,
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Car,
  CheckCircle2,
  Phone,
  MessageCircle,
  Calculator,
  ShieldCheck,
  Train,
  Heart,
  Share2,
} from 'lucide-react';
import { Property } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  isFavorite,
  onToggleFavorite,
}) => {
  if (!property) return null;

  const { t } = useLanguage();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // EMI Calculator state in LKR
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [loanTenureYears, setLoanTenureYears] = useState<number>(15);
  const [interestRateAnnual, setInterestRateAnnual] = useState<number>(12.5); // Bank of Ceylon / Commercial Bank average rate

  const downPayment = (property.price * downPaymentPercent) / 100;
  const loanPrincipal = property.price - downPayment;
  const monthlyRate = interestRateAnnual / 12 / 100;
  const totalMonths = loanTenureYears * 12;

  const monthlyEMI =
    monthlyRate > 0 && totalMonths > 0
      ? Math.round(
          (loanPrincipal *
            monthlyRate *
            Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        )
      : 0;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello ${property.seller.name}, I found your listing "${property.title}" (${property.formattedPrice}) on Aduwata.lk. Is it still available for inspection?`
    );
    window.open(`https://wa.me/${property.seller.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[95vh] flex flex-col overflow-hidden shadow-2xl relative my-auto animate-in fade-in">
        {/* Top Floating Control Bar */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2.5 rounded-full bg-white/90 hover:bg-white text-neutral-700 shadow-md backdrop-blur-xs transition-colors cursor-pointer"
            title="Copy Link"
          >
            <Share2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onToggleFavorite(property.id)}
            className={`p-2.5 rounded-full shadow-md backdrop-blur-xs transition-colors cursor-pointer ${
              isFavorite
                ? 'bg-[#e1251b] text-white'
                : 'bg-white/90 hover:bg-white text-neutral-700'
            }`}
            title="Save to Favorites"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-black/70 hover:bg-black text-white shadow-md transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1">
          {/* Main Gallery Banner */}
          <div className="relative bg-neutral-900 h-[280px] sm:h-[400px]">
            <img
              src={property.gallery[activeImageIndex] || property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />

            {/* Badges on image */}
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              {property.isSold ? (
                <span className="bg-neutral-900 text-white text-xs font-black px-3 py-1 rounded shadow-md border border-neutral-700 uppercase">
                  {t.badgeSold}
                </span>
              ) : property.badge ? (
                <span
                  className="text-white text-xs font-bold px-3 py-1 rounded shadow-md"
                  style={{ backgroundColor: property.badge.colorBg || '#e1251b' }}
                >
                  {property.badge.text}
                </span>
              ) : null}
              {property.verifiedDeed && !property.isSold && (
                <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded shadow-md flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {t.verifiedDeedBadge}
                </span>
              )}
              {property.transit && (
                <span className="bg-neutral-900/90 text-amber-400 text-xs font-semibold px-3 py-1 rounded shadow-md flex items-center gap-1">
                  <Train className="w-3.5 h-3.5" />
                  {property.transit.name}
                </span>
              )}
            </div>
          </div>

          {/* Gallery Thumbnails */}
          {property.gallery.length > 1 && (
            <div className="flex gap-2 p-3 bg-neutral-100 overflow-x-auto border-b border-neutral-200">
              {property.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 cursor-pointer ${
                    activeImageIndex === idx ? 'border-[#e1251b]' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {copied && (
            <div className="bg-neutral-900 text-white text-xs text-center py-1.5 font-medium">
              Property link copied to clipboard!
            </div>
          )}

          <div className="p-6 sm:p-8 space-y-8">
            {/* Header Details */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-neutral-200">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#e1251b] uppercase tracking-wider mb-1.5">
                  <span>{property.purpose === 'buy' ? t.tabBuy : t.tabRent}</span>
                  <span>•</span>
                  <span>{property.propertyType.toUpperCase()}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111] leading-tight mb-2">
                  {property.title}
                </h1>
                <div className="flex items-center gap-1.5 text-neutral-600 text-sm">
                  <MapPin className="w-4 h-4 text-[#e1251b] shrink-0" />
                  <span>
                    {property.location.address}, {property.location.city},{' '}
                    {property.location.district} ({property.location.province})
                  </span>
                </div>
              </div>

              <div className="md:text-right shrink-0">
                <div className="text-3xl font-black text-[#e1251b] tracking-tight">
                  {property.formattedPrice}
                </div>
                {property.priceNote && (
                  <span className="text-xs text-neutral-500 font-medium block mt-1">
                    {property.priceNote}
                  </span>
                )}
                <span className="text-[11px] text-neutral-400 block mt-1">
                  Posted {property.postedDate}
                </span>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-center">
              {property.specs.bedrooms !== undefined && (
                <div className="p-2">
                  <Bed className="w-5 h-5 mx-auto text-[#e1251b] mb-1" />
                  <div className="font-bold text-base text-neutral-800">
                    {property.specs.bedrooms}
                  </div>
                  <div className="text-xs text-neutral-500">{t.specBedrooms}</div>
                </div>
              )}
              {property.specs.bathrooms !== undefined && (
                <div className="p-2">
                  <Bath className="w-5 h-5 mx-auto text-[#e1251b] mb-1" />
                  <div className="font-bold text-base text-neutral-800">
                    {property.specs.bathrooms}
                  </div>
                  <div className="text-xs text-neutral-500">{t.specBathrooms}</div>
                </div>
              )}
              {property.specs.area !== undefined && (
                <div className="p-2">
                  <Maximize2 className="w-5 h-5 mx-auto text-[#e1251b] mb-1" />
                  <div className="font-bold text-base text-neutral-800">
                    {property.specs.area.toLocaleString()} {property.specs.areaUnit}
                  </div>
                  <div className="text-xs text-neutral-500">{t.specArea}</div>
                </div>
              )}
              {property.specs.parkingSlots !== undefined ? (
                <div className="p-2">
                  <Car className="w-5 h-5 mx-auto text-[#e1251b] mb-1" />
                  <div className="font-bold text-base text-neutral-800">
                    {property.specs.parkingSlots} Vehicles
                  </div>
                  <div className="text-xs text-neutral-500">{t.specParking}</div>
                </div>
              ) : (
                <div className="p-2">
                  <ShieldCheck className="w-5 h-5 mx-auto text-[#e1251b] mb-1" />
                  <div className="font-bold text-base text-neutral-800">{t.verifiedDeedBadge}</div>
                  <div className="text-xs text-neutral-500">{t.specDeed}</div>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">{t.detailOverview}</h3>
              <p className="text-neutral-700 text-sm leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Features List */}
            <div>
              <h3 className="font-bold text-lg text-neutral-900 mb-3">{t.detailAmenities}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {property.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-neutral-700 bg-white p-2.5 rounded-lg border border-neutral-100"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sri Lanka Bank Home Loan EMI Calculator */}
            {property.purpose === 'buy' && (
              <div className="p-6 bg-red-50/40 rounded-2xl border border-red-100">
                <div className="flex items-center gap-2 mb-4">
                  <Calculator className="w-5 h-5 text-[#e1251b]" />
                  <h3 className="font-bold text-base text-neutral-900">
                    {t.calculatorTitle}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                  <div>
                    <label className="text-xs font-semibold text-neutral-600 block mb-1">
                      {t.calcDownPayment} ({downPaymentPercent}%):
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="50"
                      step="5"
                      value={downPaymentPercent}
                      onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                      className="w-full accent-[#e1251b] cursor-pointer"
                    />
                    <div className="text-xs text-neutral-500 font-bold mt-1">
                      LKR {downPayment.toLocaleString()}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-600 block mb-1">
                      {t.calcLoanTenure} ({loanTenureYears} Years):
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="25"
                      step="1"
                      value={loanTenureYears}
                      onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                      className="w-full accent-[#e1251b] cursor-pointer"
                    />
                    <div className="text-xs text-neutral-500 font-bold mt-1">
                      {loanTenureYears * 12} Months
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-600 block mb-1">
                      {t.calcInterestRate}
                    </label>
                    <input
                      type="number"
                      step="0.25"
                      min="8"
                      max="24"
                      value={interestRateAnnual}
                      onChange={(e) => setInterestRateAnnual(Number(e.target.value))}
                      className="w-full p-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-none"
                    />
                    <span className="text-[10px] text-neutral-500">
                      Standard BOC / Commercial Bank / HNB benchmark
                    </span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-red-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <span className="text-xs text-neutral-500 block">{t.calcEstMonthly}:</span>
                    <span className="text-2xl font-extrabold text-[#e1251b]">
                      LKR {monthlyEMI.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-neutral-400 block">
                      *Principal: LKR {loanPrincipal.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-500 text-right sm:max-w-xs">
                    Get pre-approved in 48 hours through Aduwata.lk banking partners.
                  </div>
                </div>
              </div>
            )}

            {/* Seller Contact Details Card */}
            <div className="bg-[#111] text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                  {t.detailSellerListedBy}
                </span>
                <h4 className="text-xl font-bold mt-0.5">{property.seller.name}</h4>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-neutral-300 mt-1">
                  <span className="bg-neutral-800 px-2.5 py-0.5 rounded text-amber-300 font-medium">
                    {property.seller.type}
                  </span>
                  {property.seller.verified && (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> ID Verified
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href={`tel:${property.seller.phone}`}
                  className="flex-1 sm:flex-initial bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.btnCallSeller} {property.seller.phone}</span>
                </a>
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-emerald-950/40"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{t.btnWhatsAppChat}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
