import React, { useState } from 'react';
import { User, CheckCircle2, Sparkles } from 'lucide-react';
import { UserAccount } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: UserAccount) => void;
  defaultTab?: 'login' | 'register';
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  defaultTab = 'login',
}) => {
  if (!isOpen) return null;

  const { t } = useLanguage();
  const [tab, setTab] = useState<'login' | 'register'>(defaultTab);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('Colombo');
  const [role, setRole] = useState<'Owner' | 'Broker / Agent' | 'Developer'>('Owner');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [successUser, setSuccessUser] = useState<UserAccount | null>(null);

  const sriLankaDistricts = [
    'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya',
    'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
    'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee',
    'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla',
    'Monaragala', 'Ratnapura', 'Kegalle'
  ];

  const handleQuickFill = () => {
    setName('Kasun Silva');
    setPhone('077 452 8910');
    setDistrict('Colombo');
    setRole('Owner');
    setPassword('demo1234');
    setTab('register');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const loggedUser: UserAccount = {
      id: `usr-${Date.now()}`,
      name: name || (tab === 'login' ? 'Kasun Silva' : 'New User'),
      phone: phone || '077 123 4567',
      district: district || 'Colombo',
      role,
      joinedDate: 'September 2026',
      verified: true,
    };

    setSuccessUser(loggedUser);
    setIsSuccess(true);

    setTimeout(() => {
      onLoginSuccess(loggedUser);
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/65 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative my-auto animate-in fade-in">
        {/* Top Header */}
        <div className="bg-[#111] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#e1251b] flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">
                {tab === 'login' ? t.loginModalTitleLogin : t.loginModalTitleRegister}
              </h3>
              <p className="text-[11px] text-neutral-400">
                {tab === 'login' ? t.loginModalSubLogin : t.loginModalSubRegister}
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

        {/* Tab Switcher */}
        <div className="flex border-b border-neutral-200 bg-neutral-50">
          <button
            type="button"
            onClick={() => setTab('login')}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold text-center cursor-pointer transition-colors ${
              tab === 'login'
                ? 'text-[#e1251b] border-b-2 border-[#e1251b] bg-white'
                : 'text-neutral-500 hover:text-neutral-800'
            }`}
          >
            {t.tabSignIn}
          </button>
          <button
            type="button"
            onClick={() => setTab('register')}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold text-center cursor-pointer transition-colors ${
              tab === 'register'
                ? 'text-[#e1251b] border-b-2 border-[#e1251b] bg-white'
                : 'text-neutral-500 hover:text-neutral-800'
            }`}
          >
            {t.tabRegister}
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto animate-bounce" />
              <h4 className="text-lg font-bold text-neutral-900">
                {tab === 'login' ? t.welcomeBackMsg : t.accountCreatedMsg}
              </h4>
              <p className="text-xs text-neutral-600">
                <strong>{successUser?.name}</strong>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
              {/* Demo 1-Click Fill Button */}
              <div className="flex items-center justify-between bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 text-xs">
                <span className="text-amber-800 font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  {t.autoFillDemoBtn}
                </span>
                <button
                  type="button"
                  onClick={handleQuickFill}
                  className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold px-2.5 py-1 rounded-md text-[11px] cursor-pointer transition-colors shadow-xs"
                >
                  ⚡ Auto-Fill
                </button>
              </div>

              {tab === 'register' && (
                <>
                  <div>
                    <label className="font-bold text-neutral-700 block mb-1">
                      {t.fieldFullName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Kasun Silva"
                      className="w-full p-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-[#e1251b]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">
                        {t.fieldDistrict}
                      </label>
                      <select
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none text-xs"
                      >
                        {sriLankaDistricts.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">
                        {t.fieldAccountType}
                      </label>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value as any)}
                        className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none text-xs"
                      >
                        <option value="Owner">{t.roleOwner}</option>
                        <option value="Broker / Agent">{t.roleAgent}</option>
                        <option value="Developer">{t.roleDeveloper}</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="font-bold text-neutral-700 block mb-1">
                  {t.fieldMobile} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-neutral-400 font-semibold text-xs">
                    🇱🇰
                  </span>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="077 123 4567"
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-[#e1251b]"
                  />
                </div>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  {t.fieldMobileNote}
                </p>
              </div>

              <div>
                <label className="font-bold text-neutral-700 block mb-1">
                  {t.fieldPassword} <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full p-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-[#e1251b]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#e1251b] hover:bg-[#b81c15] text-white rounded-lg font-bold text-sm transition-colors cursor-pointer shadow-md mt-3"
              >
                {tab === 'login' ? t.btnSignInSubmit : t.btnRegisterSubmit}
              </button>

              <div className="pt-2 text-center text-[11px] text-neutral-500">
                {tab === 'register' ? (
                  <span>
                    {t.alreadyHaveAccount}{' '}
                    <button
                      type="button"
                      onClick={() => setTab('login')}
                      className="text-[#e1251b] font-bold hover:underline cursor-pointer"
                    >
                      {t.tabSignIn}
                    </button>
                  </span>
                ) : (
                  <span>
                    {t.dontHaveAccount}{' '}
                    <button
                      type="button"
                      onClick={() => setTab('register')}
                      className="text-[#e1251b] font-bold hover:underline cursor-pointer"
                    >
                      {t.tabRegister}
                    </button>
                  </span>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
