import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PropService} from '../../fan-zone/prop.service';
import {Korisnik} from '../../models/korisnik';
import {Ustanova} from '../../models/prop';

@Component({
  selector: 'app-admin-ustanove',
  templateUrl: './admin-ustanove.component.html',
  styleUrls: ['./admin-ustanove.component.css']
})
export class AdminUstanoveComponent implements OnInit {


  korisnik: Korisnik;
  ulogovani: Korisnik;
  ustanova: Ustanova;

  predefinisaniSys: boolean;

  ngOnInit(): void {
    this.predefinisaniSys = false;

    if (this.ulogovani.username = 'adminsys') {
      this.predefinisaniSys = true;
    }

  }

  constructor(private propService: PropService, private router: Router) {
    this.ulogovani = JSON.parse(localStorage.getItem('ulogovaniKorisnik'));
    this.korisnik = new Korisnik();
  }

  potvrdi_admina(username: string, ime: string, prezime: string, email: string, grad: string, broj: string, password: string) {

    this.korisnik.username = username;
    this.korisnik.ime = ime;
    this.korisnik.prezime = prezime;
    this.korisnik.email = email;
    this.korisnik.grad = grad;
    this.korisnik.number = broj;
    this.korisnik.password = password;
    // this.korisnik.tipKorisnika = '';

    this.propService.dodajAdminaUstanove(this.korisnik).subscribe();

  }

}
