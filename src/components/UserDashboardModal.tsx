import React from 'react';
import { Phone, MapPin, PlusCircle, Trash2, Eye, MessageSquare, LogOut, ShieldCheck, Tag } from 'lucide-react';
import { UserAccount, Property } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface UserDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserAccount | null;
  userProperties: Property[];
  onOpenPostAd: () => void;
  onSelectProperty: (property: Property) => void;
  onDeleteProperty: (id: string) => void;
  onToggleSoldStatus: (id: string) => void;
  onLogout: () => void;
}

export const UserDashboardModal: React.FC<UserDashboardModalProps> = ({
  isOpen,
  onClose,
  user,
  userProperties,
  onOpenPostAd,
  onSelectProperty,
  onDeleteProperty,
  onToggleSoldStatus,
  onLogout,
}) => {
  if (!isOpen || !user) return null;

  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative my-auto animate-in fade-in">
        {/* Header */}
        <div className="bg-[#111] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#e1251b] flex items-center justify-center text-white font-bold text-lg">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base sm:text-lg">{user.name}</h3>
                <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  {t.dashboardVerifiedUser}
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                {user.role} • {t.dashboardMemberSince} {user.joinedDate}
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

        {/* User Summary Bar */}
        <div className="bg-neutral-50 px-6 py-3.5 border-b border-neutral-200 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-600">
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#e1251b]" />
              <span className="font-medium">{user.phone}</span>
            </div>
            {user.email && (
              <div className="flex items-center gap-1.5">
                <span className="font-medium text-neutral-500">{user.email}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#e1251b]" />
              <span className="font-medium">{user.district} District</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="text-neutral-500 hover:text-red-600 flex items-center gap-1 text-xs font-semibold cursor-pointer transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>{t.dashboardBtnSignOut}</span>
            </button>
          </div>
        </div>

        {/* Content Body: My Posted Ads */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span>{t.dashboardMyAdsTitle}</span>
                <span className="bg-[#e1251b] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {userProperties.length}
                </span>
              </h4>
              <p className="text-xs text-neutral-500">
                {t.dashboardMyAdsSubtitle}
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenPostAd();
              }}
              className="bg-[#e1251b] hover:bg-[#b81c15] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{t.dashboardPostNewAd}</span>
            </button>
          </div>

          {/* List of Ads */}
          {userProperties.length === 0 ? (
            <div className="py-12 px-4 border-2 border-dashed border-neutral-200 rounded-2xl text-center space-y-3">
              <div className="w-14 h-14 bg-red-50 text-[#e1251b] rounded-full flex items-center justify-center mx-auto">
                <Tag className="w-7 h-7" />
              </div>
              <h5 className="font-bold text-neutral-800 text-base">{t.dashboardNoAdsTitle}</h5>
              <p className="text-xs text-neutral-500 max-w-md mx-auto">
                {t.dashboardNoAdsDesc}
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenPostAd();
                }}
                className="mt-2 inline-flex items-center gap-2 bg-[#111] hover:bg-neutral-800 text-white px-5 py-2.5 rounded-xl font-bold text-xs cursor-pointer"
              >
                <PlusCircle className="w-4 h-4 text-amber-400" />
                {t.dashboardPostFirstAd}
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {userProperties.map((prop) => (
                <div
                  key={prop.id}
                  className={`border rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all ${
                    prop.isSold ? 'bg-neutral-50 border-neutral-200 opacity-75' : 'bg-white border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <img
                      src={prop.image}
                      alt={prop.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover shrink-0 border border-neutral-100"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#e1251b] bg-red-50 px-2 py-0.5 rounded">
                          {prop.propertyType}
                        </span>
                        {prop.isSold ? (
                          <span className="text-[11px] font-bold text-neutral-600 bg-neutral-200 px-2 py-0.5 rounded">
                            {t.badgeSold}
                          </span>
                        ) : (
                          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live & Active
                          </span>
                        )}
                      </div>
                      <h5 className="font-bold text-neutral-900 text-sm truncate max-w-sm">
                        {prop.title}
                      </h5>
                      <p className="text-xs font-semibold text-[#e1251b]">
                        {prop.formattedPrice}
                      </p>
                      <p className="text-[11px] text-neutral-500 flex items-center gap-2 mt-1">
                        <span>{prop.location.city}, {prop.location.district}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" /> {prop.viewsCount || 42} {t.dashboardViews}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" /> {prop.inquiriesCount || 6} {t.dashboardInquiries}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProperty(prop);
                      }}
                      className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                    >
                      {t.dashboardBtnView}
                    </button>
                    <button
                      onClick={() => onToggleSoldStatus(prop.id)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                        prop.isSold
                          ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                          : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                      }`}
                    >
                      {prop.isSold ? t.dashboardBtnReactivate : t.dashboardBtnMarkSold}
                    </button>
                    <button
                      onClick={() => onDeleteProperty(prop.id)}
                      className="p-2 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                      title={t.dashboardBtnDelete}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
