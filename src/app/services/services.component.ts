import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private router: Router) { }
  serviceImages = [
    {src: "./assets/img/cover.jpg",description:"Blasting",service: "blasting"},
    {src: "./assets/img/cover.jpg",description:"Painting",service: "painting"},
    {src: "./assets/img/cover.jpg",description:"Drilling / Grouting / Soil Nailing",service: "grouting"},
    {src: "./assets/img/cover.jpg",description:"Fire Protection",service: "fire"},
    {src: "./assets/img/cover.jpg",description:"Guniting",service: "guniting"},
    {src: "./assets/img/cover.jpg",description:"Shortcret",service: "shortcret"},
    {src: "./assets/img/cover.jpg",description:"Cement Mortar Lining",service: "cementmortar"},
  ]
  ngOnInit(): void {
  }
  navigateTo(img){
    this.router.navigateByUrl("/service-details/"+img.service)
  }
}
