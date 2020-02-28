import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Country } from "../models/country";

@Injectable({
  providedIn: "root"
})
export class CountriesGetterService {
  constructor(private httpClient: HttpClient) {}

  url = "https://api.myjson.com/bins/10k58h";

  getCountries(): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(this.url)
      .pipe(map(data => data["countries"]))
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
