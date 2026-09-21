import React from 'react';
import {
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Heart,
  Train,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import { Property } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface PropertyCardProps {
  property: Property;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelectProperty: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isFavorite,
  onToggleFavorite,
  onSelectProperty,
}) => {
  const { t } = useLanguage();

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Hello, I am interested in "${property.title}" (${property.formattedPrice}) on Aduwata.lk. Please share more details.`
    );
    window.open(`https://wa.me/${property.seller.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div
      onClick={() => onSelectProperty(property)}
      className={`bg-white rounded-[10px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col cursor-pointer border border-neutral-100/80 group ${
        property.isSold ? 'opacity-80' : ''
      }`}
    >
      {/* Image & Badges */}
      <div className="relative h-[180px] w-full overflow-hidden bg-neutral-100">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Sold Overlay Banner */}
        {property.isSold ? (
          <span className="absolute top-2.5 left-2.5 bg-neutral-900 text-white text-[11px] font-black px-2.5 py-1 rounded tracking-wider uppercase shadow-md border border-neutral-700">
            {t.badgeSold}
          </span>
        ) : property.badge ? (
          /* Status Badge */
          <span
            className="absolute top-2.5 left-2.5 text-white text-[11px] font-bold px-2.5 py-1 rounded tracking-wide uppercase shadow-sm"
            style={{ backgroundColor: property.badge.colorBg || '#e1251b' }}
          >
            {property.badge.text}
          </span>
        ) : null}

        {/* Verified Deed Icon */}
        {property.verifiedDeed && !property.isSold && (
          <span
            className="absolute top-2.5 right-11 bg-white/90 backdrop-blur-xs text-emerald-700 text-[11px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-sm"
            title="Verified Bim Saviya or Clear Deed"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            {t.verifiedDeedBadge}
          </span>
        )}

        {/* Favorite Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(property.id);
          }}
          className={`absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer ${
            isFavorite
              ? 'bg-[#e1251b] text-white shadow-sm'
              : 'bg-white/85 text-neutral-600 hover:text-[#e1251b] hover:bg-white'
          }`}
          aria-label="Save Property"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Transit Strip if nearby */}
        {property.transit && (
          <div className="absolute bottom-0 left-0 right-0 bg-neutral-900/80 backdrop-blur-xs text-neutral-200 text-[11px] px-2.5 py-1 flex items-center gap-1.5 truncate">
            <Train className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate">{property.transit.name}</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Price & Tag */}
          <div className="flex items-baseline justify-between gap-1 mb-1">
            <div className="text-[18px] font-extrabold text-[#e1251b] tracking-tight">
              {property.formattedPrice}
            </div>
            {property.priceNote && (
              <span className="text-[11px] font-medium text-neutral-500 shrink-0">
                {property.priceNote}
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            className="text-[15px] font-bold text-[#333] mb-1.5 truncate group-hover:text-[#e1251b] transition-colors"
            title={property.title}
          >
            {property.title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1 text-[13px] text-neutral-500 mb-3 truncate">
            <MapPin className="w-3.5 h-3.5 text-[#e1251b] shrink-0" />
            <span className="truncate">
              {property.location.city}, {property.location.district}
            </span>
          </div>
        </div>

        {/* Specs & Actions Footer */}
        <div>
          <div className="flex items-center justify-between text-[12px] text-neutral-600 border-t border-neutral-100 pt-2.5">
            <div className="flex items-center gap-3 font-medium">
              {property.specs.bedrooms !== undefined && (
                <span className="flex items-center gap-1" title="Bedrooms">
                  <Bed className="w-3.5 h-3.5 text-neutral-400" />
                  {property.specs.bedrooms} Beds
                </span>
              )}
              {property.specs.bathrooms !== undefined && (
                <span className="flex items-center gap-1" title="Bathrooms">
                  <Bath className="w-3.5 h-3.5 text-neutral-400" />
                  {property.specs.bathrooms} Baths
                </span>
              )}
              {property.specs.area !== undefined && (
                <span className="flex items-center gap-1" title="Area / Extent">
                  <Maximize2 className="w-3.5 h-3.5 text-neutral-400" />
                  {property.specs.area.toLocaleString()} {property.specs.areaUnit}
                </span>
              )}
            </div>

            {/* Direct WhatsApp Inquiry */}
            <button
              onClick={handleWhatsApp}
              className="text-emerald-600 hover:text-emerald-700 p-1 hover:bg-emerald-50 rounded transition-colors cursor-pointer"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600/15" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
