import { Component, OnInit } from '@angular/core';
import {Ustanova} from '../models/prop';
import {UstanovaServiceService} from '../ustanova-service.service';

@Component({
  selector: 'app-pozorista',
  templateUrl: './pozorista.component.html',
  styleUrls: ['./pozorista.component.css']
})
export class PozoristaComponent implements OnInit {

  spisakPozorista: Ustanova[];
  constructor(private ustanovaService: UstanovaServiceService) { }

  ngOnInit() {
    this.ustanovaService.getPozorista().subscribe(
      (response: Ustanova[]) => {
        this.spisakPozorista = response;
      },
      err => {
        console.log(err);
      });
  }

}
