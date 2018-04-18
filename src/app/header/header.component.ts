import {Component, Input, OnInit} from '@angular/core';
import {KorisnikService} from '../korisnik.service';
import {Korisnik} from '../models/korisnik';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // currentJustify = 'start';
  korisnik: Korisnik;
  tip: boolean;


  constructor(private korisnikService: KorisnikService) {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovaniKorisnik'));
  }

  ngOnInit() {

    if(this.korisnik.username === 'adminfan') {
      this.korisnik.adminFan = true;
    } else {
      this.korisnik.adminFan = false;
    }
    this.tip = this.korisnik.adminFan;
  }


}
