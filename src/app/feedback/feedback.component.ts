import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as firebase from "firebase/app";
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }
  feedbackForm: FormGroup;
  loader = false;
  default = {
    name:'',
    email: '',
    rating: 10,
    message: ''
  }
  message = ''
  errmessage = ''
  ngOnInit() {
    this.feedbackForm = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      rating: new FormControl(10,Validators.required),
      message: new FormControl('',[Validators.required,Validators.minLength(5)]),
    });
  }
  sendFeedback(){
    this.loader = true
    firebase.firestore().collection('feedback').add(this.feedbackForm.value)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      this.loader = false;
      this.feedbackForm.reset();
      this.feedbackForm.patchValue(this.default)
      this.message = "Your feedback is successfully added."
      setTimeout(() => {
        this.message = ""
      }, 3000);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
      this.loader = false
      this.errmessage = error
      setTimeout(() => {
        this.errmessage = ""
      }, 3000);
  });
  }
}
