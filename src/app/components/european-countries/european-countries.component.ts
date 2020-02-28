import { Component, OnInit } from "@angular/core";
import { CountriesGetterService } from "src/app/services/countries-getter.service";
import { Country } from "src/app/models/country";

@Component({
  selector: "app-european-countries",
  templateUrl: "./european-countries.component.html",
  styleUrls: ["./european-countries.component.css"]
})
export class EuropeanCountriesComponent implements OnInit {
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
