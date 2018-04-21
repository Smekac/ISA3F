import {Component, OnInit} from '@angular/core';
import {Korisnik} from '../../models/korisnik';
import {PropService} from '../../fan-zone/prop.service';
@Component({
  selector: 'app-adminsis-add',
  templateUrl: './adminsis-add.component.html',
  styleUrls: ['./adminsis-add.component.css']
})
export class AdminsisAddComponent implements OnInit {

  ulogovani: Korisnik;
  korisnik: Korisnik;
  predefinisaniSys: boolean;

  constructor(private propService: PropService) {
    this.ulogovani = JSON.parse(localStorage.getItem('ulogovaniKorisnik'));
    this.korisnik = new Korisnik();

  }

  ngOnInit() {
    this.predefinisaniSys = false;

    if (this.ulogovani.username = 'adminsys') {
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

    this.propService.dodajAdminaSis(this.korisnik).subscribe();
    alert('Uspesno kreirano!');
    window.history.back();


  }

}
