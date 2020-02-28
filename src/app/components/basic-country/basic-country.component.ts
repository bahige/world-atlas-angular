import { Component, OnInit, Input } from "@angular/core";
import { CountriesGetterService } from "src/app/services/countries-getter.service";
import { Country } from "src/app/models/country";

@Component({
  selector: "app-basic-country",
  templateUrl: "./basic-country.component.html",
  styleUrls: ["./basic-country.component.css"]
})
export class BasicCountryComponent implements OnInit {
  constructor() {}

  @Input() countryName: string = "";
  @Input() countryFlag: string = "";

  ngOnInit(): void {}
}
