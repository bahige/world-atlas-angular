import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-city-details",
  templateUrl: "./city-details.component.html",
  styleUrls: ["./city-details.component.css"]
})
export class CityDetailsComponent implements OnInit {
  constructor() {}

  @Input() cityName: string;
  @Input() cityImage: string;

  ngOnInit(): void {}
}
