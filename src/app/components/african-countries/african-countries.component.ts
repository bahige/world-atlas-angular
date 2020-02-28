import { Component, OnInit } from "@angular/core";
import { CountriesGetterService } from "src/app/services/countries-getter.service";
import { Country } from "src/app/models/country";

@Component({
  selector: "app-african-countries",
  templateUrl: "./african-countries.component.html",
  styleUrls: ["./african-countries.component.css"]
})
export class AfricanCountriesComponent implements OnInit {
  constructor(private countriesService: CountriesGetterService) {}

  countries: Country[];
  error: string;
  countriesArray: Country[];

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe(
      data => (this.countries = data),
      error => (this.error = error)
    );
  }
}
