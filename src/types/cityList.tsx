export interface CityListState {
  list: CityList;
  shouldShowCityList: boolean;
  isCityListLoading: boolean;
  searchString: string;
  errorCityList: boolean;
}

export type CityList = City[];

export interface City {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}
