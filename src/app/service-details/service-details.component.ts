import { Component, OnInit } from "@angular/core";
import { ServiceDetailsService } from "./services/service-details.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-service-details",
  templateUrl: "./service-details.component.html",
  styleUrls: ["./service-details.component.css"],
})
export class ServiceDetailsComponent implements OnInit {
  selectedService: any;
  serviceImages = {
    blasting: [
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fblasting1.jpg?alt=media&token=cf9b8906-d801-4e0f-94d0-057e9208506b",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fblasting2.jpg?alt=media&token=f0033b7f-995b-4414-b00c-3153b802368e",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fblasting3.jpg?alt=media&token=313c3310-7fee-4576-8a78-28cd4a7742cd",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fblasting4.jpg?alt=media&token=ec9df552-b4cd-488c-b50c-a43bf34674ff",
    ],
    guiniting: [
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fguineting1.jpg?alt=media&token=fa04fd1d-9386-49a6-9325-b75614d3f3f2",

      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fguineting3.jpg?alt=media&token=76c36598-fce3-4f2b-a4e5-660dc8a6480f",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fguineting4.jpg?alt=media&token=66b7b89d-eafb-45e1-8491-c8bb3a1f0fd8",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fguiniting10.jpg?alt=media&token=7948a390-73c5-4e1e-b0c1-c32f8bbecf9a",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fguiniting11.jpg?alt=media&token=33f6af8b-40af-4f92-a523-00d40a777ccc",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fguiniting12.jpg?alt=media&token=66e3a55c-ff87-4159-ac2e-d7a47c73f46d",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fguiniting13.jpg?alt=media&token=135c1088-abe0-488d-820f-20b722f77497",

      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fguiniting5.jpg?alt=media&token=8b84b0f2-524f-4126-a0e3-5f03a5fbc43d",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fguiniting6.jpg?alt=media&token=5868a56b-4c23-4b99-8db2-a571402baa6a",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fguiniting7.jpg?alt=media&token=6285f154-10ef-4d2c-80db-591b87ccc23f",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fguiniting8.jpg?alt=media&token=cc2e577d-91bf-4ddc-8187-03aec16e6baa",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fguiniting9.jpg?alt=media&token=177d682b-ab43-4e7d-9ee2-3da956180145",
    ],

    painting: [
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fpainting1.jpg?alt=media&token=d136f274-daec-44ff-929d-d505aadffee3",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fpainting4.jpg?alt=media&token=2d85ebf5-c97a-4dbe-9557-e75b6bdc4216",
    ],
  };
  constructor(
    public router: ActivatedRoute,
    public detailService: ServiceDetailsService
  ) {}
  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.selectedService = this.detailService.serviceDetails[params.service];
    });
  }
}
