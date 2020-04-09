import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  goToFacebook() {
    window.location.href = "http://www.facebook.com";
  }

  goToTwitter() {
    window.location.href = "http://www.twitter.com";
  }

  goToLinkedin() {
    window.location.href = "http://www.linkedin.com";
  }

  goToInstagram() {
    window.location.href = "http://www.instagram.com";
  }
}
