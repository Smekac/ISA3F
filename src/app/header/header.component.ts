import {Component} from '@angular/core';
import {KorisnikService} from '../korisnik.service';
import {Korisnik} from '../models/korisnik';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // currentJustify = 'start';
  private korisnik: Korisnik;


  constructor(private korisnikService: KorisnikService) {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovaniKorisnik'));

  }

}
