import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

// import {MatFormField} from '@angular/material';
import {Projekcija, UsedProp, Ustanova} from '../models/prop';
import {UstanovaServiceService} from '../ustanova-service.service';
@Component({
  selector: 'app-rezervacija-mjesta',
  templateUrl: './rezervacija-mjesta.component.html',
  styleUrls: ['./rezervacija-mjesta.component.css']
})
export class RezervacijaMjestaComponent implements OnInit {

  ustanove: Ustanova[];
  izabranaUstanova:number;
  projekcije: Projekcija[];
  constructor(private ustanovaService: UstanovaServiceService) {

    this.ustanovaService.getUstanove().subscribe(
      (response: Ustanova[]) => {
        this.ustanove = response;
      },
      err => {
        console.log(err);
      });

  }

  ngOnInit() {
  }

  dobaviRep() {
    this.ustanovaService.getRepertoar( this.izabranaUstanova).subscribe(
      (response: Projekcija[]) => {
        this.projekcije = response;
      },
      err => {
        console.log(err);
      }
    );
  }

}
