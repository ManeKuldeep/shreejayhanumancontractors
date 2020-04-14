import { Component, OnInit } from '@angular/core';
import { ServiceDetailsService } from './services/service-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  constructor(public router: ActivatedRoute,public detailService: ServiceDetailsService) { }
  selectedService: any;
  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      this.selectedService = this.detailService.serviceDetails[params.service]
    })
  }

}
