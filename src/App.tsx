import React, { useState, useMemo, useEffect } from 'react';
import { initialProperties } from './data/properties';
import { Property, FilterState, PropertyPurpose, PropertyType, UserAccount } from './types';
import { Header } from './components/Header';
import { HeroSearch } from './components/HeroSearch';
import { HowToPostGuide } from './components/HowToPostGuide';
import { PropertyGrid } from './components/PropertyGrid';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { PostAdModal } from './components/PostAdModal';
import { LoginModal } from './components/LoginModal';
import { UserDashboardModal } from './components/UserDashboardModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [properties, setProperties] = useState<Property[]>(() => {
    try {
      const saved = localStorage.getItem('aduwata_properties');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    // Starts with 0 posts (cleared clean marketplace as requested)
    return [];
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aduwata_favorites');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return [];
  });

  // Logged-in user state
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(() => {
    try {
      const saved = localStorage.getItem('aduwata_current_user');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return null;
  });

  // Sync properties to localStorage
  useEffect(() => {
    localStorage.setItem('aduwata_properties', JSON.stringify(properties));
  }, [properties]);

  // Sync favorites to localStorage
  useEffect(() => {
    localStorage.setItem('aduwata_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const [filter, setFilter] = useState<FilterState>({
    purpose: 'buy',
    searchTerm: '',
    district: '',
    city: '',
    propertyType: 'all',
    priceRange: 'all',
    bedrooms: 'all',
    transitCorridor: '',
  });

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isPostAdOpen, setIsPostAdOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginModalTab, setLoginModalTab] = useState<'login' | 'register'>('login');
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  // Sync current user to localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('aduwata_current_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('aduwata_current_user');
    }
  }, [currentUser]);

  // Filter application
  const filteredProperties = useMemo(() => {
    return properties.filter((item) => {
      // 1. Purpose (Buy vs Rent)
      if (item.purpose !== filter.purpose) return false;

      // 2. Search query (title, address, city, district, description, transit station)
      if (filter.searchTerm.trim()) {
        const query = filter.searchTerm.toLowerCase();
        const matchesQuery =
          item.title.toLowerCase().includes(query) ||
          item.location.city.toLowerCase().includes(query) ||
          item.location.district.toLowerCase().includes(query) ||
          item.location.address.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          (item.transit && item.transit.name.toLowerCase().includes(query));
        if (!matchesQuery) return false;
      }

      // 3. District
      if (filter.district) {
        if (item.location.district.toLowerCase() !== filter.district.toLowerCase()) {
          return false;
        }
      }

      // 4. City / Town
      if (filter.city) {
        if (
          !item.location.city.toLowerCase().includes(filter.city.toLowerCase()) &&
          !item.location.address.toLowerCase().includes(filter.city.toLowerCase())
        ) {
          return false;
        }
      }

      // 5. Property Type
      if (filter.propertyType !== 'all') {
        if (item.propertyType !== filter.propertyType) return false;
      }

      // 6. Price Range
      if (filter.priceRange !== 'all') {
        if (filter.purpose === 'buy') {
          if (filter.priceRange === 'under-5m' && item.price >= 5000000) return false;
          if (filter.priceRange === '5m-10m' && (item.price < 5000000 || item.price > 10000000))
            return false;
          if (filter.priceRange === '10m-25m' && (item.price < 10000000 || item.price > 25000000))
            return false;
          if (filter.priceRange === '25m-50m' && (item.price < 25000000 || item.price > 50000000))
            return false;
          if (filter.priceRange === 'above-50m' && item.price <= 50000000) return false;
        } else {
          if (filter.priceRange === 'under-100k' && item.price >= 100000) return false;
          if (filter.priceRange === '100k-200k' && (item.price < 100000 || item.price > 200000))
            return false;
          if (filter.priceRange === 'above-200k' && item.price <= 200000) return false;
        }
      }

      // 7. Bedrooms
      if (filter.bedrooms !== 'all') {
        const requiredBeds = Number(filter.bedrooms);
        if (!item.specs.bedrooms || item.specs.bedrooms < requiredBeds) return false;
      }

      // 8. Transit Corridor
      if (filter.transitCorridor) {
        if (item.transit?.corridor !== filter.transitCorridor) return false;
      }

      return true;
    });
  }, [properties, filter]);

  // Properties belonging to currently logged in user
  const userProperties = useMemo(() => {
    if (!currentUser) return [];
    return properties.filter(
      (p) => p.userId === currentUser.id || (currentUser.name && p.seller.name.toLowerCase().includes(currentUser.name.toLowerCase()))
    );
  }, [properties, currentUser]);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilter((prev) => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilter({
      purpose: 'buy',
      searchTerm: '',
      district: '',
      city: '',
      propertyType: 'all',
      priceRange: 'all',
      bedrooms: 'all',
      transitCorridor: '',
    });
  };

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddProperty = (newProperty: Property) => {
    // If user is logged in, attach their userId
    const finalProp: Property = {
      ...newProperty,
      userId: currentUser ? currentUser.id : newProperty.userId,
    };
    setProperties((prev) => [finalProp, ...prev]);
    setSelectedProperty(finalProp);
  };

  const handleDeleteProperty = (id: string) => {
    setProperties((prev) => prev.filter((p) => p.id !== id));
    if (selectedProperty?.id === id) {
      setSelectedProperty(null);
    }
  };

  const handleToggleSoldStatus = (id: string) => {
    setProperties((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isSold: !p.isSold } : p))
    );
  };

  const handleClearAllProperties = () => {
    setProperties([]);
    localStorage.setItem('aduwata_properties', JSON.stringify([]));
    setSelectedProperty(null);
  };

  const handleRestoreDemoProperties = () => {
    const sample = initialProperties.map((p, idx) => {
      if (idx === 0) {
        return { ...p, userId: 'usr-demo-1', viewsCount: 148, inquiriesCount: 12 };
      }
      return { ...p, viewsCount: Math.floor(Math.random() * 80) + 20, inquiriesCount: Math.floor(Math.random() * 8) + 1 };
    });
    setProperties(sample);
  };

  const handleLoginSuccess = (user: UserAccount) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const handleOpenLogin = (tab: 'login' | 'register' = 'login') => {
    setLoginModalTab(tab);
    setIsLoginOpen(true);
  };

  const handleFooterQuickLink = (params: {
    propertyType?: PropertyType;
    purpose?: PropertyPurpose;
    district?: string;
  }) => {
    setFilter((prev) => ({
      ...prev,
      ...(params.propertyType && { propertyType: params.propertyType }),
      ...(params.purpose && { purpose: params.purpose }),
      ...(params.district && { district: params.district, city: '' }),
    }));
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f7f9fa] text-[#222] flex flex-col selection:bg-[#e1251b] selection:text-white">
      {/* 1. Header Navigation */}
      <Header
        onSelectPurpose={(purpose) => handleFilterChange({ purpose })}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        favoritesCount={favorites.length}
        onOpenPostAd={() => setIsPostAdOpen(true)}
        onOpenLogin={handleOpenLogin}
        onOpenDashboard={() => setIsDashboardOpen(true)}
        onOpenGuide={() => {
          const el = document.getElementById('how-to-post-guide');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onResetFilters={handleResetFilters}
        currentPurpose={filter.purpose}
        currentUser={currentUser}
      />

      {/* 2. Hero Search Engine with Complete All Sri Lanka Location Filter */}
      <HeroSearch
        filter={filter}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
        totalResultsCount={filteredProperties.length}
      />

      {/* 3. Guide: How anyone can register and post ads */}
      <HowToPostGuide
        onOpenRegister={() => handleOpenLogin('register')}
        onOpenPostAd={() => setIsPostAdOpen(true)}
        isLoggedIn={!!currentUser}
        userName={currentUser?.name}
      />

      {/* 4. Filtered Property Listings Grid (Buy & Rent) */}
      <PropertyGrid
        properties={filteredProperties}
        favorites={favorites}
        totalMarketplaceCount={properties.length}
        onToggleFavorite={handleToggleFavorite}
        onSelectProperty={setSelectedProperty}
        onResetFilters={handleResetFilters}
        onOpenPostAd={() => setIsPostAdOpen(true)}
        onOpenRegister={() => handleOpenLogin('register')}
        onLoadSampleProperties={handleRestoreDemoProperties}
        onClearAllProperties={handleClearAllProperties}
      />

      {/* 5. Footer */}
      <Footer
        onFilterQuickLink={handleFooterQuickLink}
      />

      {/* Modals & Drawers */}
      {selectedProperty && (
        <PropertyDetailModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          isFavorite={favorites.includes(selectedProperty.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {/* Free Ad Posting Modal */}
      <PostAdModal
        isOpen={isPostAdOpen}
        onClose={() => setIsPostAdOpen(false)}
        onAddProperty={handleAddProperty}
        currentUser={currentUser}
        onOpenLogin={() => handleOpenLogin('login')}
        onAutoRegisterUser={handleLoginSuccess}
      />

      {/* User Registration & Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        defaultTab={loginModalTab}
      />

      {/* User Profile & My Posted Ads Dashboard */}
      <UserDashboardModal
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
        user={currentUser}
        userProperties={userProperties}
        onOpenPostAd={() => setIsPostAdOpen(true)}
        onSelectProperty={setSelectedProperty}
        onDeleteProperty={handleDeleteProperty}
        onToggleSoldStatus={handleToggleSoldStatus}
        onLogout={handleLogout}
      />

      {/* Saved Properties Wishlist Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        allProperties={properties}
        onToggleFavorite={handleToggleFavorite}
        onSelectProperty={setSelectedProperty}
      />
    </div>
  );
}
