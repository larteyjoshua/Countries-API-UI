export interface Filters {
  region: string;
  search: string;
}
export interface Map {
  googleMaps: string;
  openStreetMaps: string;
}
export interface NativeName {
  official: string;
  common: string;
}

export interface Country {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
  zip_code: string;
  short: string;
  location: number[];
  sub_region: string;
  tld: string[];
  languages: string[];
  map: Map;
  currencies: any;
  nativeName: NativeName[];
  borders: string[];
  cca3: string;
}
