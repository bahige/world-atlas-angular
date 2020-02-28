import { Component, OnInit } from "@angular/core";
import { CountriesGetterService } from "src/app/services/countries-getter.service";
import { Country } from "src/app/models/country";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-african-countries",
  templateUrl: "./african-countries.component.html",
  styleUrls: ["./african-countries.component.css"]
})
export class AfricanCountriesComponent implements OnInit {
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
            if (country.continent === "Africa") {
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

  // countriesArray = [
  //   {
  //     id: "8",
  //     country: "South Africa",
  //     capital: "Pretoria",
  //     language: "Afrikaan",
  //     currency: "Rand",
  //     cities: [
  //       {
  //         city: "Pretoria",
  //         photo:
  //           "http://gauteng.hotelguide.co.za/images/pretoria-city-gauteng-590x390.jpg"
  //       },
  //       {
  //         city: "Cape Town",
  //         photo:
  //           "https://businesstech.co.za/news/wp-content/uploads/2016/09/aerial_CapeTown-e1473163515774.jpg"
  //       },
  //       {
  //         city: "Johannesburg",
  //         photo:
  //           "https://www.timeshighereducation.com/sites/default/files/johannesburg_skyline.jpg"
  //       },
  //       {
  //         city: "Durban",
  //         photo:
  //           "https://i.pinimg.com/736x/60/76/7e/60767ebc58e3a962a4902ce957317c4d--durban-south-africa-south-afrika.jpg"
  //       }
  //     ],
  //     flag: "http://flags.net/images/largeflags/SOAF0001.GIF",
  //     continent: "Africa"
  //   },
  //   {
  //     id: "9",
  //     country: "Morocco",
  //     capital: "Rabat",
  //     language: "Arabic",
  //     currency: "Dirham",
  //     cities: [
  //       {
  //         city: "Rabat",
  //         photo: "http://www.airpano.ru/files/Rabat-Morocco/images/image1.jpg"
  //       },
  //       {
  //         city: "Fes",
  //         photo:
  //           "http://www.morocco-fez-tours.com/wp-content/uploads/2016/12/fES-MOROCCO.jpg"
  //       },
  //       {
  //         city: "Casablanca",
  //         photo:
  //           "https://www.msccruises.se/sv-se/Assets/casablanca_morocco_intro_3065_12333_433-280_Images.jpg"
  //       },
  //       {
  //         city: "Tangier",
  //         photo:
  //           "https://media.gq.com/photos/564b5ae85b03b0647d16556d/master/w_1738/rock-the-kasbah-gq-1215-5.jpg"
  //       }
  //     ],
  //     flag: "http://flags.net/images/largeflags/MORC0001.GIF",
  //     continent: "Africa"
  //   },
  //   {
  //     id: "10",
  //     country: "Egypt",
  //     capital: "Cairo",
  //     language: "Arabic",
  //     currency: "Pound",
  //     cities: [
  //       {
  //         city: "Cairo",
  //         photo:
  //           "https://www.ask-aladdin.com/images/Cairo_view_%20Cairo_Tower.jpg"
  //       },
  //       {
  //         city: "Alexandria",
  //         photo:
  //           "https://arabacademy-u8hapu3mdn.netdna-ssl.com/wp-content/uploads/2016/08/alexandria-1.jpg"
  //       },
  //       {
  //         city: "Port Said",
  //         photo: "http://www.hotelroomsearch.net/im/city/port-said-egypt-3.jpg"
  //       },
  //       {
  //         city: "Luxor",
  //         photo:
  //           "https://i.pinimg.com/736x/88/81/d3/8881d3fb4b84b18ff9e4fcb024fa5969--luxor-temple-luxor-egypt.jpg"
  //       }
  //     ],
  //     flag: "http://flags.net/images/largeflags/EGYP0001.GIF",
  //     continent: "Africa"
  //   },
  //   {
  //     id: "11",
  //     country: "Nigeria",
  //     capital: "Abuja",
  //     language: "English",
  //     currency: "Naira",
  //     cities: [
  //       {
  //         city: "Abuja",
  //         photo: "https://answersafrica.com/wp-content/uploads/2017/08/Abj.jpg"
  //       },
  //       {
  //         city: "Lagos",
  //         photo:
  //           "http://solarey.net/wp-content/uploads/2017/04/lagos-Nigeria.jpg"
  //       },
  //       {
  //         city: "Port Harcourt",
  //         photo:
  //           "https://travel.jumia.com/blog/wp-content/uploads/2015/04/smx.jpg"
  //       },
  //       {
  //         city: "Kano",
  //         photo:
  //           "http://airlines-airports.com/wp-content/uploads/2016/07/Nigeria-Kano.jpg"
  //       }
  //     ],
  //     flag: "http://flags.net/images/largeflags/NGRA0001.GIF",
  //     continent: "Africa"
  //   },
  //   {
  //     id: "12",
  //     country: "Kenya",
  //     capital: "Nairobi",
  //     language: "English",
  //     currency: "Shilling",
  //     cities: [
  //       {
  //         city: "Nairobi",
  //         photo:
  //           "https://media-cdn.tripadvisor.com/media/photo-s/03/da/de/46/nairobi.jpg"
  //       },
  //       {
  //         city: "Mumbasa",
  //         photo:
  //           "http://www.thinkgeoenergy.com/wp-content/uploads/2016/03/Mombasa_city_Kenya-1024x757.jpg"
  //       },
  //       {
  //         city: "Homa Bay",
  //         photo:
  //           "https://drybonestrust.files.wordpress.com/2012/07/img_6588-31.jpg"
  //       },
  //       {
  //         city: "Kisumu",
  //         photo:
  //           "https://softkenya.com/kenya/wp-content/uploads/2017/04/Kisumu-City-Kisumu-Kenya.jpg"
  //       }
  //     ],
  //     flag: "http://flags.net/images/largeflags/KENY0001.GIF",
  //     continent: "Africa"
  //   }
  // ];
}
