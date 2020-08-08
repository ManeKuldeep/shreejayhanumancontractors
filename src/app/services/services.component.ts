import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
  serviceImages = [
    {
      src:
        "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fblasting.jpg?alt=media&token=c5f92a44-2ad7-45ef-95ec-73f9454db327",
      description: "Blasting",
      service: "blasting",
    },
    {
      src:
        "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fpainting.jpg?alt=media&token=4f3353e5-ac94-458a-a018-e06276f32c68",
      description: "Painting",
      service: "painting",
    },
    {
      src:
        "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fguineting2.jpg?alt=media&token=52f4d7ca-88da-465a-8824-9f0a16acb57d",
      description: "Drilling / Grouting / Soil Nailing",
      service: "grouting",
    },
    {
      src: "./assets/img/cover.jpg",
      description: "Fire Protection",
      service: "fire",
    },
    {
      src:
        "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fguineting.jpg?alt=media&token=afce9f64-d227-40c5-bb30-bfd5592ecc0a",
      description: "Guniting",
      service: "guniting",
    },
    {
      src:
        "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fguiniting14.jpg?alt=media&token=1e415abc-be2f-4c52-ac2a-225ae2d29958",
      description: "Shotcrete",
      service: "shotcrete",
    },
    {
      src: "./assets/img/cover.jpg",
      description: "Cement Mortar Lining",
      service: "cementmortar",
    },
  ];
  constructor(private router: Router) {}
  ngOnInit(): void {}
  navigateTo(img) {
    this.router.navigateByUrl("/service-details/" + img.service);
  }
}
