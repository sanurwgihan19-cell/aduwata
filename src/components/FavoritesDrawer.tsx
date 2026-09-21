import React from 'react';
import { X, Heart, Trash2, ArrowRight } from 'lucide-react';
import { Property } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  allProperties: Property[];
  onToggleFavorite: (id: string) => void;
  onSelectProperty: (property: Property) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  allProperties,
  onToggleFavorite,
  onSelectProperty,
}) => {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  const favoriteProps = allProperties.filter((p) => favorites.includes(p.id));

  const drawerTitle =
    language === 'si'
      ? `සුරැකි දේපල (${favoriteProps.length})`
      : language === 'ta'
      ? `சேமிக்கப்பட்ட சொத்துக்கள் (${favoriteProps.length})`
      : `Saved Properties (${favoriteProps.length})`;

  const emptyTitle =
    language === 'si'
      ? 'ඔබ සුරැකි දේපල කිසිවක් නැත'
      : language === 'ta'
      ? 'சேமிக்கப்பட்டவை எதுவும் இல்லை'
      : 'Your shortlist is empty';

  const emptyDesc =
    language === 'si'
      ? 'දේපල කාඩ්පතෙහි ඇති හදවත ලකුණ ක්ලික් කර ඔබ කැමති දේපල මෙහි පහසුවෙන් සංසන්දනය කරන්න.'
      : language === 'ta'
      ? 'சொத்து அட்டைகளில் உள்ள இதய குறியீட்டை அழுத்தி அவற்றை இங்கே சேமித்து ஒப்பிடலாம்.'
      : 'Click the heart icon on any land or property card to compare them here.';

  const continueBrowsing =
    language === 'si'
      ? 'තවදුරටත් සොයන්න'
      : language === 'ta'
      ? 'தொடர்ந்து உலாவவும்'
      : 'Continue Browsing';

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-4 bg-neutral-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#e1251b] fill-[#e1251b]" />
            <h3 className="font-bold text-base">{drawerTitle}</h3>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-white text-xl p-1 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="p-4 overflow-y-auto flex-1 divide-y divide-neutral-100">
          {favoriteProps.length > 0 ? (
            favoriteProps.map((prop) => (
              <div key={prop.id} className="py-3 flex gap-3 items-center group">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-20 h-16 rounded-lg object-cover bg-neutral-100 shrink-0 cursor-pointer"
                  onClick={() => {
                    onSelectProperty(prop);
                    onClose();
                  }}
                />
                <div
                  className="flex-1 min-w-0 cursor-pointer"
                  onClick={() => {
                    onSelectProperty(prop);
                    onClose();
                  }}
                >
                  <h4 className="font-bold text-xs sm:text-sm text-neutral-800 truncate group-hover:text-[#e1251b]">
                    {prop.title}
                  </h4>
                  <div className="text-xs font-bold text-[#e1251b]">{prop.formattedPrice}</div>
                  <div className="text-[11px] text-neutral-500 truncate">
                    {prop.location.city}, {prop.location.district}
                  </div>
                </div>
                <button
                  onClick={() => onToggleFavorite(prop.id)}
                  className="text-neutral-400 hover:text-red-600 p-2 cursor-pointer"
                  title="Remove from wishlist"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-16 space-y-3">
              <div className="w-12 h-12 bg-red-50 text-[#e1251b] rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-neutral-800 text-sm">{emptyTitle}</h4>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                {emptyDesc}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-50 border-t border-neutral-200">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg font-bold text-xs cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>{continueBrowsing}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
