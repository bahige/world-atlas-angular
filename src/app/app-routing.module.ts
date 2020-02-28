import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AfricanCountriesComponent } from "./components/african-countries/african-countries.component";
import { AmericanCountriesComponent } from "./components/american-countries/american-countries.component";
import { AsianCountriesComponent } from "./components/asian-countries/asian-countries.component";
import { EuropeanCountriesComponent } from "./components/european-countries/european-countries.component";
import { OceanianCountriesComponent } from "./components/oceanian-countries/oceanian-countries.component";
import { CountriesListComponent } from "./components/countries-list/countries-list.component";

const routes: Routes = [
  { path: "africa", component: AfricanCountriesComponent },
  { path: "america", component: AmericanCountriesComponent },
  { path: "asia", component: AsianCountriesComponent },
  { path: "europe", component: EuropeanCountriesComponent },
  { path: "oceania", component: OceanianCountriesComponent },
  { path: "world", component: CountriesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
