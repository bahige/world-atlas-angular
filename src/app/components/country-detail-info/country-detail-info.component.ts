import { Component, OnInit } from "@angular/core";
import { CountriesGetterService } from "src/app/services/countries-getter.service";
import { Country } from "src/app/models/country";
import { City } from "src/app/models/city";

@Component({
  selector: "app-country-detail-info",
  templateUrl: "./country-detail-info.component.html",
  styleUrls: ["./country-detail-info.component.css"]
})
export class CountryDetailInfoComponent implements OnInit {
  countryContinent: string;
  constructor(private countriesService: CountriesGetterService) {}

  countryName = "";
  countryCapital = "";
  countryFlag = "";
  countryCurrency = "";
  countryLanguage = "";
  country: Country;
  cities: City[];

  ngOnInit(): void {
    this.country = this.countriesService.country;
    this.countryName = this.country.country;
    this.countryFlag = this.country.flag;
    this.countryCapital = this.country.capital;
    this.countryCurrency = this.country.currency;
    this.countryLanguage = this.country.language;
    this.countryContinent = this.country.continent;
    this.cities = this.country.cities;
  }
}
