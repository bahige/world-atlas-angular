import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Country } from "../models/country";

@Injectable({
  providedIn: "root",
})
export class CountriesGetterService {
  country: Country;
  countries: Country[];

  constructor(private httpClient: HttpClient) {}

  url = "https://api.npoint.io/027afbe0190c9042828c";

  getCountries(): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(this.url)
      .pipe(map((data) => data["countries"]))
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
