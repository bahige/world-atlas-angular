import { Component, OnInit } from "@angular/core";
import { CountriesGetterService } from "src/app/services/countries-getter.service";
import { Country } from "src/app/models/country";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-countries-list",
  templateUrl: "./countries-list.component.html",
  styleUrls: ["./countries-list.component.css"]
})
export class CountriesListComponent implements OnInit {
  constructor(
    private countries_service: CountriesGetterService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  countries: Country[];
  errorMsg: string;

  ngOnInit(): void {
    this.countries_service.getCountries().subscribe(
      data => (this.countries = data),
      error => (this.errorMsg = error)
    );
  }

  onSelect(country: Country) {
    this.router.navigate([country.country], { relativeTo: this.route });
    this.countries_service.country = country;
  }
}
