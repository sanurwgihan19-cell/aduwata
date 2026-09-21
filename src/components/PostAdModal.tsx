import React, { useState, useEffect } from 'react';
import { PlusCircle, CheckCircle2, UploadCloud, ShieldCheck } from 'lucide-react';
import { Property, PropertyPurpose, UserAccount } from '../types';
import { sriLankaLocations } from '../data/locations';
import { useLanguage } from '../context/LanguageContext';

interface PostAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProperty: (property: Property) => void;
  currentUser: UserAccount | null;
  onOpenLogin: () => void;
  onAutoRegisterUser?: (user: UserAccount) => void;
}

export const PostAdModal: React.FC<PostAdModalProps> = ({
  isOpen,
  onClose,
  onAddProperty,
  currentUser,
  onOpenLogin,
  onAutoRegisterUser,
}) => {
  if (!isOpen) return null;

  const { t } = useLanguage();

  const [title, setTitle] = useState('');
  const [purpose, setPurpose] = useState<PropertyPurpose>('buy');
  const [propertyType, setPropertyType] = useState<'house' | 'land' | 'apartment' | 'commercial'>('house');
  const [selectedProvince, setSelectedProvince] = useState('Western Province');
  const [selectedDistrict, setSelectedDistrict] = useState(currentUser?.district || 'Colombo');
  const [city, setCity] = useState('Wellawatte');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('3');
  const [bathrooms, setBathrooms] = useState('2');
  const [area, setArea] = useState('1400');
  const [areaUnit, setAreaUnit] = useState<'sqft' | 'perches'>('sqft');
  const [description, setDescription] = useState('');
  const [deedType, setDeedType] = useState('Sinnakkara Clear Deed');
  const [hasWaterElectricity, setHasWaterElectricity] = useState(true);
  const [roadAccess, setRoadAccess] = useState('20 ft Carpeted Road');
  const [autoRegister, setAutoRegister] = useState(true);

  // Photo state
  const [imageUrl, setImageUrl] = useState(
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80'
  );
  const [customPhotoSelected, setCustomPhotoSelected] = useState(false);

  // Seller info
  const [sellerName, setSellerName] = useState(currentUser?.name || '');
  const [sellerPhone, setSellerPhone] = useState(currentUser?.phone || '077 ');
  const [sellerWhatsapp, setSellerWhatsapp] = useState(
    currentUser?.phone ? currentUser.phone.replace(/[^0-9]/g, '') : '94771234567'
  );

  const [submitted, setSubmitted] = useState(false);

  // Update seller info when currentUser changes
  useEffect(() => {
    if (currentUser) {
      setSellerName(currentUser.name);
      setSellerPhone(currentUser.phone);
      setSellerWhatsapp(currentUser.phone.replace(/[^0-9]/g, ''));
      if (currentUser.district) {
        setSelectedDistrict(currentUser.district);
      }
    }
  }, [currentUser]);

  // Adjust photo default when property type changes unless user picked custom
  useEffect(() => {
    if (!customPhotoSelected) {
      if (propertyType === 'land') {
        setImageUrl('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80');
        setAreaUnit('perches');
        setArea('10');
      } else if (propertyType === 'apartment') {
        setImageUrl('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80');
        setAreaUnit('sqft');
        setArea('1150');
      } else if (propertyType === 'commercial') {
        setImageUrl('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80');
        setAreaUnit('sqft');
        setArea('2500');
      } else {
        setImageUrl('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80');
        setAreaUnit('sqft');
        setArea('1400');
      }
    }
  }, [propertyType, customPhotoSelected]);

  const availableDistricts = Object.keys(sriLankaLocations[selectedProvince] || {});

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
        setCustomPhotoSelected(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePresetPhoto = (url: string) => {
    setImageUrl(url);
    setCustomPhotoSelected(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numPrice = Number(price.replace(/[^0-9]/g, '')) || 15000000;

    let finalUserId = currentUser?.id;
    if (!currentUser && autoRegister) {
      const generatedUser: UserAccount = {
        id: `usr-${Date.now()}`,
        name: sellerName || 'Verified Owner',
        phone: sellerPhone || '077 123 4567',
        district: selectedDistrict,
        role: 'Owner',
        joinedDate: 'September 2026',
        verified: true,
      };
      finalUserId = generatedUser.id;
      if (onAutoRegisterUser) {
        onAutoRegisterUser(generatedUser);
      }
    }

    const newProp: Property = {
      id: `ad-${Date.now()}`,
      title: title || `${propertyType.toUpperCase()} in ${city}`,
      price: numPrice,
      formattedPrice:
        purpose === 'buy'
          ? `LKR ${numPrice.toLocaleString()}`
          : `LKR ${numPrice.toLocaleString()} / month`,
      priceNote: 'Direct Owner Listing',
      purpose,
      propertyType,
      badge: {
        text: 'Aduwata Deal',
        colorBg: '#e1251b',
      },
      location: {
        province: selectedProvince,
        district: selectedDistrict,
        city: city || selectedDistrict,
        address: address || `${city}, ${selectedDistrict}`,
      },
      specs: {
        bedrooms: propertyType !== 'land' ? Number(bedrooms) || 0 : undefined,
        bathrooms: propertyType !== 'land' ? Number(bathrooms) || 0 : undefined,
        area: Number(area) || 1200,
        areaUnit,
        parkingSlots: 1,
      },
      features: [
        'Clear Legal Deed',
        'Direct Owner Contact',
        roadAccess,
        ...(hasWaterElectricity ? ['3-Phase Electricity & Tap Water'] : []),
      ],
      description:
        description ||
        `Direct seller ad on Aduwata.lk. ${propertyType.toUpperCase()} located at ${city}, ${selectedDistrict}. Well connected, clear deeds and good road access.`,
      image: imageUrl,
      gallery: [
        imageUrl,
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80',
      ],
      verifiedDeed: true,
      postedDate: 'Just now',
      seller: {
        name: sellerName || (currentUser ? currentUser.name : 'Verified Owner'),
        phone: sellerPhone || '077 123 4567',
        whatsapp: sellerWhatsapp || '94771234567',
        type: currentUser?.role === 'Developer' ? 'Premier Developer' : currentUser?.role === 'Broker / Agent' ? 'Verified Agent' : 'Owner',
        verified: true,
      },
      userId: finalUserId,
      isSold: false,
      viewsCount: 1,
      inquiriesCount: 0,
    };

    onAddProperty(newProp);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative my-auto animate-in fade-in">
        {/* Header */}
        <div className="bg-[#111] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#e1251b] flex items-center justify-center">
              <PlusCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">
                {t.postAdModalTitle}
              </h3>
              <p className="text-[11px] text-neutral-400">
                {t.postAdModalSub}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white text-2xl px-2 cursor-pointer transition-colors"
          >
            &times;
          </button>
        </div>

        {/* User Status Bar */}
        <div className="bg-neutral-100 px-6 py-2.5 border-b border-neutral-200 flex items-center justify-between text-xs">
          {currentUser ? (
            <div className="flex items-center gap-2 text-emerald-800 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>
                {t.dashboardVerifiedUser}: <strong>{currentUser.name}</strong> ({currentUser.phone})
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full">
              <span className="text-neutral-600">
                {t.freeCommunityBanner}
              </span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenLogin();
                }}
                className="text-[#e1251b] font-bold hover:underline cursor-pointer ml-2 shrink-0"
              >
                {t.tabSignIn}
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
              <h4 className="text-xl font-bold text-neutral-800">
                {t.postSuccessTitle}
              </h4>
              <p className="text-sm text-neutral-500 max-w-md mx-auto">
                {t.postSuccessDesc}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* Purpose & Type */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-neutral-700 block mb-1">
                    {t.postPurpose} <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value as PropertyPurpose)}
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-[#e1251b]"
                  >
                    <option value="buy">{t.postPurposeBuy}</option>
                    <option value="rent">{t.postPurposeRent}</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-neutral-700 block mb-1">
                    {t.postCategory} <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value as any)}
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-[#e1251b]"
                  >
                    <option value="house">{t.propHouse}</option>
                    <option value="land">{t.propLand}</option>
                    <option value="apartment">{t.propApartment}</option>
                    <option value="commercial">{t.propCommercial}</option>
                  </select>
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="font-bold text-neutral-700 block mb-1">
                  {t.postTitleLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={t.postTitlePlaceholder}
                  className="w-full p-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-[#e1251b]"
                />
              </div>

              {/* Province, District, City */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-neutral-700 block mb-1">{t.postProvince}</label>
                  <select
                    value={selectedProvince}
                    onChange={(e) => {
                      const prov = e.target.value;
                      setSelectedProvince(prov);
                      const dists = Object.keys(sriLankaLocations[prov] || {});
                      setSelectedDistrict(dists[0] || '');
                      setCity('');
                    }}
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none text-xs"
                  >
                    {Object.keys(sriLankaLocations).map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-neutral-700 block mb-1">{t.postDistrict}</label>
                  <select
                    value={selectedDistrict}
                    onChange={(e) => {
                      setSelectedDistrict(e.target.value);
                      setCity('');
                    }}
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none text-xs"
                  >
                    {availableDistricts.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-neutral-700 block mb-1">{t.postCity}</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Negombo / Wellawatte"
                    className="w-full p-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none text-xs"
                  />
                </div>
              </div>

              {/* Price & Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-neutral-700 block mb-1">
                    {t.postPrice} ({purpose === 'buy' ? 'Total' : 'Per Month'}) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="e.g. 12500000"
                    className="w-full p-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-[#e1251b]"
                  />
                </div>

                {propertyType !== 'land' ? (
                  <>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">{t.postBedrooms}</label>
                      <input
                        type="number"
                        min="1"
                        max="15"
                        value={bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}
                        className="w-full p-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">{t.postBathrooms}</label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                        className="w-full p-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">{t.postExtent}</label>
                      <input
                        type="number"
                        value={area}
                        onChange={(e) => {
                          setArea(e.target.value);
                        }}
                        placeholder="10"
                        className="w-full p-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">{t.postUnit}</label>
                      <select
                        value={areaUnit}
                        onChange={(e) => setAreaUnit(e.target.value as any)}
                        className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg"
                      >
                        <option value="perches">{t.unitPerches}</option>
                        <option value="sqft">{t.unitSqft}</option>
                      </select>
                    </div>
                  </>
                )}
              </div>

              {/* Legal Deed Status & Road Access */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                <div>
                  <label className="font-bold text-neutral-700 block mb-1">{t.postDeedStatus}</label>
                  <select
                    value={deedType}
                    onChange={(e) => setDeedType(e.target.value)}
                    className="w-full p-2 bg-white border border-neutral-300 rounded-lg text-xs"
                  >
                    <option value="Sinnakkara Clear Deed">
                      {t.deedSinnakkara}
                    </option>
                    <option value="Bim Saviya 1st Class Title">
                      {t.deedBimSaviya}
                    </option>
                    <option value="Bank Loan Approved Title">
                      {t.deedBankApproved}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-neutral-700 block mb-1">{t.postRoadAccess}</label>
                  <select
                    value={roadAccess}
                    onChange={(e) => setRoadAccess(e.target.value)}
                    className="w-full p-2 bg-white border border-neutral-300 rounded-lg text-xs"
                  >
                    <option value="20 ft Carpeted Road">{t.roadCarpeted}</option>
                    <option value="15 ft Concrete Road">{t.roadConcrete}</option>
                    <option value="12 ft Private Access Road">{t.roadPrivate}</option>
                    <option value="Main Bus Route Facing">{t.roadBusRoute}</option>
                  </select>
                </div>
              </div>

              {/* Photos: Upload or Select Presets */}
              <div className="space-y-2">
                <label className="font-bold text-neutral-700 block">
                  {t.postPhoto} <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-4 border-2 border-dashed border-neutral-300 p-3.5 rounded-xl bg-neutral-50">
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="w-24 h-20 sm:w-28 sm:h-24 rounded-lg object-cover border border-neutral-200 shadow-xs shrink-0"
                  />
                  <div className="flex-1 space-y-2 text-center sm:text-left">
                    <label className="inline-flex items-center gap-2 bg-[#111] hover:bg-neutral-800 text-white px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors shadow-xs">
                      <UploadCloud className="w-4 h-4 text-amber-400" />
                      <span>{t.postUploadBtn}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                    <p className="text-[11px] text-neutral-500">
                      {t.postPresetLabel}
                    </p>
                    <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                      <button
                        type="button"
                        onClick={() =>
                          handlePresetPhoto(
                            'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80'
                          )
                        }
                        className="text-[10px] bg-white border border-neutral-300 hover:border-[#e1251b] px-2 py-1 rounded cursor-pointer"
                      >
                        🏡 {t.propHouse}
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handlePresetPhoto(
                            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80'
                          )
                        }
                        className="text-[10px] bg-white border border-neutral-300 hover:border-[#e1251b] px-2 py-1 rounded cursor-pointer"
                      >
                        🌱 {t.propLand}
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handlePresetPhoto(
                            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80'
                          )
                        }
                        className="text-[10px] bg-white border border-neutral-300 hover:border-[#e1251b] px-2 py-1 rounded cursor-pointer"
                      >
                        🏢 {t.propApartment}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="font-bold text-neutral-700 block mb-1">
                  {t.postDescription}
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={t.postDescPlaceholder}
                  className="w-full p-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-[#e1251b]"
                />
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-neutral-200">
                <div>
                  <label className="font-bold text-neutral-700 block mb-1">
                    {t.postSellerName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={sellerName}
                    onChange={(e) => setSellerName(e.target.value)}
                    placeholder="e.g. Kasun Perera"
                    className="w-full p-2 bg-white border border-neutral-300 rounded-lg focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold text-neutral-700 block mb-1">
                    {t.postSellerPhone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={sellerPhone}
                    onChange={(e) => setSellerPhone(e.target.value)}
                    placeholder="077 123 4567"
                    className="w-full p-2 bg-white border border-neutral-300 rounded-lg focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold text-neutral-700 block mb-1">
                    {t.postSellerWhatsapp} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={sellerWhatsapp}
                    onChange={(e) => setSellerWhatsapp(e.target.value)}
                    placeholder="94771234567"
                    className="w-full p-2 bg-white border border-neutral-300 rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              {/* Auto-register option for guest poster */}
              {!currentUser && (
                <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3 my-2">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs font-semibold text-neutral-800 select-none">
                    <input
                      type="checkbox"
                      checked={autoRegister}
                      onChange={(e) => setAutoRegister(e.target.checked)}
                      className="mt-0.5 rounded text-[#e1251b] focus:ring-[#e1251b] w-4 h-4 cursor-pointer"
                    />
                    <span>{t.postAutoRegisterCheckbox}</span>
                  </label>
                </div>
              )}

              <div className="pt-3 flex items-center justify-between">
                <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {t.post100FreeNote}
                </span>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 rounded-lg font-semibold cursor-pointer"
                  >
                    {t.postCancelBtn}
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#e1251b] hover:bg-[#b81c15] text-white rounded-lg font-bold flex items-center gap-1.5 cursor-pointer shadow-md transition-all"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>{t.postSubmitBtn}</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
