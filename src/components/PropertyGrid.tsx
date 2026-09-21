import React, { useState } from 'react';
import { ArrowUpDown, RefreshCw, PlusCircle, UserPlus, Sparkles, Trash2 } from 'lucide-react';
import { Property } from '../types';
import { PropertyCard } from './PropertyCard';
import { useLanguage } from '../context/LanguageContext';

interface PropertyGridProps {
  properties: Property[];
  favorites: string[];
  totalMarketplaceCount: number;
  onToggleFavorite: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  onResetFilters: () => void;
  onOpenPostAd: () => void;
  onOpenRegister: () => void;
  onLoadSampleProperties: () => void;
  onClearAllProperties: () => void;
}

export const PropertyGrid: React.FC<PropertyGridProps> = ({
  properties,
  favorites,
  totalMarketplaceCount,
  onToggleFavorite,
  onSelectProperty,
  onResetFilters,
  onOpenPostAd,
  onOpenRegister,
  onLoadSampleProperties,
  onClearAllProperties,
}) => {
  const { t } = useLanguage();
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'newest'>('default');

  const sortedProperties = [...properties].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'newest') return a.id.localeCompare(b.id);
    return 0;
  });

  const handleConfirmClear = () => {
    if (window.confirm(t.clearPostsConfirm)) {
      onClearAllProperties();
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-5 my-10" id="listings-container">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-2 border-b border-neutral-200">
        <div>
          <h2 className="text-[22px] font-bold text-[#222]">
            {t.gridTitle}
          </h2>
          <p className="text-sm text-neutral-500">
            {t.gridSubtitle} ({properties.length})
          </p>
        </div>

        {/* Action & Sort Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {totalMarketplaceCount > 0 && (
            <button
              onClick={handleConfirmClear}
              className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-red-600 bg-white hover:bg-red-50 border border-neutral-200 hover:border-red-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              title={t.btnClearAllPosts}
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>{t.btnClearAllPosts}</span>
            </button>
          )}

          {properties.length > 0 && (
            <div className="flex items-center gap-2 text-xs text-neutral-600 bg-white border border-neutral-200 px-3 py-1.5 rounded-lg shadow-2xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400" />
              <span>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-neutral-800 font-semibold focus:outline-none cursor-pointer"
              >
                <option value="default">Featured / Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest Listings</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Property Cards Grid */}
      {sortedProperties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {sortedProperties.map((prop) => (
            <PropertyCard
              key={prop.id}
              property={prop}
              isFavorite={favorites.includes(prop.id)}
              onToggleFavorite={onToggleFavorite}
              onSelectProperty={onSelectProperty}
            />
          ))}
        </div>
      ) : totalMarketplaceCount === 0 ? (
        /* Empty Marketplace: Open space for anyone to register & post for free */
        <div className="bg-gradient-to-b from-white to-neutral-50 rounded-2xl p-8 sm:p-12 text-center border-2 border-dashed border-neutral-300 max-w-2xl mx-auto my-8 shadow-sm">
          <div className="w-16 h-16 bg-red-100 text-[#e1251b] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xs">
            <PlusCircle className="w-8 h-8 stroke-[2.5]" />
          </div>
          
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#e1251b] bg-red-50 px-3 py-1 rounded-full mb-3 border border-red-100">
            100% Free Ad Posting • All 25 Districts
          </span>

          <h3 className="text-xl sm:text-2xl font-black text-neutral-900 mb-2">
            {t.emptyMarketplaceTitle}
          </h3>
          
          <p className="text-xs sm:text-sm text-neutral-600 mb-6 max-w-lg mx-auto leading-relaxed">
            {t.emptyMarketplaceDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <button
              onClick={onOpenPostAd}
              className="w-full sm:w-auto bg-[#e1251b] hover:bg-[#b81c15] text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{t.btnPostFirstAd}</span>
            </button>

            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <UserPlus className="w-4 h-4 text-amber-400" />
              <span>{t.btnRegisterInMinute}</span>
            </button>
          </div>

          {/* Optional sample loader button */}
          <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-center gap-2 text-xs text-neutral-500">
            <span>Want to explore sample properties?</span>
            <button
              onClick={onLoadSampleProperties}
              className="text-[#e1251b] hover:underline font-bold flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.btnLoadDemoPosts}</span>
            </button>
          </div>
        </div>
      ) : (
        /* Filter Empty State (Marketplace has items, but current filter returned 0) */
        <div className="bg-white rounded-xl p-12 text-center border border-neutral-200 max-w-lg mx-auto my-8 shadow-sm">
          <div className="w-14 h-14 bg-red-50 text-[#e1251b] rounded-full flex items-center justify-center mx-auto mb-4">
            <RefreshCw className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-neutral-800 mb-1">
            {t.noResultsFound}
          </h3>
          <p className="text-sm text-neutral-500 mb-5">
            {t.noResultsReset}
          </p>
          <button
            onClick={onResetFilters}
            className="bg-[#e1251b] hover:bg-[#b81c15] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
          >
            {t.resetButton}
          </button>
        </div>
      )}
    </div>
  );
};
