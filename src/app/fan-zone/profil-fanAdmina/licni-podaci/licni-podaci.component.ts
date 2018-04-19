///<reference path="../../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>


import {Component, OnInit} from '@angular/core';
import {PropService} from '../../prop.service';
import {Korisnik} from '../../../models/korisnik';
import {Router} from '@angular/router';
@Component({
  selector: 'app-licni-podaci',
  templateUrl: './licni-podaci.component.html',
  styleUrls: ['./licni-podaci.component.css']
})
export class LicniPodaciComponent implements OnInit {

  korisnik: Korisnik;

  constructor(private propService: PropService, private router: Router) {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovaniKorisnik'));
  }

  potvrdi_admina(username: string, ime: string, prezime: string, email: string, grad: string, broj: string) {   // Dodati parametre !!!!

    this.korisnik.username = username;
    this.korisnik.ime = ime;
    this.korisnik.prezime = prezime;
    this.korisnik.email = email;
    this.korisnik.grad = grad;
    this.korisnik.number = broj;

    // this.korisnik = JSON.parse(localStorage.setItem('ulogovaniKorisnik',this.korisnik));
    localStorage.setItem('ulogovaniKorisnik', JSON.stringify(this.korisnik));


    this.propService.promenaZaAdmina(this.korisnik).subscribe(
      response => {
        if (response.status === 201) {
          alert('Uspesno izvrsenoo (posto je status)!');
          window.history.back();
        } else {
          alert('Doslo je do greske');
        }
      },
      err => {
        alert('Nije Uspeloo !!!');
      });
    //this.router.navigateByUrl('/');
  }

  ngOnInit() {

  }


}
