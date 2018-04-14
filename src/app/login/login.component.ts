import {Component, OnInit} from '@angular/core';
import {KorisnikService} from '../korisnik.service';
import {Korisnik} from '../models/korisnik';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  korisnik: Korisnik;

  constructor(private korisnikService: KorisnikService) {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovaniKorisnik'));
  }

  ngOnInit() {
  }

  login(email: string, lozinka: string) {
    this.korisnikService.loginUser(email, lozinka);
  }

}
