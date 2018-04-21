import {Component, OnInit} from '@angular/core';
import {Korisnik} from '../../models/korisnik';
import {PropService} from '../../fan-zone/prop.service';

@Component({
  selector: 'app-adminfan-add',
  templateUrl: './adminfan-add.component.html',
  styleUrls: ['./adminfan-add.component.css']
})
export class AdminfanAddComponent implements OnInit {

  ulogovani: Korisnik;
  korisnik: Korisnik;
  predefinisaniSys: boolean;

  constructor(private propService: PropService) {
    this.ulogovani = JSON.parse(localStorage.getItem('ulogovaniKorisnik'));
    this.korisnik = new Korisnik();
  }

  ngOnInit() {
    this.predefinisaniSys = false;

    if (this.ulogovani.username = 'adminsys') {       // predefinisani
      this.predefinisaniSys = true;
    }
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

    this.propService.dodajAdminFana(this.korisnik).subscribe();
    alert('Uspesno kreirano!');
    window.history.back();
  }

}

