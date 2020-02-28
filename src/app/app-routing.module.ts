import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AfricanCountriesComponent } from "./components/african-countries/african-countries.component";
import { AmericanCountriesComponent } from "./components/american-countries/american-countries.component";
import { AsianCountriesComponent } from "./components/asian-countries/asian-countries.component";
import { EuropeanCountriesComponent } from "./components/european-countries/european-countries.component";
import { OceanianCountriesComponent } from "./components/oceanian-countries/oceanian-countries.component";
import { CountriesListComponent } from "./components/countries-list/countries-list.component";
import { CountryDetailInfoComponent } from "./components/country-detail-info/country-detail-info.component";

const routes: Routes = [
  { path: "", redirectTo: "/world", pathMatch: "full" },
  { path: "africa", component: AfricanCountriesComponent },
  { path: "africa/:name", component: CountryDetailInfoComponent },
  { path: "america", component: AmericanCountriesComponent },
  { path: "america/:name", component: CountryDetailInfoComponent },
  { path: "asia", component: AsianCountriesComponent },
  { path: "asia/:name", component: CountryDetailInfoComponent },
  { path: "europe", component: EuropeanCountriesComponent },
  { path: "europe/:name", component: CountryDetailInfoComponent },
  { path: "oceania", component: OceanianCountriesComponent },
  { path: "oceania/:name", component: CountryDetailInfoComponent },
  { path: "world", component: CountriesListComponent },
  { path: "world/:name", component: CountryDetailInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
