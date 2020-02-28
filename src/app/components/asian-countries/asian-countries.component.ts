import { Component, OnInit } from "@angular/core";
import { CountriesGetterService } from "src/app/services/countries-getter.service";
import { Country } from "src/app/models/country";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-asian-countries",
  templateUrl: "./asian-countries.component.html",
  styleUrls: ["./asian-countries.component.css"]
})
export class AsianCountriesComponent implements OnInit {
  constructor(
    private countriesService: CountriesGetterService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  countries: Country[];
  countriesArray: Country[] = [];
  error: string;

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe(
      data => {
        (this.countries = data),
          this.countries.forEach(country => {
            if (country.continent === "Asia") {
              this.countriesArray.push(country);
              console.log(this.countriesArray);
            }
          });
      },
      error => (this.error = error)
    );
  }

  onSelect(country: Country) {
    this.router.navigate([country.country], {
      relativeTo: this.activatedRoute
    });

    this.countriesService.country = country;
  }
}
