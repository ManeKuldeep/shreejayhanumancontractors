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
  object = Object;
  serviceImages = [];
  serviceImagesArray = {
    blasting: [
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fblasting1.jpg?alt=media&token=cf9b8906-d801-4e0f-94d0-057e9208506b",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fblasting2.jpg?alt=media&token=f0033b7f-995b-4414-b00c-3153b802368e",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fblasting3.jpg?alt=media&token=313c3310-7fee-4576-8a78-28cd4a7742cd",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fblasting4.jpg?alt=media&token=ec9df552-b4cd-488c-b50c-a43bf34674ff",
    ],
    fire: [
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Ffire.jpg?alt=media&token=340ed8fe-3df6-4d34-82d9-44f571a56181",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Ffire1.jpg?alt=media&token=b5607a57-b0fe-4cc4-b64b-efee6648c4c8",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Ffire2.jpg?alt=media&token=0db0c128-db8a-41e5-bc92-afbc8ed1e877",
    ],
    grouting: [
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fsoil.jpg?alt=media&token=253a9b15-b379-40c9-bd0c-8f62a9f9ac71",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fsoil2.jpg?alt=media&token=b138b573-f109-46b2-98ec-4cc39ea96a13",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fsoil1.jpg?alt=media&token=ea613449-5c89-4ba7-9381-94f1dd91027f",
    ],
    guniting: [
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

    shotcrete: [
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
    cementmortar: [
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fcement.jpg?alt=media&token=0ffae278-86f1-46bb-92ce-423e5e6d29d5",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fcement1.jpg?alt=media&token=e814b751-02e1-4824-a489-3b195b466bea",
      "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fcement3.jpeg?alt=media&token=3cdf4684-2387-43e6-9af0-bd0bdcc7da58",
    ],
  };
  constructor(
    public router: ActivatedRoute,
    public detailService: ServiceDetailsService
  ) {}
  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.selectedService = this.detailService.serviceDetails[params.service];
      this.serviceImages = this.serviceImagesArray[params.service];
    });
  }
}
