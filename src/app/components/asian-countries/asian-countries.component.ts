import { Component, OnInit } from "@angular/core";
import { CountriesGetterService } from "src/app/services/countries-getter.service";
import { Country } from "src/app/models/country";

@Component({
  selector: "app-asian-countries",
  templateUrl: "./asian-countries.component.html",
  styleUrls: ["./asian-countries.component.css"]
})
export class AsianCountriesComponent implements OnInit {
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
