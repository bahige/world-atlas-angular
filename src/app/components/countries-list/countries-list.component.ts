import { Component, OnInit } from "@angular/core";
import { CountriesGetterService } from "src/app/services/countries-getter.service";
import { Country } from "src/app/models/country";

@Component({
  selector: "app-countries-list",
  templateUrl: "./countries-list.component.html",
  styleUrls: ["./countries-list.component.css"]
})
export class CountriesListComponent implements OnInit {
  constructor(private countries_service: CountriesGetterService) {}

  countries: Country[];
  errorMsg: string;

  ngOnInit(): void {
    this.countries_service.getCountries().subscribe(
      data => (this.countries = data),
      error => (this.errorMsg = error)
    );
  }
}
