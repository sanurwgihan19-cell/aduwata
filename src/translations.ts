export type Language = 'en' | 'si' | 'ta';

export interface Translations {
  // Top Banner
  bannerText: string;
  bannerGuideLink: string;

  // Header Nav
  navBuy: string;
  navRent: string;
  navHowToPost: string;
  navNewProjects: string;
  navTransit: string;
  navPostAd: string;
  navPostAdFreeBadge: string;
  navRegister: string;
  navLogin: string;
  navMyAccount: string;
  navSaved: string;

  // Hero Search
  heroBadge: string;
  heroHeading: string;
  heroHeadingHighlight: string;
  heroSubheading: string;
  heroTabBuy: string;
  heroTabRent: string;
  searchPlaceholder: string;
  allDistricts: string;
  allCities: string;
  allTypes: string;
  typeHouse: string;
  typeLand: string;
  typeApartment: string;
  typeCommercial: string;
  allPrices: string;
  priceUnder5m: string;
  price5m10m: string;
  price10m25m: string;
  price25m50m: string;
  priceAbove50m: string;
  priceUnder100k: string;
  price100k200k: string;
  priceAbove200k: string;
  allBeds: string;
  beds1Plus: string;
  beds2Plus: string;
  beds3Plus: string;
  beds4Plus: string;
  beds5Plus: string;
  searchButton: string;
  resetButton: string;
  liveListingsCount: string;

  // How to Post Guide
  guideBadge: string;
  guideTitle: string;
  guideSubtitle: string;
  step1Number: string;
  step1Title: string;
  step1Desc: string;
  step1Check: string;
  step2Number: string;
  step2Title: string;
  step2Desc: string;
  step2Check: string;
  step3Number: string;
  step3Title: string;
  step3Desc: string;
  step3Check: string;
  guideAllDistrictsCheck: string;
  guideDirectWhatsAppCheck: string;
  btnRegisterFree: string;
  btnPostAdNow: string;
  guideWelcomeUser: string;

  // Property Grid & Cards
  gridTitle: string;
  gridSubtitle: string;
  verifiedDeedBadge: string;
  btnViewDetails: string;
  btnCallSeller: string;
  btnWhatsApp: string;
  badgeSold: string;
  noResultsFound: string;
  noResultsReset: string;

  // New Projects
  projectsTitle: string;
  projectsSubtitle: string;
  btnViewAllProjects: string;

  // Transit Section
  transitTitle: string;
  transitSubtitle: string;
  transitAll: string;
  transitMainLine: string;
  transitCoastalLine: string;
  transitExpressway: string;

  // Featured Categories
  categoriesTitle: string;
  categoriesSubtitle: string;

  // Post Ad Modal
  postModalTitle: string;
  postModalSubtitle: string;
  postModalUserBanner: string;
  postModalGuestBanner: string;
  postListingType: string;
  postCategory: string;
  postAdTitle: string;
  postAdTitlePlaceholder: string;
  postProvince: string;
  postDistrict: string;
  postCity: string;
  postCityPlaceholder: string;
  postPrice: string;
  postPricePlaceholder: string;
  postBedrooms: string;
  postBathrooms: string;
  postExtent: string;
  postUnit: string;
  postDeedStatus: string;
  postRoadAccess: string;
  postPhotoLabel: string;
  postPhotoUploadBtn: string;
  postOrPresetPhotos: string;
  postDescription: string;
  postDescPlaceholder: string;
  postSellerName: string;
  postPhone: string;
  postWhatsApp: string;
  btnCancel: string;
  btnPublishAd: string;
  postSuccessTitle: string;
  postSuccessSubtitle: string;

  // Login & Register Modal
  loginModalTitleLogin: string;
  loginModalTitleRegister: string;
  loginModalSubLogin: string;
  loginModalSubRegister: string;
  tabSignIn: string;
  tabRegister: string;
  autoFillDemoBtn: string;
  fieldFullName: string;
  fieldDistrict: string;
  fieldAccountType: string;
  fieldMobile: string;
  fieldPassword: string;
  fieldMobileNote: string;
  roleOwner: string;
  roleAgent: string;
  roleDeveloper: string;
  btnSignInSubmit: string;
  btnRegisterSubmit: string;
  alreadyHaveAccount: string;
  dontHaveAccount: string;
  welcomeBackMsg: string;
  accountCreatedMsg: string;

  // User Dashboard
  dashboardVerifiedUser: string;
  dashboardMemberSince: string;
  dashboardMyAdsTitle: string;
  dashboardMyAdsSubtitle: string;
  dashboardPostNewAd: string;
  dashboardNoAdsTitle: string;
  dashboardNoAdsDesc: string;
  dashboardPostFirstAd: string;
  dashboardViews: string;
  dashboardInquiries: string;
  dashboardBtnView: string;
  dashboardBtnMarkSold: string;
  dashboardBtnReactivate: string;
  dashboardBtnDelete: string;
  dashboardBtnSignOut: string;

  // Property Details Modal
  modalPrice: string;
  modalSpecs: string;
  modalDeedVerification: string;
  modalDeedDesc: string;
  modalFeatures: string;
  modalOverview: string;
  modalLoanCalcTitle: string;
  modalLoanCalcDesc: string;
  modalMonthlyInstallment: string;
  modalContactSeller: string;

  // Footer
  footerAboutText: string;
  footerVerifiedDeeds: string;
  footerQuickLinks: string;
  footerDistricts: string;
  footerContactUs: string;
  footerRights: string;
  footerTagline: string;
  footerHousesSale: string;
  footerLandsSale: string;
  footerApartmentsRent: string;
  footerCommercial: string;
  footerPopularDistricts: string;

  // Post Ad Modal additions
  postAdModalTitle: string;
  postAdModalSub: string;
  freeCommunityBanner: string;
  postSuccessDesc: string;
  postPurpose: string;
  postPurposeBuy: string;
  postPurposeRent: string;
  propHouse: string;
  propLand: string;
  propApartment: string;
  propCommercial: string;
  postTitleLabel: string;
  postTitlePlaceholder: string;
  unitPerches: string;
  unitSqft: string;
  deedSinnakkara: string;
  deedBimSaviya: string;
  deedBankApproved: string;
  roadCarpeted: string;
  roadConcrete: string;
  roadPrivate: string;
  roadBusRoute: string;
  postPhoto: string;
  postUploadBtn: string;
  postPresetLabel: string;
  postSellerPhone: string;
  postSellerWhatsapp: string;
  post100FreeNote: string;
  postCancelBtn: string;
  postSubmitBtn: string;

  // Property Details Modal additions
  tabBuy: string;
  tabRent: string;
  specBedrooms: string;
  specBathrooms: string;
  specArea: string;
  specParking: string;
  specDeed: string;
  detailOverview: string;
  detailAmenities: string;
  calculatorTitle: string;
  calcDownPayment: string;
  calcLoanTenure: string;
  calcInterestRate: string;
  calcEstMonthly: string;
  detailSellerListedBy: string;
  btnWhatsAppChat: string;

  // Empty Marketplace & Ad Posting Workflow additions
  emptyMarketplaceTitle: string;
  emptyMarketplaceDesc: string;
  btnPostFirstAd: string;
  btnRegisterInMinute: string;
  btnLoadDemoPosts: string;
  btnClearAllPosts: string;
  clearPostsConfirm: string;
  postAutoRegisterCheckbox: string;
  manageMarketplaceOptions: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    bannerText: 'Free Registration & Ad Posting: Post property ads for free and connect directly with verified buyers across Sri Lanka.',
    bannerGuideLink: 'View 3-Step Guide',

    navBuy: 'Buy',
    navRent: 'Rent',
    navHowToPost: 'How to Post Ads',
    navNewProjects: 'New Projects',
    navTransit: 'Transit Routes',
    navPostAd: 'Post Ad',
    navPostAdFreeBadge: 'FREE',
    navRegister: 'Register',
    navLogin: 'Login',
    navMyAccount: 'My Account',
    navSaved: 'Saved',

    heroBadge: "Sri Lanka's #1 Value Property & Land Marketplace",
    heroHeading: 'Find Lands, Houses & Condos at',
    heroHeadingHighlight: 'Guaranteed Lowest Rates',
    heroSubheading: 'Search genuine properties with verified clear deeds across all 25 districts of Sri Lanka.',
    heroTabBuy: 'For Sale (Buy)',
    heroTabRent: 'For Rent',
    searchPlaceholder: 'Search by city, address, or landmark (e.g. Wellawatte, Kandy, Galle)',
    allDistricts: 'All 25 Districts',
    allCities: 'All Cities / Towns',
    allTypes: 'All Property Types',
    typeHouse: 'Houses / Villas',
    typeLand: 'Lands (Idam)',
    typeApartment: 'Apartments / Condos',
    typeCommercial: 'Commercial Buildings',
    allPrices: 'Any Price Range',
    priceUnder5m: 'Under LKR 5 Million',
    price5m10m: 'LKR 5M - 10M',
    price10m25m: 'LKR 10M - 25M',
    price25m50m: 'LKR 25M - 50M',
    priceAbove50m: 'Above LKR 50 Million',
    priceUnder100k: 'Under LKR 100k / mo',
    price100k200k: 'LKR 100k - 200k / mo',
    priceAbove200k: 'Above LKR 200k / mo',
    allBeds: 'Any Bedrooms',
    beds1Plus: '1+ Bedrooms',
    beds2Plus: '2+ Bedrooms',
    beds3Plus: '3+ Bedrooms',
    beds4Plus: '4+ Bedrooms',
    beds5Plus: '5+ Bedrooms',
    searchButton: 'Search Properties',
    resetButton: 'Reset',
    liveListingsCount: 'Live Verified Listings across Sri Lanka',

    guideBadge: 'Free Registration & 100% Free Ad Posting',
    guideTitle: 'How Anyone Can Register & Post an Ad in 3 Easy Steps',
    guideSubtitle: 'Exhibit your lands, houses, apartments, or commercial properties directly to thousands of genuine buyers across Sri Lanka without paying any broker commissions.',
    step1Number: 'Step 01',
    step1Title: 'Register in 30 Seconds',
    step1Desc: 'Create a free account using your mobile phone number, name, and district. No paperwork or verification fees required.',
    step1Check: '100% Free Lifetime Account',
    step2Number: 'Step 02',
    step2Title: 'Add Details & Photos',
    step2Desc: 'Select property type, location, asking price in LKR, perches or room count, clear deed status, and upload high-resolution photos.',
    step2Check: 'Clear Deed & Road Access Details',
    step3Number: 'Step 03',
    step3Title: 'Receive Direct Inquiries',
    step3Desc: 'Your ad goes live instantly. Genuine buyers contact you directly via WhatsApp and mobile phone calls. Zero broker commission.',
    step3Check: 'Direct Buyer Contact (No Commission)',
    guideAllDistrictsCheck: 'Covers All 25 Districts of Sri Lanka',
    guideDirectWhatsAppCheck: 'Direct WhatsApp & Phone Inquiries',
    btnRegisterFree: 'Register Free Account',
    btnPostAdNow: 'Post Free Ad Now',
    guideWelcomeUser: 'Welcome back,',

    gridTitle: 'Featured & Verified Properties',
    gridSubtitle: 'Explore affordable verified lands, houses, and condominiums available across Sri Lanka',
    verifiedDeedBadge: 'Verified Deed',
    btnViewDetails: 'View Details',
    btnCallSeller: 'Call Seller',
    btnWhatsApp: 'WhatsApp',
    badgeSold: 'Sold',
    noResultsFound: 'No properties matched your exact filter criteria.',
    noResultsReset: 'Reset all filters to see all available properties',

    projectsTitle: 'Premier New Launches & Developments',
    projectsSubtitle: 'Handpicked gated communities, luxury condominiums, and serviced land schemes',
    btnViewAllProjects: 'View All Projects',

    transitTitle: 'Properties Near Major Transit & Expressways',
    transitSubtitle: 'Save daily travel time with properties strategically located near railway stations and expressway interchanges',
    transitAll: 'All Transit Lines',
    transitMainLine: 'Main Railway Line (Colombo - Kandy)',
    transitCoastalLine: 'Coastal Railway Line (Colombo - Matara)',
    transitExpressway: 'Expressway Interchanges',

    categoriesTitle: 'Curated Property Collections',
    categoriesSubtitle: 'Browse by lifestyle categories, budget deals, and investment opportunities',

    postModalTitle: 'Post a Free Property Ad',
    postModalSubtitle: '100% Free Property Listing across all 25 Districts of Sri Lanka',
    postModalUserBanner: 'Registered User:',
    postModalGuestBanner: 'Anyone can register or post ads for free. Fill details below to publish instantly.',
    postListingType: 'Listing Purpose',
    postCategory: 'Property Category',
    postAdTitle: 'Ad Title',
    postAdTitlePlaceholder: 'e.g. Modern 3-Bedroom Single Story House with Garden in Negombo',
    postProvince: 'Province',
    postDistrict: 'District',
    postCity: 'City / Town',
    postCityPlaceholder: 'e.g. Wellawatte / Negombo',
    postPrice: 'Price in LKR',
    postPricePlaceholder: 'e.g. 15000000',
    postBedrooms: 'Bedrooms',
    postBathrooms: 'Bathrooms',
    postExtent: 'Extent',
    postUnit: 'Unit',
    postDeedStatus: 'Deed Status',
    postRoadAccess: 'Road Access Width',
    postPhotoLabel: 'Property Photos',
    postPhotoUploadBtn: 'Upload Photo from Device',
    postOrPresetPhotos: 'Or choose a sample preset photo:',
    postDescription: 'Description',
    postDescPlaceholder: 'Describe clear deed, electricity, tap water, distance to railway station, schools, etc.',
    postSellerName: 'Seller Name',
    postPhone: 'Phone Number',
    postWhatsApp: 'WhatsApp Number (Digits)',
    btnCancel: 'Cancel',
    btnPublishAd: 'Publish Ad for Free',
    postSuccessTitle: 'Your Ad is Now Live!',
    postSuccessSubtitle: 'Your property has been successfully published on Aduwata.lk. Buyers can now contact you directly.',

    loginModalTitleLogin: 'Sign In to Aduwata.lk',
    loginModalTitleRegister: 'Create Free Account',
    loginModalSubLogin: 'Welcome back! Sign in with your mobile number or password',
    loginModalSubRegister: 'Register in 30 seconds to manage and post your ads',
    tabSignIn: 'Sign In',
    tabRegister: 'Register Free',
    autoFillDemoBtn: '⚡ Auto-Fill Demo User',
    fieldFullName: 'Full Name',
    fieldDistrict: 'District',
    fieldAccountType: 'Account Type',
    fieldMobile: 'Mobile Phone Number',
    fieldPassword: 'Password',
    fieldMobileNote: 'Buyers will contact you directly on this number',
    roleOwner: 'Private Property Owner',
    roleAgent: 'Real Estate Broker / Agent',
    roleDeveloper: 'Developer / Builder',
    btnSignInSubmit: 'Sign In to Account',
    btnRegisterSubmit: 'Create Free Account',
    alreadyHaveAccount: 'Already have an account? Sign In',
    dontHaveAccount: "Don't have an account? Register Free",
    welcomeBackMsg: 'Welcome back!',
    accountCreatedMsg: 'Account created successfully!',

    dashboardVerifiedUser: 'Verified User',
    dashboardMemberSince: 'Member since',
    dashboardMyAdsTitle: 'My Posted Ads',
    dashboardMyAdsSubtitle: 'Manage your active property listings on Aduwata.lk',
    dashboardPostNewAd: 'Post Another Ad',
    dashboardNoAdsTitle: 'No Ads Posted Yet',
    dashboardNoAdsDesc: 'Post your first land or house ad for free and reach genuine buyers across Sri Lanka.',
    dashboardPostFirstAd: 'Post First Free Ad Now',
    dashboardViews: 'views',
    dashboardInquiries: 'inquiries',
    dashboardBtnView: 'View Ad',
    dashboardBtnMarkSold: 'Mark as Sold',
    dashboardBtnReactivate: 'Reactivate Listing',
    dashboardBtnDelete: 'Delete Ad',
    dashboardBtnSignOut: 'Sign Out',

    modalPrice: 'Price',
    modalSpecs: 'Property Specifications',
    modalDeedVerification: 'Deed Verification & Legal Clearance',
    modalDeedDesc: 'Verified 30-year non-encumbrance title deed. Eligible for state and commercial bank home loans.',
    modalFeatures: 'Key Property Highlights',
    modalOverview: 'Property Overview',
    modalLoanCalcTitle: 'Bank Housing Loan EMI Calculator',
    modalLoanCalcDesc: 'Estimate monthly repayment with current Sri Lankan bank mortgage rates (approx 12% p.a.)',
    modalMonthlyInstallment: 'Estimated Monthly EMI',
    modalContactSeller: 'Contact Seller Directly',

    footerAboutText: "Sri Lanka's premier affordable property search portal. Find lands, houses, and apartments at guaranteed lowest rates across all 25 districts.",
    footerVerifiedDeeds: 'Verified Clear Deeds & Land Registry Support',
    footerQuickLinks: 'Quick Links',
    footerDistricts: 'Popular Districts',
    footerContactUs: 'Contact Us',
    footerRights: 'All Rights Reserved. Customized for Sri Lanka.',
    footerTagline: "Sri Lanka's premier affordable property search portal. Find lands, houses, and apartments at guaranteed lowest rates across all 25 districts.",
    footerHousesSale: 'Houses for Sale',
    footerLandsSale: 'Lands for Sale (Idam)',
    footerApartmentsRent: 'Apartments for Rent',
    footerCommercial: 'Commercial Properties',
    footerPopularDistricts: 'Popular Districts',

    // Post Ad Modal additions
    postAdModalTitle: 'Post a Free Property Ad',
    postAdModalSub: '100% Free Property Listing across all 25 Districts of Sri Lanka',
    freeCommunityBanner: 'Anyone can register and post property ads for 100% FREE. Connect directly with genuine buyers without any broker commissions.',
    postSuccessDesc: 'Your property has been published to Aduwata.lk marketplace. Buyers can now call or WhatsApp you directly.',
    postPurpose: 'Listing Purpose',
    postPurposeBuy: 'For Sale',
    postPurposeRent: 'For Rent',
    propHouse: 'House',
    propLand: 'Land',
    propApartment: 'Apartment',
    propCommercial: 'Commercial',
    postTitleLabel: 'Ad Title',
    postTitlePlaceholder: 'e.g. Modern 3-Bedroom Single Story House with Garden in Negombo',
    unitPerches: 'Perches (පර්චස්)',
    unitSqft: 'Sq.Ft',
    deedSinnakkara: 'Sinnakkara (Freehold / Clear Deed)',
    deedBimSaviya: 'Bim Saviya (Class 1 Title Certificate)',
    deedBankApproved: 'Bank Loan Approved / Clear Title',
    roadCarpeted: '20ft+ Carpeted Road',
    roadConcrete: '15ft Concrete Road',
    roadPrivate: '12ft Private Access Road',
    roadBusRoute: 'Facing Main Bus Route',
    postPhoto: 'Property Photos',
    postUploadBtn: 'Upload Photo from Device',
    postPresetLabel: 'Or pick a sample photo:',
    postSellerPhone: 'Phone Number',
    postSellerWhatsapp: 'WhatsApp Number (Digits only, e.g. 94771234567)',
    post100FreeNote: '100% Free listing on Aduwata.lk - No fees or hidden charges',
    postCancelBtn: 'Cancel',
    postSubmitBtn: 'Publish Free Ad Now',

    // Property Details Modal additions
    tabBuy: 'For Sale',
    tabRent: 'For Rent',
    specBedrooms: 'Bedrooms',
    specBathrooms: 'Bathrooms',
    specArea: 'Floor / Land Area',
    specParking: 'Parking Space',
    specDeed: 'Title Deed',
    detailOverview: 'Property Overview',
    detailAmenities: 'Key Amenities & Legal Highlights',
    calculatorTitle: 'Sri Lankan Bank Housing Loan EMI Calculator',
    calcDownPayment: 'Down Payment',
    calcLoanTenure: 'Loan Tenure',
    calcInterestRate: 'Interest Rate (% p.a.):',
    calcEstMonthly: 'Estimated Monthly Installment',
    detailSellerListedBy: 'Property Listed By',
    btnWhatsAppChat: 'Chat on WhatsApp',

    // Empty Marketplace & Ad Posting Workflow additions
    emptyMarketplaceTitle: 'No Properties Listed Yet - Be the First to Post Free!',
    emptyMarketplaceDesc: 'Anyone in Sri Lanka can easily register in 1 minute and post houses, lands, and apartments for 100% FREE without any broker fees or commissions.',
    btnPostFirstAd: 'Post a Free Property Ad Now',
    btnRegisterInMinute: 'Register Free in 1 Minute',
    btnLoadDemoPosts: 'Load Sample Listings',
    btnClearAllPosts: 'Delete All Existing Posts',
    clearPostsConfirm: 'Are you sure you want to delete all property listings from the marketplace?',
    postAutoRegisterCheckbox: 'Create a free account with these details so I can manage my ads anytime',
    manageMarketplaceOptions: 'Marketplace Management & Sample Listings',
  },

  si: {
    bannerText: 'නොමිලේ ලියාපදිංචි වී දැන්වීම් පළ කරන්න: ඔබගේ දේපල දැන්වීම් නොමිලේ පළ කර ලංකාව පුරා සිටින සැබෑ ගැනුම්කරුවන් සමඟ සෘජුව සම්බන්ධ වන්න.',
    bannerGuideLink: 'පියවර 3න් දැන්වීම් දමන හැටි බලන්න',

    navBuy: 'මිලදී ගැනීමට',
    navRent: 'කුලියට / බද්දට',
    navHowToPost: 'දැන්වීම් දමන්නේ කෙසේද?',
    navNewProjects: 'නව ව්‍යාපෘති',
    navTransit: 'දුම්රිය සහ අධිවේගී මාර්ග',
    navPostAd: 'දැන්වීමක් පළ කරන්න',
    navPostAdFreeBadge: 'නොමිලේ',
    navRegister: 'ලියාපදිංචි වන්න',
    navLogin: 'පිවිසෙන්න',
    navMyAccount: 'මගේ ගිණුම',
    navSaved: 'සුරැකි දේපල',

    heroBadge: 'ශ්‍රී ලංකාවේ ප්‍රමුඛතම අඩුම මිල දේපල හා ඉඩම් වෙළඳපොළ',
    heroHeading: 'ඉඩම්, නිවාස සහ මහල් නිවාස',
    heroHeadingHighlight: 'අඩුම සහතික මිලට සොයාගන්න',
    heroSubheading: 'දිවයිනේ දිස්ත්‍රික්ක 25 පුරාම නිරවුල් සින්නක්කර ඔප්පු සහිත දේපල පහසුවෙන් සොයාගන්න.',
    heroTabBuy: 'විකිණීමට (Buy)',
    heroTabRent: 'කුලියට (Rent)',
    searchPlaceholder: 'නගරය, ලිපිනය හෝ සලකුණ සෙවුම් කරන්න (උදා: වැල්ලවත්ත, මහනුවර, ගාල්ල)',
    allDistricts: 'දිස්ත්‍රික්ක 25 ම',
    allCities: 'සියලුම නගර',
    allTypes: 'සියලුම දේපල වර්ග',
    typeHouse: 'නිවාස / විලා',
    typeLand: 'ඉඩම් (Idam)',
    typeApartment: 'මහල් නිවාස (Condos)',
    typeCommercial: 'වාණිජ ගොඩනැගිලි',
    allPrices: 'ඕනෑම මිල පරාසයක්',
    priceUnder5m: 'රු. ලක්ෂ 50 ට අඩු',
    price5m10m: 'රු. ලක්ෂ 50 - කෝටි 1',
    price10m25m: 'රු. කෝටි 1 - 2.5',
    price25m50m: 'රු. කෝටි 2.5 - 5',
    priceAbove50m: 'රු. කෝටි 5 ට වැඩි',
    priceUnder100k: 'මසකට රු. 100,000 ට අඩු',
    price100k200k: 'මසකට රු. 100k - 200k',
    priceAbove200k: 'මසකට රු. 200,000 ට වැඩි',
    allBeds: 'ඕනෑම කාමර ගණනක්',
    beds1Plus: 'කාමර 1+',
    beds2Plus: 'කාමර 2+',
    beds3Plus: 'කාමර 3+',
    beds4Plus: 'කාමර 4+',
    beds5Plus: 'කාමර 5+',
    searchButton: 'දේපල සොයන්න',
    resetButton: 'යළි සකසන්න',
    liveListingsCount: 'ශ්‍රී ලංකාව පුරා සජීවී තහවුරු කළ දැන්වීම්',

    guideBadge: 'නොමිලේ ලියාපදිංචි වීම සහ දැන්වීම් පළ කිරීම',
    guideTitle: 'ඕනෑම කෙනෙකුට ලියාපදිංචි වී දැන්වීම් පළ කරන්නේ කෙසේද?',
    guideSubtitle: 'ඔබගේ ඉඩම්, නිවාස, මහල් නිවාස හෝ කඩකාමර කිසිදු අතරමැදි ගාස්තුවකින් තොරව ලංකාව පුරා සිටින ගැනුම්කරුවන් වෙත ක්ෂණිකව ප්‍රදර්ශනය කරන්න.',
    step1Number: 'පියවර 01',
    step1Title: 'තත්පර 30කින් ලියාපදිංචි වන්න',
    step1Desc: 'ඔබගේ නම, දුරකථන අංකය (07X) සහ දිස්ත්‍රික්කය ඇතුළත් කර නොමිලේ ගිණුමක් සාදන්න. කිසිදු ලේඛන ගාස්තුවක් නැත.',
    step1Check: '100% නොමිලේ ජීවිත කාලයටම',
    step2Number: 'පියවර 02',
    step2Title: 'දේපල විස්තර හා පින්තූර',
    step2Desc: 'දේපල වර්ගය, ප්‍රදේශය, අපේක්ෂිත මිල, පර්චස්/කාමර ගණන, ඔප්පු තත්වය සහ පැහැදිලි ඡායාරූප ඇතුළත් කරන්න.',
    step2Check: 'නිරවුල් ඔප්පු සහ පාරේ පළල විස්තර',
    step3Number: 'පියවර 03',
    step3Title: 'සෘජු ගැනුම්කරුවන්ගේ ඇමතුම් ලබාගන්න',
    step3Desc: 'දැන්වීම සජීවී වූ වහාම ගැනුම්කරුවන් ඔබට සෘජුවම WhatsApp සහ දුරකථනයෙන් සම්බන්ධ වේ. බ්‍රෝකර් ගාස්තු නැත.',
    step3Check: 'සෘජු ගැනුම්කරුවන් (කොමිස් රහිත)',
    guideAllDistrictsCheck: 'දිස්ත්‍රික්ක 25 පුරාම පිළිගත් සේවාව',
    guideDirectWhatsAppCheck: 'සෘජු WhatsApp පණිවිඩ සබඳතා',
    btnRegisterFree: 'නොමිලේ ලියාපදිංචි වන්න',
    btnPostAdNow: 'දැන්වීමක් පළ කරන්න',
    guideWelcomeUser: 'ආයුබෝවන්,',

    gridTitle: 'විශේෂාංග සහ නිරවුල් ඔප්පු සහිත දේපල',
    gridSubtitle: 'ශ්‍රී ලංකාව පුරා සාධාරණ මිල ගණන් යටතේ විකිණීමට ඇති ඉඩම්, නිවාස සහ මහල් නිවාස',
    verifiedDeedBadge: 'නිරවුල් ඔප්පු',
    btnViewDetails: 'විස්තර බලන්න',
    btnCallSeller: 'අමතන්න',
    btnWhatsApp: 'WhatsApp',
    badgeSold: 'විකුණන ලදී',
    noResultsFound: 'ඔබ සෙවූ නිර්ණායක වලට ගැලපෙන දේපල හමු නොවීය.',
    noResultsReset: 'සියලුම දේපල නැවත බැලීමට ෆිල්ටර් යළි සකසන්න',

    projectsTitle: 'ප්‍රමුඛතම නව නිවාස හා ඉඩම් ව්‍යාපෘති',
    projectsSubtitle: 'සුරක්ෂිත ගේට්ටු සහිත ප්‍රජාවන්, සුඛෝපභෝගී මහල් නිවාස සහ සේවාදායක ඉඩම් යෝජනාක්‍රම',
    btnViewAllProjects: 'සියලු ව්‍යාපෘති බලන්න',

    transitTitle: 'දුම්රිය සහ අධිවේගී පිවිසුම් අසල දේපල',
    transitSubtitle: 'ප්‍රධාන දුම්රිය මාර්ග සහ අධිවේගී පිවිසුම් අසල පිහිටි දේපල සමඟ ගමන් කාලය ඉතිරි කරගන්න',
    transitAll: 'සියලුම ප්‍රවාහන මාර්ග',
    transitMainLine: 'ප්‍රධාන දුම්රිය මාර්ගය (කොළඹ - මහනුවර)',
    transitCoastalLine: 'මුහුදුබඩ දුම්රිය මාර්ගය (කොළඹ - මාතර)',
    transitExpressway: 'අධිවේගී පිවිසුම් අසල',

    categoriesTitle: 'තෝරාගත් දේපල කාණ්ඩ',
    categoriesSubtitle: 'ජීවන රටාව, අඩුම මිල ගනුදෙනු සහ ආයෝජන අවස්ථා අනුව තෝරාගන්න',

    postModalTitle: 'නොමිලේ දැන්වීමක් පළ කරන්න',
    postModalSubtitle: 'දිවයිනේ දිස්ත්‍රික්ක 25 පුරාම 100% නොමිලේ දේපල දැන්වීම් පළ කිරීම',
    postModalUserBanner: 'ලියාපදිංචි පරිශීලක:',
    postModalGuestBanner: 'ඕනෑම කෙනෙකුට ලියාපදිංචි වෙමින් හෝ නොවී නොමිලේ දැන්වීම් පළ කළ හැක. පහත විස්තර පුරවන්න.',
    postListingType: 'දැන්වීමේ ස්වභාවය',
    postCategory: 'දේපල වර්ගය',
    postAdTitle: 'දැන්වීමේ මාතෘකාව',
    postAdTitlePlaceholder: 'උදා: මීගමුව නගරාසන්නයේ නවීන දෙමහල් නිවසක් විකිණීමට ඇත',
    postProvince: 'පළාත',
    postDistrict: 'දිස්ත්‍රික්කය',
    postCity: 'නගරය',
    postCityPlaceholder: 'උදා: වැල්ලවත්ත / මීගමුව',
    postPrice: 'මිල (LKR)',
    postPricePlaceholder: 'උදා: 15000000',
    postBedrooms: 'කාමර ගණන',
    postBathrooms: 'නාන කාමර',
    postExtent: 'ප්‍රමාණය',
    postUnit: 'ඒකකය',
    postDeedStatus: 'ඔප්පු තත්වය',
    postRoadAccess: 'පාරේ පළල',
    postPhotoLabel: 'ඡායාරූප',
    postPhotoUploadBtn: 'උපකරණයෙන් ඡායාරූපයක් එක් කරන්න',
    postOrPresetPhotos: 'හෝ ආදර්ශ ඡායාරූපයක් තෝරන්න:',
    postDescription: 'විස්තරය',
    postDescPlaceholder: 'නිරවුල් ඔප්පු, විදුලිය, නල ජලය, දුම්රිය ස්ථානයට ඇති දුර ආදී විස්තර...',
    postSellerName: 'හිමිකරුගේ නම',
    postPhone: 'දුරකථන අංකය',
    postWhatsApp: 'WhatsApp අංකය',
    btnCancel: 'අවලංගු කරන්න',
    btnPublishAd: 'නොමිලේ පළ කරන්න',
    postSuccessTitle: 'ඔබගේ දැන්වීම සාර්ථකව පළ විය!',
    postSuccessSubtitle: 'දැන්වීම Aduwata.lk හි සජීවීව දිස්වේ. ගැනුම්කරුවන් ඔබට සෘජුවම අමතනු ඇත.',

    loginModalTitleLogin: 'Aduwata.lk වෙත පිවිසෙන්න',
    loginModalTitleRegister: 'නොමිලේ ලියාපදිංචි වන්න',
    loginModalSubLogin: 'ඔබගේ දුරකථන අංකය හෝ මුරපදය මගින් පිවිසෙන්න',
    loginModalSubRegister: 'දැන්වීම් පළ කිරීමට තත්පර 30කින් ගිණුමක් සාදන්න',
    tabSignIn: 'පිවිසෙන්න',
    tabRegister: 'ලියාපදිංචි වන්න',
    autoFillDemoBtn: '⚡ Auto-Fill Demo User',
    fieldFullName: 'සම්පූර්ණ නම',
    fieldDistrict: 'දිස්ත්‍රික්කය',
    fieldAccountType: 'ඔබ කවුද?',
    fieldMobile: 'දුරකථන අංකය',
    fieldPassword: 'මුරපදය',
    fieldMobileNote: 'ගැනුම්කරුවන් ඔබට සෘජුවම අමතන්නේ මෙම අංකයටයි',
    roleOwner: 'දේපල හිමිකරු (Owner)',
    roleAgent: 'තැරැව්කරු (Broker / Agent)',
    roleDeveloper: 'ඉදිකිරීම්කරු (Developer)',
    btnSignInSubmit: 'ගිණුමට පිවිසෙන්න',
    btnRegisterSubmit: 'නොමිලේ ගිණුමක් සාදන්න',
    alreadyHaveAccount: 'දැනටමත් ගිණුමක් තිබේද? පිවිසෙන්න',
    dontHaveAccount: 'නව ගිණුමක් අවශ්‍යද? නොමිලේ ලියාපදිංචි වන්න',
    welcomeBackMsg: 'සාදරයෙන් පිළිගනිමු!',
    accountCreatedMsg: 'ගිණුම සාර්ථකව නිර්මාණය විය!',

    dashboardVerifiedUser: 'තහවුරු කළ පරිශීලක',
    dashboardMemberSince: 'සාමාජිකත්වය ලැබුවේ',
    dashboardMyAdsTitle: 'මගේ දැන්වීම්',
    dashboardMyAdsSubtitle: 'ඔබ පළ කරන ලද දේපල දැන්වීම් කළමනාකරණය කරන්න',
    dashboardPostNewAd: 'නව දැන්වීමක් පළ කරන්න',
    dashboardNoAdsTitle: 'තවමත් දැන්වීම් පළ කර නැත',
    dashboardNoAdsDesc: 'ඔබගේ ඉඩම හෝ නිවස සඳහා නොමිලේ පළමු දැන්වීම පළ කර ගැනුම්කරුවන් වෙත ළඟා වන්න.',
    dashboardPostFirstAd: 'නොමිලේ පළමු දැන්වීම පළ කරන්න',
    dashboardViews: 'නැරඹුම්',
    dashboardInquiries: 'විමසීම්',
    dashboardBtnView: 'බලන්න',
    dashboardBtnMarkSold: 'Sold ලෙස සලකුණු කරන්න',
    dashboardBtnReactivate: 'යළි සක්‍රිය කරන්න',
    dashboardBtnDelete: 'මකන්න',
    dashboardBtnSignOut: 'ඉවත් වන්න',

    modalPrice: 'මිල',
    modalSpecs: 'දේපල පිරිවිතර',
    modalDeedVerification: 'ඔප්පු නිරවුල්භාවය සහ නීතිමය තහවුරුව',
    modalDeedDesc: 'අවුරුදු 30ක නිරවුල් පත්තිරු ඔප්පු. රාජ්‍ය හා වාණිජ බැංකු නිවාස ණය සඳහා අනුමතයි.',
    modalFeatures: 'විශේෂ පහසුකම්',
    modalOverview: 'දේපල පිළිබඳ දළ විශ්ලේෂණය',
    modalLoanCalcTitle: 'බැංකු නිවාස ණය මාසික වාරික කැල්කියුලේටරය',
    modalLoanCalcDesc: 'ශ්‍රී ලංකාවේ වත්මන් බැංකු ණය පොලී අනුපාත අනුව (වසරකට 12% පමණ) මාසික වාරිකය ගණනය කරන්න',
    modalMonthlyInstallment: 'ඇස්තමේන්තුගත මාසික වාරිකය (EMI)',
    modalContactSeller: 'හිමිකරු අමතන්න',

    footerAboutText: 'ශ්‍රී ලංකාවේ ප්‍රමුඛතම අඩුම මිල දේපල සෙවුම් පෝටලය. දිස්ත්‍රික්ක 25 පුරාම ඉඩම්, නිවාස සහ මහල් නිවාස අඩුම සහතික මිලට සොයාගන්න.',
    footerVerifiedDeeds: 'නිරවුල් ඔප්පු සහ ඉඩම් ලියාපදිංචි කාර්යාල සහාය',
    footerQuickLinks: 'ක්ෂණික සබැඳි',
    footerDistricts: 'ජනප්‍රිය දිස්ත්‍රික්ක',
    footerContactUs: 'අප අමතන්න',
    footerRights: 'සියලු හිමිකම් ඇවිරිණි. ශ්‍රී ලංකාව සඳහා සකස් කරන ලදී.',
    footerTagline: 'ශ්‍රී ලංකාවේ ප්‍රමුඛතම අඩු මිල දේපල සෙවුම් පෝර්ටලය. දිවයිනේ දිස්ත්‍රික්ක 25 පුරාම සහතික කළ අඩුම මිලට ඉඩම්, නිවාස සහ මහල් නිවාස සොයාගන්න.',
    footerHousesSale: 'විකිණීමට ඇති නිවාස',
    footerLandsSale: 'විකිණීමට ඇති ඉඩම් (Idam)',
    footerApartmentsRent: 'කුලියට ඇති මහල් නිවාස',
    footerCommercial: 'වාණිජ දේපල',
    footerPopularDistricts: 'ජනප්‍රිය දිස්ත්‍රික්ක',

    // Post Ad Modal additions
    postAdModalTitle: 'නොමිලේ දේපල දැන්වීමක් පළ කරන්න',
    postAdModalSub: 'ශ්‍රී ලංකාවේ සියලුම දිස්ත්‍රික්ක 25 පුරා 100% නොමිලේ දේපල දැන්වීම් පළ කරන්න',
    freeCommunityBanner: 'ඕනෑම කෙනෙකුට 100% නොමිලේ ලියාපදිංචි වී දැන්වීම් පළ කළ හැක. තැරැව්කාර ගාස්තු රහිතව සැබෑ ගැනුම්කරුවන් සමඟ සෘජුව සම්බන්ධ වන්න.',
    postSuccessDesc: 'ඔබගේ දැන්වීම Aduwata.lk වෙත සාර්ථකව ඇතුළත් විය. ගැනුම්කරුවන්ට දැන් ඔබට කෙලින්ම ඇමතුම් හෝ WhatsApp පණිවිඩ එවීමට හැකිය.',
    postPurpose: 'දැන්වීමේ අරමුණ',
    postPurposeBuy: 'විකිණීමට',
    postPurposeRent: 'කුලියට',
    propHouse: 'නිවස',
    propLand: 'ඉඩම',
    propApartment: 'මහල් නිවාසය',
    propCommercial: 'වාණිජ',
    postTitleLabel: 'දැන්වීමේ මාතෘකාව',
    postTitlePlaceholder: 'උදා: මීගමුවේ පර්චස් 10ක කාමර 3ක් සහිත සුඛෝපභෝගී තනි මහල් නිවස',
    unitPerches: 'පර්චස් (Perches)',
    unitSqft: 'වර්ග අඩි (Sq.Ft)',
    deedSinnakkara: 'සින්නක්කර නිරවුල් ඔප්පු (Sinnakkara Clear Deed)',
    deedBimSaviya: 'බිම් සවිය පළමු පන්තියේ සහතිකය (Bim Saviya 1st Class)',
    deedBankApproved: 'බැංකු ණය සඳහා අනුමත ඔප්පු',
    roadCarpeted: 'අඩි 20+ කාපට් ඇතිරූ පුළුල් පාර',
    roadConcrete: 'අඩි 15 කොන්ක්‍රීට් පාර',
    roadPrivate: 'අඩි 12 පිවිසුම් මාර්ගය',
    roadBusRoute: 'ප්‍රධාන බස් පාරට මුහුණලා',
    postPhoto: 'දේපල ඡායාරූප',
    postUploadBtn: 'ඔබගේ දුරකථනයෙන් හෝ පරිගණකයෙන් ඡායාරූපයක් එක් කරන්න',
    postPresetLabel: 'හෝ නියැදි ඡායාරූපයක් තෝරන්න:',
    postSellerPhone: 'දුරකථන අංකය',
    postSellerWhatsapp: 'WhatsApp අංකය (ඉලක්කම් පමණි, උදා: 94771234567)',
    post100FreeNote: 'Aduwata.lk හි 100% නොමිලේ පළ කිරීම - සැඟවුණු ගාස්තු නැත',
    postCancelBtn: 'අවලංගු කරන්න',
    postSubmitBtn: 'දැන්වීම නොමිලේ පළ කරන්න',

    // Property Details Modal additions
    tabBuy: 'විකිණීමට',
    tabRent: 'කුලියට',
    specBedrooms: 'නිදන කාමර',
    specBathrooms: 'නාන කාමර',
    specArea: 'බිම් / ගොඩනැගිලි ප්‍රමාණය',
    specParking: 'වාහන නැවතුම් ඉඩ',
    specDeed: 'නිරවුල් ඔප්පුව',
    detailOverview: 'දේපල පිළිබඳ විස්තරය',
    detailAmenities: 'ප්‍රධාන පහසුකම් සහ නීතිමය තොරතුරු',
    calculatorTitle: 'ශ්‍රී ලංකා බැංකු නිවාස ණය මාසික වාරික (EMI) ගණකය',
    calcDownPayment: 'මූලික ගෙවීම (Down Payment)',
    calcLoanTenure: 'ණය කාලය (Loan Tenure)',
    calcInterestRate: 'වාර්ෂික පොලී අනුපාතය (% p.a.):',
    calcEstMonthly: 'ඇස්තමේන්තුගත මාසික වාරිකය',
    detailSellerListedBy: 'දැන්වීම පළ කර ඇත්තේ',
    btnWhatsAppChat: 'WhatsApp මඟින් කතා කරන්න',

    // Empty Marketplace & Ad Posting Workflow additions
    emptyMarketplaceTitle: 'දැනට දේපල දැන්වීම් නැත - ඔබගේ දැන්වීම 100% නොමිලේ දැන්ම පළ කරන්න!',
    emptyMarketplaceDesc: 'ශ්‍රී ලංකාවේ ඕනෑම කෙනෙකුට විනාඩියකින් ලියාපදිංචි වී කිසිදු තැරැව්කාර ගාස්තුවකින් තොරව 100% නොමිලේ ඉඩම්, නිවාස සහ මහල් නිවාස දැන්වීම් පළ කළ හැක.',
    btnPostFirstAd: 'නොමිලේ දැන්වීමක් දැන්ම පළ කරන්න',
    btnRegisterInMinute: 'විනාඩියෙන් නොමිලේ ලියාපදිංචි වන්න',
    btnLoadDemoPosts: 'නියැදි දැන්වීම් පූරණය කරන්න',
    btnClearAllPosts: 'දැනට ඇති සියලු දැන්වීම් මකන්න',
    clearPostsConfirm: 'දැනට වෙළඳපොළේ ඇති සියලුම දේපල දැන්වීම් මකා දැමීමට ඔබට විශ්වාසද?',
    postAutoRegisterCheckbox: 'මගේ දැන්වීම් ඕනෑම වේලාවක කළමනාකරණය කිරීමට මෙම තොරතුරු සමඟ මට නොමිලේ ගිණුමක් සාදන්න',
    manageMarketplaceOptions: 'දැන්වීම් කළමනාකරණය සහ නියැදි දැන්වීම්',
  },

  ta: {
    bannerText: 'இலவச பதிவு மற்றும் விளம்பரம்: உங்கள் சொத்து விளம்பரங்களை இலவசமாக பதிவிட்டு, இலங்கை முழுவதும் உள்ள உண்மையான வாங்குபவர்களுடன் நேரடியாக இணையுங்கள்.',
    bannerGuideLink: '3 எளிய படிகளைப் பாருங்கள்',

    navBuy: 'வாங்க',
    navRent: 'வாடகைக்கு',
    navHowToPost: 'விளம்பரம் செய்வது எப்படி?',
    navNewProjects: 'புதிய திட்டங்கள்',
    navTransit: 'ரயில் & நெடுஞ்சாலைகள்',
    navPostAd: 'விளம்பரம் செய்ய',
    navPostAdFreeBadge: 'இலவசம்',
    navRegister: 'பதிவு செய்ய',
    navLogin: 'உள்நுழைக',
    navMyAccount: 'என் கணக்கு',
    navSaved: 'சேமிக்கப்பட்டவை',

    heroBadge: 'இலங்கையின் முதன்மையான குறைந்த விலை சொத்து & நில சந்தை',
    heroHeading: 'நிலங்கள், வீடுகள் & அடுக்குமாடி குடியிருப்புகள்',
    heroHeadingHighlight: 'உறுதிசெய்யப்பட்ட குறைந்த விலையில்',
    heroSubheading: 'இலங்கையின் 25 மாவட்டங்களிலும் தெளிவான உறுதியுடன் கூடிய உண்மையான சொத்துக்களை கண்டறியுங்கள்.',
    heroTabBuy: 'விற்பனைக்கு (Buy)',
    heroTabRent: 'வாடகைக்கு (Rent)',
    searchPlaceholder: 'நகரம் அல்லது முகவரியைத் தேடுங்கள் (எ.கா: வெள்ளவத்தை, கண்டி, காலி)',
    allDistricts: '25 மாவட்டங்களும்',
    allCities: 'அனைத்து நகரங்களும்',
    allTypes: 'அனைத்து சொத்து வகைகள்',
    typeHouse: 'வீடுகள் / வில்லாக்கள்',
    typeLand: 'நிலங்கள் (காணி)',
    typeApartment: 'அடுக்குமாடி குடியிருப்புகள்',
    typeCommercial: 'வணிக கட்டிடங்கள்',
    allPrices: 'எந்த விலை வரம்பும்',
    priceUnder5m: 'ரூ. 5 மில்லியனுக்கு கீழ்',
    price5m10m: 'ரூ. 5M - 10M',
    price10m25m: 'ரூ. 10M - 25M',
    price25m50m: 'ரூ. 25M - 50M',
    priceAbove50m: 'ரூ. 50 மில்லியனுக்கு மேல்',
    priceUnder100k: 'மாதம் ரூ. 100k-க்கு கீழ்',
    price100k200k: 'மாதம் ரூ. 100k - 200k',
    priceAbove200k: 'மாதம் ரூ. 200,000-க்கு மேல்',
    allBeds: 'படுக்கையறைகள்',
    beds1Plus: '1+ படுக்கையறை',
    beds2Plus: '2+ படுக்கையறைகள்',
    beds3Plus: '3+ படுக்கையறைகள்',
    beds4Plus: '4+ படுக்கையறைகள்',
    beds5Plus: '5+ படுக்கையறைகள்',
    searchButton: 'சொத்துக்களைத் தேடுங்கள்',
    resetButton: 'மீட்டமைக்க',
    liveListingsCount: 'இலங்கை முழுவதும் நேரடி சரிபார்க்கப்பட்ட சொத்துக்கள்',

    guideBadge: 'இலவச பதிவு மற்றும் விளம்பரம்',
    guideTitle: 'யாரும் எவ்வாறு பதிவு செய்து விளம்பரம் செய்யலாம்?',
    guideSubtitle: 'தரகர் கட்டணம் எதுவுமின்றி, உங்கள் நிலங்கள், வீடுகள், அடுக்குமாடி குடியிருப்புகளை இலங்கை முழுவதும் உள்ள வாங்குபவர்களிடம் நேரடியாக விளம்பரம் செய்யுங்கள்.',
    step1Number: 'படி 01',
    step1Title: '30 வினாடிகளில் பதிவு செய்க',
    step1Desc: 'உங்கள் மொபைல் எண், பெயர் மற்றும் மாவட்டத்தை உள்ளிட்டு இலவச கணக்கைத் தொடங்குங்கள். எந்த ஆவணக் கட்டணமும் இல்லை.',
    step1Check: '100% வாழ்நாள் இலவச கணக்கு',
    step2Number: 'படி 02',
    step2Title: 'விவரங்கள் & புகைப்படங்கள்',
    step2Desc: 'சொத்து வகை, இடம், எதிர்பார்க்கும் விலை, பேர்ச்சஸ் / அறைகள் எண்ணிக்கை மற்றும் தெளிவான புகைப்படங்களை சேர்க்கவும்.',
    step2Check: 'தெளிவான உறுதி மற்றும் பாதை வசதி விவரங்கள்',
    step3Number: 'படி 03',
    step3Title: 'நேரடி அழைப்புகளைப் பெறுங்கள்',
    step3Desc: 'விளம்பரம் பதிவேற்றப்பட்டதும் வாங்குபவர்கள் நேரடியாக WhatsApp மற்றும் தொலைபேசி மூலம் உங்களை தொடர்புகொள்வார்கள். தரகர் கமிஷன் இல்லை.',
    step3Check: 'நேரடி வாங்குபவர்கள் (கமிஷன் இல்லை)',
    guideAllDistrictsCheck: '25 மாவட்டங்களிலும் அங்கீகரிக்கப்பட்ட சேவை',
    guideDirectWhatsAppCheck: 'நேரடி WhatsApp தொடர்பு வசதி',
    btnRegisterFree: 'இலவசமாக பதிவு செய்யுங்கள்',
    btnPostAdNow: 'விளம்பரம் பதிவிடவும்',
    guideWelcomeUser: 'வணக்கம்,',

    gridTitle: 'சிறப்பு மற்றும் சரிபார்க்கப்பட்ட சொத்துக்கள்',
    gridSubtitle: 'இலங்கை முழுவதும் கட்டுப்படியாகக்கூடிய சரிபார்க்கப்பட்ட நிலங்கள், வீடுகள் மற்றும் அடுக்குமாடி குடியிருப்புகள்',
    verifiedDeedBadge: 'சரிபார்க்கப்பட்ட உறுதி',
    btnViewDetails: 'விவரங்களை பார்க்க',
    btnCallSeller: 'அழைக்க',
    btnWhatsApp: 'WhatsApp',
    badgeSold: 'விற்கப்பட்டது',
    noResultsFound: 'உங்கள் வடிகட்டல் நிபந்தனைகளுக்கு பொருந்தும் சொத்துக்கள் எதுவும் கிடைக்கவில்லை.',
    noResultsReset: 'அனைத்து சொத்துக்களையும் பார்க்க வடிகட்டல்களை மீட்டமைக்கவும்',

    projectsTitle: 'முதன்மை புதிய திட்டங்கள் மற்றும் குடியிருப்புகள்',
    projectsSubtitle: 'பாதுகாக்கப்பட்ட சமூகங்கள், சொகுசு அடுக்குமாடி குடியிருப்புகள் மற்றும் வீட்டு நிலத் திட்டங்கள்',
    btnViewAllProjects: 'அனைத்து திட்டங்களையும் பார்க்க',

    transitTitle: 'ரயில் மற்றும் அதிவேக நெடுஞ்சாலை அருகிலுள்ள சொத்துக்கள்',
    transitSubtitle: 'ரயில் நிலையங்கள் மற்றும் நெடுஞ்சாலை அணுகல் அருகிலுள்ள சொத்துக்களுடன் பயண நேரத்தை மிச்சப்படுத்துங்கள்',
    transitAll: 'அனைத்து போக்குவரத்து வழிகள்',
    transitMainLine: 'பிரதான ரயில் பாதை (கொழும்பு - கண்டி)',
    transitCoastalLine: 'கடலோர ரயில் பாதை (கொழும்பு - மாத்தறை)',
    transitExpressway: 'அதிவேக நெடுஞ்சாலை சந்திகள்',

    categoriesTitle: 'தேர்ந்தெடுக்கப்பட்ட சொத்து தொகுப்புகள்',
    categoriesSubtitle: 'வாழ்க்கை முறை, பட்ஜெட் சலுகைகள் மற்றும் முதலீட்டு வாய்ப்புகள் மூலம் தேடுங்கள்',

    postModalTitle: 'இலவச சொத்து விளம்பரம் பதிவிடவும்',
    postModalSubtitle: 'இலங்கையின் 25 மாவட்டங்களிலும் 100% இலவச சொத்து விளம்பரம்',
    postModalUserBanner: 'பதிவுசெய்த பயனர்:',
    postModalGuestBanner: 'யாரும் பதிவு செய்தோ அல்லது செய்யாமலோ இலவசமாக விளம்பரம் செய்யலாம். விவரங்களை நிரப்பவும்.',
    postListingType: 'விளம்பர வகை',
    postCategory: 'சொத்து வகை',
    postAdTitle: 'விளம்பர தலைப்பு',
    postAdTitlePlaceholder: 'எ.கா: நீர்கொழும்பில் நவீன 3 படுக்கையறை தனி வீடு விற்பனைக்கு',
    postProvince: 'மாகாணம்',
    postDistrict: 'மாவட்டம்',
    postCity: 'நகரம்',
    postCityPlaceholder: 'எ.கா: வெள்ளவத்தை / நீர்கொழும்பு',
    postPrice: 'விலை (LKR)',
    postPricePlaceholder: 'எ.கா: 15000000',
    postBedrooms: 'படுக்கையறைகள்',
    postBathrooms: 'குளியலறைகள்',
    postExtent: 'அளவு',
    postUnit: 'அலகு',
    postDeedStatus: 'உறுதி நிலை',
    postRoadAccess: 'பாதை அகலம்',
    postPhotoLabel: 'புகைப்படங்கள்',
    postPhotoUploadBtn: 'சாதனத்திலிருந்து புகைப்படத்தைப் பதிவேற்றவும்',
    postOrPresetPhotos: 'அல்லது மாதிரி புகைப்படத்தைத் தேர்ந்தெடுக்கவும்:',
    postDescription: 'விளக்கம்',
    postDescPlaceholder: 'தெளிவான உறுதி, மின்சாரம், நீர் வசதி, ரயில் நிலைய தூரம் போன்ற விவரங்கள்...',
    postSellerName: 'விற்பனையாளர் பெயர்',
    postPhone: 'தொலைபேசி எண்',
    postWhatsApp: 'WhatsApp எண்',
    btnCancel: 'ரத்து செய்க',
    btnPublishAd: 'இலவசமாக பதிவிடவும்',
    postSuccessTitle: 'உங்கள் விளம்பரம் இப்போது நேரலையில் உள்ளது!',
    postSuccessSubtitle: 'உங்கள் சொத்து Aduwata.lk இல் வெற்றிகரமாக வெளியிடப்பட்டுள்ளது. வாங்குபவர்கள் உங்களை நேரடியாக தொடர்பு கொள்ளலாம்.',

    loginModalTitleLogin: 'Aduwata.lk இல் உள்நுழைக',
    loginModalTitleRegister: 'இலவச கணக்கை உருவாக்கவும்',
    loginModalSubLogin: 'உங்கள் தொலைபேசி எண் அல்லது கடவுச்சொல் மூலம் உள்நுழைக',
    loginModalSubRegister: 'விளம்பரம் செய்ய 30 வினாடிகளில் கணக்கை தொடங்குங்கள்',
    tabSignIn: 'உள்நுழைக',
    tabRegister: 'இலவச பதிவு',
    autoFillDemoBtn: '⚡ Auto-Fill Demo User',
    fieldFullName: 'முழு பெயர்',
    fieldDistrict: 'மாவட்டம்',
    fieldAccountType: 'கணக்கு வகை',
    fieldMobile: 'மொபைல் எண்',
    fieldPassword: 'கடவுச்சொல்',
    fieldMobileNote: 'வாங்குபவர்கள் இந்த எண்ணில் உங்களை நேரடியாக தொடர்புகொள்வார்கள்',
    roleOwner: 'சொத்து உரிமையாளர் (Owner)',
    roleAgent: 'தரகர் / முகவர் (Agent)',
    roleDeveloper: 'கட்டுமான நிறுவனம் (Developer)',
    btnSignInSubmit: 'கணக்கில் உள்நுழைக',
    btnRegisterSubmit: 'இலவச கணக்கை உருவாக்கவும்',
    alreadyHaveAccount: 'ஏற்கனவே கணக்கு உள்ளதா? உள்நுழைக',
    dontHaveAccount: 'கணக்கு இல்லையா? இலவசமாக பதிவு செய்க',
    welcomeBackMsg: 'நல்வரவு!',
    accountCreatedMsg: 'கணக்கு வெற்றிகரமாக உருவாக்கப்பட்டது!',

    dashboardVerifiedUser: 'சரிபார்க்கப்பட்ட பயனர்',
    dashboardMemberSince: 'உறுப்பினரான காலம்',
    dashboardMyAdsTitle: 'என் விளம்பரங்கள்',
    dashboardMyAdsSubtitle: 'நீங்கள் பதிவிட்ட சொத்து விளம்பரங்களை நிர்வகிக்கவும்',
    dashboardPostNewAd: 'புதிய விளம்பரம் பதிவிடவும்',
    dashboardNoAdsTitle: 'இன்னும் விளம்பரங்கள் பதிவிடப்படவில்லை',
    dashboardNoAdsDesc: 'உங்கள் நிலம் அல்லது வீட்டிற்கு இலவசமாக முதல் விளம்பரத்தை பதிவிட்டு வாங்குபவர்களை சென்றடையுங்கள்.',
    dashboardPostFirstAd: 'முதல் இலவச விளம்பரத்தை பதிவிடவும்',
    dashboardViews: 'பார்வைகள்',
    dashboardInquiries: 'விசாரணைகள்',
    dashboardBtnView: 'பார்க்க',
    dashboardBtnMarkSold: 'விற்கப்பட்டது என குறிக்கவும்',
    dashboardBtnReactivate: 'மீண்டும் செயல்படுத்துக',
    dashboardBtnDelete: 'நீக்குக',
    dashboardBtnSignOut: 'வெளியேறுக',

    modalPrice: 'விலை',
    modalSpecs: 'சொத்து விவரங்கள்',
    modalDeedVerification: 'உறுதி சரிபார்ப்பு & சட்ட பாதுகாப்பு',
    modalDeedDesc: '30 வருட தெளிவான வில்லங்கமற்ற உறுதி. அரசு மற்றும் வணிக வங்கிக் கடன்களுக்கு தகுதியானது.',
    modalFeatures: 'முக்கிய சிறப்பம்சங்கள்',
    modalOverview: 'சொத்து பற்றிய கண்ணோட்டம்',
    modalLoanCalcTitle: 'வங்கி வீட்டுக் கடன் மாதத் தவணை கணக்கீடு (EMI)',
    modalLoanCalcDesc: 'தற்போதைய இலங்கை வங்கி வீட்டுக் கடன் வட்டி விகிதங்களின்படி (ஆண்டுக்கு சுமார் 12%) மாதத் தவணையைக் கணக்கிடுங்கள்',
    modalMonthlyInstallment: 'மதிப்பிடப்பட்ட மாத தவணை (EMI)',
    modalContactSeller: 'விற்பனையாளரை நேரடியாக தொடர்பு கொள்ளவும்',

    footerAboutText: 'இலங்கையின் முதன்மையான குறைந்த விலை சொத்து தேடல் போர்டல். 25 மாவட்டங்களிலும் நிலங்கள், வீடுகள் மற்றும் அடுக்குமாடி குடியிருப்புகளை குறைந்த விலையில் கண்டறியுங்கள்.',
    footerVerifiedDeeds: 'தெளிவான உறுதி மற்றும் நிலப் பதிவக உதவி',
    footerQuickLinks: 'விரைவு இணைப்புகள்',
    footerDistricts: 'பிரபலமான மாவட்டங்கள்',
    footerContactUs: 'தொடர்பு கொள்ள',
    footerRights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. இலங்கைக்காக பிரத்யேகமாக வடிவமைக்கப்பட்டது.',
    footerTagline: 'இலங்கையின் முதன்மையான குறைந்த விலை சொத்து தேடல் போர்டல். 25 மாவட்டங்களிலும் உத்தரவாதமளிக்கப்பட்ட குறைந்த விலையில் நிலங்கள், வீடுகள் மற்றும் குடியிருப்புகளை கண்டறியுங்கள்.',
    footerHousesSale: 'விற்பனைக்கான வீடுகள்',
    footerLandsSale: 'விற்பனைக்கான நிலங்கள் (Idam)',
    footerApartmentsRent: 'வாடகைக்கான குடியிருப்புகள்',
    footerCommercial: 'வணிக சொத்துக்கள்',
    footerPopularDistricts: 'பிரபலமான மாவட்டங்கள்',

    // Post Ad Modal additions
    postAdModalTitle: 'இலவச சொத்து விளம்பரம் பதிவிடவும்',
    postAdModalSub: 'இலங்கையின் 25 மாவட்டங்களிலும் 100% இலவச சொத்து விளம்பரம்',
    freeCommunityBanner: 'யாரும் 100% இலவசமாக பதிவுசெய்து விளம்பரங்களை பதிவிடலாம். எந்தவொரு தரகு கமிஷனும் இல்லாமல் வாங்குபவர்களுடன் நேரடியாக இணையுங்கள்.',
    postSuccessDesc: 'உங்கள் விளம்பரம் வெற்றிகரமாக வெளியிடப்பட்டுள்ளது. வாங்குபவர்கள் இப்போது உங்களை நேரடியாக அழைக்கலாம் அல்லது WhatsApp செய்யலாம்.',
    postPurpose: 'விளம்பர நோக்கம்',
    postPurposeBuy: 'விற்பனைக்கு',
    postPurposeRent: 'வாடகைக்கு',
    propHouse: 'வீடு',
    propLand: 'நிலம்',
    propApartment: 'அடுக்குமாடி',
    propCommercial: 'வணிகம்',
    postTitleLabel: 'விளம்பர தலைப்பு',
    postTitlePlaceholder: 'எ.கா: நீர்கொழும்பில் 3 படுக்கையறை நவீன தனி வீடு விற்பனைக்கு',
    unitPerches: 'பேர்ச் (Perches)',
    unitSqft: 'சதுர அடி (Sq.Ft)',
    deedSinnakkara: 'சின்னக்கர உறுதி (Sinnakkara Clear Deed)',
    deedBimSaviya: 'பிம் சவிய முதலாம் வகுப்பு உரிமைப் பத்திரம்',
    deedBankApproved: 'வங்கி வீட்டுக் கடன் அனுமதிக்கப்பட்ட உறுதி',
    roadCarpeted: '20 அடி+ தார் பாதை',
    roadConcrete: '15 அடி கான்கிரீட் பாதை',
    roadPrivate: '12 அடி தனிப்பட்ட பாதை',
    roadBusRoute: 'பிரதான பேருந்து பாதைக்கு முகப்பாக',
    postPhoto: 'சொத்து புகைப்படங்கள்',
    postUploadBtn: 'சாதனத்திலிருந்து புகைப்படத்தைப் பதிவேற்றவும்',
    postPresetLabel: 'அல்லது மாதிரி புகைப்படத்தைத் தேர்ந்தெடுக்கவும்:',
    postSellerPhone: 'தொலைபேசி எண்',
    postSellerWhatsapp: 'WhatsApp எண் (எண்கள் மட்டும், எ.கா: 94771234567)',
    post100FreeNote: 'Aduwata.lk இல் 100% இலவச விளம்பரம் - மறைமுக கட்டணங்கள் இல்லை',
    postCancelBtn: 'ரத்து செய்க',
    postSubmitBtn: 'இலவச விளம்பரத்தை இப்போது பதிவிடவும்',

    // Property Details Modal additions
    tabBuy: 'விற்பனைக்கு',
    tabRent: 'வாடகைக்கு',
    specBedrooms: 'படுக்கையறைகள்',
    specBathrooms: 'குளியலறைகள்',
    specArea: 'தரை / நிலப்பரப்பு',
    specParking: 'வாகன நிறுத்துமிடம்',
    specDeed: 'உரிமைப் பத்திரம்',
    detailOverview: 'சொத்து பற்றிய கண்ணோட்டம்',
    detailAmenities: 'முக்கிய வசதிகள் மற்றும் சட்ட அம்சங்கள்',
    calculatorTitle: 'இலங்கை வங்கி வீட்டுக் கடன் மாதாந்திர தவணை (EMI) கணக்கீடு',
    calcDownPayment: 'முன்பணம் (Down Payment)',
    calcLoanTenure: 'கடன் காலம் (Loan Tenure)',
    calcInterestRate: 'ஆண்டு வட்டி விகிதம் (% p.a.):',
    calcEstMonthly: 'மதிப்பிடப்பட்ட மாதாந்திர தவணை',
    detailSellerListedBy: 'விளம்பரத்தை பதிவிட்டவர்',
    btnWhatsAppChat: 'WhatsApp இல் அரட்டையடிக்கவும்',

    // Empty Marketplace & Ad Posting Workflow additions
    emptyMarketplaceTitle: 'தற்போது சொத்து விளம்பரங்கள் எதுவும் இல்லை - உங்கள் இலவச விளம்பரத்தை இப்போதே பதிவிடவும்!',
    emptyMarketplaceDesc: 'இலங்கையில் எவரும் 1 நிமிடத்தில் எளிதாகப் பதிவுசெய்து, எந்தவொரு தரகு கட்டணமும் இன்றி 100% இலவசமாக நிலம், வீடு அல்லது அடுக்குமாடி விளம்பரங்களை பதிவிடலாம்.',
    btnPostFirstAd: 'இலவச விளம்பரத்தை இப்போதே பதிவிடவும்',
    btnRegisterInMinute: '1 நிமிடத்தில் இலவசமாகப் பதிவுசெய்யவும்',
    btnLoadDemoPosts: 'மாதிரி விளம்பரங்களை ஏற்றவும்',
    btnClearAllPosts: 'தற்போதுள்ள அனைத்து விளம்பரங்களையும் நீக்கு',
    clearPostsConfirm: 'சந்தையில் உள்ள அனைத்து சொத்து விளம்பரங்களையும் நீக்க விரும்புகிறீர்களா?',
    postAutoRegisterCheckbox: 'எனது விளம்பரங்களை எப்போது வேண்டுமானாலும் நிர்வகிக்க இந்த விவரங்களுடன் எனக்கு ஒரு இலவச கணக்கை உருவாக்கவும்',
    manageMarketplaceOptions: 'விளம்பர மேலாண்மை & மாதிரி விளம்பரங்கள்',
  },
};
