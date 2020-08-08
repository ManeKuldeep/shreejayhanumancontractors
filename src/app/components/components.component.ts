import { Component, OnInit, Renderer2 } from "@angular/core";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import * as firebase from "firebase/app";

@Component({
  selector: "app-components",
  templateUrl: "./components.component.html",
  styles: [
    `
      ngb-progressbar {
        margin-top: 5rem;
      }
      .star {
        font-size: 1rem;
        color: #b0c4de;
      }
      .filled {
        color: #f7f7f8;
      }
      .filled.bad {
        color: #ff1e1e;
      }
      .filled.excellent {
        color: lawngreen;
      }
      .filled.good {
        color: cyan;
      }
    `,
  ],
})
export class ComponentsComponent implements OnInit {
  page = 4;
  page1 = 5;
  focus;
  focus1;
  focus2;
  date: { year: number; month: number };
  model: NgbDateStruct;
  feedbacks = [];
  images = [
    "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fstatue.jpg?alt=media&token=265a5da2-4ed3-4dc9-8c6c-16c95a696d66",
    "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fstatue1.jpg?alt=media&token=7da3fd04-092f-4d5d-b4fc-c3c8eb875e3e",
    "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fstatue2.JPG?alt=media&token=82467477-062d-44aa-930c-512d8587220a",
    "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fstatue3.JPG?alt=media&token=9040c6c5-044c-4370-8159-2d01c487274d",
    "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fstatue4.JPG?alt=media&token=dfc2e4ec-24af-4dfe-b785-f07447d012ae",
    "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fstatue5.JPG?alt=media&token=aff1becb-3c95-4ad2-91e7-03fde939bb9e",
    "https://firebasestorage.googleapis.com/v0/b/shreejayhanumancontracto-8e8ea.appspot.com/o/Images%2Fstatue6.JPG?alt=media&token=1bbd7557-164b-4b6c-8515-80a4b46ec08e",
  ];
  constructor(private renderer: Renderer2) {}
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  async ngOnInit() {
    let input_group_focus = document.getElementsByClassName("form-control");
    let input_group = document.getElementsByClassName("input-group");
    for (let i = 0; i < input_group.length; i++) {
      input_group[i].children[0].addEventListener("focus", function () {
        input_group[i].classList.add("input-group-focus");
      });
      input_group[i].children[0].addEventListener("blur", function () {
        input_group[i].classList.remove("input-group-focus");
      });
    }

    let data = await firebase
      .firestore()
      .collection("feedback")
      .orderBy("rating", "desc")
      .limit(5)
      .get();
    data.docs.forEach((doc) => {
      this.feedbacks.push(doc.data());
    });
  }
}
