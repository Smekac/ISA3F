import {Component, Input, OnInit} from '@angular/core';
import {KorisnikService} from '../korisnik.service';
import {Korisnik} from '../models/korisnik';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // currentJustify = 'start';
  korisnik: Korisnik;
  tip: boolean;


  constructor(private korisnikService: KorisnikService, private router: Router) {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovaniKorisnik'));
  }

  getMyAds() {
    this.router.navigate(['fanpage/my-ads']);
  }

  ngOnInit() {

    if (this.korisnik.tipKorisnika === 'ADMINFAN') {
      this.korisnik.adminFan = true;
    } else {
      this.korisnik.adminFan = false; // MADA MOGU I PREKO ID DA PROVERIM
    }
    this.tip = this.korisnik.adminFan;
  }

  logOut() {
    this.korisnikService.logOut();
    this.router.navigateByUrl('/');
  }

}
