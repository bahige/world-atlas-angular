import { City } from "./city";

export class Country {
  id: number;
  country: string;
  capital: string;
  language: string;
  currency: string;
  cities: City[];
  flag: string;
  continent: string;
}
