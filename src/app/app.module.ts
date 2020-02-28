import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components/app-component/app.component";
import { HeaderComponent } from "./components/header/header.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { BasicCountryComponent } from "./components/basic-country/basic-country.component";
import { CountriesGetterService } from "./services/countries-getter.service";
import { CountriesListComponent } from "./components/countries-list/countries-list.component";
import { AmericanCountriesComponent } from './components/american-countries/american-countries.component';
import { AfricanCountriesComponent } from './components/african-countries/african-countries.component';
import { AsianCountriesComponent } from './components/asian-countries/asian-countries.component';
import { EuropeanCountriesComponent } from './components/european-countries/european-countries.component';
import { OceanianCountriesComponent } from './components/oceanian-countries/oceanian-countries.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    BasicCountryComponent,
    CountriesListComponent,
    AmericanCountriesComponent,
    AfricanCountriesComponent,
    AsianCountriesComponent,
    EuropeanCountriesComponent,
    OceanianCountriesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CountriesGetterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
