import { Component, OnInit } from '@angular/core';
import {Korisnik} from '../models/korisnik';
import {KorisnikService} from '../korisnik.service';
import {Ustanova} from '../models/prop';
import {Router} from '@angular/router';

@Component({
  selector: 'app-podesavanja-profila',
  templateUrl: './podesavanja-profila.component.html',
  styleUrls: ['./podesavanja-profila.component.css']
})
export class PodesavanjaProfilaComponent implements OnInit {

  korisnik: Korisnik;
  constructor(private korisnikService: KorisnikService, private router: Router) {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovaniKorisnik'));
  }


  ngOnInit() {
  }

  promeni_podatke(username: string, ime: string, prezime: string, email: string, grad: string, broj: string) {

    this.korisnik.username = username;
    this.korisnik.ime = ime;
    this.korisnik.prezime = prezime;
    this.korisnik.email = email;
    this.korisnik.grad = grad;
    this.korisnik.number = broj;


    this.korisnikService.promeniPodatke(this.korisnik).subscribe(
      (response: Korisnik) => {
        this.korisnik = response;
        localStorage.setItem('ulogovaniKorisnik', JSON.stringify(this.korisnik));
        this.router.navigateByUrl('/profil-reg-korisnika');
      },
      err => {
        console.log(err);
      });
  }

}
