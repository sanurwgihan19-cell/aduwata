export interface ProvinceData {
  name: string;
  districts: {
    [districtName: string]: string[];
  };
}

export const sriLankaLocations: Record<string, ProvinceData['districts']> = {
  "Western Province": {
    "Colombo": ["Colombo 01-15", "Wellawatte", "Kollupitiya", "Bambalapitiya", "Maharagama", "Nugegoda", "Battaramulla", "Kaduwela", "Dehiwala", "Mount Lavinia", "Homagama", "Piliyandala", "Kotte", "Rajagiriya"],
    "Gampaha": ["Gampaha Town", "Negombo", "Kelaniya", "Kadawatha", "Kiribathgoda", "Ja-Ela", "Wattala", "Nittambuwa", "Minuwangoda"],
    "Kalutara": ["Kalutara Town", "Panadura", "Bandaragama", "Horana", "Matugama", "Beruwala", "Aluthgama"]
  },
  "Central Province": {
    "Kandy": ["Kandy City", "Peradeniya", "Katugastota", "Thennekumbura", "Digana", "Galaha", "Akurana"],
    "Matale": ["Matale Town", "Dambulla", "Sigiriya", "Ukuwela", "Rattota"],
    "Nuwara Eliya": ["Nuwara Eliya Town", "Hatton", "Ginigaththena", "Ragala", "Walapane"]
  },
  "Southern Province": {
    "Galle": ["Galle Fort & City", "Ahangama", "Hikkaduwa", "Ambalangoda", "Karapitiya", "Elpitiya"],
    "Matara": ["Matara Town", "Weligama", "Deniyaya", "Hakmana", "Kamburupitiya"],
    "Hambantota": ["Hambantota", "Tangalle", "Ambalantota", "Tissamaharama", "Suriyawewa"]
  },
  "North Western Province": {
    "Kurunegala": ["Kurunegala City", "Kuliyapitiya", "Narayammala", "Pannala", "Mawatagama", "Giriulla"],
    "Puttalam": ["Puttalam Town", "Chilaw", "Madampe", "Wennappuwa", "Nattandiya", "Kalpitiya"]
  },
  "Sabaragamuwa Province": {
    "Ratnapura": ["Ratnapura City", "Embilipitiya", "Balangoda", "Pelmadulla", "Eratna"],
    "Kegalle": ["Kegalle Town", "Mawanella", "Rambukkana", "Warakapola", "Dehiowita"]
  },
  "Uva Province": {
    "Badulla": ["Badulla Town", "Bandarawela", "Ella", "Welimada", "Haputale"],
    "Monaragala": ["Monaragala Town", "Wellawaya", "Kataragama", "Bibile"]
  },
  "North Central Province": {
    "Anuradhapura": ["Anuradhapura Town", "Medawachchiya", "Kekirawa", "Thambuttegama", "Eppawala"],
    "Polonnaruwa": ["Polonnaruwa Town", "Kaduruwela", "Hingurakgoda", "Medirigiriya"]
  },
  "Eastern Province": {
    "Trincomalee": ["Trincomalee Town", "Kinniya", "Kanthale", "Nilaveli"],
    "Batticaloa": ["Batticaloa Town", "Kattankudy", "Vakarai", "Valachchenai"],
    "Ampara": ["Ampara Town", "Kalmunai", "Sammanthurai", "Pottuvil", "Arugam Bay"]
  },
  "Northern Province": {
    "Jaffna": ["Jaffna Town", "Nallur", "Chavakachcheri", "Point Pedro", "Keerimalai"],
    "Kilinochchi": ["Kilinochchi Town", "Pallai", "Pooneryn"],
    "Mannar": ["Mannar Town", "Madu", "Talaimannar"],
    "Vavuniya": ["Vavuniya Town", "Nedunkeni", "Cheddikulam"],
    "Mullaitivu": ["Mullaitivu Town", "Puthukkudiyiruppu", "Welioya"]
  }
};

export const allDistrictsList = Object.entries(sriLankaLocations).flatMap(([province, districts]) =>
  Object.keys(districts).map(district => ({
    province,
    district,
    slug: district.toLowerCase().replace(/\s+/g, '-')
  }))
);

export function getCitiesForDistrict(districtName: string): string[] {
  for (const province of Object.values(sriLankaLocations)) {
    for (const [dist, cities] of Object.entries(province)) {
      if (dist.toLowerCase() === districtName.toLowerCase()) {
        return cities;
      }
    }
  }
  return [];
}
