import {Component, OnInit} from '@angular/core';
import {PropService} from '../../fan-zone/prop.service';
import {Router} from '@angular/router';
import {Ustanova} from '../../models/prop';
import {Korisnik} from '../../models/korisnik';

@Component({
  selector: 'app-create-ustanova',
  templateUrl: './create-ustanova.component.html',
  styleUrls: ['./create-ustanova.component.css']
})
export class CreateUstanovaComponent implements OnInit {

  currentRate = 6;
  selected = 'POZORISTE';
  ustanova: Ustanova;
  predefinisaniSys: boolean;
  ulogovani: Korisnik;


  constructor(private serviceProp: PropService, router: Router) {
    this.ustanova = new Ustanova();
    this.ulogovani = JSON.parse(localStorage.getItem('ulogovaniKorisnik'));

  }

  ngOnInit() {
    this.predefinisaniSys = false;

    if (this.ulogovani.username = 'adminsys') {
      this.predefinisaniSys = true;
    }

  }


  kreiraj_ustanovu(ime: string, adresa: string, opis: string) {

    console.log(this.currentRate + '  ------- ');

    this.ustanova.name = ime;
    this.ustanova.addres = adresa;
    this.ustanova.description = opis;
    this.ustanova.rating = this.currentRate;
    this.ustanova.type = this.selected;

    this.serviceProp.dodajUstanovu(this.ustanova).subscribe();
  }

}
