import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }
  feedbackForm: FormGroup;
  ngOnInit() {
    this.feedbackForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      rating: new FormControl(10),
      message: new FormControl('')
    });
  }
  sendFeedback(){
    console.log(">>>>>>>",this.feedbackForm.value);
    
  }
}
