import { Component, OnInit } from "@angular/core";
import { CountriesGetterService } from "src/app/services/countries-getter.service";
import { Country } from "src/app/models/country";

@Component({
  selector: "app-american-countries",
  templateUrl: "./american-countries.component.html",
  styleUrls: ["./american-countries.component.css"]
})
export class AmericanCountriesComponent implements OnInit {
  constructor(private countriesService: CountriesGetterService) {}

  countries: Country[];
  error: string;

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe(
      data => (this.countries = data),
      error => (this.error = error)
    );
  }
}
