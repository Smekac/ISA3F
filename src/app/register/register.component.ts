import {Component, Inject, OnInit} from '@angular/core';
import {KorisnikService} from '../korisnik.service';
import {Korisnik} from '../models/korisnik';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private korisnik: Korisnik;

  constructor(private korisnikService: KorisnikService, private router: Router) {
    this.korisnik = new Korisnik();
  }

  ngOnInit() {
  }

  register(email: string, lozinka1: string, lozinka2: string, ime: string, prezime: string, grad: string, broj: string) {
    if (email === '' || lozinka1 === '' || lozinka2 === '' || ime === '' || prezime === '' || grad === '' || broj === '') {
      alert('Morate popuniti sva polja!');
      return;
    }

    if (this.provjeriLozinke(lozinka1, lozinka2) === false) {
      return;
    }

    this.korisnik.email = email;
    this.korisnik.grad = grad;
    this.korisnik.ime = ime;
    this.korisnik.prezime = prezime;
    this.korisnik.password = lozinka1;
    this.korisnik.username = 'proba';
    this.korisnik.number = broj;
    this.korisnik.adminFan = false;

    this.korisnikService.registerNewUser(this.korisnik);
    this.router.navigateByUrl('/');
  }

  provjeriLozinke(lozinka1: string, lozinka2: string) {
    if (lozinka1 !== lozinka2) {
      alert('Lozinke se ne poklapaju!');
      return false;
    }

    return true;
  }
}
