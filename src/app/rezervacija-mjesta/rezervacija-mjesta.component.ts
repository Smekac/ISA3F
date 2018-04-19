import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatFormField} from '@angular/material';
import {DatumProjekcije, Projekcija, Sala, Segment, Sjediste, UsedProp, Ustanova} from '../models/prop';
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

  izabranidatum:DatumProjekcije;
  izabranaProjekcija: Projekcija;
  izabranaSala: Sala;
  seg:Segment;
  sjedista: Sjediste[];

  constructor(private ustanovaService: UstanovaServiceService) {

    this.ustanovaService.getUstanove().subscribe(
      (response: Ustanova[]) => {
        this.ustanove = response;
      },
      err => {
        console.log(err);
      });
this.izabranaProjekcija = new Projekcija();
this.izabranidatum = new DatumProjekcije();
this.izabranaSala = new Sala();
this.seg = new Segment();
this.sjedista =[];
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
  dodajSjediste(e,id) {
    if (e.target.checked) {
      this.sjedista.push(id);
    } else {
      this.sjedista.splice(this.sjedista.indexOf(id), 1);
    }
}
}
