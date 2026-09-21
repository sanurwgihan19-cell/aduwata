import React from 'react';
import { Search, MapPin, X, RotateCcw } from 'lucide-react';
import { FilterState, PropertyType } from '../types';
import { sriLankaLocations, getCitiesForDistrict } from '../data/locations';
import { useLanguage } from '../context/LanguageContext';

interface HeroSearchProps {
  filter: FilterState;
  onFilterChange: (newFilter: Partial<FilterState>) => void;
  onResetFilters: () => void;
  totalResultsCount: number;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({
  filter,
  onFilterChange,
  onResetFilters,
  totalResultsCount,
}) => {
  const { t } = useLanguage();
  const currentCities = filter.district ? getCitiesForDistrict(filter.district) : [];

  const hasActiveFilters =
    filter.searchTerm ||
    filter.district ||
    filter.city ||
    filter.propertyType !== 'all' ||
    filter.priceRange !== 'all' ||
    filter.bedrooms !== 'all' ||
    filter.transitCorridor;

  return (
    <section
      className="relative flex items-center justify-center min-h-[500px] py-14 px-4 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.58)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      <div className="w-full max-w-[940px] bg-white rounded-xl p-6 sm:p-7 shadow-[0_12px_35px_rgba(0,0,0,0.25)] border border-neutral-100">
        {/* Search Mode Tabs (Buy / Rent) */}
        <div className="flex gap-6 border-b-2 border-neutral-100 pb-3 mb-5">
          <button
            onClick={() => onFilterChange({ purpose: 'buy' })}
            className={`font-bold text-base pb-2 cursor-pointer transition-colors relative ${
              filter.purpose === 'buy'
                ? 'text-[#e1251b] border-b-3 border-[#e1251b] -mb-[14px]'
                : 'text-neutral-500 hover:text-neutral-800'
            }`}
          >
            {t.heroTabBuy}
          </button>
          <button
            onClick={() => onFilterChange({ purpose: 'rent' })}
            className={`font-bold text-base pb-2 cursor-pointer transition-colors relative ${
              filter.purpose === 'rent'
                ? 'text-[#e1251b] border-b-3 border-[#e1251b] -mb-[14px]'
                : 'text-neutral-500 hover:text-neutral-800'
            }`}
          >
            {t.heroTabRent}
          </button>
          <div className="ml-auto hidden sm:flex items-center text-xs font-semibold text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
            {t.heroBadge}
          </div>
        </div>

        {/* Primary Search Input Group */}
        <div className="flex flex-col sm:flex-row gap-2.5 mb-4">
          <div className="relative flex-1">
            <input
              type="text"
              value={filter.searchTerm}
              onChange={(e) => onFilterChange({ searchTerm: e.target.value })}
              placeholder={t.searchPlaceholder}
              className="w-full pl-4 pr-10 py-3 text-[15px] border border-neutral-300 rounded-lg focus:outline-none focus:border-[#e1251b] focus:ring-1 focus:ring-[#e1251b] transition-all bg-white"
            />
            {filter.searchTerm && (
              <button
                onClick={() => onFilterChange({ searchTerm: '' })}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('listings-container');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#e1251b] hover:bg-[#b81c15] text-white px-7 py-3 rounded-lg text-base font-semibold cursor-pointer transition-colors flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
          >
            <Search className="w-4 h-4" />
            <span>{t.searchButton}</span>
          </button>
        </div>

        {/* Filter Dropdown Selectors - Featuring All 9 Provinces & 25 Districts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
          {/* 1. All Sri Lanka Locations / Districts Filter */}
          <div className="relative">
            <select
              value={filter.district}
              onChange={(e) => onFilterChange({ district: e.target.value, city: '' })}
              className="w-full px-3 py-2.5 bg-[#f8f9fa] border border-neutral-200 rounded-lg text-xs md:text-[13px] text-neutral-800 focus:outline-none focus:border-[#e1251b] cursor-pointer font-medium"
            >
              <option value="">{t.allDistricts}</option>

              {Object.entries(sriLankaLocations).map(([province, districts]) => (
                <optgroup key={province} label={province}>
                  {Object.keys(districts).map((dist) => (
                    <option key={dist} value={dist}>
                      {dist} District
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          {/* 2. Property Types */}
          <div>
            <select
              value={filter.propertyType}
              onChange={(e) => onFilterChange({ propertyType: e.target.value as PropertyType })}
              className="w-full px-3 py-2.5 bg-[#f8f9fa] border border-neutral-200 rounded-lg text-xs md:text-[13px] text-neutral-800 focus:outline-none focus:border-[#e1251b] cursor-pointer font-medium"
            >
              <option value="all">{t.allTypes}</option>
              <option value="house">{t.typeHouse}</option>
              <option value="land">{t.typeLand}</option>
              <option value="apartment">{t.typeApartment}</option>
              <option value="commercial">{t.typeCommercial}</option>
            </select>
          </div>

          {/* 3. Price Range */}
          <div>
            <select
              value={filter.priceRange}
              onChange={(e) => onFilterChange({ priceRange: e.target.value })}
              className="w-full px-3 py-2.5 bg-[#f8f9fa] border border-neutral-200 rounded-lg text-xs md:text-[13px] text-neutral-800 focus:outline-none focus:border-[#e1251b] cursor-pointer font-medium"
            >
              <option value="all">{t.allPrices}</option>
              {filter.purpose === 'buy' ? (
                <>
                  <option value="under-5m">{t.priceUnder5m}</option>
                  <option value="5m-10m">{t.price5m10m}</option>
                  <option value="10m-25m">{t.price10m25m}</option>
                  <option value="25m-50m">{t.price25m50m}</option>
                  <option value="above-50m">{t.priceAbove50m}</option>
                </>
              ) : (
                <>
                  <option value="under-100k">{t.priceUnder100k}</option>
                  <option value="100k-200k">{t.price100k200k}</option>
                  <option value="above-200k">{t.priceAbove200k}</option>
                </>
              )}
            </select>
          </div>

          {/* 4. Bedrooms */}
          <div>
            <select
              value={filter.bedrooms}
              onChange={(e) => onFilterChange({ bedrooms: e.target.value })}
              className="w-full px-3 py-2.5 bg-[#f8f9fa] border border-neutral-200 rounded-lg text-xs md:text-[13px] text-neutral-800 focus:outline-none focus:border-[#e1251b] cursor-pointer font-medium"
            >
              <option value="all">{t.allBeds}</option>
              <option value="1">{t.beds1Plus}</option>
              <option value="2">{t.beds2Plus}</option>
              <option value="3">{t.beds3Plus}</option>
              <option value="4">{t.beds4Plus}</option>
              <option value="5">{t.beds5Plus}</option>
            </select>
          </div>
        </div>

        {/* Sub-Town Refinement Chips if District is chosen */}
        {filter.district && currentCities.length > 0 && (
          <div className="mt-3 pt-3 border-t border-neutral-100">
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-semibold mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#e1251b]" />
              <span>Popular towns in {filter.district} District:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => onFilterChange({ city: '' })}
                className={`text-xs px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
                  !filter.city
                    ? 'bg-[#e1251b] text-white border-[#e1251b]'
                    : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                }`}
              >
                All {filter.district}
              </button>
              {currentCities.map((town) => (
                <button
                  key={town}
                  onClick={() => onFilterChange({ city: town })}
                  className={`text-xs px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
                    filter.city === town
                      ? 'bg-[#e1251b] text-white border-[#e1251b]'
                      : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  {town}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Active Filters Bar & Result Counter */}
        {hasActiveFilters && (
          <div className="mt-3.5 pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 text-neutral-600">
              <span className="font-semibold text-neutral-800">
                {totalResultsCount} {totalResultsCount === 1 ? 'property' : 'properties'} found
              </span>
              {filter.transitCorridor && (
                <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-medium">
                  Transit: {filter.transitCorridor}
                </span>
              )}
            </div>
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1 text-[#e1251b] hover:text-[#b81c15] font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {t.resetButton}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
