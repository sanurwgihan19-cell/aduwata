export type PropertyPurpose = 'buy' | 'rent';

export type PropertyType = 'all' | 'house' | 'land' | 'apartment' | 'commercial';

export type TransitCorridor = 'main-line' | 'coastal-line' | 'expressway';

export interface UserAccount {
  id: string;
  name: string;
  phone: string;
  email?: string;
  district: string;
  role: 'Owner' | 'Broker / Agent' | 'Developer';
  joinedDate: string;
  verified: boolean;
}

export interface Property {
  id: string;
  title: string;
  price: number;
  formattedPrice: string;
  priceNote?: string; // e.g. 'Negotiable', 'Per Perch', 'Per Month'
  purpose: PropertyPurpose;
  propertyType: 'house' | 'land' | 'apartment' | 'commercial';
  badge?: {
    text: string;
    colorBg?: string; // CSS or Tailwind color
  };
  location: {
    province: string;
    district: string;
    city: string;
    address: string;
  };
  specs: {
    bedrooms?: number;
    bathrooms?: number;
    area?: number;
    areaUnit: 'sqft' | 'perches';
    parkingSlots?: number;
  };
  transit?: {
    corridor: TransitCorridor;
    name: string; // e.g. 'Ragama Junction - 1.2 km'
  };
  image: string;
  gallery: string[];
  features: string[];
  description: string;
  verifiedDeed: boolean;
  postedDate: string;
  isFeatured?: boolean;
  isNewProject?: boolean;
  userId?: string; // ID of the registered user who posted this ad
  isSold?: boolean;
  viewsCount?: number;
  inquiriesCount?: number;
  seller: {
    name: string;
    type: 'Owner' | 'Verified Agent' | 'Premier Developer';
    phone: string;
    whatsapp: string;
    verified: boolean;
  };
}

export interface FilterState {
  purpose: PropertyPurpose;
  searchTerm: string;
  district: string;
  city: string;
  propertyType: PropertyType;
  priceRange: string;
  bedrooms: string;
  transitCorridor: string;
}
