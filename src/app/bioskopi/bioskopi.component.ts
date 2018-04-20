import { Component, OnInit } from '@angular/core';
import {Ustanova} from '../models/prop';
import {UstanovaServiceService} from '../ustanova-service.service';

@Component({
  selector: 'app-bioskopi',
  templateUrl: './bioskopi.component.html',
  styleUrls: ['./bioskopi.component.css']
})
export class BioskopiComponent implements OnInit {

  spisakBioskopa: Ustanova[];
  constructor(private ustanovaService: UstanovaServiceService) { }

  ngOnInit() {
    this.ustanovaService.getBioskopi().subscribe(
      (response: Ustanova[]) => {
        this.spisakBioskopa = response;
      },
      err => {
        console.log(err);
      });
  }

}
